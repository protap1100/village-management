import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useMember from "../../../Hooks/useMember";
import Loading from "../../../Others/Loading";

const AllMembers = () => {
  const [members, memberLoading, refetch] = useMember();

  if (memberLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <SectionTitle
        heading={"All Members"}
        subHeading={"Here is the information of all your members"}
      />
      <div className="overflow-x-auto p-3">
        <Link
          to="/admin/add-member"
          className="inline-block p-2 bg-green-500 hover:bg-green-600 font-bold text-white rounded mb-5"
        >
          Add Member
        </Link>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">Member ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Father s Name</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">NID/Birth Certificate</th>
              <th className="py-3 px-4">Profession</th>
              <th className="py-3 px-4">Blood Group</th>
              <th className="py-3 px-4">Sex</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Current Address</th>
              <th className="py-3 px-4">Permanent Address</th>
              <th className="py-3 px-4">Education</th>
              <th className="py-3 px-4">Social Media</th>
              <th className="py-3 px-4">Update</th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr
                key={member._id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4">{member.name}</td>
                <td className="py-3 px-4">{member.fatherName}</td>
                <td className="py-3 px-4">{member.age}</td>
                <td className="py-3 px-4">{member.nid}</td>
                <td className="py-3 px-4">{member.profession}</td>
                <td className="py-3 px-4">{member.bloodGroup}</td>
                <td className="py-3 px-4">{member.sex}</td>
                <td className="py-3 px-4">{member.phone}</td>
                <td className="py-3 px-4">{member.currentAddress}</td>
                <td className="py-3 px-4">{member.permanentAddress}</td>
                <td className="py-3 px-4">{member.education}</td>
                <td className="py-3 px-4">
                  <a
                    href={member.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Facebook
                  </a>
                </td>
                <td className="py-3 px-4">
                  <div className="flex justify-center">
                    <FaTrashAlt className="text-red-500 cursor-pointer" />
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex justify-center">
                    <FaEdit className="text-green-500 cursor-pointer ml-2" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMembers;
