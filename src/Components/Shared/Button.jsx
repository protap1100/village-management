import { Link } from "react-router-dom";

const Button = ({name,route}) => {
  return (
    <div className="text-center">
      <button className="p-2 font-bold text-white bg-green-500 hover:bg-green-600 rounded">
        <Link to={route}>See All {name}</Link>
      </button>
    </div>
  );
};

export default Button;
