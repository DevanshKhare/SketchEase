"use client"
import React, { useState } from "react";
import { TbIcons } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { shapeElements } from "@/constants";
import Image from "next/image";

const FloatingMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className={`mainMenuOverlay floating2 ${menuOpen && "open"}`}>
      {shapeElements.map((ele, index) => (
        <div className="itemMenuBox" style={{ transform: `rotate(${(index * 60) % 360}deg)`, msTransform: `rotate(${(index * 60) % 360}deg)`, WebkitTransform: `rotate(${(index * 60) % 360}deg)` }}>
          <a
            href="https://codepen.io/mahmoud-nb/pen/ZOYdKm"
            target="_blank"
            className="itemMenu"
            style={{ transform: `rotate(${360 - ((index * 60) % 360)}deg)`, msTransform: `rotate(${360 - ((index * 60) % 360)}deg)`, WebkitTransform: `rotate(${360 - ((index * 60) % 360)}deg)` }}
          >
            <Image width={25} height={25} alt="icon" src={ele.icon} className="relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
          </a>
        </div>
      ))}
      <button
        className="toggleMenu floating flex items-center justify-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoMdClose /> : <TbIcons />}
      </button>
    </div>
  );
};

export default FloatingMenu;
