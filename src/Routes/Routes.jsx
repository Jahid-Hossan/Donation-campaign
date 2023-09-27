import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Banner from "../Component/Banner/Banner";
import DonationDetails from "../Component/DonationDetails/DonationDetails";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";


const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                element: <Banner></Banner>,
                loader: () => fetch('data.json')
            }, {
                path: '/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('data.json')

            }

        ],

    },
]);

export default myRouter;