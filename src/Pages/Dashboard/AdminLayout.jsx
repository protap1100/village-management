import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="mx-4 bg-gray-200">
      <AdminHeader />
      <div className="flex gap-5 p-2 mt-5">
        <div className="flex-none bg-white rounded">
          <AdminNavbar />
        </div>
        <div className="flex-grow bg-white  rounded">
          <h1 className="text-center text-3xl font-bold py-3">Welcome to admin Dashboard</h1>
          <hr />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
