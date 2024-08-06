import { useContext } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../Others/Loading";
import { useQuery } from "@tanstack/react-query";
import UserPostCard from "./UserPostCard";

const AllUserPost = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    data: posts = [],
    isLoading: postLoading,
    refetch
  } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axiosPublic(`/post/${user?.email}`);
      return res.data;
    },
  });

  if (postLoading && loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div>
        <h1 className="text-2xl text-orange-500 text-center my-10">All Post By You</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {posts.map((post, index) => 
          <UserPostCard key={index} post={post} refetch={refetch}></UserPostCard>
        )}
      </div>
    </>
  );
};

export default AllUserPost;
