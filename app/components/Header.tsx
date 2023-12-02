import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="h-[80px] sm:h-[120px] w-full mx-auto flex justify-between items-center z-10">
      <div className="flex">
        <Image src="/logo.png" width={50} height={50} alt="image logo" />
        <ul className="items-center text-gray-300 text-[14px] font-regular hidden sm:flex">
          <li className="ml-6 hover:bg-gray-700 duration-700 py-1.5 px-3 rounded-[6px]">
            <a href="#">Docs</a>
          </li>
          <li className="ml-6 hover:bg-gray-700 duration-700 py-1.5 px-3 rounded-[6px]">
            <a href="#">Governance</a>
          </li>
        </ul>
      </div>
      <div className="">
        <button className="text-[14px] font-medium py-2 px-8 bg-blue-600 rounded-lg hover:bg-blue-700 duration-700 text-white">
          Launch App
        </button>
      </div>
    </div>
  );
}
