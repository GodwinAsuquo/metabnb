import React from "react";
import nft from "../assets/home/nft.svg";

const NFT = () => {
  return (
    <section className="bg-[rgb(160,34,121)] text-white justify-center lg:flex lg:items-center lg:justify-between px-3 py-20 mt-12 lg:px-20">
      <div className="lg:w-[32%] space-y-8 md:space-y-14">
        <h3 className="font-extrabold text-2xl">Metabnb NFTs</h3>
        <p className="leading-6">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="text-[#A02279] text-sm bg-white rounded-md px-6 py-2">
          Learn more
        </button>
      </div>
      <img
        className="w-[70%] mx-auto text-center mt-10 lg:mt-0 lg:w-fit"
        src={nft}
        alt=""
      />
    </section>
  );
};

export default NFT;
