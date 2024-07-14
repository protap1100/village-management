import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useOccasions = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: occasions = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["occasions"],
    queryFn: async () => {
      const res = await axiosPublic("/occasions");
      return res.data;
    },
  });

  return [occasions, loading, refetch];
};

export default useOccasions;
