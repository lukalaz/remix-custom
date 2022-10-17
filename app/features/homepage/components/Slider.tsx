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
      <span className="text-white">{skills[slideIndex]?.description}</span>
      <ChevronDoubleLeftIcon
        className="cursor-pointer h-14 w-14 text-indigo-600 absolute top-1/2 -mt-7 left-0 noselect"
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
            position={"left"}
          />
          <SkillCard
            title={skills[slideIndex]?.name}
            icon={skills[slideIndex]?.image}
            position="middle"
          />
          <SkillCard
            title={getNextTitle(slideIndex + 1)}
            icon={getNextImage(slideIndex + 1)}
            position="right"
          />
        </div>
      </motion.div>
      <ChevronDoubleRightIcon
        className="cursor-pointer h-14 w-14 text-indigo-600 absolute top-1/2 -mt-7 right-0 noselect"
        onClick={() => paginate(1)}
      />
    </div>
  );
};
