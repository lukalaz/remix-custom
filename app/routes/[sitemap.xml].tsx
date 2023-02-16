import { LoaderFunction } from "@remix-run/node";
import { getPosts } from "~/models/post.server";
import { getProjects } from "~/models/project.server";

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  const projects = await getProjects();

  const postList = posts.map(
    (post) => `<url>
  <loc>https://l-l.tech/blog/${post.slug}</loc>
  <lastmod>${post.updatedAt.toISOString()}</lastmod>
  </url>`
  );

  const projectList = projects.map(
    (project) => `<url>
    <loc>https://l-l.tech/projects/${project.slug}</loc>
    <lastmod>${project.updatedAt.toISOString()}</lastmod>
    </url>`
  );

  const lastModifiedDate = posts[posts.length - 1]?.updatedAt.toISOString();

  const content = ` 
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>https://l-l.tech/</loc>
      <lastmod>2022-11-12T16:43:34.833Z</lastmod>
      </url>
      <url>
      <loc>https://l-l.tech/blog</loc>
      <lastmod>${lastModifiedDate}</lastmod>
      </url>
      ${postList.join("")}
      ${projectList.join("")}
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
