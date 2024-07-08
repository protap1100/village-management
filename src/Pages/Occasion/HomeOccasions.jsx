import Button from "../../Components/Shared/Button";
import Search from "../../Components/Shared/Search";
import Occasions from "./Occasions";

const HomeOccasions = () => {
    return (
        <div>
            <Occasions search={<Search name="Occasions"></Search>} ></Occasions>
            <Button route="/occasions" name={"Occasions"}></Button>
        </div>
    );
};

export default HomeOccasions;