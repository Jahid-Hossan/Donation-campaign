import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('data.json'),
        children: [
            {
                path: '/donation',
                element: <Donation></Donation>,
            },
        ],
    },
]);

export default myRouter;