import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logotype.svg";
import {
  animationDelay,
  snapFromLeftAnimation,
  snapFromRightAnimation,
  snapFromTopAnimation,
} from "../utils/AnimationVariants";
import useWindowDimensions from "../utils/WindowDimensions";

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuSticky, setIsMenuSticky] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const { isMobileView } = useWindowDimensions();

  useEffect(() => {
    //TODO: extract this as separate hook
    const scrollListener = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", scrollListener);
  }, []);

  useEffect(() => {
    setIsMenuSticky(scrollPosition > 0);
  }, [scrollPosition]);

  return (
    <div className="pt-20 bg-black">
      <header
        className={`header box-content bg-white fixed h-18 top-0 left-0 z-40 w-full flex items-center transition justify-center bg-opacity-90 ${
          isMenuSticky ? "border-b" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <motion.div
              {...snapFromLeftAnimation}
              transition={{ delay: animationDelay[1] }}
              className="w-48 max-w-full"
            >
              <Link to={"/"} className="w-full block">
                <img src={logo} alt="logo" className="w-full" />
              </Link>
            </motion.div>
            <div className="flex px-4 justify-between items-center w-full">
              <div>
                <button
                  onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                  name="navbarToggler"
                  className="block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
                >
                  <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                  <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                  <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                </button>
                <nav
                  className={`${
                    isOpenMobileMenu ? "" : "hidden"
                  } absolute py-2 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent border-2 lg:border-0 shadow-l rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none`}
                >
                  <ul className="lg:flex">
                    <motion.li
                      {...snapFromTopAnimation}
                      transition={{
                        delay: isMobileView ? 0 : animationDelay[2],
                      }}
                      className="relative group"
                    >
                      <Link
                        onClick={() => setIsOpenMobileMenu(false)}
                        to={"/"}
                        className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                      >
                        Tech Stack
                      </Link>
                    </motion.li>
                    <motion.li
                      {...snapFromTopAnimation}
                      transition={{
                        delay: isMobileView ? 0 : animationDelay[2.1],
                      }}
                      className="relative group"
                    >
                      <Link
                        onClick={() => setIsOpenMobileMenu(false)}
                        to={"/blog"}
                        className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                      >
                        Blog
                      </Link>
                    </motion.li>
                    <motion.li
                      {...snapFromTopAnimation}
                      transition={{
                        delay: isMobileView ? 0 : animationDelay[2.2],
                      }}
                      className="relative group"
                    >
                      <Link
                        onClick={() => setIsOpenMobileMenu(false)}
                        to="/#contact"
                        className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                      >
                        Contact
                      </Link>
                    </motion.li>
                  </ul>
                </nav>
              </div>
              <motion.div
                {...snapFromRightAnimation}
                transition={{ delay: animationDelay[3] }}
                className="sm:flex justify-end hidden pr-16 lg:pr-0"
              >
                <a
                  href="#contact"
                  className=" text-base font-bold text-white bg-primary rounded-full py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:shadow-signUp hover:bg-opacity-90 transition ease-in-out duration-300"
                >
                  View my work
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
