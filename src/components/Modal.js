import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import meta from "../assets/modal/meta.svg";
import wallet from "../assets/modal/wallet.svg";
import chevron from "../assets/modal/Chevron.svg";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen
          ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 grid content-center transition-all visible z-10"
          : "fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 grid content-center transition-all invisible -z-10"
      }`}
    >
      <div className="relative left-[50%] translate-x-[-50%] w-[90vw] h-[300px] bg-white rounded-lg max-w-[620px] ">
        <div className="flex justify-between px-7">
          <h4 className="font-bold text-2xl py-5">Connect Wallet</h4>
          <button onClick={closeModal}>
            <FaTimes size={20} />
          </button>
        </div>
        <div className="border border-[#CFD8DC]"></div>
        <p className="px-7 py-4">Choose your preferred wallet:</p>
        <div className="flex justify-between border py-2 px-4 mx-7 rounded-lg bg-[#F8F9FA] mb-3">
          <img src={meta} alt="" />
          <img src={chevron} alt="" />
        </div>
        <div className="flex justify-between border px-4 py-2 mx-7 rounded-lg bg-[#F8F9FA]">
          <img src={wallet} alt="" />
          <img src={chevron} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
