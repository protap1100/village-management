import Search from "../../Components/Shared/Search";
import Occasions from "./Occasions";

const MainOccasions = () => {
  return (
    <div>
      <Occasions search={<Search name={"Occasions"}></Search>}></Occasions>
    </div>
  );
};

export default MainOccasions;
