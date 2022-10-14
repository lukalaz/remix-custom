import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import logo from "../../assets/images/bracketLogo.svg";
import {
  snapFromTopAnimation,
  snapFromLeftAnimation,
  snapFromRightAnimation,
  animationDelay,
} from "../utils/AnimationVariants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 pt-12 pb-12 relative mt-10 overflow-x-hidden">
      <div className="container">
        <div className="flex flex-wrap justify-between -mx-4">
          <motion.div
            {...snapFromRightAnimation}
            transition={{ delay: animationDelay[2] }}
            className="w-full md:w-1/2 lg:w-4/12 px-4"
          >
            <div className="mb-10">
              <h2 className="font-bold text-white text-[44px] leading-tight mb-5">
                Let's Talk!
              </h2>
              <h3 className="font-bold text-white opacity-70 text-2xl mb-2">
                Contact Info
              </h3>
              <a
                href="mailto:luka.web.php@gmail.com"
                className="font-medium text-base text-body-color mb-1 block"
              >
                luka.web.php@email.com
              </a>
              <Link
                to={"https://www.linkedin.com/in/luka-lazic-b3411aa1/"}
                className="font-medium text-base text-body-color mb-1"
              >
                LinkedIn
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...snapFromLeftAnimation}
            transition={{ delay: animationDelay[3] }}
            className="w-full md:w-1/2 lg:w-3/12 px-4"
          >
            <div className="mb-10">
              <img src={logo} alt="logo" className="w-full" />
            </div>
          </motion.div>
        </div>

        <div className="mt-10 pt-12 border-t border-white border-opacity-10">
          <motion.p
            {...snapFromTopAnimation}
            transition={{ delay: animationDelay[3] }}
            className="font-medium text-base text-body-color text-center"
          >
            All rights reserved by... just kidding,{" "}
            <a
              href="https://github.com/lukalaz/remix-custom"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              fork this freely!
            </a>
            <span className="text-primary"> ♥</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
