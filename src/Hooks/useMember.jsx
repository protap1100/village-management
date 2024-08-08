import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMember = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: members = [],
    isLoading: memberLoading,
    refetch,
  } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      const res = await axiosPublic("/member");
      return res.data;
    },
  });

  return [members, memberLoading, refetch];
};

export default useMember;
