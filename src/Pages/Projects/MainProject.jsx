import { Helmet } from "react-helmet-async";
import Search from "../../Components/Shared/Search";
import Projects from "./Projects";

const MainProject = () => {
  return (
    <div>
        <Helmet>
        <title>BGTS || Project</title>
        <link rel="icon" href="project.png" type="image/png" />
      </Helmet>
      <Projects search={<Search name={"Projects"}></Search>}></Projects>
    </div>
  );
};

export default MainProject;
