import SectionTitle from "../../../Components/Shared/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Others/Loading";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: users = [],
    isLoading: userLoading,
    refetch
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic(`/users`);
      return res.data;
    },
  });

  const handleUserDelete = (users) => {
    Swal.fire({
      title: `Delete ${users?.name}`,
      text: "Do you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/users-delete/${users?._id}`).then((res) => {
            console.log(res)
          if (res.data.postDeleted > 0 || res.data.userDeleted > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${users?.name} ${res.data.message}`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (userLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <SectionTitle
        heading={"All Users"}
        subHeading={"Here is the information of all your users"}
      />
      <div className="overflow-x-auto px-3 mt-5">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">User ID</th>
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Registration Date</th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr
                key={user?._id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b text-center">{index + 1}</td>
                <td className="py-3 px-4 border-b text-center">{user?.name}</td>
                <td className="py-3 px-4 border-b text-center">{user?.email}</td>
                <td className="py-3 px-4 border-b text-center">
                  {user?.role || "Not Yet"}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {new Date(user?.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <div
                    onClick={() => handleUserDelete(user)}
                    className="flex justify-center"
                  >
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

export default AllUsers;
