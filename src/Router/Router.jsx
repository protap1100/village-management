import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Member from "../Pages/Member/Member";
import Occasions from "../Pages/Occasion/Occasions";
import Projects from "../Pages/Projects/Projects";
import AboutUs from "../Pages/AboutUs/AboutUs";
import MainLayout from "../Layout/MainLayout";
import Rules from "../Pages/Rules/Rules";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp.jsx/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index : true,
        element: <Home></Home>,
      },
      {
        path: "/member",
        element: <Member></Member>,
      },
      {
        path: "/occasions",
        element: <Occasions></Occasions>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/rules",
        element: <Rules></Rules>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
