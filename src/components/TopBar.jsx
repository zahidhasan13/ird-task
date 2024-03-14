import Image from "next/image";
import React from "react";
import searchIcon from "@/assets/search.png";
import profile from "@/assets/profile.png";
import downIcon from "@/assets/down-icon.png";
import setting from "@/assets/settings.svg";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl">Duas Page</h2>
      </div>
      <div className="flex items-center">
        <div className="flex items-center bg-white rounded-md p-1 mr-20">
          <input
            type="text"
            className="px-2 py-2 focus:outline-none"
            placeholder="Search by Dua Name"
          />
          <button className="bg-gray-200 py-2 px-5 rounded-md">
            <Image src={searchIcon} alt="search-icon" />
          </button>
        </div>
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-2">
            <Image src={profile} alt="profile" />
            <Image src={downIcon} alt="profile" />
          </div>
          <Image src={setting} alt="setting" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
