import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

const Reveal = ({ children, width = "fit-content", delay=0.25, duration=0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControles = useAnimation();
  const slideControles = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControles.start("visible");
      slideControles.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControles}
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControles}
        transition={{ duration: 0.3, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#5484dd",
          //   backdropFilter: blur(10),
          zIndex: 20,
        }}
      ></motion.div> */}
    </div>
  );
};

export default Reveal;
