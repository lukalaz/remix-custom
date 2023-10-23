import type { LoaderFunction } from "@remix-run/node";
import { getPosts } from "~/models/post.server";
import { getProjects } from "~/models/project.server";

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  const projects = await getProjects();

  const postList = posts.map(
    (post) => `<url>
  <loc>https://lukalazic.com/blog/${post.slug}</loc>
  <lastmod>${post.updatedAt.toISOString()}</lastmod>
  </url>`
  );

  const projectList = projects.map(
    (project) => `<url>
    <loc>https://lukalazic.com/projects/${project.slug}</loc>
    <lastmod>${project.updatedAt.toISOString()}</lastmod>
    </url>`
  );

  const lastModifiedBlogDate = posts[posts.length - 1]?.updatedAt.toISOString();
  const lastModifiedProjectDate =
    posts[projects.length - 1]?.updatedAt.toISOString();

  const content = ` 
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>https://lukalazic.com/</loc>
      <lastmod>2022-11-12T16:43:34.833Z</lastmod>
      </url>
      <url>
      <loc>https://lukalazic.com/blog</loc>
      <lastmod>${lastModifiedBlogDate}</lastmod>
      </url>
      ${postList.join("")}
      <url>
      <loc>https://lukalazic.com/projects</loc>
      <lastmod>${lastModifiedProjectDate}</lastmod>
      </url>
      ${projectList.join("")}
      <url>
      <loc>https://lukalazic.com/cv</loc>
      <lastmod>2023-10-23T16:43:34.833Z</lastmod>
      </url>
      </urlset>
      `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
