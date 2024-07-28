import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../Others/Loading";

const PostDetails = () => {
  const {id} = useParams();
  console.log(id)
  const axiosPublic = useAxiosPublic();
  const { data: post = {}, isloading: loading } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/post-details/${id}`);
      return res.data;
    },
  });
  console.log(post)

  if (loading) {
    return <Loading></Loading>;
  }

  return <div></div>;
};

export default PostDetails;
