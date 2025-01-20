import React from "react";
import { HiMoon, HiSun } from "react-icons/hi2";
import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between items-center w-full py-8 px-64  bg-transparent border-b-2 bg-opacity-80 shadow-lg">
        <div>
          <img src="./favicon.ico" alt="website logo" />
        </div>
        <div className="flex justify-between items-center w-32">
          <div className="flex gap-2">
            <HiMoon size={24} className="cursor-pointer" />
            <HiSun size={24} className="cursor-pointer" />
            <AiFillGithub size={24} className="cursor-pointer" />
          </div>
          <div></div>
        </div>
      </header>
    </div>
  );
}
