import { Link } from "react-router-dom";

const Navbar = () => {

  const routes = [
    {
      name : 'Home',
      route : '/'
    },
    {
      name : 'Member',
      route : '/member'
    },
    {
      name : 'Occasions',
      route : '/occasions'
    },
    {
      name : 'Projects',
      route : '/projects'
    },
    {
      name : 'About',
      route : '/aboutUs'
    }
  ]


  return (
    <div className="fixed w-full h-16 mx-auto container bg-white shadow-md z-50 px-5">
      <div className="flex justify-between py-5">
        <div>Logo</div>
        <nav className="">
          <ul className="flex gap-10">
            {
              routes.map((route,index)=>
                <li key={index} >
                  <Link to={route.route}>{route.name}</Link>
                </li>
              )
            }
          </ul>
        </nav>
        <div>User</div>
      </div>
    </div>
  );
};

export default Navbar;
