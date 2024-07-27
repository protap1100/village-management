import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePost = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: posts = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axiosPublic("/post");
      return res.data;
    },
  });

  return [posts, loading, refetch];
};

export default usePost;
