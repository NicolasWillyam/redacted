"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Test() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <motion.div
        variants={variants}
        initial={{ opacity: 0.5, scale: 0.5 }}
        // animate="visible"
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        drag
        className="box w-[1200px] h-screen bg-white my-20"
      ></motion.div>
    </div>
  );
}
