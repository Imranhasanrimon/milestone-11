import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import ProvateRoute from "./ProvateRoute";
import ApplyJob from "../pages/ApplyJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
            },
            {
                path: '/jobs/:id',
                element: <ProvateRoute><JobDetails></JobDetails></ProvateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/applyJob/:id',
                element: <ProvateRoute><ApplyJob></ApplyJob></ProvateRoute>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>,
            },
        ]
    },
]);

export default router;