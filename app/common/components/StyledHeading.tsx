import { motion } from "framer-motion";
import {
  animationDelay,
  snapFromLeftAnimation,
  snapFromRightAnimation,
} from "../utils/AnimationVariants";

interface IStyledHeading {
  text: string;
  marginOverride?: boolean;
}
// TODO: dodati animacije
const StyledHeading: React.FC<IStyledHeading> = ({ text, marginOverride }) => {
  return (
    <motion.h2 className={`text-primary text-xl ${marginOverride || "mb-4"}`}>
      {text}
    </motion.h2>
  );
};

export default StyledHeading;
