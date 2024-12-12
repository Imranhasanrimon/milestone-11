import { IoLocationSharp } from "react-icons/io5";

const HotJobCard = ({ job }) => {
    const { title, location, jobType, category, applicationDeadline, salaryRange, description, company, company_logo, requirements } = job
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <div className="flex items-center gap-4 pt-3">
                <figure>
                    <img
                        className="w-16"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h2 className="text-2xl font-semibold">{company}</h2>
                    <p className="flex items-center gap-1"><IoLocationSharp />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="flex gap-5 flex-wrap">
                    {requirements.map((requirement, i) => <p className="border rounded-lg px-2 py-1" key={i}>{requirement}</p>)}
                </div>
                <div className="card-actions justify-end items-center">
                    <p>Salary: ${salaryRange.min} - ${salaryRange.max}</p>
                    <button className="btn btn-primary btn-sm">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;