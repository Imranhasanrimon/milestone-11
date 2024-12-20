import Lottie from "lottie-react";
import loginLottie from "../assets/lottie/signIn.json";
import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';


const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state || '/';
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                const user = { email: result.user.email }
                axios.post(`http://localhost:3000/jwt`, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            })
            .catch(err => console.log(err.message))

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-2xl md:text-3xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;