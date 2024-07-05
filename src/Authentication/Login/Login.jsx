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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative animate__animated animate__fadeInDown">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input animate__animated animate__fadeInDown input-bordered w-full"
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
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <div className="form-control mt-6">
              <button className="p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-300">
                Login
              </button>
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
