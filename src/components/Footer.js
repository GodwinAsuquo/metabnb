import React from "react";
import whiteLogo from "../assets/whiteLogo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <section className="bg-[#1D1D1E] text-white px-3 py-10 max-w-[1440px] mx-auto md:flex justify-between md:px-20 ">
      <div className="flex md:flex-col justify-between w-40 lg:w-fit">
        <img src={whiteLogo} />
        <div className="hidden space-x-10 md:mt-8 md:flex">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
        <p className="hidden md:block">&#169; 2022 Metabnb</p>
      </div>

      <div className="py-6 flex text-center justify-between md:w-[70%] md:py-0">
        <div className="space-y-3">
          <p className="font-bold pb-2">Community</p>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>

        <div className="space-y-3">
          <p className="font-bold pb-2">Places</p>
          <p>Castle</p>
          <p>Farms</p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>

        <div className="space-y-3">
          <p className="font-bold pb-2">About us</p>
          <p>Road map</p>
          <p>Creators </p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 md:hidden">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <p>&#169; 2022 Metabnb</p>
      </div>
    </section>
  );
};

export default Footer;
