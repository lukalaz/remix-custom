import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import Blog from "~/features/blog/Blog";
import { getPosts, Post } from "~/models/post.server";

type LoaderData = { posts: Post[] };

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  invariant(posts, "No posts found."); //TODO: better error handling

  return json<LoaderData>({ posts });
};

const BlogPosts: React.FC = () => {
  const { posts } = useLoaderData();
  return <Blog posts={posts} />;
};

export default BlogPosts;
