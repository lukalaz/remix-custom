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
import tailwind from "../../../assets/images/logo-icons/tailwind.png";
import SkillCard from "./SkillCard";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { infiniteBouncyAnimation } from "~/common/utils/AnimationVariants";

const skills = [
  {
    name: "react",
    image: react,
    description:
      "I absolutely love working with React. It's like having a set of building blocks for web development. With React, I can creating interactive and dynamic user interfaces effortlessly, thanks to its component-based architecture.",
  },
  {
    name: "remix",
    image: remix,
    description:
      "Remix is an essential part of this very site. It's a web framework that takes my web development to the next level by focusing on server-rendered React applications. This means faster performance and a fantastic developer experience with tools that help me achieve efficient code splitting and data loading as well as good SEO results.",
  },
  {
    name: "SQL",
    image: sql,
    description:
      "SQL is an essential tool in my developer arsenal for managing and querying data. It provides a structured language that enables me to interact with databases, making it straightforward to store and retrieve the information my applications need.",
  },
  {
    name: "Prisma",
    image: prisma,
    description:
      "Prisma is like a wizard that simplifies my database interactions. It provides a type-safe and auto-generated query API, which means I can work with databases without worrying about writing complex queries from scratch.",
  },
  {
    name: "Azure",
    image: azure,
    description:
      "Azure is my go-to cloud platform. It's where I deploy and scale my applications effortlessly. With Azure, I can access a vast array of cloud services, from virtual machines to AI capabilities, to supercharge my projects.",
  },
  {
    name: "Git",
    image: git,
    description:
      "Git is my version control superhero. It allows me to track changes in my code, collaborate seamlessly with others, and maintain a detailed history of my project's evolution. It's an absolute essential in my development toolkit.",
  },
  {
    name: "Tailwind",
    image: tailwind,
    description:
      "Tailwind CSS is a design revelation. It simplifies the process of creating beautiful and responsive user interfaces. I can effortlessly style my applications with its utility-first approach, saving me time and effort in the design process.",
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
    <>
      <div className="relative overflow-hidden">
        <motion.div
          {...infiniteBouncyAnimation(0.2, true)}
          className="absolute top-1/2 left-0"
        >
          <ChevronDoubleLeftIcon
            className="hover-zoom-animation cursor-pointer h-14 w-14 text-indigo-600 -mt-7 noselect"
            onClick={() => paginate(-1)}
          />
        </motion.div>
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
        <motion.div
          {...infiniteBouncyAnimation(0.2, true)}
          className="absolute top-1/2 right-0"
        >
          <ChevronDoubleRightIcon
            className="hover-zoom-animation cursor-pointer h-14 w-14 text-indigo-600 -mt-7 noselect"
            onClick={() => paginate(1)}
          />
        </motion.div>
      </div>
      <div className="flex flex-col items-center mt-2">
        <motion.div>
          <ChevronUpIcon className="h-14 w-14 text-indigo-600 noselect" />
        </motion.div>
        <div className="text-white text-center">
          {skills[slideIndex]?.description}
        </div>
      </div>
    </>
  );
};
