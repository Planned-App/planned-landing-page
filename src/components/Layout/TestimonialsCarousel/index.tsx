'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import image1 from '../../../../public/testimonials/testimonials1.png'
import image2 from '../../../../public/testimonials/testimonials2.png'
import image3 from '../../../../public/testimonials/testimonials3.png'
import image4 from '../../../../public/testimonials/testimonials4.png'
import image5 from '../../../../public/testimonials/testimonials5.png'
import image6 from '../../../../public/testimonials/testimonials6.png'

// Define a type for the testimonial data
interface Testimonial {
    id: number;
    title: string;
    text: string;
    author: string;
    image: string; // URL for the image
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        title: "“EVERYTHING IS SO HEALTHY AND DELICIOUS!”",
        text: `I love having access to the meal plans on the Planned app! It's all very organized, every week there is a new plan and everything is so healthy and delicious! When I am in a rut or need help with meal planning it is my go to. There are recipes for all meals and you can easily find anything in the app by meal type or meat type. It's very convenient!`,
        author: "-KYLEE W.",
        image: image1.src,
    },
    {
        id: 2,
        title: "“PLANNED HAS TOTALLY TRANSFORMED THE WAY MY HUSBAND AND I EAT”",
        text: `Planned has totally transformed the way my husband and I eat. We lead a busy life with 3 small children and the simple meals make planning, prepping, and  eating healthy an easy task - and the best part is - everything is SO delicious!!`,
        author: "-JILLIAN V.",
        image: image2.src,
    },
    {
        id: 3,
        title: "“I ABSOLUTELY LOVE PLANNED!”",
        text: `I absolutely LOVE Planned! It is so easy to use and the recipes are fabulous! I have been cooking for a few years now, but this has leveled up my game. I buy proteins in bulk, so having the dinner recipe library divided into folders by main ingredient is so helpful for me. My favorite recipes to make are the southwestern sweet potato skillet, the egg roll in a bowl, and the chocolate chip pumpkin bread!`,
        author: "-KALEY D.",
        image: image3.src,
    },
    {
        id: 4,
        title: "“PLANNED HAS TAKEN SO MUCH STRESS OUT OF MEAL PLANNING”",
        text: `I absolutely love using Planned for my meal prepping! So often, I feel stuck on what to make, but Planned always has easy, healthy, and quick recipes ready to go. I recently tried the High Protein Strawberry Shortcake, and it was absolutely delicious! I’m also impressed by the variety and that there’s something for every meal of the day. It’s taken so much stress out of meal planning! Plus, the layout is super intuitive, making it easy to find exactly what I need. If you’re looking for fresh recipe ideas with an interface that’s a breeze to navigate, I highly recommend trying out Planned!
`,
        author: "-JESS R.",
        image: image4.src,
    },
    {
        id: 5,
        title: "“EVEN MY TWO YEAR OLD LOVES THE RECIPES!”",
        text: `Planned is one of the best purchases I made in 2024. Each week I used to spend so much time scrolling through Pinterest recipes looking for something my family would enjoy. I decided to purchase a Planned subscription and I absolutely love it. I have made so many recipes and each one is absolutely delicious. I appreciate how the meals are balanced and use healthy ingredients. If you are looking for an easy to use platform with meals the whole family will love then Planned is for you! Even my two year old loves the recipes! She’s eaten every single one!
`,
        author: "-MELISSA B.",
        image: image5.src,
    },
    {
        id: 6,
        title: "“DELICIOUS, SIMPLE AND WHOLESOME MEALS”",
        text: `Planned has been one of the best additions to my weekly routine! Not only am I making delicious, simple and wholesome meals but they require minimal ingredients and everything on the app makes it easy to put together a grocery list and just follow a meal plan. There hasn't been one recipe that I didn't want to make ten times over again, I love Planned! 
`,
        author: "-MIMI M.",
        image: image6.src,
    },
    // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 flex flex-col items-center relative">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E4D38] mb-8 text-center">what customers are saying</h2>
            <div className="w-full bg-[#fff] relative flex items-center justify-center px-6 py-6 ">
                <Swiper
                    autoHeight={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    // cssMode={true}
                    navigation={true}
                    // pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    // pagination={{
                    //     clickable: true,
                    //     dynamicBullets: true,
                    // }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {testimonials.map(({ id, title, text, author, image }) => (
                        <SwiperSlide key={id} className="flex justify-center items-center">
                            <div className="hidden lg:flex md:flex-row flex-col items-center bg-[#fff] mx-auto p-6 md:pl-16 lg:px-20 xl:px-60 pt-6 md:py-8 lg:pt-14 xl:pt-20 lg:w-full relative">
                                <Image
                                    src={image}
                                    alt={author}
                                    width={320}
                                    height={320}
                                    className="rounded-md mb-4 md:mb-0 mr-0 md:mr-6 w-52 h-52 lg:w-80 lg:h-80 object-cover"
                                />
                                <div className="flex-1 text-center md:text-left">
                                    <p className="font-bold text-xl md:text-[2.25rem] text-[#1E4D38] mb-4 leading-relaxed">{title}</p>
                                    <p className="text-lg md:text-2xl text-[#1E4D38] mb-4 leading-relaxed">{text}</p>
                                    <p className="font-semibold text-[#1E4D38] mt-2 text-[20px]">{author}</p>
                                </div>
                                <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2"></div>
                            </div>

                            <div className="lg:hidden col-span-12 flex flex-col  border-4 border-[#1e4d38] p-7 mt-4 mx-4 bg-[#E1E6C8] text-white rounded-[30px]">
                                <div className="w-full flex justify-center">
                                    <Image
                                        src={image}
                                        alt={author}
                                        width={300}
                                        height={300}
                                        layout="responsive"
                                        className="rounded-md mb-4 w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 xl:ml-5 ml-0 mt-3">
                                    <p className="font-bold text2xl md:text-[2.25rem] text-[#1e4d38] mb-4 leading-relaxed">{title}</p>
                                    <p className="text-lg md:text-2xl text-[#1e4d38] mb-4 leading-relaxed">{text}</p>
                                    <p className="bold text-[#1e4d38] mt-2 text-[20px]">{author}</p>
                                </div>
                                <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </section>
    );
};

export default Testimonials;