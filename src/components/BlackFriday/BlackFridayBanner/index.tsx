import React, { useEffect, useState } from 'react';
import HeaderMenu from '../../Layout/HeaderMenu';

const BlackFridayBanner: React.FC = () => {
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
        <div className="bg-[#F4F6F0] text-[#1E4D38] relative">
            <div className="absolute top-0 left-0 w-full md:block hidden">
                <HeaderMenu />
            </div>
            <div className="flex flex-col items-center justify-center py-6 md:px-[3.1875rem] px-[25px] md:pt-20 lg:pt-6">
                <div className="text-[#1E4D38] font-bold text-lg mb-2">
                    <span className="px-2 text-[20px] md:text-[34px] font-poppins font-semibold italic">🎉 BLACK FRIDAY SALE IS LIVE 🎉</span>
                </div>

                <div className="text-xs md:text-md font-normal text-[#1E4D38] font-poppins justify-center text-center">
                    <span>
                      <span className='font-bold'>SAVE OVER 50% ON YEARLY MEMBERSHIPS!</span>

                    </span>
                </div>

            </div>
        </div>
    );
};

export default BlackFridayBanner;