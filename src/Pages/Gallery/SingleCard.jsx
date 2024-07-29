import moment from "moment/moment";
import { FaCommentAlt, FaHeart, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useUser from "../../Hooks/useUser";
import Loading from "../../Others/Loading";
import Swal from "sweetalert2";

const SingleCard = ({ post, refetch }) => {
  const { _id, image, caption, added_by, added_on, likes, comment } = post;
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const addedDate = moment(added_on);
  const now = moment();
  const [users, userLoading] = useUser();
  const minutesAgo = now.diff(addedDate, "minutes");
  const hoursAgo = now.diff(addedDate, "hours");
  const daysAgo = now.diff(addedDate, "days");
  const yearsAgo = now.diff(addedDate, "years");
  // console.log(user?.photoURL);
  let timeAgo;

  if (minutesAgo < 60) {
    timeAgo = `${minutesAgo}m${minutesAgo !== 1 ? "" : ""} ago`;
  } else if (hoursAgo < 24) {
    timeAgo = `${hoursAgo}h${hoursAgo !== 1 ? "" : ""} ago`;
  } else if (daysAgo < 365) {
    timeAgo = `${daysAgo}d${daysAgo !== 1 ? "" : ""} ago`;
  } else {
    timeAgo = `${yearsAgo}yr${yearsAgo !== 1 ? "" : ""} ago`;
  }

  if (userLoading) {
    return <Loading></Loading>;
  }
  const handleLike = async () => {
    try {
      const res = await axiosPublic.post(`/post/${_id}/likes`, {
        userId: users?._id,
      });
      if (res.data.success) {
        refetch();
        Swal.fire({
          title: "Like Added",
          text: "Thanks For Liking",
          timer: 2000,
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Already Liked",
        text: "You've Already Liked This Post",
        timer: 2000,
        icon: "error",
      });
    }
  };

  return (
    <div className="space-y-2 relative ">
      <div className="flex gap-2 items-start">
        <img src={user?.photoURL} className="h-10 w-10 rounded" alt="" />
        <Link>
          <div>
            <h1 className="font-semibold"> {added_by}</h1>
            <h1 className="font-light text-xs">{timeAgo}</h1>
          </div>
        </Link>
      </div>
      <div className="relative">
        <img className="rounded-xl w-full h-60" src={image} alt="" />
        <div className="absolute bottom-2 right-2 bg-white text-center font-semibold rounded-xl px-2 py-1">
          <p>Nature</p>
        </div>
      </div>
      <h1 className="">{caption}</h1>
      <div className="flex gap-10 mt-2">
        <div className=" flex items-center gap-1">
          <p
            onClick={handleLike}
            className="hover:text-red-600 text-sm cursor-pointer"
          >
            <FaHeart />
          </p>
          <p className="">{likes?.length}</p>
          <p className="">Likes</p>
        </div>
        <Link className="hover:text-red-600" to={`/post-details/${_id}`}>
          <div className="flex items-center gap-1">
            <p className="text-green-500 text-sm cursor-pointer">
              <FaCommentAlt />
            </p>
            <p className="">{comment?.length}</p>
            <p className=""> Comments</p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <h1>Share</h1>
          <h1 className="">
            <FaShare></FaShare>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
