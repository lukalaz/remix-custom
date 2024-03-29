import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import {
  animationDelay,
  fadeInAnimation,
} from "~/common/utils/AnimationVariants";
import { Project } from "~/models/project.server";
import avatar from "../../../assets/images/avatar.jpg";
import { timeZone } from "~/common/constants/dateTimeConstants";

interface IProjectCard {
  project: Project;
}

export const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
  return (
    <motion.section
      {...fadeInAnimation}
      transition={{ delay: animationDelay[2] }}
      className="bg-gray-900"
    >
      <div className="py-6 px-4 mx-auto lg:px-6">
        <div className="grid gap-8 lg:grid-cols-1">
          <article className="p-6 rounded-lg border shadow-md bg-gray-800 border-gray-700">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              {/*
              TODO: Add category names and links to category pages in the future
              
              <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Tutorial
              </span>*/}
              <span className="text-sm">
                {new Date(project.createdAt).toLocaleDateString(timeZone)}
              </span>
            </div>
            <h2 className="hover-underline-animation mb-2 text-2xl font-bold tracking-tight text-white">
              <Link to={project.slug}>{project.title}</Link>
            </h2>
            <p className="mb-5 font-light text-gray-400">{project.excerpt}</p>
            {project.technologies && (
              <p className="mb-5 font-light text-sm text-gray-400">
                <span className="text-gray-500">Technologies used:</span>{" "}
                {project.technologies}
              </p>
            )}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src={avatar}
                  alt="Luka Lazic"
                />
                <span className="font-medium text-white">Luka Lazic</span>
              </div>
              <Link
                to={project.slug}
                className="inline-flex-important items-center font-medium text-white hover-underline-animation"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </motion.section>
  );
};
