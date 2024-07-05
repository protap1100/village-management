import { Link } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { useState } from "react";
import registerImg from './../../assets/Media/Images/Register.jpg'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <div>
        <SectionTitle
          heading="Register Here"
          subHeading="Fill Up The Form To Join Us"
        ></SectionTitle>
        <div className="mt-10 flex flex-col lg:flex-row justify-center items-center">
          <div className="flex-1">
            <img className="rounded" src={registerImg} alt="" />
          </div>
          <div className="flex-1">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative animate__animated animate__fadeInDown">
                  <input
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
                <button
                  type="submit"
                  className="p-2 bg-button hover:bg-hover text-white font-bold rounded"
                >
                  Sign Up
                </button>
                <div className="mt-2">
                  <SocialLogin></SocialLogin>
                </div>
              </div>
            </form>
            <div className="text-center">
              Already Have An Account
              <Link className="font-bold ml-2 text-green-500" to="/login">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;