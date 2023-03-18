import { marked } from "marked";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Project } from "~/models/project.server";
import { getProject } from "~/models/project.server";
import { SingleProject } from "~/features/projects/components/SingleProject";

type LoaderData = { project: Project; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.projectSlug, `params.projectSlug is required`);

  const project = await getProject(params.projectSlug);
  invariant(project, `Project not found: ${params.projectSlug}`);

  const html = marked(project.markdown);
  return json<LoaderData>({ project, html });
};

import { meta as rootMeta } from "../../root";

export const meta: MetaFunction = ({ data }) => {
  return {
    ...rootMeta,
    title: data.project.seo_title + " | Luka Lazic Blog",
    description: data.project.seo_description,
  };
};

export default function ProjectSlug() {
  const { project, html } = useLoaderData();
  return (
    <main className="mx-auto max-w-4xl">
      <SingleProject project={project} markdown={html} />
    </main>
  );
}
