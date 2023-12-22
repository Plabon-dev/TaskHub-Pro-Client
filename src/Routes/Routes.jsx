
import {

    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";

import Login from './../Pages/Login';
import Register from "../Pages/Register";
import Features from "../Pages/Features";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../Pages/dashboard/DashboardHome";
import DashboardCreate from "../Pages/dashboard/DashboardCreate";
import DashboardUpdate from "../Pages/dashboard/DashboardUpdate";
import PrivetRoutes from "./PrivetRoutes";
import Error from "../Pages/Error";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>
  
        },
        
        {
          path: 'login',
          element: <Login></Login>
  
        },
        {
          path: 'register',
          element: <Register></Register>
  
        },
        {
          path: 'features',
          element: <Features></Features>
  
        },
      ]
    },
    {
      path: "/dashboard",
      element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes> ,
      errorElement:<Error></Error>,
      children: [
        {
          path: '/dashboard/home',
          element: <DashboardHome></DashboardHome>
  
        },
        {
          path: '/dashboard/create',
          element: <DashboardCreate></DashboardCreate>
  
        },
        {
          path: '/dashboard/update/:id',
          element: <DashboardUpdate></DashboardUpdate>,
          loader: ({params})=> fetch(`https://task-hub-pro-server.vercel.app/update/${params.id}`)
        },
        
      ]
    },
  ])