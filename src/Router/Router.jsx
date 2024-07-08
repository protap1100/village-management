import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import MainLayout from "../Layout/MainLayout";
import Rules from "../Pages/Rules/Rules";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp.jsx/SignUp";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Gallery from "../Pages/Gallery/Gallery";
import MainOccasions from "../Pages/Occasion/MainOccasions";
import MainProject from "../Pages/Projects/MainProject";
import Member from "../Pages/Member/Member";

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
        element: <MainOccasions></MainOccasions>,
      },
      {
        path: "/projects",
        element: <MainProject></MainProject>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path:'/contactUs',
        element : <ContactUs></ContactUs>
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
