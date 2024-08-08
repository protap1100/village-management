import Button from "../../Components/Shared/Button";
import MainMember from "./MainMember";

const HomeMember = () => {
  return (
    <div>
      <MainMember></MainMember>
      <Button route="/member" name={"Members"}></Button>
    </div>
  );
};

export default HomeMember;
