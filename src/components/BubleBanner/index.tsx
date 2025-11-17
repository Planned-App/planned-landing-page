import React from "react";
// change this path to where you saved the green bubble image (SVG/PNG)
import bubbleBg from "../../../public/bubble-bg.svg";

type Props = {
  className?: string;
};

export const BlackFridayBanner: React.FC<Props> = ({ className = "" }) => {
  return (
    <div className={`relative inline-block w-[109px] md:w-[200px] lg:w-[280px] ${className}`}>
      {/* bubble background */}
      <img
        src={bubbleBg.src}
        alt="Black Friday Sale"
        className="w-full h-auto block"
      />

      {/* centered text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-white font-bold text-[6px] md:text-sm">
          BLACK FRIDAY SALE
        </p>
        <p className="text-white font-extrabold text-[8px] md:text-2xl leading-tight mt-1">
          50% OFF! <span role="img" aria-label="party">🎉</span>
        </p>
      </div>
    </div>
  );
};