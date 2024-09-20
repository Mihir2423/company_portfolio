"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Video = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const clipPathProgress = useTransform(scrollYProgress, [0, 0.5], [20, 75]);

  useEffect(() => {
    const unsubscribe = clipPathProgress.onChange((v) => {
      if (v >= 75) {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      }
    });

    return () => unsubscribe();
  }, [clipPathProgress]);

  return (
    <div className="relative h-[240vh]">
      <div
        ref={containerRef}
        className="top-0 left-0 sticky w-screen h-screen overflow-hidden"
      >
        <div className="relative z-auto inset-0 p-0 w-full h-full">
          <motion.div
            className="w-full h-full"
            style={{
              clipPath: useTransform(
                clipPathProgress,
                (value) => `circle(${value}% at 50% 50%)`
              ),
            }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/about.mp4"
              autoPlay
              loop
              muted
            />
          </motion.div>
        </div>
        <div
          className="bottom-0 z-[10] absolute w-full h-[370px]"
          style={{
            maskImage: "linear-gradient(transparent, black 85%)",
            backgroundColor: "rgb(12, 12, 12)",
          }}
        />
      </div>
    </div>
  );
};
