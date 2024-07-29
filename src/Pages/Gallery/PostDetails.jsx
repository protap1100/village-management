import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../Others/Loading";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useUser from "../../Hooks/useUser";

const PostDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [users, userLoading] = useUser();
  const [comment, setComment] = useState("");
  const { data: post = {}, isLoading: loading } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/post-details/${id}`);
      return res.data;
    },
  });
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const res = await axiosPublic.post(`/post/${id}/comments`, {
      comment: comment,
      author: user?.displayName,
      photo: user?.photoURL,
    });
    setComment("");
    console.log(res);
  };

  // console.log("email user",users)

  if (loading || userLoading) {
    return <Loading />;
  }
  // console.log(post?.comment[4].photo);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full rounded-md"
        />
      </div>
      <div>
        <p className="text-lg font-semibold">{post.caption}</p>
        <p className="text-sm text-gray-500">{post.added_on}</p>
      </div>
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
              <div className="flex gpa-2">
                <img className="w-8 h-8" src={cmnt?.photo} alt="" />
                <p className="font-bold -mt-1">{cmnt.author}</p>
              </div>
              <p className="text-sm font-light mt-2">{cmnt.text}</p>
              <p className="text-sm font-light">{cmnt.timestamp.slice(0, 10)}</p>
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
