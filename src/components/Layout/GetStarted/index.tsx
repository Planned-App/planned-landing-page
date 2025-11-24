'use client';
import React, { useState, useEffect } from "react";
import type { NextPage } from 'next';
import { Button } from 'antd';
import Image from 'next/image';
import arrowIcon from '../../../../public/arrow-icon-pointer.png';
import checkIcon from '../../../../public/check-icon.png';
import checkIconList from '../../../../public/check.svg'
import { PriceWithSlash } from "@/components/PriceWithSlash";
import { BlackFridayBanner } from "@/components/BubleBanner";
import topRated from '../../../../public/top-rated-app.svg';
import { YEARLY_PRICE, MONTHLY_PRICE } from "@/constant";

const monthlyContent = [
    {
        title: "Create your own meal plans",
        content: "Follow our weekly dinner menu or build your own plan.",
    },
    {
        title: "350+ healthy & delicious recipes",
        content: "Breakfast, lunch, dinner & snacks—with new meals every month!",
    },
    {
        title: "Calories & macros Included",
        content: "Filter by gluten-free, no added sugar & more—with new categories added monthly!",
    },
    {
        title: "Searchable recipe categories",
        content: "Every recipe comes with full calories & macros.",
    },
    {
        title: "Customize recipes with ingredient swaps ",
        content: "Adjust ingredients & serving sizes to fit your needs.",
    },
    {
        title: "Automatic grocery list generation",
        content: "Instantly generate your organized shopping list.",
    },
    {
        title: "Easy grocery delivery through instacart",
        content: "Order your groceries to your door through our Instacart integration.",
    },
    {
        title: "Exclusive giveaways",
        content: "Entered to win top kitchen essentials!",
    },
];

const yearlyContent = [
    {
        title: "Create your own meal plans",
        content: "Follow our weekly dinner menu or build your own plan.",
    },
    {
        title: "350+ healthy & delicious recipes",
        content: "Breakfast, lunch, dinner & snacks—with new meals every month!",
    },
    {
        title: "Calories & macros Included",
        content: "Filter by gluten-free, no added sugar & more—with new categories added monthly!",
    },
    {
        title: "Searchable recipe categories",
        content: "Every recipe comes with full calories & macros.",
    },
    {
        title: "Customize recipes with ingredient swaps ",
        content: "Adjust ingredients & serving sizes to fit your needs.",
    },
    {
        title: "Automatic grocery list generation",
        content: "Instantly generate your organized shopping list.",
    },
    {
        title: "Easy grocery delivery through instacart",
        content: "Order your groceries to your door through our Instacart integration.",
    },
    {
        title: "Exclusive giveaways",
        content: "Entered to win top kitchen essentials!",
    },
];

const monthlyContentWeb = [
    {
        title: "",
        content: "Create custom meal plans in minutes – take the guesswork out of dinner",
    },
    {
        title: "",
        content: "350+ healthy, family-friendly recipes everyone will love",
    },
    {
        title: "",
        content: "Import recipes from the web or Instagram to keep all your favorites in one place",
    },
    {
        title: "",
        content: "Every recipe includes calories & macros so you can hit your goals",
    },
    {
        title: "",
        content: "Search by categories like gluten-free, no added sugar, and more",
    },
    {
        title: "",
        content: "Customize recipes with ingredient swaps & serving sizes to fit your needs",
    },
    {
        title: "",
        content: "Automatic grocery list generation to save time and reduce stress",
    },
    {
        title: "",
        content: "Optional fast, easy grocery delivery with Instacart",
    },
];

const yearlyContentWeb = [
    {
        title: "",
        content: "Create custom meal plans in minutes – take the guesswork out of dinner",
    },
    {
        title: "",
        content: "350+ healthy, family-friendly recipes everyone will love",
    },
    {
        title: "",
        content: "Import recipes from the web or Instagram to keep all your favorites in one place",
    },
    {
        title: "",
        content: "Every recipe includes calories & macros so you can hit your goals",
    },
    {
        title: "",
        content: "Search by categories like gluten-free, no added sugar, and more",
    },
    {
        title: "",
        content: "Customize recipes with ingredient swaps & serving sizes to fit your needs",
    },
    {
        title: "",
        content: "Automatic grocery list generation to save time and reduce stress",
    },
    {
        title: "",
        content: "Optional fast, easy grocery delivery with Instacart",
    },
];


