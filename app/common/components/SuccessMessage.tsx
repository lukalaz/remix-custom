import { motion } from "framer-motion";
import {
  fadeInAnimation,
  randomShortInterval,
} from "../utils/AnimationVariants";

interface ISuccessMessage {
  heading: string;
  description: string;
}

const SuccessMessage: React.FC<ISuccessMessage> = ({
  heading,
  description,
}) => {
  return (
    <motion.div
      {...fadeInAnimation}
      transition={{ delay: randomShortInterval() }}
    >
      <div
        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
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
