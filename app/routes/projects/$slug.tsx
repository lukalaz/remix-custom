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
  invariant(params.slug, `params.slug is required`);

  const project = await getProject(params.slug);
  invariant(project, `Post not found: ${params.slug}`);

  const html = marked(project.markdown);
  return json<LoaderData>({ project, html });
};

export const meta: MetaFunction = ({ data }) => {
  return {
    charset: "utf-8",
    title: data.project.seo_title + " | Luka Lazic l-l tech",
    description: data.project.seo_description,
    viewport: "width=device-width,initial-scale=1",
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
