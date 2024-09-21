"use client";

import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Six_Caps } from "next/font/google";
import Link from "next/link";
import { NAV_ROUTES } from "@/constant/nav";

const sixCaps = Six_Caps({
  weight: ["400"],
  subsets: ["latin"],
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const linkVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <>
      {
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.8 } }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
              className="top-0 left-0 z-[98] fixed flex flex-col justify-center items-center gap-4 bg-black w-screen h-screen"
            >
              {NAV_ROUTES.map((route, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeInOut",
                  }}
                >
                  <Link
                    href={route.path}
                    onClick={() => setIsOpen(false)}
                    className={`${sixCaps.className} text-[6rem] leading-[5rem] md:text-[8rem] md:leading-[7rem] text-white`}
                  >
                    {route.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      }
      <nav className="top-0 left-0 z-[99] fixed flex justify-between items-center p-6 md:p-10 w-full">
        <Image src="/icons/logo.png" alt="logo" width={56} height={50} />
        <div className="flex items-center gap-4">
          <h1 className="text-base text-white">Menu</h1>
          <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
            <span
              className={`${styles.burger} ${isOpen ? styles.burgerActive : ""}`}
            />
          </button>
        </div>
      </nav>
    </>
  );
};
