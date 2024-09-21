"use client";

import { Navbar } from "@/components/layout";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const PreloaderWrapper = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Increase time to account for opacity animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <div>{children}</div>
        </>
      )}
    </main>
  );
};

// Preloader component with scale and fade-out animation
const Preloader = () => {
  return (
    <>
      <motion.div
        className="z-50 fixed inset-0 flex justify-center items-center bg-white"
        initial={{ scale: 0.2, opacity: 1 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{
          scale: { duration: 0.5, ease: "easeInOut" },
          opacity: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
        }}
      > 
        <div className="bg-white rounded-full w-24 h-24">
         <Image src="/icons/logo-black.png" className="scale-[2]" alt="Logo" width={96} height={96} />
        </div>
      </motion.div>
    </>
  );
};
