import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Loading from "../../../Others/Loading";

const AllPosts = () => {
  const axiosPublic = useAxiosPublic();
  // console.log(user?.email);
  const { data: posts = [], isLoading: postLoading,refetch } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/post`);
      return res.data;
    },
  });

  const handleDelete = (post) => {
    Swal.fire({
      title: `Delete ${post.caption}`,
      text: "Do you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/post-delete/${post._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${post.caption} has been deleted successfully`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  if(postLoading){
    return <Loading></Loading>
  }




  return (
    <div>
      <SectionTitle
        heading={"All Posts"}
        subHeading={"Here is the information of user's posts"}
      />
      <div className="overflow-x-auto px-3 mt-5">
        <table className="min-w-full mt-5 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">Id</th>
              <th className="py-3 px-4">Added By</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Likes</th>
              <th className="py-3 px-4">Comments</th>
              <th className="py-3 px-4">Photo</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b text-center">{index + 1}</td>
                <td className="py-3 px-4 border-b text-center">
                  {post?.added_by}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {post?.added_on.slice(0, 15)}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {post?.likes?.length}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {post?.comment?.length}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <img
                    src={post?.image}
                    alt={post?.image}
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {post.caption}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <div onClick={()=>handleDelete(post)} className="flex justify-center">
                    <FaTrashAlt className="text-red-500 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPosts;
