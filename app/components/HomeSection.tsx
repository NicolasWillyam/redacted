"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import card1 from "../../public/card1.jpeg";
import card2 from "../../public/card2.jpeg";
import card3 from "../../public/card3.jpeg";
import card4 from "../../public/card4.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/ultis/motion";

const objectVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      stggerChildren: 0.1,
    },
  },
};

export default function HomeSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-auto pb-20 relative"
    >
      <div className="grid sm:grid-cols-2 ">
        <div className=" content section items-center flex-row justify-center mt-24 leading-snug">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <div className="leading-tight">
              Uncle Pepe Coin <br /> on
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Solana{" "}
              </span>
             
            </div>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.75)}
            className="mt-8 text-gray-400 text-[14px] leading-[22px]"
          >
            
            At Uncle PepeCoin, we're pioneering the next chapter in cryptocurrency, boldly positioning ourselves as the "Doge Killer" with a clear mission to dethrone Dogecoin from its current pedestal. Our innovative approach, driven by a commitment to efficiency, speed, and community engagement, sets us apart in the digital currency landscape. We're not just creating a cryptocurrency; we're building a movement. With PepeCoin, we're offering more than just an alternative—we're providing a superior choice that redefines the future of digital transactions. Join us as we embark on this journey to revolutionize the crypto space, making Doge watch from the sidelines as PepeCoin takes the lead.
                          
          </motion.div>
          
        </div>
        <motion.div
          variants={slideInFromRight(0.75)}
          className="sm:flex mt-20 hidden items-center justify-center -z-10"
        >
           <Image src="/uncle-pepe-logo.png" width={420} height={420} alt="image logo" />
        </motion.div>
      </div>

      {/* <motion.div
        variants={objectVariants}
        initial="initial"
        animate="animate"
        className="mt-12 grid sm:grid-cols-4 grid-cols-2 sm:gap-12 gap-4"
      >
        <ProjectCard name="Redacted" imgUrl={card1} />
        <ProjectCard name="Pirex" imgUrl={card2} />
        <ProjectCard name="Hidden Hand" imgUrl={card3} />
        <ProjectCard name="Dinero" imgUrl={card4} />
      </motion.div> */}
    </motion.div>
  );
}
