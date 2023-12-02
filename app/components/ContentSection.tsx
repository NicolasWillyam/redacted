import Image from "next/image";
import React from "react";
import bg from "../../public/card1.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ContentSection() {
  return (
    <div className="w-full py-32 grid sm:grid-cols-2">
      <div className="sm:pr-20 mt-10">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center">
            <Image src="/logo.png" width={50} height={50} alt="image logo" />
          </div>
          <p className="text-[16px] font-medium ml-3">Redacted Protocol</p>
        </div>
        <p className="text-5xl font-bold mt-10">Unlock the Influence Economy</p>
        <p className="text-[16px] font-normal text-gray-400 mt-10">
          The Redacted Protocol is the hub for BTRFLY, which allows users to
          participate in governance and earn revenue from the Redacted treasury
          and Redacteds products.
        </p>
        <button className="bg-white mt-10 text-black px-9 py-3 text-[16px] font-medium rounded-full">
          Launch App
        </button>
        <ul className="text-[16px] font-normal text-gray-400 mt-10 leading-loose">
          <li className="flex items-center">
            <FaLongArrowAltRight />
            <p className="ml-2">
              Lock BTRFLY for rlBTRFLY to earn revenue distributed in ETH.
            </p>
          </li>
          <li className="flex items-center">
            <FaLongArrowAltRight />
            <p className="ml-2">
              Earn BTRFLY emissions through rlBTRFLY to earn a growing share of
              governance power.
            </p>
          </li>
          <li className="flex items-center">
            <FaLongArrowAltRight />
            <p className="ml-2">
              Access governance rights to the DAO and shape the future of
              Redacted.
            </p>
          </li>
        </ul>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100vh",
          height: "80vh",
        }}
        className="bg-cover bg-no-repeat bg-center rounded-l-2xl pt-4 sm:absolute sm:right-0"
      ></div>
    </div>
  );
}
