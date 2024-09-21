"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Six_Caps } from "next/font/google";
import { SERVICES } from "@/constant/services";
import { ServiceCard } from "./service";

const sixCaps = Six_Caps({
  weight: ["400"],
  subsets: ["latin"],
});

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.7, 1]);
  const width= useTransform(scrollYProgress, [0, 0.7], [70, 100]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.7], [40, 1]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      <div className="top-0 left-0 sticky w-full h-screen overflow-hidden">
        <motion.div
          style={{ scale, borderRadius: `${borderRadius}px` }}
          className="z-[1] absolute inset-0 bg-white"
        />
        <div className="z-[2] absolute inset-0 grid grid-cols-2 w-full h-full">
          <div
            className={`${sixCaps.className} text-[calc(1rem+10.15vw)] leading-[calc(1rem+8.15vw)] text-black p-10 flex gap-4 flex-col justify-center`}
          >
            <h1>Our</h1>
            <h1>Services</h1>
          </div>
          <div className="flex flex-col justify-center gap-4 pr-20">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} service={service} width={width} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
