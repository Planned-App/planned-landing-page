'use client'
import React, { useEffect } from "react";
import type { NextPage } from 'next';
import { Button } from 'antd';
import checkIcon from '../../../../public/check.svg'

const GetStarted: NextPage<{}> = () => {

    return (
        <section className="px-4 md:px-8 lg:px-16 py-8 bg-[#F4F6F0]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E4D38] mb-6 md:mb-8 text-left">get Started</h2>
            <div className="flex flex-col items-center py-8 px-4 min-h-screen md:py-12 md:px-6">
                <p className="text-center text-[#000000] text-base md:text-xl font-medium mb-6 md:mb-8">
                    Our goal is to make healthy eating as easy and streamlined as possible
                    for you! By <br /> joining Planned, your commitment to eating healthy becomes
                    more effortless than ever.
                </p>
                <p className="text-center text-[#000000] text-base md:text-xl font-medium mb-6 md:mb-8">
                    Choose between a budget-friendly, monthly billing option of $12.99/USD a
                    month, or <br /> choose the annual plan to save 25%!
                </p>
                <div className='hidden md:grid md:grid-cols-12 md:gap-6'>
                    <div className='col-span-6 '>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8 items-center justify-center">
                            <Button className='!bg-[#1E4D38] !text-[#fff] !rounded-3xl !px-6 sm:!px-12 !py-4 sm:!py-6 !font-poppins !text-base sm:!text-lg !font-bold'>
                                PAY MONTHLY
                            </Button>
                        </div>
                        <div className="bg-white shadow-md !border-4 !border-[#1E4D38] p-4 sm:p-6 max-w-xl !rounded-3xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1E4D38] mb-4 text-center !font-poppins flex justify-center items-baseline">
                                $12
                                <span className="text-[#E1E6C8] font-bold !font-poppins text-[1.25rem] md:text-[1.5rem] ml-2">
                                    USD/month
                                </span>
                            </h2>

                            <ul className="space-y-3 md:space-y-4 text-[#000000] text-base md:text-xl font-medium">
                                {[
                                    "Weekly planned-for-you dinner menu",
                                    "Access to recipe folders with over 500+ healthy recipes",
                                    "Build a fully customizable meal plan including breakfast, lunch, snacks and dinner",
                                    "Adjust serving sizes for each meal to cater to your family",
                                    "Swap out ingredients based on your diet or allergies, and the macros automatically adjust",
                                    "Generate your grocery list and choose to have your groceries delivered or shop in-store"
                                ].map((text, index) => (
                                    <li key={index} className="flex items-start">
                                        <picture className="flex-shrink-0">
                                            <img src={checkIcon.src} alt="check" className="w-5 h-5 md:w-6 md:h-6" />
                                        </picture>
                                        <span className="ml-3 md:ml-4 flex-1 text-base md:text-[16px] font-poppins">{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className='flex justify-center items-center mt-4 md:mt-6'>
                                <Button className='!bg-[#E1E6C8] !text-[#1E4D38] !rounded-3xl !px-14 !py-4 sm:!py-6 !font-poppins !text-base sm:!text-lg !font-bold'>
                                    JOIN NOW
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6 '>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8 items-center justify-center">

                            <Button className='!bg-[#ffff] !border-4 !border-[#1E4D38] !text-[#1E4D38] !rounded-3xl !px-6 sm:!px-12 !py-4 sm:!py-6 !font-poppins !text-base sm:!text-lg !font-bold'>
                                PAY ANNUALLY
                            </Button>
                        </div>
                        <div className="bg-white shadow-md !border-4 !border-[#1E4D38] p-4 sm:p-6 max-w-xl !rounded-3xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1E4D38] mb-4 text-center !font-poppins flex justify-center items-baseline">
                                $99
                                <span className="text-[#E1E6C8] font-bold !font-poppins text-[1.25rem] md:text-[1.5rem] ml-2">
                                    USD/month
                                </span>
                            </h2>

                            <ul className="space-y-3 md:space-y-4 text-[#000000] text-base md:text-xl font-medium">
                                {[
                                    "Weekly planned-for-you dinner menu",
                                    "Access to recipe folders with over 500+ healthy recipes",
                                    "Build a fully customizable meal plan including breakfast, lunch, snacks and dinner ",
                                    "Adjust serving sizes for each meal to cater to your family",
                                    "Swap out ingredients based on your diet or allergies, and the macros automatically adjust",
                                    "Generate your grocery list and choose to have your groceries delivered or shop in-store"
                                ].map((text, index) => (
                                    <li key={index} className="flex items-start">
                                        <picture className="flex-shrink-0">
                                            <img src={checkIcon.src} alt="check" className="w-5 h-5 md:w-6 md:h-6" />
                                        </picture>
                                        <span className="ml-3 md:ml-4 flex-1 text-base md:text-[16px] font-poppins">{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className='flex justify-center items-center mt-4 md:mt-6'>
                                <Button className='!bg-[#E1E6C8] !text-[#1E4D38] !rounded-3xl !px-14 !py-4 sm:!py-6 !font-poppins !text-base sm:!text-lg !font-bold'>
                                    JOIN NOW
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 gap-6 md:hidden'>
                    <div className="flex flex-col space-y-4 items-center">
                        <div className="flex flex-row space-x-4">
                            <Button className='!bg-[#1E4D38] !text-[#fff] !rounded-3xl !px-6 sm:!px-12 !py-4 sm:!py-6 !font-poppins !text-base sm:!text-lg !font-bold'>
                                PAY MONTHLY
                            </Button>
                            <Button className='!bg-[#ffff] !border-4 !border-[#1E4D38] !text-[#1E4D38] !rounded-3xl !px-6 sm:!px-12 !py-4 sm:!py-6 !font-poppins !text-base sm:!text-lg !font-bold'>
                                PAY ANNUALLY
                            </Button>
                        </div>

                        <div className="bg-white shadow-md !border-4 !border-[#1E4D38] p-4 sm:p-6 max-w-xl !rounded-3xl mt-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1E4D38] mb-4 text-center !font-poppins flex justify-center items-baseline">
                                $12
                                <span className="text-[#E1E6C8] font-bold !font-poppins text-[1.25rem] md:text-[1.5rem] ml-2">
                                    USD/month
                                </span>
                            </h2>

                            <ul className="space-y-3 md:space-y-4 text-[#000000] text-base md:text-xl font-medium">
                                {[
                                    "Weekly planned-for-you dinner menu",
                                    "Access to recipe folders with over 500+ healthy recipes",
                                    "Build a fully customizable meal plan including breakfast, lunch, snacks and dinner",
                                    "Adjust serving sizes for each meal to cater to your family",
                                    "Swap out ingredients based on your diet or allergies, and the macros automatically adjust",
                                    "Generate your grocery list and choose to have your groceries delivered or shop in-store"
                                ].map((text, index) => (
                                    <li key={index} className="flex items-start">
                                        <picture className="flex-shrink-0">
                                            <img src={checkIcon.src} alt="check" className="w-5 h-5 md:w-6 md:h-6" />
                                        </picture>
                                        <span className="ml-3 md:ml-4 flex-1 text-base md:text-[16px] font-poppins">{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className='flex justify-center items-center mt-4 md:mt-6'>
                                <Button className='!bg-[#E1E6C8] !text-[#1E4D38] !rounded-3xl !px-14 !py-4 sm:!py-6 !font-poppins !text-base sm:!text-lg !font-bold'>
                                    JOIN NOW
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default GetStarted;
