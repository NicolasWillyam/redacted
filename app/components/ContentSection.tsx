"use client"
import Image from "next/image";
import React from "react";
import bg from "../../public/card1.jpeg";
import card1 from "../../public/card1.jpeg";
import card2 from "../../public/card2.jpeg";
import card3 from "../../public/card3.jpeg";
import card4 from "../../public/card4.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ContentSection({name, title, discription, imgUrl, list1, list2, list3}:{name:string, title:string, discription:string, imgUrl:any, list1:string, list2:string, list3:string}) {
  return (
    <div className="w-full py-10 sm:py-32 grid sm:grid-cols-2 gap-12">
      <div className="sm:pr-20 mt-10">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center">
            <Image src="/logo.png" width={50} height={50} alt="image logo" />
          </div>
          <p className="text-[16px] font-medium ml-3 text-white">{name}</p>
        </div>
        <p className="text-4xl sm:text-5xl font-bold mt-10 text-white">{title}</p>
        <p className="text-[16px] font-normal text-gray-400 mt-10">
         {discription}
        </p>
        <button className="bg-white mt-10 text-black px-9 py-3 text-[16px] font-medium rounded-full">
          Launch App
        </button>
        <ul className="text-[16px] font-normal text-gray-400 mt-10 leading-loose">
          <li className="flex ">
            <FaLongArrowAltRight className="mt-2"/>
            <p className="ml-3">
             {list1}
            </p>
          </li>
          <li className="flex ">
            <FaLongArrowAltRight className="mt-2"/>
            <p className="ml-3">
              {list2}
            </p>
          </li>
          <li className="flex ">
            <FaLongArrowAltRight className="mt-2"/>
            <p className="ml-3">
              {list3}
            </p>
          </li>
        </ul>
      </div>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          
        }}
        className="bg-cover bg-no-repeat bg-center rounded-2xl sm:rounded-l-2xl sm:rounded-r-none pt-4 sm:absolute sm:right-0 w-full h-56 sm:w-[90vh] sm:h-[640px]"
      ></div>
    </div>
  );
}
