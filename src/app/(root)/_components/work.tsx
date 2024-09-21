"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { Card } from "./card";
import { PROJECTS } from "@/constant/projects";
import Link from "next/link";

const Work = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainContainer,
    offset: ["start start", "end end"],
  });

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
    <>
      <div ref={mainContainer} className="relative min-h-[200vh]">
        <div ref={ref} className="top-[500px] absolute w-[400px]" />
        <div className="top-0 left-0 sticky w-screen h-screen">
          <div className="relative flex flex-col justify-center items-center mx-auto h-screen">
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`px-2 absolute uppercase overflow-hidden font-bold tracking-tighter flex text-[calc(15vw)] md:text-[calc(13vw)] lg:text-[calc(11vw)]`}
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="text-[#fff]"
                >
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
        </div>
        {PROJECTS.slice(0,3).map((project, index) => {
          const targetScale = 1 - (PROJECTS.slice(0,3).length - index) * 0.1;
          return (
            <Card
              key={index}
              project={project}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center gap-4 py-4 text-[#6d6d6d] text-center text-xl md:text-2xl">
        <p className="uppercase">Elevating Digital Experiences with Cutting-Edge Innovation</p>
        <Link
          href={"/project"}
          className="border-white px-4 py-2 border rounded-[20px] text-base text-white"
        >
          See All Works
        </Link>
      </div>
    </>
  );
};

export { Work };
