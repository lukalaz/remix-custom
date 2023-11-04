import StyledTitle from "~/common/components/StyledTitle";
import { Project } from "@prisma/client";
import { ProjectCard } from "./components/ProjectCard";

interface IProjects {
  projects: Project[];
}

const ProjectPosts: React.FC<IProjects> = ({ projects }) => {
  return (
    <section id="blog" className="pt-[40px]">
      <div className="container">
        <StyledTitle
          title="Projects"
          preTitle="Discover My Creations"
          description="Some of my private, off work projects that I would like to share."
        />
        <div className="justify-center p-0 max-w-[800px] m-auto">
          {projects.map((project: Project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPosts;
