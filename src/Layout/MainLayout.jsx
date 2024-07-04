import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Occasions from "../Pages/Occasion/Occasions";
import Member from "../Pages/Member/Member";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        index: true,
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
