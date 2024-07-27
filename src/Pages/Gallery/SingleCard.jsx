import { FaCommentAlt, FaHeart } from "react-icons/fa";

const SingleCard = ({ post }) => {
  const { image, caption, added_by, added_on, likes, comment } = post;
  //   console.log(comment?.length);
//   console.log(added_on.slice("0,10"));
  const date = new Date();
  console.log(date)
  const newDate = date - added_on;

  return (
    <div className="space-y-2 relative ">
      <h1 className="text-center font-bold text-green-600">{caption}</h1>
      <div className="relative">
        <img className="rounded-xl w-full h-60" src={image} alt="" />
        <div className="absolute bottom-2 right-2 bg-white text-center font-semibold rounded-xl px-2 py-1">
          <p>Nature</p>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="flex items-center gap-1">
          <p className="text-red-500 text-sm">
            <FaHeart />
          </p>
          <p className="font-bold">{likes?.length > 1 ? 0 : likes?.length}</p>
          <p className="font-bold">Likes</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-green-500 text-sm">
            <FaCommentAlt />
          </p>
          <p>{comment?.length > 1 ? 0 : comment?.length}</p>
          <p className="font-bold"> Comments</p>
        </div>
      </div>
      <div>
        <h1 className="font-semibold">Added By: {added_by}</h1>
        <h1 className="font-semibold">Added On: {newDate}</h1>
      </div>
    </div>
  );
};

export default SingleCard;
