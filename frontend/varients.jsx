export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      Y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      opacity: 0,
      X: direction === "left" ? 20 : direction === "right" ? -20 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      Y: 0,
      X: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
