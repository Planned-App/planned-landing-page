'use client'
import React, { useEffect, useState, useRef } from "react";
import type { NextPage } from 'next';
import { Button } from 'antd';

import MealCard from '@/components/MealCard';
import image from '../../../../public/footer-image-carousel.png'
import styles from './Carousel.module.css';

const GetStarted: NextPage<{}> = () => {


    const partners = [
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },
        { image: image.src },


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
                <h1 className="text-3xl font-bold my-8">
                    <span className='!text-[#E1E6C8]'>get access to</span> HUNDREDS <br />
                    <span className='!text-[#E1E6C8]'> of healthy, delicious recipes!</span>
                </h1>
                <div className={`${styles.carouselWrapper} overflow-hidden whitespace-nowrap py-4`}>
                    <div className={`${styles.carouselContent} flex gap-6`}>
                        {partners.map((item, index) => (
                            <div key={index}>
                                <MealCard
                                    imageSrc={item.image}
                                    title="High Protein Overnight Oats"
                                    time={30}
                                    calories={400}
                                />
                            </div>

                        ))}
                    </div>
                </div>
                <h2 className="text-2xl font-bold my-8"> <span className='!text-[#E1E6C8]'>plus </span>NEW RECIPES  <span className='!text-[#E1E6C8]'> added </span>WEEKLY!</h2>
                <Button className='!bg-[#E1E6C8] !text-[#1E4D38] !rounded-3xl !px-14 !py-4 sm:!py-6 !font-poppins !text-base sm:!text-lg !font-bold !border-4 !border-[#FFFFFF] mb-8'>
                    JOIN NOW
                </Button>
            </div>


        </section>


    );
}

export default GetStarted;
