import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="h-20 bg-theme-first-color-alt border-dashed border-theme-text-color-light border-b-4 flex items-center justify-around ">
      <div className="flex gap-x-2 text-lg items-center">
        <Image alt="Logo" src={"/image/logo.svg"} width={32} height={32} />
        <h1 className="text-white font-pacifico">Coffee Shop</h1>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-x-20 text-white font-normal text-sm font-pacifico">
          <li className="text-theme-second-color">Home</li>
          <li>About</li>
          <li>Steps</li>
          <li>Testimonial</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
