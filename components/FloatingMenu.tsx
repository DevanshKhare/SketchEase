"use client";
import React, { useState } from "react";
import { TbIcons } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { shapeElements } from "@/constants";
import Image from "next/image";
import { ShapesMenuProps } from "@/types/type";

const FloatingMenu = ({
  activeElement,
  handleActiveElement,
  handleImageUpload,
  imageInputRef,
}: ShapesMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`mainMenuOverlay floating2 ${menuOpen && "open"}`}>
      {shapeElements.map((ele, index) => (
        <div
          className="itemMenuBox"
          style={{
            transform: `rotate(${(index * 60) % 360}deg)`,
            msTransform: `rotate(${(index * 60) % 360}deg)`,
            WebkitTransform: `rotate(${(index * 60) % 360}deg)`,
          }}
        >
          <button
            className="itemMenu"
            style={{
              transform: `rotate(${360 - ((index * 60) % 360)}deg)`,
              msTransform: `rotate(${360 - ((index * 60) % 360)}deg)`,
              WebkitTransform: `rotate(${360 - ((index * 60) % 360)}deg)`,
            }}
            onClick={() => {
              handleActiveElement(ele);
              setMenuOpen(false);
            }}
          >
            <Image
              width={25}
              height={25}
              alt="icon"
              src={ele.icon}
              className="relative top-0 left-[50%] translate-x-[-50%] translate-y-[-0%]"
            />
          </button>
        </div>
      ))}
      <button
        className="toggleMenu floating flex items-center justify-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoMdClose /> : <TbIcons />}
      </button>
      <input
        type="file"
        className="hidden"
        ref={imageInputRef}
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default FloatingMenu;
