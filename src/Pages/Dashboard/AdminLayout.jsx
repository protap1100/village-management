import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
    return (
        <div className="flex">
            <AdminNavbar></AdminNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;