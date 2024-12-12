import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const ProvateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if (loading) {
        return <h1 className="font-bold text-3xl text-red-500">Loading...</h1>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to="/signIn"></Navigate>
};

export default ProvateRoute;