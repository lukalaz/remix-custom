import { marked } from "marked";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { meta as rootMeta } from "../../root";
import type { Post } from "~/models/post.server";
import { getPost } from "~/models/post.server";
import { SinglePost } from "../../features/blog/components/SinglePost";

type LoaderData = {
  post: Post;
  html: string;
  canonical: string;
  ogImageUrl: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  invariant(params.postSlug, `params.slug is required`);

  const post = await getPost(params.postSlug);
  invariant(post, `Post not found: ${params.postSlug}`);

  const { origin } = new URL(request.url);
  const ogImageUrl = `${origin}/resource/ogimage?ogimage=${post.title}&ogdate=${post.createdAt}`;

  const canonical = `https://lukalazic.com/blog/${post.slug}`;

  const html = marked(post.markdown);
  return json<LoaderData>({ post, html, canonical, ogImageUrl });
};

export const meta: MetaFunction = ({ data }) => {
  return {
    ...rootMeta,
    title: data.post.seo_title + " | Luka Lazic Blog",
    description: data.post.seo_description,
    "og:title": data.post.seo_title,
    "og:description": data.post.seo_description,
    "twitter:title": data.post.seo_title,
    "twitter:description": data.post.seo_description,
    "og:url": data.canonical,
    "og:type": "article",
    "og:image": data.ogImageUrl,
    "twitter:image": data.ogImageUrl,
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
