'use client';
import Link from 'next/link';
// import { ArrowLeftBoxIcon, ArrowRightBoxIcon } from '../icons';
import { useState, useEffect } from 'react';
import HeaderMenu from '../HeaderMenu';
import { Button, Flex } from 'antd';
import drawingCircle from '../../../../public/drawing-circle.png';
import taskIcon from '../../../../public/task-icon.svg';
import plannedLogo from '../../../../public/cart-outline.svg';
import foodIcon from '../../../../public/food-icon.svg';

const HeroSection: React.FC = ({

}) => {

    return (
        <>
            <section className='bg-[#ffff] overflow-hidden w-screen min-h-screen relative max-lg:h-auto bg-hero bg-no-repeat bg-cover'>
                <div >
                    <HeaderMenu />
                </div>
                <div className='flex flex-col items-center justify-center md:min-h-[calc(73vh)] lg:min-h-[calc(75vh)] text-center'>
                    <div className='mb-4'>
                        <p className='text-7xl font-bold text-[#1E4D38]'>Healthy eating</p>
                        <div className='relative inline-block'>
                            <img
                                src={drawingCircle.src}
                                alt="circle"
                                className="absolute top-[-60%] left-[35%] w-[70%] h-auto pointer-events-none z-0"
                            />
                            <p className='relative z-10 inline-block text-7xl font-bold text-[#1E4D38]'>
                                made simple.
                            </p>
                        </div>
                    </div>
                    <p className='text-lg font-bold text-[#1E4D38]'>Plan healthy and delicious meals, generate a</p>
                    <p className='text-lg font-bold text-[#1E4D38]'>grocery list, shop & enjoy!</p>

                    <Button className='!bg-[#1E4D38] !text-[#fff] !rounded-3xl !px-12 !py-6 !font-poppins !text-lg font-bold mt-[2.1875rem]'>Get started</Button>
                </div>

                <section className="bg-[#E1E6C8] py-8 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6 text-center">
                        {/* <!-- Item 1 --> */}
                        <div className="flex flex-col items-center flex-1">
                            <div className="text-4xl text-[#1E4D38] mb-4">
                                <img
                                    src={taskIcon.src}
                                    alt="task-icon"
                                // className="absolute top-[-60%] left-[35%] w-[70%] h-auto pointer-events-none z-0"
                                />
                            </div>
                            {/* <p className='text-lg font-bold text-[#1E4D38]'>grocery list, shop & enjoy!</p> */}
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold">
                                Use the planned-for-you weekly <br /> meal plan or build your own
                            </p>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div className="flex flex-col items-center flex-1">
                            <div className="text-4xl text-[#1E4D38] mb-4">
                                {/* <!-- Replace this with your icon --> */}
                                <img
                                    src={plannedLogo.src}
                                    alt="task-icon"
                                // className="absolute top-[-60%] left-[35%] w-[70%] h-auto pointer-events-none z-0"
                                />
                            </div>
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold">
                                Automatically generate your weekly <br /> grocery list & shop online or in store
                            </p>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div className="flex flex-col items-center flex-1">
                            <div className="text-4xl text-[#1E4D38] mb-4">
                                {/* <!-- Replace this with your icon --> */}
                                <img
                                    src={foodIcon.src}
                                    alt="task-icon"
                                // className="absolute top-[-60%] left-[35%] w-[70%] h-auto pointer-events-none z-0"
                                />
                            </div>
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold">
                                Access to 500+ healthy recipes  <br /> that the whole family will love
                            </p>
                        </div>
                    </div>

                </section>

            </section>
            
        </>
    );
};

export default HeroSection;