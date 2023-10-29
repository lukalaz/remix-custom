import { motion } from "framer-motion";
import { animationDelay, fadeInAnimation } from "../utils/AnimationVariants";

export const UnauthorizedMessage = () => {
  return (
    <motion.h1
      {...fadeInAnimation}
      transition={{ delay: animationDelay[2] }}
      className="text-center text-white text-2xl mt-4"
    >
      Unauthorized
    </motion.h1>
  );
};
