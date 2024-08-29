import Swal from "sweetalert2";
import Loading from "../../../Others/Loading";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/Shared/SectionTitle";

const UpdateProject = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const { data: projects = {}, isLoading: projectsLoading } = useQuery({
    queryKey: ["projects", id],
    queryFn: async () => {
      const res = await axiosSecure(`/get-projects/${id}`);
      return res.data;
    },
  });

  if (projectsLoading) {
    return <Loading></Loading>;
  }
  //   console.log(occasions);

  const onSubmit = async (data) => {
    const updateProjectsData = {
      ...data,
      addedBy: projects?.addedBy,
      createdAt: projects?.createdAt,
      email: projects?.email,
      projectId: projects?._id,
    };

    try {
      const res = await axiosSecure.patch(
        `/update-project`,
        updateProjectsData
      );

      if (res.data.success) {
        Swal.fire({
          title: "Success",
          text: "projects updated successfully",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/admin/all-projects");
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
        text: "An error occurred while updating the projects.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"Add Projects"}
        subHeading={"Add Upcoming Projects"}
      />
      <div className="mt-10">
        <form className="flex-grow" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-10">
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Project Name</label>
              <input
                {...register("name", { required: "Project Name is required" })}
                defaultValue={projects?.name}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Project Name"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Purpose</label>
              <input
                {...register("purpose", { required: "Purpose is required" })}
                defaultValue={projects?.purpose}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Project Purpose"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Budget</label>
              <input
                {...register("budget", { required: "Budget is required" })}
                defaultValue={projects?.budget}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Budget"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Start Date</label>
              <input
                defaultValue={projects?.startDate}
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
                defaultValue={projects?.endDate}
                {...register("endDate", { required: "End Date is required" })}
                type="date"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Location</label>
              <input
                defaultValue={projects?.location}
                {...register("location", { required: "Location is required" })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Location"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Organizer</label>
              <input
                defaultValue={projects?.organizer}
                {...register("organizer", {
                  required: "Organizer is required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Organizer"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Status</label>
              <input
                defaultValue={projects?.status}
                {...register("status", { required: "Status is required" })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Status"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Contact Info</label>
              <input
                defaultValue={projects?.contactInfo}
                {...register("contactInfo", {
                  required: "Contact Info is required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Contact Info"
              />
            </div>
            <div className="col-span-2">
              <label className="font-bold text-xl">Image URL</label>
              <input
                defaultValue={projects?.image}
                {...register("image", { required: "Image URL is required" })}
                type="text"
                readOnly
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Image URL"
              />
            </div>
          </div>
          <div className="px-10">
            <button
              type="submit"
              className="text-center mt-3 p-2 border-b-4 bg-blue-400 border-blue-400 w-full hover:bg-blue-200 text-white rounded-xl my-2 hover:border-blue-300 transition-all duration-700 ease-in-out"
            >
              Update Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
