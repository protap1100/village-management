import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import { Link } from "react-router-dom";
import useProjects from "../../../Hooks/useProjects";

const AllProjects = () => {
  const [projects, loading, refetch] = useProjects();

  return (
    <div>
      <SectionTitle
        heading={"All Projects"}
        subHeading={"Here is the information of all your projects"}
      />
      <div className="overflow-x-auto px-3 mt-5">
        <Link
          to="/admin/add-projects"
          className="inline-block p-2 bg-green-500 hover:bg-green-600 font-bold text-white rounded"
        >
          Add Projects
        </Link>
        <table className="min-w-full mt-5 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">Id</th>
              <th className="py-3 px-4">Project Name</th>
              <th className="py-3 px-4">Purpose</th>
              <th className="py-3 px-4">Budget</th>
              <th className="py-3 px-4">Start Date</th>
              <th className="py-3 px-4">End Date</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Organizer</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Contact Info</th>
              <th className="py-3 px-4">Delete</th>
              <th className="py-3 px-4">Update</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b text-center">{project.id}</td>
                <td className="py-3 px-4 border-b text-center">
                  {project.name}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {project.purpose}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {project.budget}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {project.startDate}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {project.endDate}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {project.location}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {project.organizer}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {project.status}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {project.contactInfo}
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

export default AllProjects;
