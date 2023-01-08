import { LoaderFunction } from "@remix-run/node";
import { getPosts } from "~/models/post.server";

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();

  const postList = posts.map(
    (post) => `<url>
  <loc>https://l-l.tech/blog/${post.slug}</loc>
  <lastmod>${post.updatedAt.toISOString()}</lastmod>
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
      ${postList}
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
