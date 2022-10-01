const snapFromLeftAnimation = {
  animate: { left: 0 },
  initial: { left: "100vw" },
  transition: { delay: 0.3 },
};

const snapFromRightAnimation = {
  animate: { right: 0 },
  initial: { right: "100vw" },
  transition: { delay: 0.3 },
};

const fadeInFromTopAnimation = {
  animate: { y: 0, opacity: 1 },
  initial: { y: -50, opacity: 0 },
};

export {
  snapFromLeftAnimation,
  snapFromRightAnimation,
  fadeInFromTopAnimation,
};
