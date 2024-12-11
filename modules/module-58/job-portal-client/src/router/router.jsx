import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

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