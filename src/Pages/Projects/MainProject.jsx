import Search from "../../Components/Shared/Search";
import Projects from "./Projects";

const MainProject = () => {
  return (
    <div>
      <Projects search={<Search name={"Projects"}></Search>}></Projects>
    </div>
  );
};

export default MainProject;
