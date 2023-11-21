import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import Blog from "~/features/blog/Blog";
import { getPosts, Post } from "~/models/post.server";

type LoaderData = { posts: Post[]; ogImageUrl: string };

import { meta as rootMeta } from "../../root";

export const meta: MetaFunction = ({ data }) => ({
  ...rootMeta,
  title: "Blog | Luka Lazic",
  description:
    "My personal blog where I write about web development. I like to use React, C#, Tailwind, Prisma and more!",
  "og:title": "Blog | Luka Lazic",
  "og:description":
    "My personal blog where I write about web development. I like to use React, C#, Tailwind, Prisma and more!",
  "twitter:title": "Blog | Luka Lazic",
  "twitter:description":
    "My personal blog where I write about web development. I like to use React, C#, Tailwind, Prisma and more!",
  "og:url": "https://lukalazic.com/blog",
  "og:type": "blog",
  "og:image": data.ogImageUrl,
});

export const loader: LoaderFunction = async ({ request }) => {
  const posts = await getPosts();
  const { origin } = new URL(request.url);
  invariant(posts, "No posts found."); //TODO: better error handling
  const ogImageUrl = `${origin}/resource/ogimage?ogimage=Luka Lazić Blog`;

  return json<LoaderData>({ posts, ogImageUrl });
};

const BlogPosts: React.FC = () => {
  const { posts } = useLoaderData();
  return <Blog posts={posts} />;
};

export default BlogPosts;
