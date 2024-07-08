import Button from "../../Components/Shared/Button";
import Search from "../../Components/Shared/Search";
import MainMember from "./MainMember";

const HomeMember = () => {
    return (
        <div>  
        <MainMember search={<Search name={"Member"}></Search>} ></MainMember>
        <Button route="/member" name={"Members"}></Button>
      </div>
    );
};

export default HomeMember;