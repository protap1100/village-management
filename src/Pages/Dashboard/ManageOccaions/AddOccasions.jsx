import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMBB_API_URL;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddOccasions = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosSecure.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });

    const createdAt = new Date();
    if (res.data.success) {
      const occasionData = {
        name: data.name,
        location: data.location,
        startDate: data.startDate,
        endDate: data.endDate,
        activities: data.activities,
        contactInfo: data.contactInfo,
        organizer: data.organizer,
        eventHighlights: data.eventHighlights,
        description: data.description,
        image: res.data.data.url,
        addedBy: user.displayName,
        email: user.email,
        createdAt: createdAt,
      };

      const menuRes = await axiosSecure.post("/occasions", occasionData);

      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Occasion added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Add Occasions"}
        subHeading={"Add Upcoming Occasions"}
      />
      <div className="mt-10">
        <form
          className="flex-grow"
          data-aos="fade-right"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-6 mb-6 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-10">
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">Occasion Name</label>
              <input
                {...register("name", { required: "Occasion Name is required" })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Occasion Name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1" data-aos="fade-right">
              <label className="font-bold text-xl">Location or Venue</label>
              <input
                {...register("location", { required: "Location is required" })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Location or Venue"
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
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
              <label className="font-bold text-xl">Activities</label>
              <input
                {...register("activities", {
                  required: "Activities are required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter activities"
              />
              {errors.activities && (
                <p className="text-red-500">{errors.activities.message}</p>
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
              <label className="font-bold text-xl">Event Highlights</label>
              <input
                {...register("eventHighlights", {
                  required: "Event Highlights are required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Event Highlights"
              />
              {errors.eventHighlights && (
                <p className="text-red-500">{errors.eventHighlights.message}</p>
              )}
            </div>
            <div className="col-span-2" data-aos="fade-right">
              <label className="font-bold text-xl">Description</label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Description"
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>
            <div className="col-span-2" data-aos="fade-right">
              <label className="font-bold text-xl">Photo</label>
              <input
                {...register("image", { required: "Image is required" })}
                type="file"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
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
              Add Occasion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOccasions;
