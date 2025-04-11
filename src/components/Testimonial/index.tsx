import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import star from '../../../public/rating/stars.png'

interface TestimonialProps {
    rating: number;
    title: string;
    content: string;
    author: string;
    reviewLink: string;
}


const Testimonial: React.FC<TestimonialProps> = ({ rating, title, content, author, reviewLink }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        function handleResize() {
            // Consider "768px" as the breakpoint between mobile and desktop
            setIsMobile(window.innerWidth < 768);
        }

        // Set the initial value based on the current window size
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const stars = Array.from({ length: rating }, (_, i) => (
        <Image key={i} src={star.src} alt="Star" width={30} height={30} className="inline-block" />
    ));

    return (
        <div >
            <>
                {isMobile ?
                    // {/* MOBILE */}
                    <div className="bg-[#E1E6C8] rounded-[2.875rem] p-5  md:p-9 max-w-7xl mx-auto text-gray-700">
                        <div className=" flex flex-col justify-between h-96">
                            <div>
                                <div className="flex mb-2">
                                    {stars}
                                </div>
                                <h2 className="text-xl font-bold mb-2">{title}</h2>
                                <p className="text-sm text-[#1E4D38] max">{content}</p>
                            </div>

                            <div>
                                <p className="italic text-base font-bold mt-2">{author}</p>
                                {reviewLink &&
                                    <a href={reviewLink} className="text-blue-500 hover:underline text-xs">
                                        (Full review on the app store)
                                    </a>
                                }
                            </div>

                        </div>
                    </div>
                    :
                    <>
                        {/* DESKTOP */}
                        <div className="bg-[#E1E6C8] rounded-[2.875rem] pt-[33px] pb-[53px] pl-[62px] pr-[74px] max-w-7xl mx-auto text-gray-700">
                            <div className=" flex flex-col justify-between">

                                <div>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-bold text-[#1E4D38] font-poppins text-[33px]">{title}</h2>
                                        <div>{stars}</div>
                                    </div>
                                    <p className="my-6 text-[16px] font-normal font-poppins">{content}</p>
                                </div>
                                {reviewLink &&
                                    <div>
                                        <p className="text-[22px] font-bold">{author} <a href={reviewLink} className="hover:underline">
                                            (Full review on the app store)
                                        </a></p>
                                    </div>
                                }
                            </div>

                        </div>
                    </>
                }


            </>
        </div>
    );
};

export default Testimonial;