/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="bg-theme-first-color-alt flex justify-center py-16 items-center flex-col-reverse md:flex-row px-6 gap-y-7 pb-40">
      <div className="">
        <Image
          alt="home-coffee"
          src={"/image/home-coffee.svg"}
          width={713}
          height={790}
        />
      </div>
      <div className="flex flex-col gap-y-6 md:w-[447px]">
        <p className="text-theme-second-color text-sm md:text-lg font-medium font-poppins text-center md:text-start">
          EXCEPTIONAL QUALITY
        </p>
        <h1 className="font-pacifico text-[32px]  md:text-[52px] text-white text-center md:text-start">
          It's time for a good coffee
          {/* <Image
            alt=""
            src={"/image/home-coffee-nut.svg"}
            width={120}
            height={124}
          /> */}
        </h1>
        <p className="font-poppins text-sm md:text-lg font-normal text-white text-center md:text-start">
          Each select coffee bean reflects our commitment to Peruvian coffee
          growers, who bring the best select coffee to your table.
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <Button text="Get Started" icon iconLink="/icon/right.svg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
