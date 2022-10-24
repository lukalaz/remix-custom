import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const posts = [
    {
      slug: "my-first-post",
      title: "My First Post",
      markdown: `
  # This is my first post
  
  Isn't it great?
      `.trim(),
      excerpt: "This is the excerpt of the first seeded post.",
      seo_title: "My first Post",
      seo_description: "This is the seo description of the first seeded post.",
    },
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
