import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import {
  snapFromTopAnimation,
  snapFromLeftAnimation,
  snapFromRightAnimation,
  fadeInAnimation,
} from "../../../common/utils/AnimationVariants";
import avatar from "../../../assets/images/Luka-Lazic.png";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

const Hero: React.FC = () => {
  return (
    <div className="bg-black overflow-hidden center-container items-center flex starground relative">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <motion.img
        className="absolute bottom-0 w-48 h-48 md:h-60 md:w-60 lg:h-80 lg:w-80 2xl:w-96 2xl:h-96 z-10"
        src={avatar}
        alt="Luka Lazic"
        {...snapFromLeftAnimation}
        transition={{ duration: 0.5 }}
      />
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24 pb-24 sm:pb-48">
        <motion.div
          {...snapFromTopAnimation}
          className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10"
        >
          <h1 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-black leading-7 md:leading-10">
            Luka Lazić
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center sm:text-lg">
            This is my personal website where I post my projects and write about
            web development and life. Check out some of my projects or my blog!
          </p>
        </motion.div>
        <div className="flex justify-center items-center relative">
          <Link to="/projects">
            <motion.div
              {...snapFromLeftAnimation}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-primary py-2 sm:py-4 text-sm"
            >
              Projects
            </motion.div>
          </Link>
          <Link to="/blog">
            <motion.div
              {...snapFromRightAnimation}
              className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-gray-900 transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-primary text-white px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Blog
            </motion.div>
          </Link>
        </div>
      </div>
      <motion.div {...fadeInAnimation}>
        <Link to={"/#tech-stack"} className="w-full block">
          <ChevronDoubleDownIcon className="chevron-scroll-position bottom-10 cursor-pointer h-14 w-14 text-indigo-600 absolute" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
