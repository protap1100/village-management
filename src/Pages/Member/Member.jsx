import { Helmet } from "react-helmet-async";
import Search from "../../Components/Shared/Search";
import MainMember from "./MainMember";

const Member = () => {
  return (
    <div>  
       <Helmet>
        <title>BGTS || Member</title>
        <link rel="icon" href="group.png" type="image/png" />
      </Helmet>
      <MainMember search={<Search name={"Member"}></Search>}></MainMember>
    </div>
  );
};

export default Member;
