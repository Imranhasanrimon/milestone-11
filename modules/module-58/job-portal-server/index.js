const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//hgn24BLqeraUzc6v
//job-portal
//middleware
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(express.json())
app.use(cookieParser())

const logger = (req, res, next) => {
    console.log('inside the logger middleware');
    next();
}
// const verifyToken = (req, res, next) => {
//     console.log('inside verifyToken Middleware', req.cookies);
//     next()
// }

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7hbnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        //Auth related APIs
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' })
            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: false,
                })
                .send({ success: true })
        })
        //jobs related APIs
        const jobsCollection = client.db('job-portal').collection('jobs');
        const applicationCollection = client.db('job-portal').collection('job-applications');
        app.get('/jobs', async (req, res) => {
            const email = req.query.email;
            let query = {};
            if (email) {
                query = { hr_email: email }
            }
            const cursor = jobsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })
        app.get('/jobs/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const result = await jobsCollection.findOne(query);
            res.send(result)
        })
        app.post('/jobs', async (req, res) => {
            const newJob = req.body;
            const result = await jobsCollection.insertOne(newJob);
            res.send(result)
        })
        app.get('/job-appliacation', async (req, res) => {
            const email = req.query.email;
            console.log('cook cook cookies', req.cookies);
            const query = { applicant_email: email };
            const result = await applicationCollection.find(query).toArray();
            for (let application of result) {
                // console.log(application.job_id);
                const query1 = { _id: new ObjectId(application.job_id) }
                // console.log(query1);
                const job = await jobsCollection.findOne(query1);
                // console.log(result);
                if (job) {
                    application.title = job.title;
                    application.company = job.company;
                    application.company_logo = job.company_logo;
                }
            }
            res.send(result);

        })
        app.post('/job-applications', async (req, res) => {
            const application = req.body;
            const result = await applicationCollection.insertOne(application);
            res.send(result)
        })
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('this is homepage')
})
app.listen(port, () => {
    console.log('project is running on port:', port);
})

//I'm facing a problem with a middleware where I'm not getting the cookie
//this module is done up to 60.6" 