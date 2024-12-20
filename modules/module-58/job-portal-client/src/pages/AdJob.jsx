import useAuth from "../hooks/useAuth";

const AdJob = () => {
    const { user } = useAuth();
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries())
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');

        fetch('http://localhost:3000/jobs', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            thsi is add job page for ading job by reqruiter.
            <form onSubmit={handleAddJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Job Location" className="input input-bordered" required />
                </div>
                {/* applicationDeadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">applicationDeadline</span>
                    </label>
                    <input type="date" name="applicationDeadline" placeholder="applicationDeadline" className="input input-bordered" required />
                </div>
                {/* job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select name="jobType" className="select input-bordered select-ghost w-full ">
                        <option disabled selected>Pick the job Type</option>
                        <option>Part Time</option>
                        <option>Intern</option>
                        <option>Full Time</option>
                    </select>
                </div>
                {/* job Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select name="category" className="select input-bordered select-ghost w-full ">
                        <option disabled selected>Pick the job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>HRM</option>
                    </select>
                </div>
                {/* Salary Range */}
                <div>
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                    <div className="md:grid grid-cols-3 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Min</span>
                            </label>
                            <input type="text" name="min" placeholder="Min" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Max</span>
                            </label>
                            <input type="text" name="max" placeholder="Max" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Currency</span>
                            </label>
                            <select name="currency" className="select input-bordered select-ghost w-full ">
                                <option disabled selected>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-primary" placeholder="Job Description"></textarea>
                </div>
                {/* job Requrements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requrements</span>
                    </label>
                    <textarea name="requirements" className="textarea textarea-primary" placeholder="Write Each Job Requrement in a new line"></textarea>
                </div>
                {/* job Responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea name="responsibilities" className="textarea textarea-primary" placeholder="Write Each Job Responsibility in a new line"></textarea>
                </div>
                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered" required />
                </div>
                {/* HR Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="text" defaultValue={user.email} name="hr_email" placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* Company_name*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company_name</span>
                    </label>
                    <input type="text" name="company" placeholder="company" className="input input-bordered" required />
                </div>
                {/* Company_logo URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company_logo URL</span>
                    </label>
                    <input type="text" name="company_logo" placeholder="Company_logo URL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Job</button>
                </div>
            </form>
        </div>
    );
};

export default AdJob;