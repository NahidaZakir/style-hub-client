import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CreateSellerAccount from "../Pages/CreateSellerAccount/CreateSellerAccount";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import ReportedItems from "../Pages/Dashboard/Dashboard/ReportedItems/ReportedItems";

import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Products from "../Pages/Products/Products";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";




const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/createaccount',
                element: <CreateSellerAccount></CreateSellerAccount>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/sellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/buyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems></ReportedItems>
            }

        ]
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    }
])
export default router;