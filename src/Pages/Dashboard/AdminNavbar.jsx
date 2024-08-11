import { NavLink, useLocation } from "react-router-dom";
import contact from "/contact.png";
import festival from "/festivals.png";
import group from "/group.png";
import project from "/project.png";
import dashboard from "/dashboard.png";
import users from "/team.png";
import posts from "/posts.png";

const navItems = [
  { name: "Dashboard", icon: dashboard, path: "admin-home" },
  { name: "Manage Users", icon: users, path: "admin-user" },
  { name: "Manage Members", icon: group, path: "all-members" },
  { name: "Manage Occasions", icon: festival, path: "all-occasions" },
  { name: "Manage Projects", icon: project, path: "all-projects" },
  { name: "Manage Gallery", icon: project, path: "all-gallery" },
  { name: "Manage Posts", icon: posts, path: "all-posts" },
  { name: "FeedBack", icon: contact, path: "feedback" },
];

const AdminNavbar = () => {
  const location = useLocation();

  return (
    <div className="my-2">
      <ul className="px-4">
        {navItems.map((item, index) => {
          const isActive = location.pathname.includes(item.path);
          return (
            <li
              key={index}
              className={`p-2 mt-2 rounded flex items-center font-bold gap-2 ${
                isActive ? "bg-green-800" : "bg-green-500 hover:bg-green-700"
              } text-white`}
            >
              <img className="w-5 h-5" src={item.icon} alt={item.name} />
              <NavLink to={item.path}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminNavbar;
