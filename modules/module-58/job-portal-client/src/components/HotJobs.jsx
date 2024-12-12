import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);
    console.log(jobs);
    return (
        <div>
            <div>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>

        </div>
    );
};

export default HotJobs;