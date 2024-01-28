import Image from "next/image";
import React from "react";

function History() {
  return (
    <div className="bg-white rounded-t-[54px] md:rounded-t-[104px] -mt-28 flex flex-col-reverse lg:flex-row justify-center lg:justify-between w-full items-center lg:px-[150px] px-4 pb-[172px] pt-10 lg:pt-[140px] gap-y-10 gap-x-20">
      <div className="w-full flex justify-center lg:justify-start">
        <Image alt="" src={"/image/about.svg"} width={550} height={336} />
      </div>
      <div className="w-full flex flex-col gap-y-6 text-center lg:text-start">
        <h1 className="text-theme-title-color font-pacifico text-[24px] xl:text-[48px]">
          Our History
        </h1>
        <p className="font-poppins text-sm xl:text-lg text-theme-text-color">
          We make and grow the best coffee in Peru, accompanying families since
          1930, with professional workers who harvest, collect and select the
          coffee with quality work, thus providing exquisite coffee to enjoy
          together as a family.
        </p>
      </div>
    </div>
  );
}

export default History;
