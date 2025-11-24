import React from 'react';

const BlackFridayComponent: React.FC = () => {
    return (
        <div className="bg-pink-200 rounded-full flex items-center justify-center p-6 mb-10 text-center">
            <div>
                <span className="text-pink-600 text-base md:text-3xl font-semibold font-poppins italic">🌸 SPRING BONUS 🌸</span>
                <p className="text-pink-title text-[9px] md:text-sm mt-1 md:mt-6">
                    <span className='font-bold '>
                    Access Our Breakfast, Lunch & Snack Recipes AND Seasonal ‘Cookbook’ Folders for FREE! 
                    </span>
                    <br />
                    (normally a $70 in-app upgrade, included for a limited time only)
                </p>
            </div>
        </div>
    );
};

export default BlackFridayComponent;2