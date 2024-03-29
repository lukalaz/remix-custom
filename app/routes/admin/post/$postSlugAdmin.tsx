import {
  createPost,
  deletePost,
  getPost,
  Post,
  updatePost,
} from "~/models/post.server";
import invariant from "tiny-invariant";
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { useActionData, useLoaderData, useTransition } from "@remix-run/react";
import StyledTitle from "~/common/components/StyledTitle";
import { motion } from "framer-motion";
import {
  animationDelay,
  snapFromTopAnimation,
} from "~/common/utils/AnimationVariants";
import { authHeaders, isAuthorized } from "~/common/utils/IsAuthorized";
import { UnauthorizedMessage } from "~/common/components/UnauthorizedMessage";

type ActionData =
  | {
      title: null | string;
      slug: null | string;
      markdown: null | string;
      excerpt: null | string;
      seo_title: null | string;
      seo_description: null | string;
    }
  | undefined;

type LoaderData = { post: Post; authorized: boolean };

export const loader: LoaderFunction = async ({ params, request }) => {
  if (!isAuthorized(request)) {
    return json({ authorized: false }, { status: 401 });
  }

  invariant(params.postSlugAdmin, `params.postSlugAdmin is required`);

  if (params.postSlugAdmin == "new") {
    return json<LoaderData>({
      post: {} as any,
      authorized: true,
    });
  }
  const post = await getPost(params.postSlugAdmin);
  invariant(post, `Post not found: ${params.postSlugAdmin}`);

  return json<LoaderData>({ post, authorized: true });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const excerpt = formData.get("excerpt");
  const seo_title = formData.get("seo_title");
  const seo_description = formData.get("seo_description");
  const intent = formData.get("intent");
  const postExists = formData.get("postExists") || 0;

  if (intent === "delete" && slug) {
    deletePost(slug.toString());
    return redirect("/blog");
  }

  const errors: ActionData = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
    excerpt: excerpt ? null : "Please provide a short description of the post",
    seo_title: seo_title ? null : "Meta title is required",
    seo_description: seo_description ? null : "Meta description is required",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>(errors);
  }

  invariant(typeof title === "string", "title must be a string");
  invariant(typeof slug === "string", "slug must be a string");
  invariant(typeof markdown === "string", "markdown must be a string");
  invariant(typeof excerpt === "string", "excerpt must be a string");
  invariant(typeof seo_title === "string", "SEO title must be a string");
  invariant(
    typeof seo_description === "string",
    "SEO description must be a string"
  );

  await (+postExists ? updatePost : createPost)({
    title,
    slug,
    markdown,
    excerpt,
    seo_title,
    seo_description,
  });

  return redirect("/blog");
};

const addEditPost = () => {
  const transition = useTransition();
  const isCreating = Boolean(transition.submission);
  const errors = useActionData();
  const { post, authorized } = useLoaderData();

  if (!authorized) {
    return <UnauthorizedMessage />;
  }

  const postExists = !!post.slug;

  const submitButtonText = postExists ? "Update Post" : "Add Post";
  const pageTitle = postExists ? post.title : "Add a new post";

  return (
    <section id="add-post">
      <div className="container pt-12">
        <StyledTitle
          title={pageTitle}
          preTitle="Be Eloquent"
          description="All data is required and checked"
        />
        <motion.form
          method="post"
          {...snapFromTopAnimation}
          transition={{ delay: animationDelay[3] }}
        >
          <input type="hidden" name="postExists" value={+postExists} />
          <h3 className="text-xl font-bold mb-2 text-white">Post data</h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-6">
                {errors?.title ? (
                  <em className="text-red-600">{errors.title}</em>
                ) : null}
                <input
                  type="text"
                  placeholder="Post Title"
                  className="input-field"
                  name="title"
                  defaultValue={post.title}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                {errors?.slug ? (
                  <em className="text-red-600">{errors.slug}</em>
                ) : null}
                <input
                  type="text"
                  placeholder="Post Slug"
                  className="input-field"
                  name="slug"
                  defaultValue={post.slug}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                {errors?.markdown ? (
                  <em className="text-red-600">{errors.markdown}</em>
                ) : null}
                <textarea
                  rows={4}
                  placeholder="Post content (written in markdown)"
                  className="input-field resize-none"
                  name="markdown"
                  defaultValue={post.markdown}
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                {errors?.excerpt ? (
                  <em className="text-red-600">{errors.excerpt}</em>
                ) : null}
                <textarea
                  rows={4}
                  placeholder="Post excerpt (a short version of the content shown on blog archive pages, written in plain text)"
                  className="input-field resize-none"
                  name="excerpt"
                  defaultValue={post.excerpt}
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <h3 className="text-xl font-bold mb-2 text-white">SEO data</h3>
              <div className="mb-6">
                {errors?.seo_title ? (
                  <em className="text-red-600">{errors.seo_title}</em>
                ) : null}
                <input
                  type="text"
                  placeholder="Meta Title"
                  className="input-field"
                  name="seo_title"
                  defaultValue={post.seo_title}
                />
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-6">
                {errors?.seo_description ? (
                  <em className="text-red-600">{errors.seo_description}</em>
                ) : null}
                <input
                  type="text"
                  placeholder="Meta Description"
                  className="input-field"
                  name="seo_description"
                  defaultValue={post.seo_description}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isCreating}
                  className="mr-2 inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:hover:bg-opacity-90"
                >
                  {isCreating ? "Working..." : submitButtonText}
                </button>
                {postExists && (
                  <button
                    type="submit"
                    name="intent"
                    disabled={isCreating}
                    value="delete"
                    className="ml-2 inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:hover:bg-opacity-90"
                  >
                    {isCreating ? "Deleting..." : "Delete post"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export { authHeaders as headers };

export default addEditPost;
