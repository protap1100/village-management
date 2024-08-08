import SectionTitle from "../../Components/Shared/SectionTitle";
import useMember from "../../Hooks/useMember";
import Loading from "../../Others/Loading";
import MemberCard from "./MemberCard";
import { FaPeopleGroup } from "react-icons/fa6";

const MainMember = ({ search }) => {
  const [members, memberLoading, ] = useMember();

  if (memberLoading) {
    return <Loading></Loading>;
  }

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
        {members.map((mem, index) => (
          <MemberCard key={index} member={mem}></MemberCard>
        ))}
      </div>
    </section>
  );
};

export default MainMember;
