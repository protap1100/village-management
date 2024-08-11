import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import Loading from "../../../Others/Loading";
import { useNavigate } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_IMBB_API_URL;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPhotos = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosSecure.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    const createdAt = new Date();
    if (res.data.success) {
      const photoData = {
        occasions: data.occasions,
        title: data.title,
        image: res.data.data.url,
        added_date: data.date,
        description: data.description,
        addedBy: user.displayName,
        email: user.email,
        createdAt: createdAt,
      };
      const menuRes = await axiosSecure.post("/gallery", photoData);

      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Photo added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/all-gallery");
      }
    }
  };

  if (loading) {
    <Loading></Loading>;
  }

  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"Add Photo"}
          heading={"Add Gallery Photo"}
        ></SectionTitle>
      </div>
      <div className="mt-10">
        <form className="flex-grow" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-10">
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Occasion Name</label>
              <input
                {...register("occasions", {
                  required: "Occasion occasions is required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter Occasion Occasions"
              />
              {errors.occasions && (
                <p className="text-red-500">{errors.occasions.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Title</label>
              <input
                {...register("title", { required: "title is required" })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter title or Venue"
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="font-bold text-xl">Date</label>
              <input
                {...register("date", {
                  required: "Start Date is required",
                })}
                type="date"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>
            <div className="col-span-2 lg:col-span-1">
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
            <div className="col-span-2">
              <label className="font-bold text-xl">Title</label>
              <textarea
                {...register("description", {
                  required: "description is required",
                })}
                type="text"
                className="mt-2 border border-[#1313181A] text-sm rounded-lg block w-full p-5"
                placeholder="Enter description or Venue"
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
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

export default AddPhotos;
