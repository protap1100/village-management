import Button from "../../Components/Shared/Button";
import Search from "../../Components/Shared/Search";
import Projects from "./Projects";

const HomeProject = () => {
    return (
        <div>
            <Projects search={<Search name={"Project"}></Search>} ></Projects>
            <Button route="/projects" name={"Projects"}></Button>
        </div>
    );
};

export default HomeProject;