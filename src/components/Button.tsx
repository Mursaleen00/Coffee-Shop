import Image from "next/image";
import React from "react";

interface ButtonProps {
  text?: string;
  className?: string;
  icon?: boolean;
  iconLink?: string;
}
function Button(props: ButtonProps) {
  const { text, className, icon, iconLink } = props;
  return (
    <div>
      <button
        className={`px-7 flex gap-x-2 items-center text-sm md:text-lg font-semibold rounded-full font-poppins py-4 w-full ${
          className
            ? `${className}`
            : "bg-theme-second-color text-theme-title-color shadow-btn-shadow w-full"
        }`}
      >
        {text}
        {icon && (
          <Image src={`${iconLink}`} alt="icon" width={24} height={24} />
        )}
      </button>
    </div>
  );
}

export default Button;
