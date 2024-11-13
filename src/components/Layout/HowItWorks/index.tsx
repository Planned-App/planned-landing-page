'use client'
import React, { useEffect } from "react";
import type { NextPage } from 'next';
import { Button } from 'antd';
import checkIcon from '../../../../public/check.svg'
import howItWorks from '../../../../public/how-it-works.png'
import Image from 'next/image';

const HowItWorks: NextPage<{}> = () => {

    return (
        <section className="px-4 md:px-8 lg:px-16 py-8 bg-white">
            <h2 className="text-3xl font-bold text-[#1E4D38] mb-[6.25rem] text-center">how it works</h2>
            <div className="relative overflow-auto flex justify-center">
                <Image
                    src={howItWorks.src} // Ensure the path 
                    alt="How It Works"
                    width={800} // Adjusted width for optimal display
                    height={1600} // Adjusted height for optimal display
                    className="w-full max-w-[600px] h-auto md:max-w-[800px] lg:max-w-[1000px]" // Responsive width limits
                />
            </div>
        </section>
    );
}

export default HowItWorks;
