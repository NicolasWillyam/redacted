import Image from "next/image";
import React from "react";

export default function Cooperation({name, imgUrl}:{name:string, imgUrl:any}) {
  return (
    <div className="py-2 px-6 mb-6 mr-4 rounded-full border border-white flex items-center">
     <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          
        }}
        className="bg-cover bg-no-repeat bg-center rounded-full h-6 w-6"
      ></div>
      <p className="font-medium ml-2 text-white">{name}</p>
    </div>
  );
}
