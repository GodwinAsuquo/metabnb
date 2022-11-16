import React from "react";
import stars from "../assets/stars.svg";
import { CardData } from "../CardData";

const HomePlaces = () => {
  return (
    <section className="px-4 md:px-20">
      <h3 className="my-10 text-center font-bold text-2xl md:text-4xl">
        Inspiration for your next adventure
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        {CardData.map((card) => {
          const { id, img } = card;
          return (
            <div
              key={id}
              className="border border-[#D7D7D7] border-1 space-y-2 text-sm p-4 w-fit rounded-2xl "
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
      </div>
    </section>
  );
};

export default HomePlaces;