const GetStarted: NextPage<{}> = () => {
    // State to keep track of selected membership
    const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
    const [contentSelectedPlan, setContentSelectedPlan] = useState(yearlyContentWeb);
    // Update content when plan changes
    const handlePlanChange = (plan: 'monthly' | 'yearly') => {
        setSelectedPlan(plan);
      
        const content = plan === 'monthly'
          ? isMobile ? monthlyContent : monthlyContentWeb
          : isMobile ? yearlyContent : yearlyContentWeb;
      
        setContentSelectedPlan(content);
      };
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const content = selectedPlan === 'monthly'
          ? isMobile ? monthlyContent : monthlyContentWeb
          : isMobile ? yearlyContent : yearlyContentWeb;
      
        setContentSelectedPlan(content);
      }, [isMobile, selectedPlan]);
    useEffect(() => {
        const checkIsMobile = () => {
            const isNowMobile = window.innerWidth <= 768;
            setIsMobile(isNowMobile);

        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    // Define URLs for each plan type
    const joinNowUrl = selectedPlan === 'monthly'
        // ? 'https://buy.stripe.com/3cs00D3Pyfbv8ak4gj' // 12 USD 
        ? 'https://buy.stripe.com/bJe7sE2j2dvp5Ipext8N205' // 14 USD
        : process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_LINK_ANNUAL_PROD;
    return (
        <section id='join-now' className="px-4 md:px-8 lg:px-16 py-8 bg-[#F4F6F0] flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E4D38] mb-5 text-center">what’s included...</h2>
            <div className="bg-white border-4 border-[#1E4D38] px-2 py-6 md:px-16 md:pb-10 md:pt-16 rounded-[2.25rem] w-full max-w-4xl">
                <ul className="space-y-1 md:space-y-4 text-[#000000] text-base md:text-xl font-medium pb-10 md:pb-16 px-5">
                    {contentSelectedPlan.map((text, index) => (
                        <li key={index} className="flex items-start">
                            <picture className="flex-shrink-0 md:mt-0.5 mt-1">
                                <img src={checkIconList.src} alt="check" className="w-3 h-3 md:w-5 md:h-5" />
                            </picture>
                            <span className="ml-2 md:ml-4 flex-1 text-[12px] md:text-[16px] font-poppins">
                                <span className="md:font-bold">{text.title}</span>
                                {!isMobile && <span>
                                    {/* : */}
                                     {text.content}</span>}
                            </span>
                        </li>
                    ))}
                </ul>
                {/* <SpringBonusComponent /> */}
                <div className="grid grid-cols-2 gap-2 md:gap-8">
                    {/* Yearly Membership - Displayed first on mobile */}
                    <div
                        className={`relative py-3 px-3 md:p-6 border-4 ${selectedPlan === 'yearly' ? 'border-[#1E4D38] bg-[#F4F6F0]' : 'border-[#E1E6C8]'} rounded-3xl text-center cursor-pointer order-2`}
                        onClick={() => handlePlanChange('yearly')}
                    >
                        <div className="absolute top-[-4.9rem] right-[1rem] md:top-[-5rem] md:right-[-5rem] lg:top-[-5.9rem] lg:right-[-12.1875rem]  font-bold text-[#1E4D38] flex flex-row-reverse items-center">
                            <BlackFridayBanner className="mx-auto my-4" />
                        </div>
                        {selectedPlan === 'yearly' && (
                            <Image src={checkIcon} alt="Selected check icon" width={isMobile ? 10: 20} height={isMobile ? 10: 20} className="absolute top-2 left-2" />
                        )}
                        <h3 className="font-bold text-[#1E4D38] mb-2 md:text-[1.0625rem] text-[0.625rem]">YEARLY MEMBERSHIP</h3>
                        {/* <PriceWithSlash value="5.75" /> */}
                        <p className="text-2xl md:text-4xl font-bold text-[#1E4D38]">${YEARLY_PRICE}</p>
                        <p className={`mb-2 font-bold text-[11px] md:text-base ${selectedPlan === 'yearly' ? 'text-[#1E4D38] ' : 'text-[#E1E6C8] '} `}>per month</p>

                        <span className="text-[0.5rem] md:text-[0.6875rem] text-[#1E4D38] w-full">
                            {/* MOBILE — always 2 lines */}
                            <span className="flex flex-col md:hidden text-center leading-tight w-full">
                                <span>Billed annually at</span>

                                <span className="flex justify-center items-center gap-[2px] whitespace-nowrap">
                                    <PriceWithSlash value="69" textFontSize="text-[11.5px] md:text-base" textFontStyle="font-bold" />
                                    <span className="font-bold">only <span className="text-[11.5px]">$34</span> (50% off!)</span>
                                </span>
                            </span>

                            {/* DESKTOP — always inline */}
                            <span className="hidden md:inline-flex items-center gap-1 whitespace-nowrap">
                                Billed annually at
                                <PriceWithSlash value="69" textFontSize="text-base" textFontStyle="font-bold" />
                                <span className="font-bold">only <span className="text-base">$34</span> (50% off!)</span>
                            </span>
                        </span>

                    </div>

                    

                    {/* Monthly Membership - Displayed second on mobile */}
                    <div
                        className={`relative py-3 px-3 md:p-6  border-4 ${selectedPlan === 'monthly' ? 'border-[#1E4D38] bg-[#F4F6F0]' : 'border-[#E1E6C8]'} rounded-3xl text-center cursor-pointer order-1`}
                        onClick={() => handlePlanChange('monthly')}
                    >
                        {selectedPlan === 'monthly' && (
                            <Image src={checkIcon} alt="Selected check icon" width={isMobile ? 10: 20} height={isMobile ? 10: 20} className="absolute top-2 left-2" />
                        )}
                        <h3 className="font-bold text-[#1E4D38] mb-2 md:text-[1.0625rem] text-[0.625rem]">MONTHLY MEMBERSHIP</h3>
                        <p className="text-2xl md:text-4xl font-bold text-[#1E4D38]">${MONTHLY_PRICE}</p>
                        <p className={`mb-2 font-bold text-[0.6875rem] md:text-base ${selectedPlan === 'monthly' ? 'text-[#1E4D38] ' : 'text-[#E1E6C8] '} `}>per month</p>
                        <span className="text-[0.5rem] md:text-[0.6875rem] text-[#1E4D38] w-full">
                            {/* MOBILE — always 2 lines */}
                            <span className="flex flex-col md:hidden text-center leading-tight w-full">
                                <span>Get the same plan for</span>

                                <span className="flex justify-center items-center gap-[2px] whitespace-nowrap">
                                    <span className="font-bold">under $3/mo</span>
                                    by choosing yearly.
                                </span>
                            </span>

                            {/* DESKTOP — always inline */}
                            <span className="hidden md:inline-flex items-center gap-1 whitespace-nowrap">
                                Get the same plan for
                                <span className="font-bold">under $3/mo</span>
                                by choosing yearly.
                            </span>
                        </span>
                    </div>
                </div>
                <div className="flex justify-center mt-[1.0625rem] mb-[0.625rem] md:my-4">
                    <Button
                        href={joinNowUrl}
                        className='!bg-[#1E4D38] !text-[#fff] !rounded-3xl !px-16 !py-6 !font-poppins !text-lg !font-bold mt-[2.1875rem]'>Join Now</Button>
                </div>
                <p className="text-[0.75rem] md:text-[1rem] italic font-normal text-center mt-4">Easily cancel anytime. No commitments</p>
            </div>
        </section>
    );
};

export default GetStarted;