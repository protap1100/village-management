import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Components/Shared/SectionTitle";
import Post from "../Gallery/Post";
import AllUserPost from "./AllUserPost";
import { Link } from "react-router-dom";
import Loading from "../../Others/Loading";

const UserProfile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <SectionTitle
        heading={`Hi ${user?.displayName}`}
        subHeading={"Welcome To Your Profile"}
      ></SectionTitle>
      <div>
        <div className="text-center mt-3">
          <h1 className="text-orange-600">
            Want to update your Profile Information?{" "}
            <Link
              className="text-blue-500 font-bold hover:text-blue-700"
              to="/update-profile"
            >
              Update here
            </Link>
          </h1>
        </div>
        <Post></Post>
        <AllUserPost></AllUserPost>
      </div>
    </div>
  );
};

export default UserProfile;
