import { Link } from "react-router-dom";

const UserNavbar = () => {
    return (
        <div>
            <ul className="flex gap-5">
                <li> <Link to='user/user-Home' >Home</Link> </li>
                <li> <Link to='user/user-posts' >My Posts</Link> </li>
                <li> <Link to='user/monthly-fees' >Monthly Fees</Link> </li>
                <li> <Link to='/'>Home</Link></li>
            </ul>
        </div>
    );
};

export default UserNavbar;