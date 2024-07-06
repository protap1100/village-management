import Banner from "./Banner";
import VillageGallery from "./VillageGallery";
import Weather from "./Weather";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Weather></Weather>
      <VillageGallery></VillageGallery>
    </div>
  );
};

export default Home;
