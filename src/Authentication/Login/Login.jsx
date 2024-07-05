import { useState } from "react";
import SectionTitle from "../../Components/Shared/SectionTitle";
import image from "./../../assets/Media/Images/Sign-in.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Components/Shared/SocialLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <SectionTitle
        heading="Login Here"
        subHeading="Use Email And Password to Join"
      ></SectionTitle>
      <section className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-1">
          <img src={image} alt="" />
        </div>
        <div className="flex-1">
          <form className="card-body">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
                <span
                  className="absolute animate__animated animate__fadeInDown inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-800 text-2xl cursor-pointer" />
                  ) : (
                    <FaEyeSlash className="text-gray-800 text-2xl cursor-pointer" />
                  )}
                </span>
              </div>
            </div>
            <label className="label">
              <a
                href="#"
                className="mb-3 block text-base font-medium text-[#8484a1]"
              >
                Forgot password?
              </a>
            </label>
            <div className="form-control mt-6">
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold hover:bg-blue-400 transition duration-700 text-white outline-none"
                >
                  Login
                </button>
              </div>
              <div className="mt-2">
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </form>
          <div className="text-center">
            Want to Join Us?
            <Link className="font-bold ml-2 text-green-500" to="/signUp">
              Register
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
