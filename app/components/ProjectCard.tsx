import Image from "next/image";
import React from "react";
import bg from "../../public/card1.jpeg";
import { CgMoreO } from "react-icons/cg";

export default function ProjectCard({
  name,
  imgUrl,
}: {
  name: any;
  imgUrl: any;
}) {
  return (
    <div className=" rounded-2xl">
      <div
        style={{
          backgroundImage: `url(${imgUrl.src})`,
          width: "100%",
          height: 320,
        }}
        className="bg-cover bg-no-repeat bg-center rounded-t-2xl pt-4"
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
      </div>
      <div className="flex text-[14px] w-full">
        <button className="bg-white text-black  w-full font-medium py-3 rounded-bl-2xl transition duration-700 ease-in-out hover:bg-gray-800/75 hover:text-white">
          Launch App
        </button>

        <button className="bg-gray-800/75 w-16  text-white font-medium py-3 px-2 text-[12px] rounded-br-2xl flex items-center justify-center transition duration-700 ease-in-out hover:text-gray-800/75 hover:bg-white">
          <CgMoreO size={16} />
        </button>
      </div>
    </div>
  );
}
