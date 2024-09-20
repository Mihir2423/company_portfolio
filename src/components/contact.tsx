import React from "react";
import { AnimatedText } from "./text";

export const Contact = () => {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col gap-4 text-[#6d6d6d] text-center uppercase">
        <p>Contact us and let&apos;s bring your vision to life</p>
        <AnimatedText text={"Contact"} down />
      </div>
      <div className="bottom-10 left-0 absolute grid grid-cols-3 px-10 w-full">
        <div className="col-span-1" />
        <h1 className="text-base text-center text-white">2024 © ShadeByte. All rights reserved.</h1>
        <div className="col-span-1" />
      </div>
    </div>
  );
};
