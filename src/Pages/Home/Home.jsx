import HomeMember from "../Member/HomeMember";
import HomeOccasions from "../Occasion/HomeOccasions";
import HomeProject from "../Projects/HomeProject";
import Banner from "./Banner";
import VillageGallery from "./VillageGallery";
import Weather from "./Weather";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Weather></Weather>
      <VillageGallery></VillageGallery>
      <HomeMember></HomeMember>
      <HomeOccasions></HomeOccasions>
      <HomeProject></HomeProject>
    </div>
  );
};

export default Home;
