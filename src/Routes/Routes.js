import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home/Home";
import Pricing from "../Pages/Pricing/Pricing";
import Product from "../Pages/Product/Product";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product',
                element: <Product></Product>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])