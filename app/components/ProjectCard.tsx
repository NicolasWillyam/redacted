import Image from "next/image";
import React from "react";
import bg from "../../public/card1.jpeg";
import { CgMoreO } from "react-icons/cg";
import { motion } from "framer-motion";

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

export default function ProjectCard({
  name,
  imgUrl,
}: {
  name: any;
  imgUrl: any;
}) {
  return (
    <motion.div variants={objectVariants} className=" rounded-2xl">
      <div
        style={{
          backgroundImage: `url(${imgUrl.src})`,
        }}
        className="bg-cover relative bg-no-repeat bg-center rounded-2xl pt-4 w-full sm:h-[360px] h-[280px]"
      >
        <div className="w-fit bg-gray-900/75 text-white px-3 py-2 pr-6 rounded-r-full relative">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
              <Image
                src="/logo.png"
                width={16}
                height={16}
                alt="image logo"
                className=""
              />
            </div>
            <p className="text-[14px] font-normal ml-2 text-gray-200">{name}</p>
          </div>
        </div>
        <div className="flex text-[14px] w-full px-3 absolute bottom-3">
          <button className="bg-white text-black  w-full font-medium py-3 rounded-full transition duration-700 ease-in-out hover:bg-gray-800/75 hover:text-white">
            Launch App
          </button>
        </div>
      </div>
    </motion.div>
  );
}
