import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useUser from "../../Hooks/useUser";
import Loading from "../../Others/Loading";

const image_hosting_key = import.meta.env.VITE_IMBB_API_URL;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Post = ({ refetch }) => {
  const { user } = useAuth();
  const [users, userLoading ] = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  if (userLoading) {
    return <Loading></Loading>;
  }
  // console.log(users._id);

  const onSubmit = async (data) => {
    // console.log(data)
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });

    const createdAt = Date();
    if (res.data.success) {
      const postData = {
        caption: data.caption,
        image: res.data.data.url,
        added_by: user?.displayName,
        user_email: user?.email,
        added_on: createdAt,
        user_id: users?._id,
        likes: [],
        comment: [],
      };
      const postRes = await axiosPublic.post("/post", postData);

      if (postRes.data.insertedId) {
        refetch();
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "You Posted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-orange-500 text-center mt-3">
          Make A Post{" "}
        </h1>
      </div>
      <div className=" flex justify-center items-center ">
        <form
          action=""
          className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-xl space-y-6 my-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              className="font-bold text-center text-2xl mb-2 block"
              htmlFor="caption"
            >
              Caption
            </label>
            <div>
              <textarea
                {...register("caption", { required: "Caption is required" })}
                name="caption"
                className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              {errors.caption && (
                <p className="text-red-500">{errors.caption.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              className="font-bold text-center text-2xl mb-2 block"
              htmlFor="photo"
            >
              Photo
            </label>
            <div>
              <input
                {...register("image", { required: "Image is required" })}
                type="file"
                className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 rounded-full font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Post;
