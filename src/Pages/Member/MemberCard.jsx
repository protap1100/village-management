import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const MemberCard = () => {
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-2 text-center">
            <h4 className="block mb-2 font-sans text-2xl  font-semibold  text-blue-gray-900">
              Natalie Paisley
            </h4>
            <p className="block font-sans text-base  bg-clip-text ">
              CEO / Co-Founder
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a href="#facebook" className="block font-sans text-xl antialiased">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#twitter" className="block font-sans text-xl antialiased">
              <FaTwitter></FaTwitter>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased"
            >
              <FaInstagram></FaInstagram>
            </a>
          </div>
          <div className=" mx-4 mt-4 lg:mx-0 lg:mt-0">
            <h1 className="text-center p-2 bg-green-600 hover:bg-green-400 text-white ">
              View Details
            </h1>
          </div>
        </div>
    );
};

export default MemberCard;