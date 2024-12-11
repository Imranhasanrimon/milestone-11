import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";

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
        ]
    },
]);

export default router;