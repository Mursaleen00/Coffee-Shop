"use client";
import Button from "./Button";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Product() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  const product = [
    {
      title: "Classic Coffee",
      img: "/image/product-coffee-1.svg",
      price: "$17.90",
    },
    {
      title: "Black coffee",
      img: "/image/product-coffee-2.svg",
      price: "$24.90",
    },
    {
      title: "Strong coffee",
      img: "/image/product-coffee-3.svg",
      price: "$32.90",
    },
  ];
  return (
    <div className="bg-theme-first-color rounded-t-[54px] md:rounded-t-[104px] -mt-36 flex-col flex lg:flex-row justify-center lg:justify-around w-full items-end lg:px-[150px] px-4 pb-[172px] pt-10 lg:pt-[140px] gap-y-10">
      <div
        className="flex flex-col gap-y-8 lg:w-[447px] w-full items-center lg:items-start justify-center"
        data-aos="fade-right"
      >
        <Button
          text="Scroll Down"
          icon
          iconLink="/icon/down.svg"
          className="text-white bg-theme-first-color-alt shadow-btn-shadow-2"
        />
        <p className="text-white font-normal font-poppins text-sm md:text-lg text-center lg:text-start">
          We strive to form deep partnerships with farmers from all over the
          world to create perspective together and form healthy working
          relationships built on trust and respect.
        </p>
      </div>
      <div className="flex justify-evenly gap-8 flex-wrap w-full">
        {product.map((items: any, index: number) => {
          return (
            <div
              key={index}
              data-aos={`${
                index == 0
                  ? "fade-left"
                  : index == 2
                  ? "fade-right"
                  : "fade-top"
              }`}
            >
              <Image
                alt={items.title}
                src={`${items.img}`}
                width={120}
                height={168}
              />
              <h1 className="flex flex-col text-center text-white font-pacifico text-[16px] md:text-[20px]">
                {items.title}
                <span>{items.price}</span>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
