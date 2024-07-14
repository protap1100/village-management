import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useContact from "../../Hooks/useContact";
import Loading from "react-loading";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const FeedBack = () => {
  const [feedbacks, loading, refetch] = useContact();
  const axiosPublic = useAxiosPublic();

  const handleDelete = (feedback) => {
    Swal.fire({
      title: `Delete ${feedback.name}`,
      text: "Do You Want to Delete this Item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/feedback/${feedback._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            console.log(res.data)
            Swal.fire({
              title: "Deleted!",
              text: `${feedback.name} Has Deleted Successfully`,
              icon: "success",
              timer: 1000,
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
        heading={"All Feedback"}
        subHeading={"Here is the information of all feedback received"}
      />
      <div className="overflow-x-auto px-3 mt-5">
        <table className="min-w-full mt-5 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">Id</th>
              <th className="py-3 px-4">User Name</th>
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4">Message</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr
                key={feedback._id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b text-center">{index + 1}</td>
                <td className="py-3 px-4 border-b text-center">
                  {feedback.name}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {feedback.subject}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {feedback.message}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {feedback.createdAt.slice(0,10)}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {feedback.email}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <div onClick={()=>handleDelete(feedback)}  className="flex justify-center">
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

export default FeedBack;
