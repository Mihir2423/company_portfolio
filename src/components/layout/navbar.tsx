"use client";

import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="top-0 left-0 z-[99] fixed flex justify-between items-center p-10 w-full">
      <Image src="/icons/logo.png" alt="logo" width={56} height={50} />
      <div className="flex items-center gap-4">
        <h1 className="text-base text-white">Menu</h1>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={styles.button}
        >
          <span
            className={`${styles.burger} ${isOpen ? styles.burgerActive : ""}`}
          />
        </button>
      </div>
    </nav>
  );
};
