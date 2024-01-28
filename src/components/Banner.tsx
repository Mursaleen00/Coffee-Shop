import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="bg-white rounded-t-[54px] md:rounded-t-[104px] -mt-28 flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center lg:px-[150px] px-4 pb-[172px] pt-10 lg:pt-[140px] gap-y-10 gap-x-20">
      <div className="w-full flex flex-col gap-y-6 text-center lg:text-start">
        <h1 className="text-theme-title-color font-pacifico text-[24px] xl:text-[48px]">
          Coffee is the best drink in the morning, it keeps you focused.
        </h1>
        <p className="font-poppins text-sm xl:text-lg text-theme-text-color">
          Mursaleen Ansari
        </p>
      </div>
      <div className="w-full flex justify-center lg:justify-start">
        <Image alt="" src={"/image/testimonial-coffee.svg"} width={550} height={336} />
      </div>
    </div>
  );
}

export default Banner;
