'use client';
import Link from 'next/link';
// import { ArrowLeftBoxIcon, ArrowRightBoxIcon } from '../icons';
import { useState, useEffect } from 'react';
import HeaderMenu from '../HeaderMenu';
import { Button, Flex } from 'antd';
import Image from 'next/image'; // Import Next.js Image component
import drawingCircle from '../../../../public/drawing-circle.png';
import taskIcon from '../../../../public/task-icon.svg';
import plannedLogo from '../../../../public/cart-outline.svg';
import foodIcon from '../../../../public/food-icon.svg';

const HeroSection: React.FC = () => {
    return (
        <>
            <section className='bg-[#ffff] overflow-hidden w-screen min-h-[130vh] sm:min-h-screen relative max-lg:h-auto bg-hero bg-no-repeat bg-cover h-fit'>
                <div>
                    <HeaderMenu />
                </div>
                <div className='flex flex-col items-center justify-center min-h-[calc(73vh)] lg:min-h-[calc(75vh)] text-center'>
                    <div className='mb-4 mt'>
                        <p className='text-7xl font-bold text-[#1E4D38]'>Healthy eating</p>
                        <div className='relative inline-block'>
                            <Image
                                src={drawingCircle}
                                alt="circle"
                                layout='intrinsic'
                               className="absolute top-[30px] right-[60px] sm:top-[-43px] sm:right-[-40px] h-auto pointer-events-none z-0"
                            />
                            <p className='z-10 inline-block text-7xl font-bold text-[#1E4D38] relative'>
                                made simple.
                            </p>
                        </div>
                    </div>
                    <p className='text-lg font-bold text-[#1E4D38]'>Plan healthy and delicious meals, generate a</p>
                    <p className='text-lg font-bold text-[#1E4D38]'>grocery list, shop & enjoy!</p>

                    <Button className='!bg-[#1E4D38] !text-[#fff] !rounded-3xl !px-12 !py-6 !font-poppins !text-lg font-bold mt-[2.1875rem]'>Get started</Button>
                </div>

                <section className="bg-[#E1E6C8] py-4 w-full absolute bottom-0 left-0">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        {/* Item 1 */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-4xl text-[#1E4D38] mb-4">
                                <Image
                                    src={taskIcon}
                                    alt="task-icon"
                                    width={64} // Set your desired width
                                    height={64} // Set your desired height
                                />
                            </div>
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold md:hidden">
                                Healthy recipe
                            </p>
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold hidden md:block">
                                Use the planned-for-you weekly <br /> meal plan or build your own
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-4xl text-[#1E4D38] mb-4">
                                <Image
                                    src={plannedLogo}
                                    alt="planned-logo"
                                    width={64} // Set your desired width
                                    height={64} // Set your desired height
                                />
                            </div>
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold md:hidden">
                                Meal planning
                            </p>
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold hidden md:block">
                                Automatically generate your weekly <br /> grocery list & shop online or in store
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-4xl text-[#1E4D38] mb-4">
                                <Image
                                    src={foodIcon}
                                    alt="food-icon"
                                    width={64} // Set your desired width
                                    height={64} // Set your desired height
                                />
                            </div>
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold md:hidden">
                                Grocery shopping
                            </p>
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold hidden md:block">
                                Access to 500+ healthy recipes <br /> that the whole family will love
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default HeroSection;
