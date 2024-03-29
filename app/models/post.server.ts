import { Post } from "@prisma/client";
import { prisma } from "prisma/db.server";

export type { Post } from "@prisma/client";

export async function getPosts() {
  const posts = await prisma.post.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
  return posts;
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<
    Post,
    "slug" | "title" | "markdown" | "excerpt" | "seo_title" | "seo_description"
  >
) {
  return prisma.post.create({ data: post });
}

export async function updatePost(
  post: Pick<
    Post,
    "slug" | "title" | "markdown" | "excerpt" | "seo_title" | "seo_description"
  >
) {
  return prisma.post.update({
    where: { slug: post.slug },
    data: post,
  });
}

export async function deletePost(slug: string) {
  return prisma.post.delete({ where: { slug } });
}

export async function findPost(postSlug: string) {
  return prisma.post.findFirst({ where: { slug: postSlug } });
}
