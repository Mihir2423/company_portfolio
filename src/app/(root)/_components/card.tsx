"use client";

import { Project } from "@/constant/projects";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Six_Caps } from "next/font/google";

const sixCaps = Six_Caps({
  weight: ["400"],
  subsets: ["latin"],
});

type Props = {
  project: Project;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

export const Card = ({ project, progress, range, targetScale }: Props) => {

  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="top-0 sticky flex justify-center items-center p-10 w-screen h-screen">
      <motion.div
        style={{
          backgroundImage: `url(${project.src})`,
          scale,
        }}
        className={`relative bg-cover bg-no-repeat bg-center rounded-[20px] w-full h-full`}
      >
        <div className="bottom-10 left-0 absolute flex justify-between items-end px-10 w-full">
          <div className="bg-[#ffffff35] backdrop-blur-sm px-3 py-1 rounded-md text-white">
            {project.year}
          </div>
          <h1
            className={`${sixCaps.className} text-white text-[calc(1rem+8.15vw)] leading-[calc(1rem+6.15vw)]`}
          >
            {project.title}
          </h1>
          <div className="bg-[#ffffff35] backdrop-blur-sm px-3 py-1 rounded-md text-white">
            {project.text}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
