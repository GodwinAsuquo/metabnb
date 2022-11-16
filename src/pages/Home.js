import React from "react";
import heroImage from "../assets/heroImage.svg";
import mbtoken from "../assets/mbtoken.svg";
import metamask from "../assets/metamask.svg";
import opensea from "../assets/opensea.svg";
import { HomePlaces, NFT } from "../components";

const Home = () => {
  return (
    <>
      <section className="px-4 mt-20 lg:flex lg:px-20 justify-between align-middle">
        <div className="lg:w-[40%] space-y-6 my-10">
          <h2 className="text-2xl md:text-4xl md:leading-[4rem]">
            Rent a <span className="text-[#A02279] font-bold">place</span> away
            from <span className="text-[#A02279] font-bold">Home</span> in the{" "}
            <span className="text-[#A02279] font-bold">Metaverse</span>
          </h2>
          <p className="text-lg">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className="flex pt-7">
            <input
              className="border border-[#A3A3A3] rounded-l-md py-2 px-4  placeholder:text-sm w-full max-w-md"
              type="text"
              placeholder="search for location"
            />
            <button className="bg-[#A02279] px-14 py-3 rounded-r-md text-white text-sm">
              Search
            </button>
          </form>
        </div>

        <div>
          <img
            className="pt-8  mx-auto lg:w-[] lg:pt-0 "
            src={heroImage}
            alt=""
          />
        </div>
      </section>

      <div className="bg-[#A02279] flex px-4 py-2 mt-32 md:mt-52 md:px-20 justify-between">
        <img className="w-[5rem] md:w-[10rem]" src={mbtoken} alt="" />
        <img className="w-[5rem] md:w-[10rem]" src={metamask} alt="" />
        <img className="w-[5rem] md:w-[10rem]" src={opensea} alt="" />
      </div>
      <HomePlaces />
      <NFT />
    </>
  );
};

export default Home;
