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

export const fadeInAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  },
};

function generateRandomInteger(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export const randomShortInterval = () => generateRandomInteger(50) / 100;
