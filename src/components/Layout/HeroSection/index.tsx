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

const scrollToJoinNow = () => {
    const targetElement = document.getElementById("join-now");
    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duration in milliseconds (1 second)
    let startTime: number | null = null;

    function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollProgress = easeInOutQuad(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, scrollProgress);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smoother scroll animation
    function easeInOutQuad(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
};
const HeroSection: React.FC = () => {


    const classNameForText = "text-[#1E4D38] font-poppins lg:text-md font-semibold hidden lg:block"
    const classNameForTheIcon = "w-10 h-10 sm:h-7 sm:w-7  md:w-14 md:h-14 lg:h-10 lg:w-h-10"
    return (
        <>
            {/* <section className='bg-[#ffff] overflow-hidden w-screen min-h-screen relative max-lg:h-auto bg-hero bg-center bg-no-repeat bg-cover h-fit'> */}
            <section className='bg-[#ffff] overflow-hidden w-screen min-h-screen relative max-lg:h-auto bg-hero md:bg-center md:bg-[position-right_-70px_top_-50px] bg-no-repeat bg-cover h-fit sm:bg-[position-right_-40px_top_-43px] bg-[left_-110px_top_-12px] '>

                <div>
                    <HeaderMenu />
                </div>
                <div className='flex flex-col items-center justify-center min-h-[calc(73vh)] lg:min-h-[calc(75vh)] text-center'>
                    <div className='mb-4 mt'>
                        <p className='text-4xl sm:text5xl md:text-6xl lg:text-7xl font-bold text-[#1E4D38] z-50 relative'>Healthy cooking</p>
                        <div className='relative inline-block'>
                            {/* lg and up */}
                            <Image
                                src={drawingCircle}
                                alt="circle"
                                layout='intrinsic'
                                className="hidden lg:block absolute top-[-50px] right-[-70px] sm:top-[-43px] sm:right-[-40px] h-auto pointer-events-none"
                            />
                            {/* lg and down */}
                            <Image
                                src={drawingCircle}
                                alt="circle"
                                layout='intrinsic'
                                className="lg:hidden absolute top-[-27px] right-[-33px] md:top-[-43px] md:right-[-38px] h-auto pointer-events-none w-[200px] md:w-[300px] "
                            />
                            <p className='z-10 inline-block text-4xl sm:text5xl  md:text-6xl lg:text-7xl font-bold text-[#1E4D38] relative'>
                                made simple.
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-sm lg:text-lg font-bold text-[#1E4D38]'>Plan healthy and delicious meals, generate a</p>
                        <p className='text-sm lg:text-lg font-bold text-[#1E4D38]'>grocery list, shop & enjoy!</p>
                    </div>


                    <Button onClick={scrollToJoinNow} href="#join-now" className='!bg-[#1E4D38] !text-[#fff] !rounded-3xl !px-12 !py-6 !font-poppins !text-lg font-bold mt-[2.1875rem]'>Get started</Button>
                </div>

                <section className="bg-[#E1E6C8] py-4 w-full absolute bottom-0 left-0">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        {/* Item 1 */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-[#1E4D38] mb-4">
                                <Image
                                    src={taskIcon}
                                    alt="task-icon"
                                    // width={64} // Set your desired width
                                    // height={64} // Set your desired height
                                    className={classNameForTheIcon}
                                />
                            </div>
                            <p className="text-[#1E4D38] font-poppins text-xl lg:text-md font-semibold hidden lg:block">
                                Healthy recipes
                            </p>
                            {/* For md and down */}
                            <p className="text-[#1E4D38] font-poppins text-md sm:text-sm lg:text-xl font-semibold md:block lg:hidden">
                                Healthy <br /> recipes
                            </p>

                            <p className={classNameForText}>
                                Use the planned-for-you weekly <br /> meal plan or build your own
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-4xl text-[#1E4D38] mb-4">
                                <Image
                                    src={plannedLogo}
                                    alt="planned-logo"
                                    // width={64} // Set your desired width
                                    // height={64} // Set your desired height
                                    className={classNameForTheIcon}
                                />
                            </div>
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold hidden lg:block">
                                Meal planning
                            </p>
                            {/* For md and down */}
                            <p className="text-[#1E4D38] font-poppins text-md sm:text-sm lg:text-xl font-semibold md:block lg:hidden">
                                Meal <br /> planning
                            </p>
                            <p className={classNameForText}>
                                Automatically generate your weekly <br /> grocery list & shop online or in store
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-4xl text-[#1E4D38] mb-4">
                                <Image
                                    src={foodIcon}
                                    alt="food-icon"
                                    // width={64} // Set your desired width
                                    // height={64} // Set your desired height
                                    className={classNameForTheIcon}
                                />
                            </div>
                            <p className="text-[#1E4D38] font-poppins text-xl font-semibold hidden lg:block">
                                Grocery shopping
                            </p>
                            {/* For md and down */}
                            <p className="text-[#1E4D38] font-poppins text-md  sm:text-sm lg:text-xl font-semibold md:block lg:hidden">
                                Grocery <br /> shopping
                            </p>
                            <p className={classNameForText}>
                                Access to 250+ healthy recipes <br /> that the whole family will love
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default HeroSection;
