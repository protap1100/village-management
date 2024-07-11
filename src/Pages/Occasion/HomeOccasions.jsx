import Button from "../../Components/Shared/Button";
import Occasions from "./Occasions";

const HomeOccasions = () => {
  return (
    <div>
      <Occasions></Occasions>
      <div className="mt-5">
        <Button route="/occasions" name={"Occasions"}></Button>
      </div>
    </div>
  );
};

export default HomeOccasions;
