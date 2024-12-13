import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext/AuthContext";
import logo from "../assets/favicon.png"
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then(result => {
                console.log('successfully logout');
            })
            .catch(err => console.log('erroorrrrrrr'))
    }
    const links = <>
        <Link className="mr-5" to="/">Home</Link>
        <Link className="mr-5" to="register">Register</Link>
        <Link className="mr-5" to="myApplications">My Applications</Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className="w-10" src={logo} alt="" />
                <Link to="/" className="btn btn-ghost text-xl">Job Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user ? <button onClick={handleSignOut} className="btn">Logout</button> : <> <Link to="/register" className="btn">Register</Link>
                        <Link to="/signIn" className="btn">Sign In</Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;