import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, openModal } = useGlobalContext();

  //   isSidebarOpen ? console.log("abeg nau") : console.log("nahh");

  return (
    <aside
      className={`${
        isSidebarOpen
          ? "fixed top-0 right-0 w-[400px] h-[100vh] bg-white  shadow-lg transition-all lg:hidden"
          : "fixed top-0 right-0 w-[400px] h-[100vh] bg-white shadow-lg hidden transition-all lg:hidden"
      }`}
    >
      <button className="absolute top-3 right-4" onClick={closeSidebar}>
        <FaTimes size={30} />
      </button>

      <ul className="cursor-pointer space-y-10 px-10 py-20 underline">
        <li className="pb-10" onClick={closeSidebar}>
          Home
        </li>
        <Link to="/places">
          <li onClick={closeSidebar}>Place to stay</li>
        </Link>
        <li onClick={closeSidebar}>NFTs</li>
        <li onClick={closeSidebar}>Community</li>
        <button
          onClick={openModal}
          className="text-white text-lg bg-[#A02279] rounded-lg px-6 py-2"
        >
          Connect wallet
        </button>
      </ul>
    </aside>
  );
};

export default Sidebar;
