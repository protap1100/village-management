import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useUser = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  // console.log(user?.email);
  const {
    data: users = [],
    isLoading: userLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/logged-user/${user?.email}`);
      // console.log(res.data)
      return res.data;
    },
  });

  return [users, userLoading];
};

export default useUser;
