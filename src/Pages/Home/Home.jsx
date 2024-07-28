import { Helmet } from "react-helmet-async";
import HomeMember from "../Member/HomeMember";
import HomeOccasions from "../Occasion/HomeOccasions";
import HomeProject from "../Projects/HomeProject";
import Banner from "./Banner";
import VillageGallery from "./VillageGallery";
import Weather from "./Weather";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BGTS || Home</title>
        <link rel="icon" href="house.png" type="image/png" />
      </Helmet>
      <Banner></Banner>
      <Weather></Weather>
      <Gallery></Gallery>
      <VillageGallery></VillageGallery>
      <HomeMember></HomeMember>
      <HomeOccasions></HomeOccasions>
      <HomeProject></HomeProject>
    </div>
  );
};

export default Home;
