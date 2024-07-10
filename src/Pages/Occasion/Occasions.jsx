import SectionTitle from "../../Components/Shared/SectionTitle";
import OccasionCard from "./OccasionCard";
import { MdOutlineFestival } from "react-icons/md";

const festivals = [
  {
    name: "Durga Puja",
    startDate: "10 February 2024",
    mainFunction: "05 November 2028",
    endDate: "10 February 2024",
    location: "Dhaka, Bangladesh",
    activities: ["Puja ceremonies", "Cultural programs", "Food stalls"],
    contactInfo: "Contact: 0123456789, Email: info@festival.com",
    organizer: "Bgts Committe",
    eventHighlights:
      "Grand procession, traditional dances, and music performances.",
    volunteers: ["John Doe", "Jane Smith", "Bob Johnson"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias ullam perspiciatis. Eos corrupti ex enim, eveniet cumque expedita repudiandae.",
    imageUrl: "https://docs.material-tailwind.com/img/team-3.jpg",
  },
];

const Occasions = ({ search }) => {
  return (
    <section>
      <SectionTitle
        icon={<MdOutlineFestival></MdOutlineFestival>}
        heading={"Our Festival"}
        subHeading={"Our Upcoming Occasions and Festival"}
      ></SectionTitle>
      <div className="text-center text-green-500 mt-5">
        {search}
        <h1 className="text-2xl font-bold">Total Occasions Of Occasions: 10</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {festivals.map((festival, index) => (
          <OccasionCard key={index} festival={festival}></OccasionCard>
        ))}
      </div>
    </section>
  );
};

export default Occasions;
