import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <section className="flex justify-between bg-blue-100 items-center p-5">
      <div>
        <h1 className="text-3xl font-bold"> <Link to='/'>BGTS Home</Link></h1>
      </div>
      <div className="text-3xl font-bold">
        <h1>Admin Dashboard</h1>
      </div>
      <div>
        <h1>Admin123</h1>
      </div>
    </section>
  );
};

export default AdminHeader;
