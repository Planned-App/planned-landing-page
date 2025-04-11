'use client'
import React, { useEffect, useState, useRef } from "react";
import type { NextPage } from 'next';
import { Button } from 'antd';

import MealCard from '@/components/MealCard';
import image1 from '../../../../public/footer-carousel/footer-carouse-1.png'
import image2 from '../../../../public/footer-carousel/footer-carouse-2.png'
import image3 from '../../../../public/footer-carousel/footer-carouse-3.png'
import image4 from '../../../../public/footer-carousel/footer-carouse-4.png'
import image5 from '../../../../public/footer-carousel/footer-carouse-5.png'
import image6 from '../../../../public/footer-carousel/footer-carouse-6.png'
import image7 from '../../../../public/footer-carousel/footer-carouse-7.png'
import image8 from '../../../../public/footer-carousel/footer-carouse-8.png'
import image9 from '../../../../public/footer-carousel/footer-carouse-9.png'
import image10 from '../../../../public/footer-carousel/footer-carouse-10.png'
import image11 from '../../../../public/footer-carousel/footer-carouse-11.png'
import image12 from '../../../../public/footer-carousel/footer-carouse-12.png'
import image13 from '../../../../public/footer-carousel/footer-carouse-13.png'
import image14 from '../../../../public/footer-carousel/footer-carouse-14.png'
import image15 from '../../../../public/footer-carousel/footer-carouse-15.png'
import image16 from '../../../../public/footer-carousel/footer-carouse-16.png'
import image17 from '../../../../public/footer-carousel/footer-carouse-17.png'
import image18 from '../../../../public/footer-carousel/footer-carouse-18.png'
import image19 from '../../../../public/footer-carousel/footer-carouse-19.png'
import image20 from '../../../../public/footer-carousel/footer-carouse-20.png'
import image21 from '../../../../public/footer-carousel/footer-carouse-21.png'

import styles from './Carousel.module.css';

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

const GetStartedCarousel: NextPage<{}> = () => {


    const partners = [
        { image: image1.src, title: 'Mediterranean Tzatziki Bowl', time: '30', calories: '504' },
        { image: image2.src, title: 'High Protein Berry Smoothie Bowl', time: '5', calories: '416' },
        { image: image3.src, title: 'Shrimp Tacos w/ Avocado Lime Crema', time: '35', calories: '544' },
        { image: image4.src, title: 'High Protein Mango Overnight Oats', time: '5', calories: '406' },
        { image: image5.src, title: 'Chicken Caesar Salad Wrap', time: '10', calories: '363' },
        { image: image6.src, title: 'Blueberry Muffin Smoothie', time: '5', calories: '358' },
        { image: image7.src, title: 'Cilantro Lime Chicken Thighs', time: '30', calories: '505' },
        { image: image8.src, title: 'Lemon Blueberry Baked Oats', time: '30', calories: '453' },
        { image: image9.src, title: 'Southwest Sweet Potato Skillet', time: '30', calories: '509' },
        { image: image10.src, title: 'Cucumber Avocado Salmon Bowl', time: '35', calories: '490' },

        { image: image11.src, title: 'Chocolate Chia Pudding', time: '5', calories: '490' },
        { image: image12.src, title: 'Meal Prep Teriyaki Chicken & Sesame Slaw', time: '30', calories: '487' },
        { image: image13.src, title: 'Green Goddess Salmon Salad', time: '30', calories: '531' },
        { image: image14.src, title: 'Cookie Dough Protein Bars', time: '30', calories: '197' },
        { image: image15.src, title: 'BBQ Chicken Stuffed Sweet Potatoes', time: '50', calories: '472' },
        { image: image16.src, title: 'Chocolate Chip Pumpkin Bread', time: '50', calories: '154' },
        { image: image17.src, title: 'Thai Chicken Lettuce Wraps', time: '30', calories: '507' },
        { image: image18.src, title: 'Chocolate Peanut Butter Protein Muffins', time: '30', calories: '154' },
        { image: image19.src, title: 'Cucumber Avocado Salmon Bowl', time: '25', calories: '490' },
        { image: image20.src, title: 'Grilled Spicy Chicken & Ranch Salad', time: '25', calories: '433' },
        { image: image21.src, title: 'Double Chocolate Brownie Protein Balls', time: '10', calories: '96' },

        // { image: image10.src, title: 'Chocolate Chia Pudding', time: '5', calories: '490' },


        // Add more partners as needed
    ];

    return (
        <section className='overflow-hidden'>
            {/* <Slider {...settings}>
                {[partners].map(partner => (
                    <MealCard
                        imageSrc={image.src}
                        title="High Protein Overnight Oats"
                        time={30}
                        calories={400}
                    />
                ))}
            </Slider> */}

            <div className="flex flex-col items-center min-h-24 bg-[#1E4D38] text-white">
                <h1 className="text-3xl font-bold my-8 text-center">
                    <span className='!text-[#E1E6C8]'>Join to access</span> HUNDREDS <br />
                    <span className='!text-[#E1E6C8]'> of healthy, delicious recipes!</span>
                </h1>
                <div className={`${styles.carouselWrapper} overflow-hidden whitespace-nowrap py-4`}>
                    <div className={`${styles.carouselContent} flex gap-6`}>
                        {partners.map((item, index) => (
                            <div key={index}>
                                <MealCard
                                    imageSrc={item.image}
                                    title={item.title}
                                    time={item.time}
                                    calories={item.calories}
                                />
                            </div>

                        ))}
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className="text-2xl font-bold my-8"> <span className='!text-[#E1E6C8]'>plus </span>NEW RECIPES  <span className='!text-[#E1E6C8]'> added </span>MONTHLY!</h2>
                    <Button onClick={scrollToJoinNow} href="#join-now" className='!bg-[#E1E6C8] !text-[#1E4D38] !rounded-3xl !px-14 !py-4 sm:!py-6 !font-poppins !text-base sm:!text-lg !font-bold !border-4 !border-[#FFFFFF] mb-8'>
                        JOIN NOW
                    </Button>
                </div>
            </div>


        </section>


    );
}

export default GetStartedCarousel;
