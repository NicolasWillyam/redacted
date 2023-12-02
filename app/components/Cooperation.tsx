import Image from "next/image";
import React from "react";

export default function Cooperation() {
  return (
    <div className="py-2 px-6 mb-6 mr-4 rounded-full border border-white flex items-center">
      <Image src="/logo.png" width={24} height={24} alt="image logo" />
      <p className="font-medium ml-2">Abacus</p>
    </div>
  );
}
