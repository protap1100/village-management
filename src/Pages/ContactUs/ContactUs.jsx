import emailjs from "emailjs-com";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/Shared/SectionTitle";
import ContactUsImage from "../../assets/Media/Images/contact-us.jpg";
import { LuMessagesSquare } from "react-icons/lu";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const emailApi = import.meta.env.VITE_EMAIL_API;
  const emailTemplate = import.meta.env.VITE_EMAIL_TEMPLATE;
  const emailParams = import.meta.env.VITE_EMAIL_PARAMS;

  console.log(emailApi,emailParams,emailTemplate)


  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const sendEmail = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      console.log(templateParams);

      await emailjs.send(emailApi, emailTemplate, templateParams, emailParams);
      const occasionData = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        addedBy: user.displayName,
        userEmail: user.email,
        createdAt: new Date(),
      };

      const res = await axiosPublic.post("/feedback", occasionData);
      if (res.status === 200 || emailjs.send.name == "send") {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Thank You For Your Message",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (res.data.insertedId) {
        toast.success("Occasion added successfully");
      } else {
        toast.error("Failed to add occasion");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Failed to send message. Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="my-5 container mx-auto">
      <Helmet>
        <title>Contact Us</title>
        <link rel="icon" href="contact.png" type="image/png" />
      </Helmet>
      <SectionTitle
        icon={<LuMessagesSquare />}
        heading={"Message Us"}
        subHeading={"We Are Looking Forward to Your Messages"}
      />
      <section className="py-6 mt-5 bg-gray-200 dark:text-gray-900 rounded-xl">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="flex items-center justify-center p-12">
            <img src={ContactUsImage} alt="Contact Us" />
          </div>
          <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
              <form onSubmit={handleSubmit(sendEmail)}>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: "Full Name is required" })}
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email Address is required",
                      pattern: /^\S+@\S+$/i,
                    })}
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Subject
                  </label>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    type="text"
                    id="subject"
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.subject && (
                    <p className="text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold hover:bg-blue-400 transition duration-700 text-white outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
