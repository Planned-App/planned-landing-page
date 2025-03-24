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
import Testimonial from '@/components/Testimonial';

// Define a type for the testimonial data
interface Testimonial {
    title: string;
    text: string;
    author: string;
    image: string; // URL for the image
}

const testimonials: Testimonial[] = [
    {
        title: "Families & Kids Love It!",
        text: `"Planned is one of the best purchases I made this year. Each week I used to spend so much time scrolling through Pinterest recipes looking for something my family would enjoy so I decided to purchase a Planned subscription and I absolutely love it. If you are looking for an easy-to-use platform with meals the whole family will love, then Planned is for you! Even my 2-year-old loves the recipes! She's eaten every single one!"`,
        author: "-BrimMel88",
        image: image1.src,
    },
    {
        title: "Busy Moms Need Planned!",
        text: `"I absolutely LOVE Planned! I’m a full-time working mom who struggled with meal planning and grocery shopping. This app has been a game-changer. The recipes are quick, easy, and delicious. My family has enjoyed every meal I've prepared. The automatic grocery list feature saves me so much time. Highly recommend!"`,
        author: "-KSpeas32",
        image: image2.src,
    },
    {
        title: "Perfect for Beginners",
        text: `"As someone new to cooking, Planned has been incredibly helpful. The step-by-step instructions and quick recipes have boosted my confidence in the kitchen. The meals are healthy and flavorful. Couldn't ask for more.`,
        author: "-MikeD",
        image: image3.src,
    },
    {
        title: "Great for Dietary Restrictions",
        text: `"As someone with dietary restrictions, Planned has been a blessing. The app allows me to filter recipes based on my needs, and the meal plans are customization. The recipes are easy to follow and delicious."`,
        author: "-ChrisP",
        image: image4.src,
    },
    {
        title: "Grocery Delivery & Customization",
        text: `"Planned has simplified my life. The meal plans are diverse and cater to my dietary preferences. I love the customization options and the fact that I can adjust serving sizes. The integration with grocery delivery services is a bonus. Five stars!"`,
        author: "-Jenna_L",
        image: image5.src,
    },
    {
        title: "Saves Time for Busy Schedules",
        text: `"This app has been a lifesaver. With a busy schedule, I struggled to find time for meal planning. Planned offers quick and healthy recipes that my whole family loves. The app's design is clean and easy to navigate. Five stars!"`,
        author: "-EmilyR",
        image: image6.src,
    },
    {
        title: "Save time and eat healthier",
        text: `"Planned is exactly what I needed. The meal plans are well thought out, and the recipes are both healthy and tasty. The grocery list integration with delivery services has saved me so much time. Highly recommend!"`,
        author: "-OliviaM",
        image: image6.src,
    },
    {
        title: "Makes life so much easier for families",
        text: `"This app has been a lifesaver. With a busy schedule, I struggled to find time for meal planning. Planned offers quick and healthy recipes that my whole family loves. The app's design is clean and easy to navigate. Five stars!"`,
        author: "-EmilyR",
        image: image6.src,
    },
    {
        title: "Saves Time for Busy Schedules",
        text: `"Planned has totally transformed the way my husband and I eat. We lead a busy life with three small children, and the simple meals make planning, prepping, and eating healthy an easy task—and the best part is—everything is SO delicious!!"`,
        author: "-JillianV",
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
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {testimonials.map(({ title, text, author, image } , index) => (
                        <SwiperSlide key={index + 1} className="flex justify-center items-center">
                            <Testimonial
                                rating={5}
                                title={title}
                                content={text}
                                author={author}
                                reviewLink="#"
                            />
                            {/* <div className="hidden lg:flex md:flex-row flex-col items-center bg-[#fff] mx-auto p-6 md:pl-16 lg:px-20 xl:px-60 pt-6 md:py-8 lg:pt-14 xl:pt-20 lg:w-full relative">
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
                            </div> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;