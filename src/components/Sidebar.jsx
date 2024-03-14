import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import icon from "@/assets/icon.png";
import home from "@/assets/home.png";
import menu from "@/assets/menu.png";
import dua from "@/assets/dua.png";
import fav from "@/assets/fav.png";
import rukaya from "@/assets/rukaya.png";
import memorize from "@/assets/memorize.png";
import books from "@/assets/books.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-[80%] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 bg-white rounded-xl">
      <div className="mt-5 mb-10">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="flex flex-col items-center space-y-5">
        <div className="bg-gray-200 w-12 h-12 rounded-full flex justify-center items-center">
          <Image src={home} alt="home" />
        </div>
        <div className="bg-gray-200 w-12 h-12 rounded-full flex justify-center items-center">
          <Image src={menu} alt="home" />
        </div>
        <div className="bg-gray-200 w-12 h-12 rounded-full flex justify-center items-center">
          <Image src={memorize} alt="home" />
        </div>
        <div className="bg-gray-200 w-12 h-12 rounded-full flex justify-center items-center">
          <Image src={fav} alt="home" />
        </div>
        <div className="bg-gray-200 w-12 h-12 rounded-full flex justify-center items-center">
          <Image src={rukaya} alt="home" />
        </div>
        <div className="bg-gray-200 w-12 h-12 rounded-full flex justify-center items-center">
          <Image src={dua} alt="home" />
        </div>
        <div className="bg-gray-200 w-12 h-12 rounded-full flex justify-center items-center">
          <Image src={books} alt="home" />
        </div>
      </div>
      <div className="mt-10 mb-5 bg-[#20A45C] mx-4 py-4 rounded-lg flex items-center justify-center">
        <Image src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default Sidebar;
