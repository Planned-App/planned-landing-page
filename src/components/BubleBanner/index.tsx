import React from "react";
// change this path to where you saved the green bubble image (SVG/PNG)
import bubbleBg from "../../../public/bubble-bg.svg";
import bubbleBgRight from "../../../public/bubble-right.svg";

type Props = {
  className?: string;
};

export const BlackFridayBanner: React.FC<Props> = ({ className = "" }) => {
  return (
    <div className={`relative inline-block w-[125px] md:w-[200px] lg:w-[280px] ${className}`}>
      {/* MOBILE + TABLET VERSION (sm → md) */}
      <img
        src={bubbleBgRight.src}
        alt="Black Friday Sale Right"
        className="w-full h-auto block md:hidden"
      />

      {/* DESKTOP VERSION (md and above) */}
      <img
        src={bubbleBg.src}
        alt="Black Friday Sale"
        className="w-full h-auto hidden md:block"
      />

      {/* centered text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pb-3">
        <p className="text-white font-bold text-[7px] md:text-sm">
          BLACK FRIDAY SALE
        </p>
        <p className="text-white font-extrabold text-[10px] md:text-2xl leading-tight mt-1">
          50% OFF! <span role="img" aria-label="party">🎉</span>
        </p>
      </div>
    </div>
  );
};