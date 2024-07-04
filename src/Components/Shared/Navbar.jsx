import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full h-16 mx-auto container bg-white shadow-md z-50 px-5">
      <div className="flex justify-between py-5">
        <div>Logo</div>
        <nav className="">
          <ul className="flex gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/member">Member</Link>
            </li>
            <li>
              <Link to="/occasions">Occasions</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/aboutUs">About</Link>
            </li>
          </ul>
        </nav>
        <div>User</div>
      </div>
    </div>
  );
};

export default Navbar;
