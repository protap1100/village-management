import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Others/Loading";

const MemberDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: member = {}, isLoading } = useQuery({
    queryKey: ["member", id],
    queryFn: async () => {
      const res = await axiosPublic(`/members-details/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const {
    name,
    fatherName,
    age,
    nid,
    profession,
    bloodGroup,
    sex,
    phone,
    currentAddress,
    permanentAddress,
    education,
    social,
    image,
    paymentStatus,
  } = member;

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-10 shadow-2xl transform">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-56 h-56 rounded-full border-4 border-white shadow-lg transform hover:rotate-6 transition-transform duration-500"
        />
        <div className="text-white space-y-3">
          <h2 className="text-5xl font-extrabold mb-6">{name}</h2>
          <p className="text-lg">
            <span className="font-semibold">Father s Name: </span>
            {fatherName}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Age: </span>
            {age} years
          </p>
          <p className="text-lg">
            <span className="font-semibold">NID/Birth Certificate: </span>
            {nid}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Profession: </span>
            {profession}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Blood Group: </span>
            {bloodGroup}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Sex: </span>
            {sex}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Phone: </span>
            {phone}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Current Address: </span>
            {currentAddress}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Permanent Address: </span>
            {permanentAddress}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Education: </span>
            {education}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Social Media: </span>
            <a
              href={social}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-300 transition-colors duration-300"
            >
              {social}
            </a>
          </p>
        </div>
      </div>

      <div className="mt-10 text-white">
        <h3 className="text-3xl font-extrabold mb-5">Payment Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {
            paymentStatus.map((payment)=><div
            key={payment.month}
            className={`p-5 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform duration-300 ${
              payment.status === "Paid" ? "bg-green-600" : "bg-red-500"
            }`}
          ><h1>{payment.month}</h1><h1>{payment.status}</h1> </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
