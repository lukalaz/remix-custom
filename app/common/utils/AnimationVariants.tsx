const useAnimationVariants = () => {
  const snapFromLeftAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { delay: 0.3 },
    variants: {
      visible: { x: 0, opacity: 1 },
      hidden: { x: 50, opacity: 0 },
    },
  };

  const snapFromRightAnimation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: {
      visible: { x: 0, opacity: 1 },
      hidden: { x: -50, opacity: 0 },
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

  return {
    snapFromLeftAnimation,
    snapFromRightAnimation,
    fadeInFromTopAnimation,
  };
};

export default useAnimationVariants;
