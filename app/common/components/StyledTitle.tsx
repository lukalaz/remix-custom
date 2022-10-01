import { motion } from "framer-motion";
import useAnimationVariants from "../utils/AnimationVariants";

interface IStyledTitle {
  title: string;
  preTitle?: string;
  description?: string;
}

const StyledTitle: React.FC<IStyledTitle> = ({
  title,
  preTitle,
  description,
}) => {
  const {
    snapFromLeftAnimation,
    snapFromRightAnimation,
    fadeInFromTopAnimation,
  } = useAnimationVariants();
  return (
    <div className="flex flex-wrap mx-[-16px]">
      <div className="w-full px-4">
        <motion.div
          {...fadeInFromTopAnimation}
          className="max-w-[600px] mx-auto text-center mb-[70px]"
        >
          {preTitle && (
            <motion.span
              {...snapFromLeftAnimation}
              className="font-semibold text-lg text-primary block mb-2"
            >
              {preTitle}
            </motion.span>
          )}
          <motion.h2
            {...snapFromRightAnimation}
            transition={{ delay: 0.45 }}
            className="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5"
          >
            {title}
          </motion.h2>
          <motion.p
            {...snapFromLeftAnimation}
            transition={{ delay: 0.6 }}
            className="font-medium text-lg text-body-color"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default StyledTitle;
