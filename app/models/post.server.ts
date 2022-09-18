import { prisma } from "prisma/db.server";

type Post = {
  slug: string;
  title: string;
};

export async function getPosts() {
  return prisma.post.findMany();
}
