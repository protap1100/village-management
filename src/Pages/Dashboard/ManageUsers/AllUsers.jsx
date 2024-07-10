import SectionTitle from "../../../Components/Shared/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const AllUsers = () => {
    const users = [
        { id: '1', username: 'john_doe', email: 'john@example.com', role: 'Admin', regDate: '2023-01-15' },
        { id: '2', username: 'jane_doe', email: 'jane@example.com', role: 'User', regDate: '2023-02-20' },
        { id: '3', username: 'sam_smith', email: 'sam@example.com', role: 'Moderator', regDate: '2023-03-10' },
        { id: '4', username: 'alice_jones', email: 'alice@example.com', role: 'User', regDate: '2023-04-05' },
    ];

    return (
        <div>
            <SectionTitle heading={"All Users"} subHeading={"Here is the information of all your users"} />
            <div className="overflow-x-auto px-3 mt-5">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-4">User ID</th>
                            <th className="py-3 px-4">Username</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Role</th>
                            <th className="py-3 px-4">Registration Date</th>
                            <th className="py-3 px-4">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="hover:bg-gray-100 transition-colors duration-200">
                                <td className="py-3 px-4 border-b text-center">{user.id}</td>
                                <td className="py-3 px-4 border-b text-center">{user.username}</td>
                                <td className="py-3 px-4 border-b text-center">{user.email}</td>
                                <td className="py-3 px-4 border-b text-center">{user.role}</td>
                                <td className="py-3 px-4 border-b text-center">{new Date(user.regDate).toLocaleDateString()}</td>
                                <td className="py-3 px-4 border-b text-center">
                                    <div className="flex justify-center">
                                        <FaTrashAlt className="text-red-500 cursor-pointer" />
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

export default AllUsers;
