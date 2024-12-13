import { data, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ApplyJob = () => {
    const { id } = useParams()
    const { user } = useAuth();
    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const github = form.github.value;
        const linkedIn = form.linkedIn.value;
        const resume = form.resume.value;
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            github,
            linkedIn,
            resume
        }

        fetch('http://localhost:3000/job-applications', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="card bg-base-100 w-full max-w-screen-sm mx-auto shrink-0 shadow-2xl my-10">
            <form onSubmit={handleApply} className="card-body">
                <h1 className="text-2xl md:text-3xl text-center font-bold">Apply For A Job</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linked In URL</span>
                    </label>
                    <input type="url" name="linkedIn" placeholder="Linked In URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GitHub URL</span>
                    </label>
                    <input type="url" name="github" placeholder="GitHub URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default ApplyJob;