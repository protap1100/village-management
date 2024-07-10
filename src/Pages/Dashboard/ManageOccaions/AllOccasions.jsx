import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/Shared/SectionTitle";

const AllOccasions = () => {
  const occasions = [
    {
      id: "1",
      name: "Durga Puja",
      startDate: "2023-01-15",
      endDate: "2023-01-19",
      location: "Dhaka, Bangladesh",
      description: "A major festival in Dhaka",
    },
    {
      id: "2",
      name: "Eid-ul-Fitr",
      startDate: "2023-04-20",
      endDate: "2023-04-22",
      location: "Chittagong, Bangladesh",
      description: "A festival celebrated by Muslims",
    },
    {
      id: "3",
      name: "Pohela Boishakh",
      startDate: "2023-04-14",
      endDate: "2023-04-14",
      location: "Dhaka, Bangladesh",
      description: "Bengali New Year festival",
    },
    {
      id: "4",
      name: "Christmas",
      startDate: "2023-12-25",
      endDate: "2023-12-25",
      location: "Dhaka, Bangladesh",
      description: "Christian holiday celebrating the birth of Jesus",
    },
  ];

  return (
    <div>
      <SectionTitle
        heading={"All Occasions"}
        subHeading={"Here is the information of all your occasions"}
      />
      <div className="overflow-x-auto px-3 mt-5">
        <Link to='/admin/add-occasions' className="inline-block p-2 bg-green-500 hover:bg-green-600 font-bold text-white rounded">
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
            {occasions.map((occasion) => (
              <tr
                key={occasion.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b text-center">
                  {occasion.id}
                </td>
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
                  <div className="flex justify-center">
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
