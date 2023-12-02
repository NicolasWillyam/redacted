import Image from "next/image";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import ContentSection from "./components/ContentSection";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center fixed   bottom-6 animate-bounce z-10">
        <IoArrowDownCircleOutline size={30} />
      </div>
      <div className="max-w-[1280px] mx-auto sm:p-0 px-4">
        <Header />
        <HomeSection />
        <ContentSection />
        <ContentSection />
        <ContentSection />
        <ContentSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
