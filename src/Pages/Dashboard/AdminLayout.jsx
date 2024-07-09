import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="mx-4">
      <AdminHeader />
      <div className="flex gap-5 mt-5">
        <div className="flex-none bg-gray-50">
          <AdminNavbar />
        </div>
        <div className="flex-grow  bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
