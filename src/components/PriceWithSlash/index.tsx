import React from "react";

type PriceWithSlashProps = {
  value: string | number;
  className?: string;
  textFontSize?: string;
  textFontStyle?: string;
};

export const PriceWithSlash: React.FC<PriceWithSlashProps> = ({
  value,
  className = "",
  textFontSize = "text-2xl",
  textFontStyle = "font-bold"
}) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* price text */}
      <span className={`text-red-600 ${textFontStyle}  ${textFontSize} leading-none`}>
        ${value}
      </span>

      {/* slash line */}
       <span
        className="
          pointer-events-none
          absolute
          top-[35%]
          left-[-10%]
          w-[120%]
          h-[0.7px]
          bg-[#E5331A]
          rotate-[17deg]
        "
      />
    </span>
  );
};