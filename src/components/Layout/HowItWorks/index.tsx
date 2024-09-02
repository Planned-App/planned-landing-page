'use client'
import React, { useEffect } from "react";
import type { NextPage } from 'next';
import { Button } from 'antd';
import checkIcon from '../../../../public/check.svg'
import howItWorks from '../../../../public/how-it-works.png'
import Image from 'next/image';

const HowItWorks: NextPage<{}> = () => {

    return (
        <section className="px-4 md:px-8 lg:px-16 py-8 bg-gray-100 " >
            <h2 className="text-3xl font-bold text-[#1E4D38] mb-8 text-left">how it works</h2>
            <div className="relative overflow-auto max-w-full flex justify-center">
                <Image
                    src={howItWorks.src} // Ensure the path is correct
                    alt="How It Works"
                    width={1000} // Use the natural width of your image in pixels
                    height={2000} // Use the natural height of your image in pixels
                    className="w-full h-auto" // Makes the image responsive
                />

                {/* <picture>
                    <img
                        src={howItWorks.src} // Adjust the path to your image
                        alt="How It Works"
                        className="w-full h-auto" // Adjust width and height as needed
                    />
                </picture> */}
            </div>
        </section>
    );
}

export default HowItWorks;
