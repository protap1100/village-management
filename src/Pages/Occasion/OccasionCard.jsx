import { MdOutlineDateRange } from "react-icons/md";
const OccasionCard = ({ festival }) => {
  const { index } = festival;

  return (
    <div
      key={index}
      className="festival-card bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="p-4">
        <h1 className="text-2xl text-center lg:text-left font-bold text-orange-500">
          {festival.name}
        </h1>
      </div>
      <div className="mt-2">
        <img
          src={festival.image}
          alt={festival.name}
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <div className="p-4 text-center lg:text-left flex  flex-col lg:items-start  items-center">
        <h1 className="text-orange-300 flex items-center gap-1">
          <MdOutlineDateRange /> Start Date: {festival.startDate}
        </h1>
        {/* <h1 className="text-orange-500 flex items-center gap-1">
          <MdOutlineDateRange />
          Main Function: {festival.mainFunction}
        </h1> */}
        <h1 className="text-orange-300 flex items-center gap-1">
          <MdOutlineDateRange />
          End Date: {festival.endDate}
        </h1>
        <p className="flex gap-1">
          Description :{festival.description}
        </p>
        <div className="mt-4 text-center">
          <button className="bg-orange-500 text-white  w-full py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OccasionCard;
