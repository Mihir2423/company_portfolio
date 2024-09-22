"use client";

import { PROJECTS } from "@/constant/projects";
import Image from "next/image";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";


export const Projects = () => {
  return (
    <ParallaxProvider>
      <div className="gap-y-36 grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 py-44 min-h-screen">
        <div className="col-span-1">
          <Parallax speed={20}>
            <div className="flex flex-col gap-3 w-full md:w-[500px] group">
              <div className="rounded-md h-[500px] md:h-[700px] overflow-hidden">
                <Image
                  src={PROJECTS[0].src}
                  width={500}
                  height={700}
                  className="w-full md:w-[500px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt="project-1"
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{PROJECTS[0].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{PROJECTS[0].text}</h1>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="flex justify-end items-center col-span-1">
          <Parallax speed={-10}>
            <div className="flex flex-col gap-3 w-full md:w-[500px] group">
              <div className="rounded-md w-full md:w-[500px] h-[500px] overflow-hidden">
                <Image
                  src={PROJECTS[1].src}
                  width={500}
                  height={500}
                  className="w-full md:w-[500px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt="project-1"
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{PROJECTS[1].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{PROJECTS[1].text}</h1>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="flex justify-center items-center col-span-1 md:col-span-2">
          <Parallax speed={10}>
            <div className="flex flex-col gap-3 w-full md:w-[700px] group">
              <div className="rounded-md w-full md:w-[700px] h-[500px] md:h-[700px] overflow-hidden">
                <Image
                  src={PROJECTS[2].src}
                  width={700}
                  height={700}
                  className="w-full md:w-[700px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt="project-1"
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{PROJECTS[2].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{PROJECTS[2].text}</h1>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="flex items-center col-span-1">
          <Parallax speed={-10}>
            <div className="flex flex-col gap-3 w-full md:w-[500px] group">
              <div className="rounded-md w-full md:w-[500px] h-[500px] overflow-hidden">
                <Image
                  src={PROJECTS[3].src}
                  width={500}
                  height={500}
                  className="w-full md:w-[500px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt="project-1"
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{PROJECTS[3].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{PROJECTS[3].text}</h1>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="flex justify-end col-span-1">
          <Parallax speed={20}>
            <div className="flex flex-col gap-3 w-full md:w-[500px] group">
              <div className="rounded-md w-full h-[500px] md:h-[700px] overflow-hidden">
                <Image
                  src={PROJECTS[4].src}
                  width={500}
                  height={700}
                  className="w-full md:w-[500px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt="project-1"
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{PROJECTS[4].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{PROJECTS[4].text}</h1>
              </div>
            </div>
          </Parallax>
        </div>

        <div className="flex justify-center items-center col-span-1 md:col-span-2">
          <Parallax speed={10}>
            <div className="flex flex-col gap-3 md:w-[700px] group">
              <div className="rounded-md w-full md:w-[700px] h-[500px] md:h-[700px] overflow-hidden">
                <Image
                  src={PROJECTS[5].src}
                  width={700}
                  height={700}
                  className="w-[700px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt="project-1"
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{PROJECTS[5].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{PROJECTS[5].text}</h1>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
};
