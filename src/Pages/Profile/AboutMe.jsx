import { useContext } from "react";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import AllPosts from "./AllPosts";
import MakePost from "./MakePost";

const AboutMe = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <SectionTitle
        heading={`Hi ${user?.displayName}`}
        subHeading={"Welcome To Your Profile"}
      ></SectionTitle>
      <div>
        <MakePost></MakePost>
        <AllPosts></AllPosts>
      </div>
    </div>
  );
};

export default AboutMe;
