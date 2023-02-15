import { Project } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import ProjectPosts from "~/features/projects/Projects";
import { getProjects } from "~/models/project.server";

type LoaderData = { projects: Project[] };

export const loader: LoaderFunction = async () => {
  const projects = await getProjects();
  invariant(projects, "No projects found."); //TODO: better error handling

  return json<LoaderData>({ projects });
};

const Projects: React.FC = () => {
  const { projects } = useLoaderData();
  return <ProjectPosts projects={projects} />;
};

export default Projects;
