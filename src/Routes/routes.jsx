import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/LogIn/Login";
import SignUp from "../pages/SignUp/signUp";
import Dashboard from "../Layout/Dashboard";
import About from "../pages/about/About";
import MyTask from "../pages/DashBoard/MyTask";
import ManageTask from "../pages/DashBoard/manageTask";
import AddTask from "../pages/DashBoard/addTask";
import PrivateRoute from "../Routes/PrivateRoute";
import Benefits from "../pages/More/Benefits";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
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
          path: '/about',
          element: <About></About>
        },
        {
          path: 'benefits',
          element: <Benefits></Benefits>
        },
        {
          path: 'dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children: [
            {
             path: 'mytask',
            element: <MyTask></MyTask>
            },
            {
              path: 'managetask',
              element: <ManageTask></ManageTask>
            },
            {
              path: 'addtask',
              element: <AddTask></AddTask>
            }
          ]
        }
      ]
    },
  ]);