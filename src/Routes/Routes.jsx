import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Banner from "../Component/Banner/Banner";
import DonationDetails from "../Component/DonationDetails/DonationDetails";


const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                element: <Banner></Banner>,
            }, {
                path: '/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('data.json')
            }

        ],

    },
]);

export default myRouter;