import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";

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
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
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