"use client";

import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="h-20 bg-theme-first-color-alt border-dashed border-theme-text-color-light border-b-4 flex items-center justify-around">
      <div className="flex gap-x-2 text-lg items-center">
        <Image
          alt="Logo"
          src={"/image/logo.svg"}
          width={32}
          height={32}
          data-aos="fade-right"
        />
        <h1 className="text-white font-pacifico" data-aos="fade-down">
          Coffee Shop
        </h1>
      </div>
      <div className="hidden md:flex" data-aos="fade-down">
        <ul className="flex gap-x-20 text-white font-normal text-sm font-pacifico">
          <li className="text-theme-second-color cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Steps</li>
          <li className="cursor-pointer">Testimonial</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
