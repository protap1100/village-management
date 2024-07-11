import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="mx-4 bg-gray-200">
      <AdminHeader />
      <div className="flex flex-col lg:flex-row lg:gap-5 p-2 mt-5">
        <div className="lg:w-2/12 bg-white rounded mb-4 lg:mb-0 lg:mr-4">
          <AdminNavbar />
        </div>
        <div className="lg:w-10/12 bg-white rounded">
          <h1 className="text-center text-3xl font-bold py-3">Welcome to admin Dashboard</h1>
          <hr className="mb-3" />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
