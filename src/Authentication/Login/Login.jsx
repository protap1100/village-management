import { useState } from "react";
import SectionTitle from "../../Components/Shared/SectionTitle";
import image from "./../../assets/Media/Images/Sign-in.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Components/Shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Login Successful",
          text: "You have successfully logged in!",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const message =
          error.code === "auth/user-not-found" || error.code === "auth/wrong-password"
            ? "Wrong Password or Email. Please try again with correct email and password."
            : "Wrong Password or Email. Please try again with correct email and password.";
        setErrorMessage(message);
        toast.error(message);
      });
  };

  return (
    <>
      <Helmet>
        <title>BGTS || Login</title>
        <link rel="icon" href="login.png" type="image/png" />
      </Helmet>
      <SectionTitle
        heading={"Login Here"}
        subHeading={"Use Email And Password to Join"}
      />
      <section className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-1">
          <img src={image} alt="Login" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>
            <div>
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
                <span
                  className="absolute animate__animated animate__fadeInDown inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-800 text-2xl cursor-pointer" />
                  ) : (
                    <FaEyeSlash className="text-gray-800 text-2xl cursor-pointer" />
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
            </div>
            <label className="label">
              <a href="#" className="block text-base font-medium text-[#8484a1]">
                Forgot password?
              </a>
            </label>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold hover:bg-blue-400 transition duration-700 text-white outline-none"
              >
                Login
              </button>
              <div className="mt-2">
                <SocialLogin />
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
