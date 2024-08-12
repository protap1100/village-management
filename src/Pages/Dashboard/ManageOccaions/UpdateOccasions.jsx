import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import Loading from "../../../Others/Loading";
import Swal from "sweetalert2";

const UpdateOccasions = () => {
  const { id } = useParams();
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const { data: occasions = {}, isLoading: occasionsLoading } = useQuery({
    queryKey: ["occasions", id],
    queryFn: async () => {
      const res = await axiosSecure(`/get-occasions/${id}`);
      return res.data;
    },
  });

  if (occasionsLoading) {
    return <Loading></Loading>;
  }
  //   console.log(occasions);

  const onSubmit = async (data) => {
    const updateOccasionData = {
      ...data,
      addedBy: occasions?.addedBy,
      createdAt: occasions?.createdAt,
      email: occasions?.email,
      occId: occasions?._id,
    };

    try {
      const res = await axiosSecure.patch(
        `/update-occasions`,
        updateOccasionData
      );

      if (res.data.success) {
        Swal.fire({
          title: "Success",
          text: "Occasion updated successfully",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/admin/all-occasions");
          reset();
        });
      } else {
        Swal.fire({
          title: "Error",
          text: res.data.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while updating the occasion.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Add Occasions"}
        subHeading={"Add Upcoming Occasions"}
      />
      <div className="mt-10">
        <form className="flex-grow" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-10">
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Occasion Name</label>
              <input
                {...register("name", { required: "Occasion Name is required" })}
                defaultValue={occasions?.name}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Occasion Name"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Location or Venue</label>
              <input
                {...register("location", { required: "Location is required" })}
                type="text"
                defaultValue={occasions?.location}
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Location or Venue"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Start Date</label>
              <input
                defaultValue={occasions?.startDate}
                {...register("startDate", {
                  required: "Start Date is required",
                })}
                type="date"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">End Date</label>
              <input
                defaultValue={occasions?.endDate}
                {...register("endDate", { required: "End Date is required" })}
                type="date"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Activities</label>
              <input
                defaultValue={occasions?.activities}
                {...register("activities", {
                  required: "Activities are required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter activities"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Contact Info</label>
              <input
                defaultValue={occasions?.contactInfo}
                {...register("contactInfo", {
                  required: "Contact Info is required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Contact Info"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Organizer</label>
              <input
                {...register("organizer", {
                  required: "Organizer is required",
                })}
                defaultValue={occasions?.organizer}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Organizer"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Event Highlights</label>
              <input
                defaultValue={occasions?.eventHighlights}
                {...register("eventHighlights", {
                  required: "Event Highlights are required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Event Highlights"
              />
            </div>
            <div className="col-span-2">
              <label className="font-bold text-xl">Description</label>
              <textarea
                defaultValue={occasions?.description}
                {...register("description", {
                  required: "Description is required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Description"
              />
            </div>
            <div className="col-span-2">
              <label className="font-bold text-xl">Photo</label>
              <input
                {...register("image", { required: "Image is required" })}
                type="text"
                defaultValue={occasions?.image}
                readOnly
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-2"
              />
            </div>
          </div>
          <div className="px-10">
            <button
              type="submit"
              className="text-center mt-3 p-2 border-b-4 bg-blue-400 border-blue-400 w-full hover:bg-blue-200 text-white rounded-xl my-2 hover:border-blue-300 transition-all duration-700 ease-in-out"
            >
              Update Occasion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateOccasions;
