import Search from "../../Components/Shared/Search";
import SectionTitle from "../../Components/Shared/SectionTitle";
import MemberCard from "./MemberCard";
const Member = () => {
  return (
    <section>
      <SectionTitle
        heading={"All BGTS Member"}
        subHeading={"Information of All BGTS Member"}
      ></SectionTitle>
      <div className="text-center text-green-500 mt-5">
        <Search name={'Member'}></Search>
        <h1 className="text-2xl font-bold">Total Member Of BGTS: 40</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-5">
       <MemberCard></MemberCard>
      </div>
    </section>
  );
};

export default Member;
