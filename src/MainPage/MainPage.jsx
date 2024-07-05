import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";

const MainPage = () => {
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

export default MainPage;
