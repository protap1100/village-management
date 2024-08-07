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
import MemberDetails from "../Pages/Member/MemberDetails";
import UserHome from "../Pages/UserDashboard/UserHome";
import MyPosts from "../Pages/UserDashboard/MyPosts";
import UserFees from "../Pages/UserDashboard/UserFees";
import UserLayout from "../Pages/UserDashboard/UserLayout";
import AdminLayout from "../Pages/Dashboard/AdminLayout";
import AllMember from "../Pages/Dashboard/ManageMember.jsx/AllMember";
import AllOccasions from "../Pages/Dashboard/ManageOccaions/AllOccasions";
import AllProjects from "../Pages/Dashboard/ManageProjects/AllProjects";
import AllPosts from "../Pages/Dashboard/ManagePosts/AllPosts";
import AdminHome from "../Pages/Dashboard/AdminHome";
import FeedBack from "../Pages/Dashboard/FeedBack";
import AllUsers from "../Pages/Dashboard/ManageUsers/AllUsers";
import AddOccasions from "../Pages/Dashboard/ManageOccaions/AddOccasions";
import AddProjects from "../Pages/Dashboard/ManageProjects/AddProjects";
import AddMember from "../Pages/Dashboard/ManageMember.jsx/AddMember";
import PrivateRouter from "./PrivateRouter";
import PostDetails from "../Pages/Gallery/PostDetails";
import UserProfile from "../Pages/Profile/UserProfile";
import UpdateProfileInfo from "../Pages/Profile/UpdateProfileInfo";
import OccasionDetails from "../Pages/Occasion/OccasionDetails";
import ProjectDetails from "../Pages/Projects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/member",
        element: (
          <PrivateRouter>
            <Member></Member>
          </PrivateRouter>
        ),
      },
      {
        path: "/memberDetails",
        element: <MemberDetails></MemberDetails>,
      },
      {
        path: "/occasions",
        element: <MainOccasions></MainOccasions>,
      },
      {
        path: "/occasions-details/:id",
        element: <OccasionDetails></OccasionDetails>,
      },
      {
        path: "/projects",
        element: <MainProject></MainProject>,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/post-details/:id",
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
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
      {
        path: "/update-profile",
        element: <UpdateProfileInfo></UpdateProfileInfo>,
      },
      {
        path: "/user-home",
        element: (
          <PrivateRouter>
            <UserProfile></UserProfile>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "user",
    element: <UserLayout></UserLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "user-Home",
        element: <UserHome></UserHome>,
      },
      {
        path: "user-posts",
        element: <MyPosts></MyPosts>,
      },
      {
        path: "monthly-fees",
        element: <UserFees></UserFees>,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout></AdminLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "admin-home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "admin-user",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "all-members",
        element: <AllMember></AllMember>,
      },
      {
        path: "all-occasions",
        element: <AllOccasions></AllOccasions>,
      },
      {
        path: "all-projects",
        element: <AllProjects></AllProjects>,
      },
      {
        path: "feedback",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "all-posts",
        element: <AllPosts></AllPosts>,
      },
      {
        path: "add-occasions",
        element: <AddOccasions></AddOccasions>,
      },
      {
        path: "add-projects",
        element: <AddProjects></AddProjects>,
      },
      {
        path: "add-member",
        element: <AddMember></AddMember>,
      },
    ],
  },
]);
