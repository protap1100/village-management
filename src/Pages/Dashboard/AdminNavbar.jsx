import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='admin-home' >Home</Link>
                </li>
                <li>
                    <Link to='admin-user' >All Users</Link>
                </li>
                <li>
                    <Link to='all-members' >All Members</Link>
                </li>
                <li>
                    <Link to='all-occasions' >All Occasions</Link>
                </li>
                <li>
                    <Link to='all-projects' >All Projects</Link>
                </li>
                <li>
                    <Link to='all-posts' >All Posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminNavbar;