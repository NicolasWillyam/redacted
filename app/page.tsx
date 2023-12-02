import Image from "next/image";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import ContentSection from "./components/ContentSection";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Footer from "./Footer";
import card1 from "../public/card1.jpeg";
import card2 from "../public/card2.jpeg";
import card3 from "../public/card3.jpeg";
import card4 from "../public/card4.jpeg";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="w-full flex justify-center fixed  text-white bottom-6 animate-bounce z-10">
        <IoArrowDownCircleOutline size={30} />
      </div>
      <div className="max-w-[1200px] mx-auto sm:p-0 px-4">
        <Header />
        <HomeSection />
        <ContentSection name="Redacted Protocol" title="Unlock the Influence Economy" discription="The Redacted Protocol is the hub for BTRFLY, which allows users to participate in governance and earn revenue from the Redacted treasury and Redacteds products." list1="Lock BTRFLY for rlBTRFLY to earn revenue distributed in ETH." list2="Earn BTRFLY emissions through rlBTRFLY to earn a growing share of governance power." list3="Access governance rights to the DAO and shape the future of Redacted." imgUrl={card1.src} />
        <ContentSection name="Pirex" title="Redefining Liquid" discription="Pirex is a product by Redacted which creates liquid wrappers that allow for auto-compounding and the tokenization of future yield/vote events" list1="Flexible liquid wrapper that can be applied to any yield-generating asset" list2="Deep liquidity, autocompounding and strong peg enforcement for all Pirex markets" list3="Native futures exchange that allows users to long, short, and leverage future yield" imgUrl={card2.src} />
        <ContentSection name="Hidden Hand" title="Get the Most Out of Your Vote" discription="Hidden Hand by Redacted is a marketplace for governance incentives, commonly referred to as bribes. Protocols can leverage Hidden Hand to enable more efficient governance processes and to engage their voters.
" list1="Allow users to get bribed for their vote in respect to snapshot votes, gauge weights, and more" list2="Over 10 protocols have integrated with Hidden Hand to to maximize their governance participation" list3="Enable a new use-case for your token that attracts new users and DAOs to governance participation" imgUrl={card3.src} />
       
        <Footer />
      </div>
    </div>
  );
}
