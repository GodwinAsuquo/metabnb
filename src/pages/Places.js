import React from "react";
import filter from "../assets/filter.svg";
import stars from "../assets/stars.svg";
import { PlaceData } from "../PlaceData";

const Places = () => {
  return (
    <div className="px-3 lg:px-20 mt-10 max-w-[1440px]">
      <section className="grid grid-cols-4 gap-y-3 lg:flex justify-between lg:items-center">
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>
        <button className="font-normal flex space-x-3 border border-[#B4B4B4] w-fit min-w-[130px] rounded-md px-3 py-1">
          <p>Location</p>
          <img src={filter} alt="" />
        </button>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mt-10 mb-32">
        {PlaceData.map((place) => {
          const { id, img } = place;
          return (
            <div
              key={id}
              className="border border-[#D7D7D7] border-1 space-y-2 text-xs p-4 w-fit rounded-2xl "
            >
              <img className="w-full" src={img} alt="" />
              <div className="flex justify-between">
                <p className="font-light">Desert king</p>
                <p>1MBT per night</p>
              </div>
              <div className="flex justify-between font-light">
                <p className="pr-3">2345km away</p>
                <p>available for 2weeks stay</p>
              </div>
              <img className="w-28" src={stars} alt="" />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Places;
