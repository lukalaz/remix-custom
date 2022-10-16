import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import react from "../../../assets/images/logo-icons/react.png";
import remix from "../../../assets/images/logo-icons/remix.png";
import sql from "../../../assets/images/logo-icons/sql.png";
import prisma from "../../../assets/images/logo-icons/prisma.png";
import azure from "../../../assets/images/logo-icons/azure.png";
import git from "../../../assets/images/logo-icons/git.png";
import SkillCard from "./SkillCard";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

const skills = [
  {
    name: "react",
    image: react,
    description: "My favorite js framework. Highly reccomended!",
  },
  {
    name: "remix",
    image: remix,
    description: "My favorite frameworks favorite framework.",
  },
  {
    name: "SQL",
    image: sql,
    description: "My databases. Yayyy!",
  },
  {
    name: "Prisma",
    image: prisma,
    description: "My databases. Yayyy!",
  },
  {
    name: "Azure",
    image: azure,
    description:
      "I learned about azure in my company. Microsoft stack is not that bad.",
  },
  {
    name: "Git",
    image: git,
    description: "Gotta have some version control",
  },
];

const variants = {
  enter: () => {
    return {
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

export const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const slideIndex = wrap(0, skills.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const getPreviousTitle = (index: number) => {
    if (index == -1) return skills[skills.length - 1]?.name;
    return skills[index]?.name;
  };

  const getPreviousImage = (index: number) => {
    if (index == -1) return skills[skills.length - 1]?.image;
    return skills[index]?.image;
  };

  const getNextTitle = (index: number) => {
    if (index == skills.length) return skills[0]?.name;
    return skills[index]?.name;
  };

  const getNextImage = (index: number) => {
    if (index == skills.length) return skills[0]?.image;
    return skills[index]?.image;
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence custom={direction}>
        <span className="text-white">{skills[slideIndex]?.description}</span>
        <ChevronDoubleLeftIcon
          className="cursor-pointer h-14 w-14 text-indigo-600 absolute top-1/2 -mt-7 left-0"
          onClick={() => paginate(-1)}
        />
        <motion.div
          layout
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit={{ display: "none" }}
          transition={{
            opacity: { duration: 0.2 },
          }}
        >
          <div className="flex justify-center px-10">
            <SkillCard
              title={getPreviousTitle(slideIndex - 1)}
              icon={getPreviousImage(slideIndex - 1)}
            />
            <SkillCard
              title={skills[slideIndex]?.name}
              icon={skills[slideIndex]?.image}
              middle
            />
            <SkillCard
              title={getNextTitle(slideIndex + 1)}
              icon={getNextImage(slideIndex + 1)}
            />
          </div>
        </motion.div>
        <ChevronDoubleRightIcon
          className="cursor-pointer h-14 w-14 text-indigo-600 absolute top-1/2 -mt-7 right-0"
          onClick={() => paginate(1)}
        />
      </AnimatePresence>
    </div>
  );
};
