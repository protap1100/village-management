import { useState } from "react";
import moment from "moment";
import {
  FaCommentAlt,
  FaHeart,
  FaShare,
  FaEllipsisH,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UserPostCard = ({ post, refetch }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { _id, image, caption, added_by, added_on, user_id, likes, comment } =
    post;
  const axiosPublic = useAxiosPublic();
  const addedDate = moment(added_on);
  const now = moment();
  const minutesAgo = now.diff(addedDate, "minutes");
  const hoursAgo = now.diff(addedDate, "hours");
  const daysAgo = now.diff(addedDate, "days");
  const yearsAgo = now.diff(addedDate, "years");
  let timeAgo;

  if (minutesAgo < 60) {
    timeAgo = `${minutesAgo}m ago`;
  } else if (hoursAgo < 24) {
    timeAgo = `${hoursAgo}h ago`;
  } else if (daysAgo < 365) {
    timeAgo = `${daysAgo}d ago`;
  } else {
    timeAgo = `${yearsAgo}yr ago`;
  }

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDelete = async () => {
    try {
      const result = await Swal.fire({
        title: "Delete This Post",
        text: "Do you want to delete this item?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axiosPublic.delete(`/post-delete/${user_id}`);
        console.log(response.data);

        if (response.status === 200) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your post has been deleted.",
            icon: "success",
          });
          // Optionally: Refresh the UI or redirect the user
        }
      }
    } catch (error) {
      console.error("Error deleting the post:", error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem deleting the post. Please try again later.",
        icon: "error",
      });
    }
  };

  const handleEdit = () => {};

  return (
    <div className="relative bg-gray-100 rounded p-4">
      <div className="absolute top-2 right-2">
        <button
          onClick={handleDropdownToggle}
          className="text-gray-600 hover:text-gray-800"
        >
          <FaEllipsisH />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-8 right-0 bg-white border rounded shadow-md w-32 z-10">
            <button
              onClick={handleEdit}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            >
              <FaEdit /> Edit
            </button>
            <button
              onClick={handleDelete}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            >
              <FaTrash /> Delete
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-2 items-start">
        <img src={image} className="h-10 w-10 rounded" alt="" />
        <Link>
          <div className="hover:text-green-600">
            <h1 className="font-semibold">{added_by}</h1>
            <h1 className="font-light text-xs">{timeAgo}</h1>
          </div>
        </Link>
      </div>

      <div className="relative mt-3">
        <img className="rounded-xl w-full h-60" src={image} alt="" />
        <div className="absolute bottom-2 right-2 bg-white text-center font-semibold rounded-xl px-2 py-1">
          <p>Nature</p>
        </div>
      </div>

      <h1 className="text-sm">{caption}</h1>

      <div className="flex justify-between gap-4 my-2">
        <div className="flex hover:text-red-600 cursor-pointer items-center gap-1">
          <p className="text-sm cursor-pointer">
            <FaHeart />
          </p>
          <p>{likes?.length}</p>
          <p>Likes</p>
        </div>
        <Link className="hover:text-red-600" to={`/post-details/${_id}`}>
          <div className="flex items-center gap-1">
            <p className="text-sm cursor-pointer">
              <FaCommentAlt />
            </p>
            <p>{comment?.length}</p>
            <p>Comments</p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <h1>Share</h1>
          <button className="cursor-pointer">
            <FaShare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPostCard;
