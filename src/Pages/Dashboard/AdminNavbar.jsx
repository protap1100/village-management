import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return (
        <div>
            <ul className="px-4">
                <li className="p-2 mt-2 bg-green-500 text-white rounded flex hover:bg-green-700">
                    <Link to='admin-home' >Dashboard</Link>
                </li>
                <li className="p-2 mt-2 bg-green-500 text-white rounded flex hover:bg-green-700">
                    <Link to='admin-user' >All Users</Link>
                </li>
                <li className="p-2 mt-2 bg-green-500 text-white rounded flex hover:bg-green-700">
                    <Link to='all-members' >All Members</Link>
                </li>
                <li className="p-2 mt-2 bg-green-500 text-white rounded flex hover:bg-green-700">
                    <Link to='all-occasions' >All Occasions</Link>
                </li>
                <li className="p-2 mt-2 bg-green-500 text-white rounded flex hover:bg-green-700">
                    <Link to='all-projects' >All Projects</Link>
                </li>
                <li className="p-2 mt-2 bg-green-500 text-white rounded flex hover:bg-green-700">
                    <Link to='all-posts' >All Posts</Link>
                </li>
                <li className="p-2 mt-2 bg-green-500 text-white rounded flex hover:bg-green-700">
                    <Link to='/' >Main Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminNavbar;