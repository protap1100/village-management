import Search from "../../Components/Shared/Search";
import MainMember from "./MainMember";

const Member = () => {
  return (
    <div>  
      <MainMember search={<Search name={"Member"}></Search>}></MainMember>
    </div>
  );
};

export default Member;
