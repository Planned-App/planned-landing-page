import React from "react";
import Image from 'next/image'; // Import the Next.js Image component
import testimonials1 from '../../../../public/testimonials-image-1.svg';
import testimonials2 from '../../../../public/testimonials-image-2.svg';
import testimonials3 from '../../../../public/testimonials-image-3.svg';
import testimonialsSmall from '../../../../public/testimonials-small.svg';

const Testimonials = () => {
    return (
        <section className="px-4 md:px-8 lg:px-16 py-8 bg-[#ffff] overflow-x-auto">
            <h2 className="text-3xl font-bold text-[rgb(30,77,56)] mb-8 text-left">Testimonials</h2>
            <div>
                <div className='grid grid-cols-12 gap-6'>
                    {/* Grid Item 1 */}
                    <div className="xl:col-span-4 col-span-12 flex xl:flex-row flex-col border-4 border-[#E1E6C8] p-4 bg-[#1E4D38] text-white rounded-[30px]">
                        <div className='hidden xl:block xl:w-[40%]'>
                            <Image
                                src={testimonials1}
                                alt="testimonial image 1"
                                className='w-full rounded-[30px]'
                                layout='responsive' // Use responsive layout for better sizing
                            />
                        </div>
                        <div className='xl:hidden w-full'>
                            <Image
                                src={testimonialsSmall}
                                alt="testimonial small image"
                                className='w-full rounded-[30px]'
                                layout='responsive'
                            />
                        </div>

                        <div className='flex flex-col flex-1 xl:ml-5 ml-0 mt-3'>
                            <p className="text-lg mb-2 text-[#E1E6C8]">ONE WORD – OBSESSED!</p>
                            <p className='flex-1 text-lg text-[#E1E6C8]'>
                                “I joined Planned a few months ago and am OBSESSED! It has made eating healthy so much easier and my whole family loves the meals!”
                            </p>
                            <p className="mt-4 text-[#E1E6C8] text-md font-bold">– SALLY J.</p>
                        </div>
                    </div>

                    {/* Grid Item 2 */}
                    <div className="col-span-2 xl:flex flex-col border-4 border-[#1E4D38] p-4 rounded-[30px] bg-[#FFFF] hidden">
                        <p className="text-lg font-bold mb-2 text-[#1E4D38]">FAMILY APPROVED</p>
                        <p className='flex-1 text-lg text-[#1E4D38]'>
                            “Planned has made eating healthy so much easier and my whole family loves the meals! Join this app!”
                        </p>
                        <p className="mt-4 text-[#1E4D38] text-md font-bold">– SALLY J.</p>
                    </div>

                    {/* Grid Item 3 */}
                    <div className="col-span-4 xl:flex flex-row border-4 border-[#1E4D38] p-4 rounded-[30px] bg-[#F4F6F0] hidden">
                        <div className='w-2/3 flex flex-col mr-5 text-left'>
                            <p className="text-lg mb-2 font-bold">SAVES ME SO MUCH TIME</p>
                            <p className='flex-1 text-lg'>
                                “I joined Planned a few months ago and am OBSESSED! It saves me so much time each week and my whole family loves the meals!”
                            </p>
                            <p className="mt-4 text-md font-bold">– SALLY J.</p>
                        </div>
                        <div className='flex justify-end'>
                            <Image
                                src={testimonials2}
                                alt="testimonial image 2"
                                className='w-[90%] rounded-[30px]'
                                layout='responsive' // Use responsive layout for better sizing
                            />
                        </div>
                    </div>

                    {/* Grid Item 4 */}
                    <div className="xl:col-span-2 col-span-12 flex flex-col border-4 border-[#1E4D38] p-4 rounded-[30px] bg-[#E1E6C8]">
                        <p className="text-lg font-bold mb-2 text-[#1E4D38]">LOVE IT</p>
                        <p className='flex-1 text-lg'>
                            “This is the best app! I love all of the features and the recipes are all super delicious!”
                        </p>
                        <p className="mt-4 font-bold">– SALLY J.</p>
                    </div>

                    {/* SECOND ROW */}
                    {/* Grid Item 1 */}
                    <div className="xl:col-span-3 col-span-12 flex flex-col border-4 border-[#E1E6C8] p-4 bg-[#FFFF] rounded-[30px]">
                        <div className='flex justify-center'>
                            <Image
                                src={testimonials3}
                                alt="testimonial image 3"
                                className='w-[100%] h-auto rounded-[30px]'
                                layout='responsive' // Use responsive layout for better sizing
                            />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <p className="text-lg font-bold mt-2 text-[#1E4D38]">MY FAVORITE APP</p>
                            <p className='flex-1 text-lg'>
                                “Planned has made eating healthy so much easier! My favorite app!”
                            </p>
                            <p className="text-md font-bold">– SALLY J.</p>
                        </div>
                    </div>

                    {/* Grid Item 2 */}
                    <div className="col-span-4 xl:flex flex-col border-4 border-[#1E4D38] p-4 rounded-[30px] bg-[#E1E6C8] hidden">
                        <p className="text-lg font-bold mb-6 text-[#1E4D38]">I SAVE SO MUCH MONEY</p>
                        <p className='flex-1 text-xl'>
                            “I joined Planned a few months ago and am OBSESSED! It has made eating healthy so much easier and my whole family loves the meals! I have also saved so much money on my weekly grocery bill and waste less food since I only buy what I need! Love this app!!!”
                        </p>
                        <p className="font-bold">– SALLY J.</p>
                    </div>

                    {/* Grid Item 3 */}
                    <div className="col-span-2 xl:flex flex-col border-4 border-[#E1E6C8] p-4 rounded-[30px] bg-[#1E4D38] hidden">
                        <p className="text-lg font-bold mb-4 text-[#E1E6C8]">LOVE THE VARIETY</p>
                        <p className='flex-1 text-[#E1E6C8] text-xl font-normal'>
                            “Planned has made eating healthy so much easier and my whole family loves the meals! I love the variety of the meals! Thank you!”
                        </p>
                        <p className="mt-4 text-[#E1E6C8] font-bold">– SALLY J.</p>
                    </div>

                    {/* Grid Item 4 */}
                    <div className="col-span-3 xl:flex flex-col border-4 border-[#E1E6C8] p-4 bg-[#FFFF] rounded-[30px] hidden">
                        <div className='flex justify-center'>
                            <Image
                                src={testimonials3}
                                alt="testimonial image 3"
                                className='w-[100%] h-auto rounded-[30px]'
                                layout='responsive' // Use responsive layout for better sizing
                            />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <p className="text-lg font-bold mt-2 text-[#1E4D38]">MY FAVORITE APP</p>
                            <p className='flex-1 text-lg'>
                                “Planned has made eating healthy so much easier! My favorite app!”
                            </p>
                            <p className="text-md font-bold">– SALLY J.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
