import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const UserLayout = () => {
    return (
        <div>
            <UserNavbar></UserNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default UserLayout;