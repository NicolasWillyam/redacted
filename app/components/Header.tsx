import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="h-[80px] sm:h-[120px] w-full mx-auto flex justify-between items-center z-10">
      <div className="flex items-center">
        <Image src="/uncle-pepe-logo.png" width={50} height={50} alt="image logo" />
        <div className="ml-4 sm:ml-6 uppercase text-[20px] sm:text-[30px] font-extrabold">Unclepepe coin</div>
      
      </div>
      <div className="flex items-center">
        <ul className="items-center mr-6 text-gray-300 text-[14px] font-regular hidden sm:flex">
          <li className="ml-6 hover:bg-gray-700 duration-700 py-1.5 px-3 rounded-[6px] capitalize">
            <a href="/">home</a>
          </li>
          <li className="ml-6 hover:bg-gray-700 duration-700 py-1.5 px-3 rounded-[6px]">
            <a href="https://x.com/UnclePepeSol">Twitter</a>
          </li>
          <li className="ml-6 hover:bg-gray-700 duration-700 py-1.5 px-3 rounded-[6px]">
            <a href="https://t.me/UnclePepe_Sol">Telegram</a>
          </li>
        </ul>
        <button className="text-[14px] font-medium px-4 py-1 sm:py-2 sm:px-8 bg-blue-600 rounded-lg hover:bg-blue-700 duration-700 text-white">
          Follow us
        </button>
      </div>
    </div>
  );
}
