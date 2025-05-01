'use client'
import React, { useEffect, useState } from "react";
import type { NextPage } from 'next';
import { Button } from 'antd';
import checkIcon from '../../../../public/check.svg'
import howItWorks from '../../../../public/how-it-works.png'
import howItWorksMobile from '../../../../public/how-it-works-mobile.png'
import Image from 'next/image';

const HowItWorks: NextPage<{}> = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const updateMobileCheck = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      updateMobileCheck();
      window.addEventListener('resize', updateMobileCheck);
      return () => window.removeEventListener('resize', updateMobileCheck);
    }, []);
  
    const selectedImage = isMobile ? howItWorksMobile.src : howItWorks.src;

    return (
        <section className="px-3 md:px-8 lg:px-16 py-8 bg-white">
            <h2 className="text-3xl font-bold text-[#1E4D38] mb-[3rem] md:mb-[6.25rem] text-center">how it works</h2>
            <div className="relative overflow-auto flex justify-center">
            <img
                    src={selectedImage}
                    alt="How It Works"
                    // width={800} // Adjusted width for optimal display
                    // height={1600} // Adjusted height for optimal display
                className="w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] h-auto"
                />
            </div>
        </section>
    );
}

export default HowItWorks;
