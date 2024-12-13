import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyApplications = () => {
    const { user } = useAuth();
    const [myApplications, setMyApplications] = useState();
    useEffect(() => {
        fetch(`http://localhost:3000/job-appliacation?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyApplications(data))
    }, [])
    return (
        <div>
            <h1>MyApplications: {myApplications.length}</h1>
        </div>
    );
};

export default MyApplications;