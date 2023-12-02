import Image from "next/image";
import React from "react";
import ProjectCard from "./ProjectCard";
import card1 from "../../public/card1.jpeg";
import card2 from "../../public/card2.jpeg";
import card3 from "../../public/card3.jpeg";
import card4 from "../../public/card4.jpeg";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";

export default function HomeSection() {
  return (
    <div className="w-full h-auto py-[120px] relative">
      <div className="grid sm:grid-cols-2">
        <div className="sm:w-3/4 content section items-center flex-row justify-center sm:mt-32">
          <p className="text-4xl font-bold">REDACTED FINANCE</p>
          <p className="mt-8 text-gray-400">
            Empowering on-chain liquidity, governance, and cash flow for DeFi
            protocols
          </p>
          <button className="bg-white w-full sm:w-fit mt-8 text-black px-9 py-3 text-[16px] font-medium rounded-full">
            Learn More
          </button>
        </div>
        <div className="sm:flex hidden -mt-[160px] sm:-ml-[80px] sm:w-[720px] sm:h-[720px] w-[360] h-[360px] bg-blue-500 rounded-full pt-20 blur items-center justify-center -z-10">
          <Image
            src="/logo.png"
            width={420}
            height={420}
            alt="image logo"
            className="animate-bounce"
          />
        </div>
      </div>

      <div className="mt-32 sm:-mt-32 grid sm:grid-cols-4 grid-cols-2 sm:gap-12 gap-4">
        <ProjectCard name="Redacted Protocol" imgUrl={card1} />
        <ProjectCard name="Pirex" imgUrl={card2} />
        <ProjectCard name="Hidden Hand" imgUrl={card3} />
        <ProjectCard name="Dinero" imgUrl={card4} />
      </div>
    </div>
  );
}
