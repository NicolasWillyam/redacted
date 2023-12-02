import React from "react";
import Cooperation from "./components/Cooperation";
import Image from "next/image";
import FooterList from "./FooterList";

export default function Footer() {
  return (
    <div className="w-full h-screen">
      <p className="text-4xl font-bold text-white mb-10">
        We are building together.
      </p>
      <div className="w-4/5 flex flex-wrap">
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
        <Cooperation />
      </div>

      <div className="mt-44 w-full flex justify-between">
        <div className="flex w-full items-center">
          <div className="h-8 w-8 rounded-full flex items-center justify-center">
            <Image src="/logo.png" width={24} height={24} alt="image logo" />
          </div>
          <p className="uppercase text-[20px] ml-1 font-medium">Redacted</p>
        </div>
        <div className=" flex">
          <FooterList />
          <FooterList />
          <FooterList />
          <FooterList />
        </div>
      </div>
      <hr className="bg-gray-800 my-10" />
      <p className="text-[14px] text-gray-400">© 2023 Redacted</p>
    </div>
  );
}
