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
  { name: "All Users", icon: users, path: "admin-user" },
  { name: "All Members", icon: group, path: "all-members" },
  { name: "All Occasions", icon: festival, path: "all-occasions" },
  { name: "All Projects", icon: project, path: "all-projects" },
  { name: "All Posts", icon: posts, path: "all-posts" },
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
