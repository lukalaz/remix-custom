export const snapFromLeftAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { delay: 0.3 },
  variants: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 50, opacity: 0 },
  },
};

export const snapFromRightAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -50, opacity: 0 },
  },
};

export const fadeInFromTopAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -50, opacity: 0 },
  },
};
