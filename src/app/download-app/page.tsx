"use client";
import Image from "next/image";
import androidLogo from "../../../public/google-play.png";
import appleLogo from "../../../public/apple-store.png";
import HeaderMenu from "@/components/Layout/HeaderMenu";
import { useEffect } from "react";

const DownloadApp: React.FC = () => {

  return (
    <section className="bg-[#F4F6F0] min-h-screen flex flex-col justify-between items-center text-center p-6">
      {/* Header with Menu */}
      <div className="absolute top-4 left-4">
        <HeaderMenu />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <p className="text-2xl md:text-5xl lg:text-[50px] font-bold text-[#1E4D38] mb-8">
          You can download the app here
        </p>

        {/* App Store Links */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6 items-center">
          {/* Android */}
          <a
            href="https://play.google.com/store/apps/details?id=com.planned.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src={androidLogo}
              alt="Download on Google Play"
              width={150}
              height={50}
              className="w-40 h-auto sm:w-44 md:w-48 lg:w-56"
            />
          </a>

          {/* Apple */}
          <a
            href="https://apps.apple.com/us/app/planned-healthy-meal-planning/id6714478797"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src={appleLogo}
              alt="Download on the App Store"
              width={150}
              height={50}
              className="w-40 h-auto sm:w-44 md:w-48 lg:w-56"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;