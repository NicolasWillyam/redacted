import React from "react";
import Cooperation from "./components/Cooperation";
import Image from "next/image";
import FooterList from "./FooterList";
import Abacus from "../public/abacus_logo.jpg"
import Alchemix from "../public/alchemix_logo.webp"
import Aura from "../public/aura.png"
import Balencer from "../public/balancer_logo.png"
import Berachain from "../public/berachain_logo.jpg"
import Boba from "../public/BOBA.webp"
import Chainlink from "../public/chainlink-new-logo.webp"
import CitadelDao from "../public/logo200on200.webp"
import CurveFinance from "../public/Curve.webp"
import Commonwealth from "../public/commonwealth_logo.jpg"
import Convex from "../public/convex.webp"
import DebtDao from "../public/debt_dao_logo.jpg"
import Dopex from "../public/DPX.webp"
import DropsDao from "../public/dop.webp"
import JPEG from "../public/et_43CNi_400x400.webp"
import FiatDao from "../public/MLamPGZI_400x400.webp"
import Floor from "../public/icon-floor_2x.webp"
import FraxFinance from "../public/frax_logo.png"
import Lido from "../public/Lido_DAO.webp"
import MoverDao from "../public/mover_dao_logo.jpg"
import NewOrder from "../public/new-order-icon-256px.webp"
import Olympus from "../public/token_OHM.webp"
import PerpetualProtocol from "../public/60d18e06844a844ad75901a9_mark_only_03.webp"
import Ribbon from "../public/RBN_64x64.webp"
import StakeDao from "../public/stakedao_logo.webp"
import Stargate from "../public/STG_LOGO.webp"


export default function Footer() {
  return (
    <div className="w-full py-32">
      <p className="text-4xl font-bold text-white mb-10">
        We are building together.
      </p>
      <div className="sm:w-4/5 flex flex-wrap">
        <Cooperation name="Abacus" imgUrl={Abacus.src}/>
        <Cooperation name="Alchemix" imgUrl={Alchemix.src}/>
        <Cooperation name="Aura" imgUrl={Aura.src}/>
        <Cooperation name="Balencer" imgUrl={Balencer.src}/>
        <Cooperation name="Berachain" imgUrl={Berachain.src}/>
        <Cooperation name="Boba" imgUrl={Boba.src}/>
        <Cooperation name="Chainlink" imgUrl={Abacus.src}/>
        <Cooperation name="Citade lDao" imgUrl={CitadelDao.src}/>
        <Cooperation name="Curve Finance" imgUrl={CurveFinance.src}/>
        <Cooperation name="Commonwealth" imgUrl={Commonwealth.src}/>
        <Cooperation name="DebtDao" imgUrl={DebtDao.src}/>
        <Cooperation name="Dopex" imgUrl={Dopex.src}/>
        <Cooperation name="Drops Dao" imgUrl={DropsDao.src}/>
        <Cooperation name="JPEG'd" imgUrl={JPEG.src}/>
        <Cooperation name="FiatDao" imgUrl={FiatDao.src}/>
        <Cooperation name="Floor" imgUrl={Floor.src}/>
        <Cooperation name="Frax Finance" imgUrl={FraxFinance.src}/>
        <Cooperation name="Lido" imgUrl={Lido.src}/>
        <Cooperation name="MoverDao" imgUrl={MoverDao.src}/>
        <Cooperation name="New Order" imgUrl={NewOrder.src}/>
        <Cooperation name="Olympus" imgUrl={Olympus.src}/>
        <Cooperation name="PerpetualProtocol" imgUrl={Abacus.src}/>
        <Cooperation name="Ribbon" imgUrl={Ribbon.src}/>
        <Cooperation name="StakeDao" imgUrl={StakeDao.src}/>
        <Cooperation name="Stargate" imgUrl={Stargate.src}/>
       
      </div>

      <div className="mt-44 w-full sm:flex justify-between">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full flex items-center justify-center">
            <Image src="/uncle-pepe-logo.png" width={24} height={24} alt="image logo" />
          </div>
          <p className="uppercase text-[20px] ml-1 font-medium text-white">Uncle Pepe coin</p>
        </div>
        
        <div className="sm:w-2/3 grid grid-cols-2 sm:grid-cols-4 mt-4 sm:mt-0 gap-10">
        <ul className="mr-20 leading-loose">
      <li className="text-[18px] font-semibold text-white">Products</li>
      <li className="text-[14px] text-gray-400">Protocol</li>
      <li className="text-[14px] text-gray-400">Hidden Hand</li>
      <li className="text-[14px] text-gray-400">Pirex</li>
      <li className="text-[14px] text-gray-400">Dinero</li>
    </ul>
    <ul className="mr-20 leading-loose">
      <li className="text-[18px] font-semibold text-white">Learn</li>
      <li className="text-[14px] text-gray-400">Mirrow</li>
      <li className="text-[14px] text-gray-400">Documention</li>
      <li className="text-[14px] text-gray-400">Dashboard</li>

    </ul>
    <ul className="mr-20 leading-loose">
      <li className="text-[18px] font-semibold text-white">Govermenance</li>
      <li className="text-[14px] text-gray-400">Forum</li>
      <li className="text-[14px] text-gray-400">Snapshot</li>
     
    </ul>
    <ul className="mr-20 leading-loose">
      <li className="text-[18px] font-semibold text-white">Join us</li>
      <li className="text-[14px] text-gray-400">Follow Twitter</li>
      <li className="text-[14px] text-gray-400">Join Discord</li>

    </ul>
        </div>
      </div>
      <hr className="bg-gray-800 my-10" />
      <p className="text-[14px] text-gray-400">© 2024 Uncle Pepe Coin</p>
    </div>
  );
}
