"use client";

import React from "react";
import { Six_Caps } from "next/font/google";

const sixCaps = Six_Caps({
  weight: ["400"],
  subsets: ["latin"],
});
type Props = {};

export const MessageForm = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if (!data.text || !data.email || !data.message) return;
    else console.log(data);

    e.currentTarget.reset(); 
  };
  return (
    <div className="flex flex-col justify-center items-center gap-32 px-10 h-screen">
      <h1
        className={`${sixCaps.className} text-[6rem] leading-[5rem]  md:text-[calc(1rem+10.15vw)] md:leading-[calc(1rem+8.15vw)] text-white`}
      >
        {"Let's Talk"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-8 w-full md:w-[600px]"
      >
        <div className="flex max-md:flex-col items-center gap-8 w-full">
          <div className="flex-1 border-white px-0 pb-2 border-b max-md:w-full">
            <input
              type="text"
              name="text"
              placeholder="Enter your Name"
              className="border-0 bg-transparent placeholder:font-medium text-medium text-white placeholder:text-white outline-none"
            />
          </div>
          <div className="flex-1 border-white px-0 pb-2 border-b max-md:w-full">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="border-0 bg-transparent placeholder:font-medium text-medium text-white placeholder:text-white outline-none"
            />
          </div>
        </div>
        <div className="border-white md:mt-8 px-0 pb-2 border-b w-full">
          <textarea
            placeholder="Tell us about yourself"
            name="message"
            rows={1}
            className="border-0 bg-transparent w-full placeholder:font-medium text-medium text-white placeholder:text-white outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          className="border-white px-4 py-2 border rounded-[20px] text-base text-white"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
