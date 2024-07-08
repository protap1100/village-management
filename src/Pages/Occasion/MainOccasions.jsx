import { Helmet } from "react-helmet-async";
import Search from "../../Components/Shared/Search";
import Occasions from "./Occasions";

const MainOccasions = () => {
  return (
    <div>
      <Helmet>
        <title>BGTS || Occasions</title>
        <link rel="icon" href="festivals.png" type="image/png" />
      </Helmet>
      <Occasions search={<Search name={"Occasions"}></Search>}></Occasions>
    </div>
  );
};

export default MainOccasions;
