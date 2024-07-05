import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Member from "../Pages/Member/Member";
import Occasions from "../Pages/Occasion/Occasions";
import Projects from "../Pages/Projects/Projects";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
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
    ],
  },
]);
