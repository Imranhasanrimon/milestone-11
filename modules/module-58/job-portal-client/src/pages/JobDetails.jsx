import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    const { title, location, jobType, category, applicationDeadline, salaryRange, description, company, company_logo, requirements } = job
    return (
        <div className="flex justify-center">
            <div className="border max-w-[400px] p-5 rounded-lg">
                <div className="flex justify-end">
                    <img src={company_logo} alt="" />
                </div>
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p>{description}</p>
                <div className="flex justify-end">
                    <Link to={`/applyJob/${job._id}`} className="btn btn-primary">Apply</Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;