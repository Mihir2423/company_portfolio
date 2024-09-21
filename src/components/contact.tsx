import React from "react";
import { AnimatedText } from "./text";
import Link from "next/link";

export const Contact = ({ text, link, description }: { text: string; link: string; description: string }) => {
  return (
    <div className="relative flex justify-center items-center px-8 w-screen h-screen text-center">
      <div className="flex flex-col justify-center items-center gap-4 text-[#6d6d6d] text-center uppercase">
        <p>{description}</p>
        <Link href={link}>
          <AnimatedText text={text} down />
        </Link>
      </div>
      <div className="bottom-10 left-0 absolute grid grid-cols-1 md:grid-cols-3 px-10 w-full">
        <div className="col-span-1" />
        <h1 className="text-base text-center text-white">
          2024 © ShadeByte. All rights reserved.
        </h1>
        <div className="col-span-1" />
      </div>
    </div>
  );
};
