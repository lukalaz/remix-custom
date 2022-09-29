import { createPost } from "~/models/post.server";
import invariant from "tiny-invariant";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import StyledTitle from "~/common/components/StyledTitle";

type ActionData =
  | {
      title: null | string;
      slug: null | string;
      markdown: null | string;
      excerpt: null | string;
    }
  | undefined;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData, "formData");

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const excerpt = formData.get("excerpt");

  console.log(title, "title");

  const errors: ActionData = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
    excerpt: excerpt ? null : "Please provide a short description of the post",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>(errors);
  }

  invariant(typeof title === "string", "title must be a string");
  invariant(typeof slug === "string", "slug must be a string");
  invariant(typeof markdown === "string", "markdown must be a string");
  invariant(typeof excerpt === "string", "excerpt must be a string");

  await createPost({ title, slug, markdown, excerpt });

  return redirect("/blog");
};

const addNewPost = () => {
  const transition = useTransition();
  const isCreating = Boolean(transition.submission);
  const errors = useActionData();

  return (
    <section id="add-post">
      <div className="container pt-12">
        <StyledTitle
          title="Add a new post"
          preTitle="Be Eloquent"
          description="All data is required and checked"
        />
        <Form method="post">
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
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isCreating}
                  className="inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:shadow-signUp hover:bg-opacity-90"
                >
                  {isCreating ? "Working..." : "Add post"}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default addNewPost;
