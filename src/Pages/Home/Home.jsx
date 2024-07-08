import Member from "../Member/Member";
import Occasions from "../Occasion/Occasions";
import Projects from "../Projects/Projects";
import Banner from "./Banner";
import VillageGallery from "./VillageGallery";
import Weather from "./Weather";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Weather></Weather>
      <VillageGallery></VillageGallery>
      <Member></Member>
      <Occasions></Occasions>
      <Projects></Projects>
    </div>
  );
};

export default Home;
