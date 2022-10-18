export const snapFromRightAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 50, opacity: 0 },
  },
};

export const snapFromLeftAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -50, opacity: 0 },
  },
};

export const snapFromTopAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -50, opacity: 0 },
  },
};

export const snapFromBottomAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 50, opacity: 0 },
  },
};

export const snapFromBottomAnimationSlow = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },

  variants: {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 50, opacity: 0 },
  },
};

export const fadeInAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  },
};

export const infiniteBouncyAnimation = {
  transition: {
    duration: 0.8,
    yoyo: Infinity,
  },
  animate: {
    y: ["-1rem", "1rem"],
  },
};

export const hoverAndTapAnimation = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  transition: { duration: 0.05 },
};

function generateRandomInteger(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export const randomShortInterval = () => generateRandomInteger(30) / 100;

export const animationDelay = {
  1: 0.15,
  2: 0.3,
  2.1: 0.325,
  2.2: 0.35,
  2.3: 0.375,
  2.4: 0.4,
  3: 0.45,
  4: 0.6,
  5: 0.75,
};
