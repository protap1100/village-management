import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";

const MainPage = () => {
  return (
    <div>
      <main className="container mx-auto">
        <div className="h-16">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default MainPage;
