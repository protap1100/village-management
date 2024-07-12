import Button from "../../Components/Shared/Button";
import Projects from "./Projects";

const HomeProject = () => {
  return (
    <div>
      <Projects></Projects>
      <Button route="/projects" name={"Projects"}></Button>
    </div>
  );
};

export default HomeProject;
