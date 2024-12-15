import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import ProvateRoute from "./ProvateRoute";
import ApplyJob from "../pages/ApplyJob";
import MyApplications from "../pages/MyApplications";
import AdJob from "../pages/AdJob";
import MyPostedJobs from "../pages/MyPostedJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
            },
            {
                path: '/jobs/:id',
                element: <ProvateRoute><JobDetails></JobDetails></ProvateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/applyJob/:id',
                element: <ProvateRoute><ApplyJob></ApplyJob></ProvateRoute>,
            },
            {
                path: '/addJob',
                element: <ProvateRoute><AdJob></AdJob></ProvateRoute>,
            },
            {
                path: '/myApplications',
                element: <ProvateRoute><MyApplications></MyApplications></ProvateRoute>,
            },
            {
                path: '/myPostedJobs',
                element: <ProvateRoute><MyPostedJobs></MyPostedJobs></ProvateRoute>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>,
            },
        ]
    },
]);

export default router;