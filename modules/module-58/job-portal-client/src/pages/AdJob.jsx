
const AdJob = () => {
    return (
        <div>
            thsi is add job page for ading job by reqruiter.
            <form className="card-body">
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
                    <input type="text" name="locations" placeholder="Job Location" className="input input-bordered" required />
                </div>
                {/* job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select className="select input-bordered select-ghost w-full ">
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
                    <select className="select input-bordered select-ghost w-full ">
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
                            <input type="text" name="locations" placeholder="Min" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Max</span>
                            </label>
                            <input type="text" name="locations" placeholder="Max" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Currency</span>
                            </label>
                            <select className="select input-bordered select-ghost w-full ">
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
                    <textarea className="textarea textarea-primary" placeholder="Job Description"></textarea>
                </div>
                {/* job Requrements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requrements</span>
                    </label>
                    <textarea className="textarea textarea-primary" placeholder="Write Each Job Requrement in a new line"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Job</button>
                </div>
            </form>
        </div>
    );
};

export default AdJob;