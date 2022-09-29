import { Post } from "@prisma/client";
import { prisma } from "prisma/db.server";

export type { Post } from "@prisma/client";

export async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
} // TODO: ovde mozemo da uvezemo react query i da gadjamo nase endpointe, verovatno ce moci da se izbaci brda stvari, npr cela prizma

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown" | "excerpt">
) {
  return prisma.post.create({ data: post });
}
