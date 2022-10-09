import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import {
  snapFromTopAnimation,
  snapFromLeftAnimation,
  snapFromRightAnimation,
} from "../../../common/utils/AnimationVariants";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <motion.div
          {...snapFromTopAnimation}
          className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Luka Lazić
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
            This is my personal website where I post my projects and write about
            web development and life. My prefered tech stack includes react,
            remix and prisma. I put my name up big not because I'm egoistic but
            because it's good for SEO 😀. Feel free to check out some of my
            projects or my blog!
          </p>
        </motion.div>
        <div className="flex justify-center items-center">
          <Link to="/projects">
            <motion.div
              {...snapFromLeftAnimation}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"
            >
              Projects
            </motion.div>
          </Link>
          <Link to="/blog">
            <motion.div
              {...snapFromRightAnimation}
              className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Blog
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
