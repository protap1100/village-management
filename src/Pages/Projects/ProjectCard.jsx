import { FaMoneyBill } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-green-500">{project.name}</h1>
        <div className="mt-4">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover rounded"
          />
        </div>
        <div className="mt-4 text-green-500">
          <h1>Purpose: {project.purpose}</h1>
          <h1 className="flex items-center gap-3">
            Budget: {project.budget} <FaMoneyBill></FaMoneyBill>{" "}
          </h1>
          <h1>Contact: {project.contactInfo}</h1>
        </div>
        <div className="mt-4 text-center">
          <button className="text-center p-2 bg-green-500 text-white rounded duration-500 hover:bg-green-700 w-full">
            <Link to={`/project-details/${project?._id}`} >View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
