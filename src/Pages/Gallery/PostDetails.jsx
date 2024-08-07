import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../Others/Loading";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useUser from "../../Hooks/useUser";
import { FaCommentAlt, FaHeart, FaShare, FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const PostDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [users, userLoading] = useUser();
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const {
    data: post = {},
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/post-details/${id}`);
      return res.data;
    },
  });

  if (userLoading) {
    return <Loading></Loading>;
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const res = await axiosPublic.post(`/post/${id}/comments`, {
      uniqueId: uuidv4(),
      commentUser: users?._id,
      comment: comment,
      author: user?.displayName,
      photo: user?.photoURL,
    });
    setComment("");
    refetch();
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        title: "Comment added",
        text: "Comment Added Successfully",
        icon: "success",
        timer: 2000,
      });
    }
  };

  const handleDeleteComment = async (uniqueId) => {
    try {
      const res = await axiosPublic.delete(`/post/${id}/comment/${uniqueId}`);
      if (res.status === 200) {
        refetch();
        Swal.fire({
          title: "Comment deleted",
          text: "Comment Deleted Successfully",
          icon: "success",
          timer: 2000,
        });
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to delete the comment",
        icon: "error",
        timer: 2000,
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex hover:text-red-600 cursor-pointer items-center gap-1">
          <p className="text-sm cursor-pointer">
            <FaHeart />
          </p>
          <p>{post?.likes?.length}</p>
          <p>Likes</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-sm cursor-pointer">
            <FaCommentAlt />
          </p>
          <p>{post?.comment?.length}</p>
          <p>Comments</p>
        </div>
        <div className="flex items-center gap-3">
          <h1>Share</h1>
          <button className="cursor-pointer">
            <FaShare></FaShare>
          </button>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{post.caption}</p>
        <p className="text-sm text-gray-500">{post.added_on}</p>
      </div>
      <div></div>
      <div className="mt-4">
        <form
          onSubmit={handleCommentSubmit}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Comment
          </button>
        </form>
      </div>
      <div className="mt-4">
        <p className="font-semibold"> {post?.comment.length} Comments</p>
        {post?.comment && post?.comment?.length > 0 ? (
          post?.comment?.map((cmnt, index) => (
            <div key={index} className="mt-2 p-2 bg-gray-100 rounded-md">
              <div className="flex justify-between">
                <div className="flex gpa-2">
                  <img className="w-8 h-8" src={cmnt?.photo} alt="" />
                  <p className="font-bold -mt-1">{cmnt.author}</p>
                </div>
                <div>
                  {cmnt?.commentUser === users?._id && (
                    <button
                      onClick={() => handleDeleteComment(cmnt?.uniqueId)}
                      className="text-red-500 cursor-pointer hover:text-red-700"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  )}
                </div>
              </div>
              <p className="text-sm font-light mt-2">{cmnt.text}</p>
              <p className="text-sm font-light">
                {cmnt.timestamp.slice(0, 10)}
              </p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
