import Button from "../../Components/Shared/Button";
import Search from "../../Components/Shared/Search";
import Occasions from "./Occasions";

const HomeOccasions = () => {
    return (
        <div>
            <Occasions search={<Search name="Occasions"></Search>} ></Occasions>
           <div className="mt-5">
           <Button route="/occasions" name={"Occasions"}></Button>
           </div>
        </div>
    );
};

export default HomeOccasions;