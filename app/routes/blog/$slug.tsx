import { marked } from "marked";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Post } from "~/models/post.server";
import { getPost } from "~/models/post.server";
import { SinglePost } from "../../features/blog/components/SinglePost";

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json<LoaderData>({ post, html });
};

export const meta: MetaFunction = ({ data }) => {
  return {
    charset: "utf-8",
    title: data.post.seo_title + " | Luka Lazic l-l tech",
    description: data.post.seo_description,
    viewport: "width=device-width,initial-scale=1",
  };
};

export default function PostSlug() {
  const { post, html } = useLoaderData();
  return (
    <main className="mx-auto max-w-4xl">
      <SinglePost post={post} markdown={html} />
    </main>
  );
}
