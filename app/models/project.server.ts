import { Project } from "@prisma/client";
import { prisma } from "prisma/db.server";

export type { Project } from "@prisma/client";

export async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
  return projects;
}

export async function getProject(slug: string) {
  return prisma.project.findUnique({ where: { slug } });
}

export async function createProject(
  project: Pick<
    Project,
    | "slug"
    | "title"
    | "markdown"
    | "excerpt"
    | "seo_title"
    | "seo_description"
    | "technologies"
  >
) {
  return prisma.project.create({ data: project });
}

export async function updateProject(
  project: Pick<
    Project,
    | "slug"
    | "title"
    | "markdown"
    | "excerpt"
    | "seo_title"
    | "seo_description"
    | "technologies"
  >
) {
  return prisma.project.update({
    where: { slug: project.slug },
    data: project,
  });
}

export async function deleteProject(slug: string) {
  return prisma.project.delete({ where: { slug } });
}

export async function findProject(projectSlug: string) {
  return prisma.project.findFirst({ where: { slug: projectSlug } });
}
