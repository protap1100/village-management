import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/Shared/SectionTitle";

const AllPosts = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      date: "2024-07-10",
      likes: 120,
      comments: 45,
      photo: "https://via.placeholder.com/150",
      title: "A Day in the Life",
      desc: "This post describes a typical day in my life.",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "2024-07-08",
      likes: 200,
      comments: 80,
      photo: "https://via.placeholder.com/150",
      title: "Traveling the World",
      desc: "Sharing my experiences traveling around the globe.",
    },
  ];

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
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Likes</th>
              <th className="py-3 px-4">Comments</th>
              <th className="py-3 px-4">Photo</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b text-center">{post.id}</td>
                <td className="py-3 px-4 border-b text-center">{post.name}</td>
                <td className="py-3 px-4 border-b text-center">{post.date}</td>
                <td className="py-3 px-4 border-b text-center">{post.likes}</td>
                <td className="py-3 px-4 border-b text-center">
                  {post.comments}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <img
                    src={post.photo}
                    alt={post.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 border-b text-center">{post.title}</td>
                <td className="py-3 px-4 border-b text-center">{post.desc}</td>
                <td className="py-3 px-4 border-b text-center">
                  <div className="flex justify-center">
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
