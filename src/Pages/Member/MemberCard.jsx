import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const MemberCard = ({ member }) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <img src={member.imageUrl} alt={member.name} />
      </div>
      <div className="p-2 text-center">
        <h4 className="block mb-2 font-sans text-2xl font-semibold text-blue-gray-900">
          {member.name}
        </h4>
        <p className="block font-sans text-base bg-clip-text">{member.role}</p>
        <p className="block font-sans text-sm bg-clip-text mt-2">
          {member.bio}
        </p>
        <p className="block font-sans text-sm bg-clip-text mt-1 text-green-500">
          {member.contact}
        </p>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-7">
        <a
          href={member.facebook}
          className="block font-sans text-xl antialiased"
        >
          <FaFacebook />
        </a>
        <a
          href={member.twitter}
          className="block font-sans text-xl antialiased"
        >
          <FaTwitter />
        </a>
        <a
          href={member.instagram}
          className="block font-sans text-xl antialiased"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="mx-4 mt-4 lg:mx-0 lg:mt-0">
        <h1 className="text-center p-2 bg-green-600 hover:bg-green-400 text-white cursor-pointer">
          View Details
        </h1>
      </div>
    </div>
  );
};

export default MemberCard;
