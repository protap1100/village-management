import moment from "moment/moment";
import { FaCommentAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleCard = ({ post }) => {
  const { _id, image, caption, added_by, added_on, likes, comment } = post;

  const addedDate = moment(added_on);
  const now = moment();
  const minutesAgo = now.diff(addedDate, "minutes");
  const hoursAgo = now.diff(addedDate, "hours");
  const daysAgo = now.diff(addedDate, "days");
  const yearsAgo = now.diff(addedDate, "years");

  let timeAgo;

  if (minutesAgo < 60) {
    timeAgo = `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (hoursAgo < 24) {
    timeAgo = `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else if (daysAgo < 365) {
    timeAgo = `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  } else {
    timeAgo = `${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago`;
  }

  return (
    <div className="space-y-2 relative ">
      <h1 className="text-center font-bold text-green-600">{caption}</h1>
      <div className="relative">
        <img className="rounded-xl w-full h-60" src={image} alt="" />
        <div className="absolute bottom-2 right-2 bg-white text-center font-semibold rounded-xl px-2 py-1">
          <p>Nature</p>
        </div>
      </div>
      <h1 className="font-bold">{timeAgo}</h1>
      <div className="flex gap-2 mt-2">
        <div className="flex items-center gap-1">
          <p className="text-red-500 text-sm cursor-pointer">
            <FaHeart />
          </p>
          <p className="font-bold">{likes?.length > 1 ? 0 : likes?.length}</p>
          <p className="font-bold">Likes</p>
        </div>
        <Link to={`/post-details/${_id}`}>
          <div className="flex items-center gap-1">
            <p className="text-green-500 text-sm cursor-pointer">
              <FaCommentAlt />
            </p>
            <p className="font-bold">
              {comment?.length > 1 ? 0 : comment?.length}
            </p>
            <p className="font-bold"> Comments</p>
          </div>
        </Link>
      </div>
      <div>
        <h1 className="font-semibold">Added By: {added_by}</h1>
      </div>
    </div>
  );
};

export default SingleCard;
