import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const UserLayout = () => {
    return (
        <div className="flex">
            <UserNavbar></UserNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default UserLayout;