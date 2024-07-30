import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user,logOut } = useAuth();
  // console.log(user);
  const navigate = useNavigate()
  const Links = [
    { name: "Home", route: "/" },
    { name: "Member", route: "/member" },
    { name: "Occasions", route: "/occasions" },
    { name: "Projects", route: "/projects" },
    { name: "Gallery", route: "/gallery" },
    { name: "Rules", route: "/rules" },
    { name: "Contact Us", route: "/contactUs" },
    // { name: "About", route: "/aboutUs" },
    { name: "Admin", route: "admin/admin-home" },
  ];
  let [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successful",
          text: "You Have Successfully Logged Out",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .then((error) => console.log(error));
  };

  return (
    <div className="shadow-md w-full fixed z-50">
      <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to="/"> BGTS</Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="md:ml-8 md:my-0 my-7 font-semibold hover:text-blue-200"
            >
              <NavLink
                to={link.route}
                key={index}
                className={({ isActive, isPending }) => (
                  isPending ? "" : "", isActive ? "text-blue-200" : ""
                )}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {user?.displayName ? (
            <div className="dropdown lg:dropdown-end dropdown-start ml-6 mt-1 text-xl flex items-start lg:items-center justify-start">
              <div tabIndex={0} role="button" className=" lg:-ml-0 -ml-6">
                <GiHamburgerMenu></GiHamburgerMenu>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu mt-0 lg:mt-10  bg-base-100 rounded z-[1] w-32 p-2 shadow"
              >
                <li>
                  <Link to="/about-me">About Me</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              className=" bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static hover:bg-blue-400"
              to="/login"
            >
              Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
