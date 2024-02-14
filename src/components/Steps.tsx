"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Steps() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="bg-theme-first-color rounded-t-[54px] md:rounded-t-[104px]">
      <div className="bg-theme-bg bg-cover bg-opacity-5 -mt-28 ">
        <div className="bg-theme-first-color bg-opacity-80 rounded-t-[54px] md:rounded-t-[104px] w-full lg:px-[150px] px-4 pb-[172px] pt-10 lg:pt-[140px] gap-y-10">
          <h1
            className="font-pacifico text-white text-center text-[24px] md:text-[48px] mb-20"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            Steps of manufacturing our products
          </h1>
          <div className="relative lg:flex justify-around">
            <div
              className="absolute lg:border-b-4 border-4 border-l-0 lg:border-0
             border-theme-first-color-light border-dashed rounded-full h-[630px] sm:h-[900px] lg:h-[650px] w-[80%] sm:w-[90%] lg:w-[70%] sm:-top-7  top-12 lg:-top-60"
            />
            <div className="relative">
              <div
                data-aos="fade-left"
                data-aos-duration="2500"
                className="absolute text-[24px] lg:text-[36px] text-theme-first-color w-[50px] h-[50px] lg:w-[85px] lg:h-[85px] text-center rounded-full flex justify-center items-center font-poppins font-semibold bg-theme-second-color border-8 border-theme-first-color z-10"
              >
                01
              </div>
              <div
                className="lg:w-[260px] lg:h-[260px] w-[150px] h-[150px] rounded-full bg-theme-first-color-light flex justify-center items-center shadow-btn-shadow-2"
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                <Image
                  alt="green-coffee"
                  src={"/image/green-coffee.svg"}
                  width={210}
                  height={132}
                />
              </div>
              <p
                className="font-poppins text-white md:text-lg text-sm w-full max-w-[272px] mt-10"
                data-aos="fade-right"
                data-aos-duration="2500"
              >
                Harvest occurs annually when the coffee beans reach maturity and
                are collected for processing.
              </p>
            </div>
            <div
              className="relative lg:mt-20 my-10 flex flex-col items-end"
              data-aos="flip-right"
              data-aos-duration="2500"
            >
              <p className="font-poppins text-white md:text-lg text-sm w-full max-w-[272px] mb-10 hidden lg:flex">
                The beans are dried using a wet or dry technique, depending on
                the taste we want to obtain.
              </p>
              <div className="relative">
                <div className="absolute text-[24px] lg:text-[36px] text-theme-first-color w-[50px] h-[50px] lg:w-[85px] lg:h-[85px] text-center rounded-full flex justify-center items-center font-poppins font-semibold bg-theme-second-color border-8 border-theme-first-color">
                  02
                </div>
                <div className="lg:w-[260px] lg:h-[260px] w-[150px] h-[150px] rounded-full bg-theme-first-color-light flex justify-center items-center shadow-btn-shadow-2">
                  <Image
                    alt="coffee-beans"
                    src={"/image/steps-coffee-beans.svg"}
                    width={210}
                    height={132}
                  />
                </div>
              </div>
              <p className="font-poppins text-white md:text-lg text-sm w-[272px] mt-10 lg:hidden flex">
                The beans are dried using a wet or dry technique, depending on
                the taste we want to obtain.
              </p>
            </div>
            <div
              className="relative"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              <div
                className="absolute text-[24px] lg:text-[36px] text-theme-first-color w-[50px] h-[50px] lg:w-[85px] lg:h-[85px] text-center rounded-full flex justify-center items-center font-poppins font-semibold bg-theme-second-color border-8 border-theme-first-color"
                data-aos="fade-right"
                data-aos-duration="2500"
              >
                03
              </div>
              <div className="lg:w-[260px] lg:h-[260px] w-[150px] h-[150px] rounded-full bg-theme-first-color-light flex justify-center items-center shadow-btn-shadow-2">
                <Image
                  alt="ground-coffee"
                  src={"/image/steps-ground-coffee.svg"}
                  width={210}
                  height={132}
                  data-aos="fade-right"
                  data-aos-duration="2500"
                />
              </div>
              <p
                className="font-poppins text-white md:text-lg text-sm w-full max-w-[272px] mt-10"
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                The coffee is roasted and acquires its flavor by processing the
                grain in ovens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
