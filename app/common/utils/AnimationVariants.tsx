import { motion } from "framer-motion";

const useAnimationVariants = () => {
  const snapFromLeftAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { delay: 0.3 },
    variants: {
      visible: { left: 0, opacity: 1 },
      hidden: { left: "50vw", opacity: 0 },
    },
  };

  const snapFromRightAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: {
      visible: { right: 0, opacity: 1 },
      hidden: { right: "50vw", opacity: 0 },
    },
  };

  const fadeInFromTopAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: {
      visible: { y: 0, opacity: 1 },
      hidden: { y: -50, opacity: 0 },
    },
  };

  const fadeInFromTopDiv = (children: React.ReactNode) => {
    return <motion.div {...fadeInFromTopAnimation}>{children}</motion.div>;
  };

  return {
    snapFromLeftAnimation,
    snapFromRightAnimation,
    fadeInFromTopAnimation,
    fadeInFromTopDiv,
  };
};

export default useAnimationVariants;
