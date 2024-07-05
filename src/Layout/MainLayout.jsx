import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";


const MainLayout = () => {
  return (
    <div>
      <main className="container mx-auto">
        <div className="h-16">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
