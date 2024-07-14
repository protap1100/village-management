import SectionTitle from "../../Components/Shared/SectionTitle";
import useOccasions from "../../Hooks/useOccasions";
import Loading from "../../Others/Loading";
import OccasionCard from "./OccasionCard";
import { MdOutlineFestival } from "react-icons/md";

const Occasions = ({ search }) => {
  const [occasions, loading, ,] = useOccasions();

  if (loading) {
    return <Loading></Loading>;
  }

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
        {occasions.map((festival, index) => (
          <OccasionCard key={index} festival={festival}></OccasionCard>
        ))}
      </div>
    </section>
  );
};

export default Occasions;
