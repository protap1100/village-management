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
        <div className="mb-5">
          <label className="mb-3 text-2xl block font-medium text-green-700">
           Search For Member
          </label>
         <div className="flex gap-4 flex-col lg:flex-row justify-center">
         <input
            type="text"
            name="name"
            id="name"
            placeholder="Search For Member"
            className="lg:w-1/6 w-full  rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280]  focus:border-[#6A64F1]"
          />
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-bold">Search</button>
         </div>
        </div>
        <h1 className="text-2xl font-bold">Total Member Of BGTS: 40</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-5">
       <MemberCard></MemberCard>
      </div>
    </section>
  );
};

export default Member;
