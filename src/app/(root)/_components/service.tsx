import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence, MotionValue, useMotionTemplate } from "framer-motion";

type Service = {
  title: string;
  text: string;
};

type Props = {
  service: Service;
  width: MotionValue<number>;
};

export const ServiceCard = ({ service, width }: Props) => {
  const [active, setActive] = useState(false);
  const widthPercentage = useMotionTemplate`${width}%`;

  return (
    <motion.div
      style={{ width: widthPercentage }}
      className="flex flex-col cursor-pointer group"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="flex justify-between items-center pt-6 border-t border-black">
        <h1 className="text-black text-xl">{service.title}</h1>
        <motion.div
          animate={{
            rotate: active ? 90 : 0,
            backgroundColor: active ? "#000000" : "#D1D5DB",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex justify-center items-center p-2 rounded-full w-8 h-8"
        >
          <FaArrowRight
            size={24}
            className={`${
              active ? "text-white" : "text-black"
            } transition-colors duration-300`}
          />
        </motion.div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="w-3/4 text-black text-sm">{service.text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
