import { Link, useCatch } from "@remix-run/react";
import { motion } from "framer-motion";
import StyledTitle from "~/common/components/StyledTitle";
import {
  animationDelay,
  snapFromTopAnimation,
} from "~/common/utils/AnimationVariants";

const NotFound: React.FC = () => {
  const error = useCatch();
  return (
    <section className="pt-[120px] border-t border-gray-700 relative z-40">
      <StyledTitle
        title={error.status.toString()}
        preTitle={error.statusText}
        noMargin={true}
      />
      <motion.div
        {...snapFromTopAnimation}
        transition={{ delay: animationDelay[2.2] }}
        className="sm:flex justify-end hidden pr-16 lg:pr-0"
      >
        <Link
          to={"/"}
          className="hover-zoom-animation text-base font-bold text-white bg-primary rounded-full py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:hover:bg-opacity-90 transition ease-in-out duration-300 mx-auto lg:mb-10"
        >
          Go back to the Homepage
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
