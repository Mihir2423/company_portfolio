"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const Work = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const letters = Array.from("Projects");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 100,
      rotateZ: 45,
      transition: {
        type: "spring",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateZ: 0,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <div className="relative flex flex-col justify-center items-center mx-auto h-screen">
     <div ref={ref} className="top-[500px] absolute w-[400px]" />
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`px-2 absolute uppercase overflow-hidden font-bold tracking-tighter flex text-[calc(15vw)] md:text-[calc(13vw)] lg:text-[calc(11vw)]`}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child} className="text-[#fff]">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        className={`px-2 absolute uppercase overflow-hidden font-bold tracking-tighter flex text-[calc(15vw)] md:text-[calc(13vw)] lg:text-[calc(11vw)]`}
      >
        {letters.map((letter, index) => (
          <motion.span
            style={{
              WebkitTextStroke: "1px #fdfdfd",
            }}
            key={index}
            className="text-transparent"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export { Work };
