import SectionTitle from "../../Components/Shared/SectionTitle";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Light Up Village",
    purpose: "Light Up The Whole Village",
    budget: "50000 BDT",
    startDate: "01 January 2024",
    endDate: "31 December 2024",
    location: "Dhaka, Bangladesh",
    organizer: "Village Council",
    status: "Ongoing",
    contactInfo: "Contact: 0123456789, Email: info@village.com",
    imageUrl: "https://docs.material-tailwind.com/img/team-3.jpg",
  },
  {
    name: "Clean Water Project",
    purpose: "Provide Clean Drinking Water",
    budget: "75000 BDT",
    startDate: "01 March 2024",
    endDate: "30 June 2024",
    location: "Dhaka, Bangladesh",
    organizer: "Health and Safety Committee",
    status: "Upcoming",
    contactInfo: "Contact: 0987654321, Email: health@village.com",
    imageUrl: "https://docs.material-tailwind.com/img/team-2.jpg",
  },
  {
    name: "Village Road Repair",
    purpose: "Repair and Maintain Roads",
    budget: "100000 BDT",
    startDate: "01 April 2024",
    endDate: "30 September 2024",
    location: "Dhaka, Bangladesh",
    organizer: "Infrastructure Committee",
    status: "Upcoming",
    contactInfo: "Contact: 1234567890, Email: infrastructure@village.com",
    imageUrl: "https://docs.material-tailwind.com/img/team-1.jpg",
  },
];

const Projects = ({search}) => {
  return (
    <div>
      <SectionTitle
        heading={"Our Projects"}
        subHeading={"Our Village Projects"}
      ></SectionTitle>
     <div className="text-center text-green-500 mt-5">
        {search}
        <h1 className="text-2xl font-bold">Total Project Of BGTS: 40</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
