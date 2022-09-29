import { createPost } from "~/models/post.server";
import invariant from "tiny-invariant";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";

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
    excerpt: excerpt ? null : "please provide an excerpt",
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
    <Form method="post">
      <p>
        <label>
          Post Title:{" "}
          {errors?.title ? (
            <em className="text-red-600">{errors.title}</em>
          ) : null}
          <input type="text" name="title" className={""} />
        </label>
      </p>
      <p>
        <label>
          Post Slug:{" "}
          {errors?.slug ? (
            <em className="text-red-600">{errors.slug}</em>
          ) : null}
          <input type="text" name="slug" className={""} />
        </label>
      </p>
      <p>
        <label>
          Post Excerpt:{" "}
          {errors?.slug ? (
            <em className="text-red-600">{errors.excerpt}</em>
          ) : null}
          <input type="text" name="excerpt" className={""} />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">
          Markdown:{""}
          {errors?.markdown ? (
            <em className="text-red-600">{errors.markdown}</em>
          ) : null}
        </label>
        <br />
        <textarea
          id="markdown"
          rows={20}
          name="markdown"
          className={`${""} font-mono`}
        />
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isCreating}
        >
          {isCreating ? "Creating..." : "Create Post"}
        </button>
      </p>
    </Form>
  );
};

export default addNewPost;
