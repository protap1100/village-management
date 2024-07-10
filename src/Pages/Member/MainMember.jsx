import SectionTitle from "../../Components/Shared/SectionTitle";
import MemberCard from "./MemberCard";
import { FaPeopleGroup } from "react-icons/fa6";

const members = [
  {
    id: 1,
    name: "Natalie Paisley",
    role: "CEO / Co-Founder",
    imageUrl: "https://docs.material-tailwind.com/img/team-3.jpg",
    facebook: "#facebook",
    bio: "Experienced leader with a passion for innovation and excellence.",
    contact: "natalie@example.com",
    nid : 938403085349,
  },
  {
    id: 2,
    name: "John Doe",
    role: "CTO",
    imageUrl: "https://docs.material-tailwind.com/img/team-2.jpg",
    facebook: "#facebook",
    bio: "Tech enthusiast with a background in software development and engineering.",
    contact: "john@example.com",
    nid : 938403085349,
  },
];

const MainMember = ({ search }) => {
  return (
    <section className="my-5">
      <SectionTitle
        icon={<FaPeopleGroup></FaPeopleGroup>}
        heading={"All BGTS Members"}
        subHeading={"Information of All BGTS Members"}
      ></SectionTitle>
      <div className="text-center text-green-500 mt-5">
        {search}
        <h1 className="text-2xl font-bold">
          Total Members Of BGTS: {members.length}
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-5">
        {members.map((member, index) => (
          <MemberCard key={index} member={member}></MemberCard>
        ))}
      </div>
    </section>
  );
};

export default MainMember;
