import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGallery = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: photos = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["photos"],
    queryFn: async () => {
      const res = await axiosPublic("/get-photos");
      return res.data;
    },
  });

  return [photos, loading, refetch];
};

export default useGallery;
