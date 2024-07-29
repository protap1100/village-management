import SectionTitle from "../../Components/Shared/SectionTitle";
import useProjects from "../../Hooks/useProjects";
import Loading from "../../Others/Loading";
import ProjectCard from "./ProjectCard";
import { SiCodeproject } from "react-icons/si";

const Projects = ({ search }) => {
  const [projects, loading] = useProjects();

  if (loading) {
    return <Loading></Loading>;
  }
// console.log(projects)
  return (
    <div>
      <SectionTitle
        icon={<SiCodeproject></SiCodeproject>}
        heading={"Our Projects"}
        subHeading={"Our Village Projects"}
      ></SectionTitle>
      <div className="text-center text-green-500 mt-5">
        {search}
        <h1 className="text-2xl font-bold">Total Project Of BGTS: 40</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
