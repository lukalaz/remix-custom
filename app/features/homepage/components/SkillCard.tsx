import { motion } from "framer-motion";
import React from "react";
import { snapFromBottomAnimation } from "~/common/utils/AnimationVariants";

interface ISkillCard {
  title: string;
  content?: string;
  icon?: string;
  animationDelay?: number;
}

const SkillCard: React.FC<ISkillCard> = ({
  title,
  content,
  icon,
  animationDelay,
}) => {
  return (
    <motion.div
      {...snapFromBottomAnimation}
      transition={{ delay: animationDelay }}
      className="w-1/2 xl:w-1/4 px-4"
    >
      <div className="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8">
        <div className="mx-auto w-20 h-20 mb-6 rounded-full border-2 border-primary flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary duration-200">
          <img
            src={icon}
            alt={title}
            className={"group-hover:grayscale duration-200"}
          />
        </div>
        <h3 className="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3">
          {title}
        </h3>
        {content && (
          <p className="font-medium text-body-color group-hover:text-white leading-relaxed text-sm">
            {content}
          </p>
        )}
        <div>
          <span className="absolute top-0 right-0 -z-1">
            <svg
              width="218"
              height="109"
              viewBox="0 0 218 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.05"
                cx="156.5"
                cy="-47.5"
                r="156.5"
                fill="white"
              />
              <circle opacity="0.08" cx="210" cy="6" r="62" fill="white" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
