import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProjects = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: projects = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = await axiosPublic("/projects");
      return res.data;
    },
  });

  return [projects, loading, refetch];
};

export default useProjects;
