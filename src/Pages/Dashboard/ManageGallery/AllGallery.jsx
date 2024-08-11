import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import { Link } from "react-router-dom";
import useGallery from "../../../Hooks/useGallery";
import Swal from "sweetalert2";
import Loading from "../../../Others/Loading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllGallery = () => {
  const [photos, loading, refetch] = useGallery();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (photo) => {
    Swal.fire({
      title: `Delete ${photo.title}`,
      text: "Do you want to delete this photo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/photos-delete/${photo._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${photo.title} has been deleted successfully.`,
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
        heading={"All Famous Photos"}
        subHeading={"All Good Photos From Each Event"}
      />
      <div className="overflow-x-auto px-3 mt-5">
        <Link
          to="/admin/add-photos"
          className="inline-block p-2 bg-green-500 hover:bg-green-600 font-bold text-white rounded"
        >
          Add Photos
        </Link>
        <table className="min-w-full mt-5 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">Id</th>
              <th className="py-3 px-4">Photo Title</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Photo</th>
              <th className="py-3 px-4">Date Added</th>
              <th className="py-3 px-4">Update </th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {photos.map((photo, index) => (
              <tr
                key={photo._id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b text-center">{index + 1}</td>
                <td className="py-3 px-4 border-b text-center">
                  {photo.title}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {photo.description}
                </td>
                <td className="py-3 px-4 border-b text-center flex items-center justify-center">
                  <img className="w-10 h-10 " src={photo.image} alt="" />
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {photo.createdAt.slice(0, 10)}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <div className="flex justify-center">
                    <FaEdit className="text-green-500 cursor-pointer" />
                  </div>
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <div
                    onClick={() => handleDelete(photo)}
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

export default AllGallery;
