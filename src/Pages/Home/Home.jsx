import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";

const Home = () => {
  return (
    <main className="container mx-auto">
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
};

export default Home;
