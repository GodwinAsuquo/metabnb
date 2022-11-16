import React from "react";
import Logo from "../assets/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <section className="py-8 px-3 flex items-center justify-between lg:px-20 max-w-[1440px] mx-auto">
      <Link to="/">
        <img className="w-40 lg:w-fit" src={Logo} alt="" />
      </Link>
      <button onClick={openSidebar} className="lg:hidden">
        <AiOutlineMenu size={25} />
      </button>
      <div className="hidden lg:flex align-middle space-x-10 cursor-pointer">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/places">
          <p>Place to stay</p>
        </Link>
        <p>NFTs</p>
        <p>Community</p>
      </div>
      <button
        onClick={openModal}
        className="hidden lg:block text-white text-lg bg-[#A02279] rounded-lg px-6 py-2"
      >
        Connect wallet
      </button>
    </section>
  );
};

export default Navbar;
