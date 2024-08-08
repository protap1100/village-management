import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Others/Loading";

const MemberDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: members = {}, isLoading: membersLoading } = useQuery({
    queryKey: ["member", id],
    queryFn: async () => {
      const res = await axiosPublic(`/members/${id}`);
      return res.data;
    },
  });

  if (membersLoading) {
    return <Loading />;
  }

  return <div>Member Details</div>;
};

export default MemberDetails;
