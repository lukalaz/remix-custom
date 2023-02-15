import { XCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  fadeInAnimation,
  randomShortInterval,
} from "../utils/AnimationVariants";

interface IErrorMessage {
  heading: string;
  description: string;
}

const SuccessMessage: React.FC<IErrorMessage> = ({ heading, description }) => {
  return (
    <motion.div
      {...fadeInAnimation}
      transition={{ delay: randomShortInterval() }}
    >
      <div
        className="bg-red-100 border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <XCircleIcon className="h-6 w-6 text-red-500 mr-4" />
          </div>
          <div>
            <p className="font-bold">{heading}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default SuccessMessage;
