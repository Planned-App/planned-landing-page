import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/planned-logo.png';
import HeaderMenu from '../../Layout/HeaderMenu';

const SpringBonusBanner: React.FC = () => {
    const [showBreak, setShowBreak] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowBreak(window.innerWidth >= 768); // Tailwind's md breakpoint
        };

        // Set the initial state based on the current window size
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="bg-[#FFECFA] text-[#1E4D38] relative">

            {/* <div className="flex items-center"> */}
            <div className="absolute top-0 left-0 w-full md:block hidden">
                <HeaderMenu />
            </div>
            {/* </div> */}
            {/* <div className="flex mb-4">
                <div className="w-3/4 bg-yellow-500 h-12"> 123123</div>
                <div className="w-1/4 bg-yellow-400 h-12">12312</div>
            </div> */}
            <div className="flex flex-col items-center justify-center py-6 md:px-[3.1875rem] px-[25px]">
                <div className="text-[#CC2060] font-bold text-lg mb-2">
                    <span className="px-2 text-[28px] md:text-[34px] font-poppins font-semibold italic">🌸 SPRING BONUS 🌸</span>
                </div>

                <div className="text-sm md:text-md font-normal text-[#A91A4E] font-poppins justify-center text-center">
                    <span>
                        Get <span className='font-bold'>FREE access</span> to our Breakfast, Lunch & Snack Recipes and Seasonal &apos;Cookbook&apos; Folders included with 
                        {showBreak && <br />}
                        <span>
                            your membership – for a limited time only! (A $70 value, now included at no extra cost.)
                        </span>
                    </span>

                </div>

            </div>
        </div>
    );
};

export default SpringBonusBanner;