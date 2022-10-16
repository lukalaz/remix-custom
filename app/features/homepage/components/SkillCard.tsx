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
      className="w-1/2 xl:w-1/6 px-4"
    >
      <div className="bg-gray-800 group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8">
        <div className="mx-auto w-20 h-20 mb-6 rounded-full bg-white border-2 border-primary flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary duration-200">
          <img
            src={icon}
            alt={title}
            className={"group-hover:grayscale duration-200"}
          />
        </div>
        <h3 className="font-bold text-white text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3">
          {title}
        </h3>
        {content && (
          <p className="font-medium text-body-color group-hover:text-white leading-relaxed text-sm">
            {content}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SkillCard;
