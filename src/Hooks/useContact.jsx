import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useContact = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: feedback = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => {
      const res = await axiosPublic("/feedback");
      return res.data;
    },
  });

  return [feedback, loading, refetch];
};

export default useContact;
