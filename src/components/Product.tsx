import React from "react";
import Button from "./Button";

function Product() {
  return (
    <div className="h-[307px] bg-theme-first-color rounded-t-[54px] md:rounded-t-[104px] absolute w-full -mt-36 flex justify-around items-center px-[150px]">
      <div className="flex flex-col gap-y-8">
        <Button
          text="Scroll Down"
          icon
          iconLink="/icon/down.svg"
          className="text-white bg-theme-first-color-alt shadow-btn-shadow-2"
        />
        <p className="text-white font-normal font-poppins text-lg">
          We strive to form deep partnerships with farmers from all over the
          world to create perspective together and form healthy working
          relationships built on trust and respect.
        </p>
      </div>
      <div className="">Check</div>
    </div>
  );
}

export default Product;
