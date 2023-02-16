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
  invariant(params.postSlug, `params.slug is required`);

  const post = await getPost(params.postSlug);
  invariant(post, `Post not found: ${params.postSlug}`);

  const html = marked(post.markdown);
  return json<LoaderData>({ post, html });
};

import { meta as rootMeta } from "../../root";

export const meta: MetaFunction = ({ data }) => {
  return {
    ...rootMeta,
    title: data.post.seo_title + " | Luka Lazic l-l tech",
    description: data.post.seo_description,
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
