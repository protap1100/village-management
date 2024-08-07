import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Others/Loading";

const ProjectDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: project = {}, isLoading: projectsLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await axiosPublic(`/project-details/${id}`);
      return res.data;
    },
  });

  if (projectsLoading) {
    return <Loading />;
  }

  const {
    name,
    image,
    purpose,
    budget,
    contactInfo,
    startDate,
    endDate,
    location,
    organizer,
    status,
  } = project;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-t-lg shadow-md"
      />
      <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-b-lg">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-700">{name}</h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-gray-700">
            <strong className="text-blue-600">Purpose:</strong> {purpose}
          </p>
          <p className="text-gray-700">
            <strong className="text-blue-600">Budget:</strong> {budget}
          </p>
          <p className="text-gray-700 col-span-2 mt-4">{contactInfo}</p>
          <p className="text-gray-700">
            <strong className="text-blue-600">Start Date:</strong>{" "}
            {new Date(startDate).toLocaleDateString()}
          </p>
          <p className="text-gray-700">
            <strong className="text-blue-600">End Date:</strong>{" "}
            {new Date(endDate).toLocaleDateString()}
          </p>
          <p className="text-gray-700 col-span-2">
            <strong className="text-blue-600">Location:</strong> {location}
          </p>
          <p className="text-gray-700 col-span-2">
            <strong className="text-blue-600">Organizer:</strong> {organizer}
          </p>
          <p
            className={`text-gray-700 col-span-2 ${
              status === "Completed" ? "text-green-600" : "text-red-600"
            }`}
          >
            <strong className="text-blue-600">Status:</strong> {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
