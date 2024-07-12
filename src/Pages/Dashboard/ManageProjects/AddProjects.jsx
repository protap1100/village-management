import SectionTitle from "../../../Components/Shared/SectionTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMBB_API_URL;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
console.log(image_hosting_api);

const AddProjects = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
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

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });

    const createdAt = new Date();
    if (res.data.success) {
      const projectData = {
        name: data.name,
        purpose: data.purpose,
        budget: data.budget,
        startDate: data.startDate,
        endDate: data.endDate,
        location: data.location,
        organizer: data.organizer,
        status: data.status,
        contactInfo: data.contactInfo,
        imageUrl: data.imageUrl,
        addedBy: user.displayName,
        email: user.email,
        createdAt: createdAt,
      };

      const menuRes = await axiosPublic.post("/projects", projectData);

      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Project added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Add Projects"}
        subHeading={"Add Upcoming Projects"}
      />
      <div className="mt-10">
        <form
          className="flex-grow"
          data-aos="fade-right"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-6 mb-6 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-10">
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">Project Name</label>
              <input
                {...register("name", { required: "Project Name is required" })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Project Name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">Purpose</label>
              <input
                {...register("purpose", { required: "Purpose is required" })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Project Purpose"
              />
              {errors.purpose && (
                <p className="text-red-500">{errors.purpose.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">Budget</label>
              <input
                {...register("budget", { required: "Budget is required" })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Budget"
              />
              {errors.budget && (
                <p className="text-red-500">{errors.budget.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">Start Date</label>
              <input
                {...register("startDate", {
                  required: "Start Date is required",
                })}
                type="date"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
              />
              {errors.startDate && (
                <p className="text-red-500">{errors.startDate.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">End Date</label>
              <input
                {...register("endDate", { required: "End Date is required" })}
                type="date"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
              />
              {errors.endDate && (
                <p className="text-red-500">{errors.endDate.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">Location</label>
              <input
                {...register("location", { required: "Location is required" })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Location"
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">Organizer</label>
              <input
                {...register("organizer", {
                  required: "Organizer is required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Organizer"
              />
              {errors.organizer && (
                <p className="text-red-500">{errors.organizer.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">Status</label>
              <input
                {...register("status", { required: "Status is required" })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Status"
              />
              {errors.status && (
                <p className="text-red-500">{errors.status.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">Contact Info</label>
              <input
                {...register("contactInfo", {
                  required: "Contact Info is required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Contact Info"
              />
              {errors.contactInfo && (
                <p className="text-red-500">{errors.contactInfo.message}</p>
              )}
            </div>
            <div className="col-span-2" data-aos="fade-right">
              <label className="font-bold text-xl">Image URL</label>
              <input
                {...register("image", { required: "Image URL is required" })}
                type="file"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Image URL"
              />
              {errors.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
            </div>
          </div>
          <div className="px-10">
            <button
              type="submit"
              className="text-center mt-3 p-2 border-b-4 bg-blue-400 border-blue-400 w-full hover:bg-blue-200 text-white rounded-xl my-2 hover:border-blue-300 transition-all duration-700 ease-in-out"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjects;
