"use client";
import Image from "next/image";
import logo from "../../../../public/logo.png"; // Replace with the actual path to your logo
import androidLogo from "../../../public/google-play.png"; // Replace with the actual path to your Android logo
import appleLogo from "../../../public/apple-store.png"; // Replace with the actual path to your Apple logo
import HeaderMenu from "@/components/Layout/HeaderMenu";
import { useEffect } from "react";

const SuccessPage: React.FC = () => {
  useEffect(() => {
    const waitForTikTokPixel = async () => {
      const countryRes = await fetch("https://ipwho.is/");
      const data = await countryRes.json();
      const country = data?.country || "Unknown";

      let attempts = 0;
      const maxAttempts = 10;

      const checkPixel = () => {
        if (window.ttq) {
          window.ttq.track("PURCHASE_LINK_SUCCESS_EVENT", { content_name: country, content_type: "success_page" });
          console.log("✅ TikTok Pixel fired with country:", country);
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(checkPixel, 500); // retry every 500ms
        } else {
          console.warn("⚠️ TikTok Pixel not loaded after multiple attempts.");
        }
      };

      checkPixel();
    };

    waitForTikTokPixel();
  }, []);

  return (
    <section className="bg-[#F4F6F0] min-h-screen flex flex-col justify-between items-center text-center p-6">
      {/* Header with Logo */}
      <div className="absolute top-4 left-4">
        <HeaderMenu />
      </div>

      {/* Main content wrapper */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Main message */}
        <p className="text-2xl md:text-5xl lg:text-[66px] font-bold text-[#1E4D38] mb-4 md:mb-6 lg:mb-8">
          Welcome to Healthy Kitchen!
        </p>
        <p className="text-2xl md:text-5xl lg:text-[37px] font-bold text-[#1E4D38] mb-6 md:mb-10 lg:mb-12 underline">
          Your App Login Info is in your email inbox.
        </p>
        <p className="text-base font-bold md:text-2xl lg:text-[30px] text-[#1E4D38] mb-0 md:mb-6 lg:mb-8">
          Please click below to download the app
        </p>
        <p className="text-base font-bold md:text-2xl lg:text-[30px] text-[#1E4D38] mb-6 md:mb-10 lg:mb-12">
          and get started!
        </p>

        {/* App Store Links */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6 items-center">
          {/* Android App Link */}
          <a
            href="https://play.google.com/store/apps/details?id=com.planned.app" // Replace with your actual Play Store link
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

          {/* Apple App Link */}
          <a
            href="https://apps.apple.com/us/app/planned-healthy-meal-planning/id6714478797" // Replace with your actual App Store link
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

      {/* Footer message at the bottom */}
      <p className="text-base md:text-2xl lg:text-3xl text-[#1E4D38] mb-4 font-bold">
        All the details are also in your email inbox!
      </p>
    </section>
  );
};

export default SuccessPage;
