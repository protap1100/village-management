import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Others/Loading";

const OccasionDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: occasion = {}, isLoading: occasionsLoading } = useQuery({
    queryKey: ["occasion", id],
    queryFn: async () => {
      const res = await axiosPublic(`/occasions/${id}`);
      return res.data;
    },
  });

  if (occasionsLoading) {
    return <Loading />;
  }

  const {
    name,
    image,
    startDate,
    endDate,
    description,
    activities,
    addedBy,
    contactInfo,
    eventHighlights,
    location,
    organizer,
  } = occasion;

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
            <strong>Start Date:</strong>{" "}
            {new Date(startDate).toLocaleDateString()}
          </p>
          <p className="text-gray-700">
            <strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}
          </p>
          <p className="text-gray-700 col-span-2 mt-4">{description}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Event Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {eventHighlights}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Activities</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {activities}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Details</h3>
          <p className="text-gray-700">
            <strong>Added By:</strong> {addedBy}
          </p>
          <p className="text-gray-700">
            <strong>Contact Info:</strong> {contactInfo}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {location}
          </p>
          <p className="text-gray-700">
            <strong>Organizer:</strong> {organizer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OccasionDetails;
