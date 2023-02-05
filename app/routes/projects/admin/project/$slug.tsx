import {
  createProject,
  deleteProject,
  getProject,
  Project,
  updateProject,
} from "~/models/project.server";
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

type ActionData =
  | {
      title: null | string;
      slug: null | string;
      markdown: null | string;
      excerpt: null | string;
      seo_title: null | string;
      seo_description: null | string;
      technologies: null | string;
    }
  | undefined;

type LoaderData = { project: Project };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  if (params.slug == "new") {
    return json<LoaderData>({ project: {} as any });
  }
  const project = await getProject(params.slug);
  invariant(project, `Project not found: ${params.slug}`);

  return json<LoaderData>({ project });
};

export const action: ActionFunction = async ({ request }) => {
  console.log("USLI U AKCIJU");

  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const excerpt = formData.get("excerpt");
  const seo_title = formData.get("seo_title");
  const seo_description = formData.get("seo_description");
  const technologies = formData.get("technologies");
  const intent = formData.get("intent");
  const projectExists = formData.get("projectExists") || 0;

  if (intent === "delete" && slug) {
    deleteProject(slug.toString());
    return redirect("/projects");
  }

  const errors: ActionData = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
    excerpt: excerpt
      ? null
      : "Please provide a short description of the project",
    seo_title: seo_title ? null : "Meta title is required",
    seo_description: seo_description ? null : "Meta description is required",
    technologies: technologies ? null : "Technologies are required",
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
  invariant(typeof technologies === "string", "technologies must be a string");
  invariant(
    typeof seo_description === "string",
    "SEO description must be a string"
  );

  await (+projectExists ? updateProject : createProject)({
    title,
    slug,
    markdown,
    excerpt,
    seo_title,
    seo_description,
    technologies,
  });

  return redirect("/projects");
};

const addEditProject = () => {
  const transition = useTransition();
  const isCreating = Boolean(transition.submission);
  const errors = useActionData();
  const { project } = useLoaderData();
  const projectExists = !!project.slug;

  const submitButtonText = projectExists ? "Update Project" : "Add Project";
  const pageTitle = projectExists ? project.title : "Add a new project";

  return (
    <section id="add-project">
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
          <input type="hidden" name="projectExists" value={+projectExists} />
          <h3 className="text-xl font-bold mb-2">Project data</h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-6">
                {errors?.title ? (
                  <em className="text-red-600">{errors.title}</em>
                ) : null}
                <input
                  type="text"
                  placeholder="Project Title"
                  className="input-field"
                  name="title"
                  defaultValue={project.title}
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
                  placeholder="Project Slug"
                  className="input-field"
                  name="slug"
                  defaultValue={project.slug}
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
                  placeholder="Project content (written in markdown)"
                  className="input-field resize-none"
                  name="markdown"
                  defaultValue={project.markdown}
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
                  placeholder="Project excerpt (a short version of the content shown on blog archive pages, written in plain text)"
                  className="input-field resize-none"
                  name="excerpt"
                  defaultValue={project.excerpt}
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                {errors?.technologies ? (
                  <em className="text-red-600">{errors.technologies}</em>
                ) : null}
                <input
                  type="text"
                  placeholder="Project Technologies (separated by comma)"
                  className="input-field"
                  name="technologies"
                  defaultValue={project.technologies}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <h3 className="text-xl font-bold mb-2">SEO data</h3>
              <div className="mb-6">
                {errors?.seo_title ? (
                  <em className="text-red-600">{errors.seo_title}</em>
                ) : null}
                <input
                  type="text"
                  placeholder="Meta Title"
                  className="input-field"
                  name="seo_title"
                  defaultValue={project.seo_title}
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
                  defaultValue={project.seo_description}
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
                <button
                  type="submit"
                  name="intent"
                  disabled={isCreating}
                  value="delete"
                  className="ml-2 inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:hover:bg-opacity-90"
                >
                  {isCreating ? "Deleting..." : "Delete project"}
                </button>
              </div>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default addEditProject;
