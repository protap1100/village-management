import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useOccasions from "../../../Hooks/useOccasions";
import Swal from "sweetalert2";
import Loading from "../../../Others/Loading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllOccasions = () => {
  const [occasions, loading, refetch] = useOccasions();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (occasion) => {
    Swal.fire({
      title: `Delete ${occasion.name}`,
      text: "Do you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/occasions/${occasion._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${occasion.name} has been deleted successfully`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <SectionTitle
        heading={"All Occasions"}
        subHeading={"Here is the information of all your occasions"}
      />
      <div className="overflow-x-auto px-3 mt-5">
        <Link
          to="/admin/add-occasions"
          className="inline-block p-2 bg-green-500 hover:bg-green-600 font-bold text-white rounded"
        >
          Add Occasions
        </Link>
        <table className="min-w-full mt-5 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">Occasion ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Start Date</th>
              <th className="py-3 px-4">End Date</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Delete</th>
              <th className="py-3 px-4">Update</th>
            </tr>
          </thead>
          <tbody>
            {occasions.map((occasion, index) => (
              <tr
                key={occasion._id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b text-center">{index + 1}</td>
                <td className="py-3 px-4 border-b text-center">
                  {occasion.name}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {new Date(occasion.startDate).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {new Date(occasion.endDate).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {occasion.location}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {occasion.description}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <div
                    onClick={() => handleDelete(occasion)}
                    className="flex justify-center"
                  >
                    <FaTrashAlt className="text-red-500 cursor-pointer" />
                  </div>
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <div className="flex justify-center">
                    <FaEdit className="text-green-500 cursor-pointer" />
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

export default AllOccasions;
