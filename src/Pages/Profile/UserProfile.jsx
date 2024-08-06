import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Components/Shared/SectionTitle";
import Post from "../Gallery/Post";
import AllUserPost from "./AllUserPost";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../Others/Loading";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [refetchCount, setRefetchCount] = useState(0);

  const {
    data: posts = [],
    isLoading: postLoading,
    refetch,
  } = useQuery({
    queryKey: ["post", user?.email, refetchCount],
    queryFn: async () => {
      const res = await axiosPublic(`/post/${user?.email}`);
      return res.data;
    },
  });

  const handleRefetch = useCallback(() => {
    setRefetchCount((prev) => prev + 1);
  }, []);

  if (loading || postLoading) {
    return <Loading />;
  }

  return (
    <div>
      <SectionTitle
        heading={`Hi ${user?.displayName}`}
        subHeading={"Welcome To Your Profile"}
      />
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
        <Post refetch={handleRefetch} />
        <AllUserPost posts={posts} refetch={refetch} />
      </div>
    </div>
  );
};

export default UserProfile;
