import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { PostCard } from "~/features/blog/components/PostCard";
import { getPosts, Post } from "~/models/post.server";

type LoaderData = { posts: Post[] };

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  invariant(posts, "No posts found."); //TODO: better error handling

  return json<LoaderData>({ posts });
};

const BlogPosts: React.FC = () => {
  //TODO: move this component to blog/Blog.tsx
  const { posts } = useLoaderData();
  console.log(posts, "post");

  return (
    <div className="container flex flex-wrap justify-center">
      {posts.map((post: Post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </div>
  );
};

export default BlogPosts;
