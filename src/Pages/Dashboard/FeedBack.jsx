import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/Shared/SectionTitle";

const FeedBack = () => {
  const feedbacks = [
    {
      id: 1,
      userName: "John Doe",
      feedback: "Great project! Keep up the good work.",
      date: "2024-06-15",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      userName: "Jane Smith",
      feedback: "The project could use more details about the budget.",
      date: "2024-06-20",
      email: "jane.smith@example.com",
    },
  ];

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
              <th className="py-3 px-4">Feedback</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr
                key={feedback.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b text-center">{feedback.id}</td>
                <td className="py-3 px-4 border-b text-center">{feedback.userName}</td>
                <td className="py-3 px-4 border-b text-center">{feedback.feedback}</td>
                <td className="py-3 px-4 border-b text-center">{feedback.date}</td>
                <td className="py-3 px-4 border-b text-center">{feedback.email}</td>
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

export default FeedBack;
