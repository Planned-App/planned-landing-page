'use client';
import React, { useState } from "react";
import type { NextPage } from 'next';
import { Button } from 'antd';
import Image from 'next/image';
import arrowIcon from '../../../../public/arrow-icon-pointer.png';
import checkIcon from '../../../../public/check-icon.png';
import checkIconList from '../../../../public/check.svg'

const monthlyContent = [
    "Weekly planned-for-you dinner menu",
    "Build a fully customizable meal plan including breakfast, lunch, snacks and dinner",
    "Swap out or remove ingredients based on your preferences, and the macros automatically adjust",
    "Auto generate your grocery list, then choose to have your groceries delivered or shop in-store",
    "Access to recipe folders with over 250+ healthy recipes, with new recipes added every week!",
    "Automatic entry to a monthly giveaway of my favorite kitchen items "
];

const yearlyContent = [
    "Weekly planned-for-you dinner menu",
    "Build a fully customizable meal plan including breakfast, lunch, snacks and dinner",
    "Swap out or remove ingredients based on your preferences, and the macros automatically adjust",
    "Auto generate your grocery list, then choose to have your groceries delivered or shop in-store",
    "Access to recipe folders with over 250+ healthy recipes, with new recipes added every week!",
    "Automatic entry to a monthly giveaway of my favorite kitchen items "
];


const WhatsIncluded: NextPage<{}> = () => {
    // State to keep track of selected membership
    const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
    const [contentSelectedPlan, setContentSelectedPlan] = useState(yearlyContent);
    // Update content when plan changes
    const handlePlanChange = (plan: 'monthly' | 'yearly') => {
        setSelectedPlan(plan);
        setContentSelectedPlan(plan === 'monthly' ? monthlyContent : yearlyContent);
    };


    return (
        <section className="px-4 md:px-8 lg:px-16 py-8 bg-[#F4F6F0] flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#1E4D38] mb-8 text-center">Get Started Today</h2>
            <div className="bg-white border-4 border-[#1E4D38] px-6 py-6 md:px-16 md:pb-10 md:pt-16 rounded-lg w-full max-w-4xl">
                <ul className="space-y-3 md:space-y-4 text-[#000000] text-base md:text-xl font-medium pb-16">
                    {contentSelectedPlan.map((text, index) => (
                        <li key={index} className="flex items-start">
                            <picture className="flex-shrink-0">
                                <img src={checkIconList.src} alt="check" className="w-5 h-5 md:w-6 md:h-6" />
                            </picture>
                            <span className="ml-3 md:ml-4 flex-1 text-base md:text-[16px] font-poppins">{text}</span>
                        </li>
                    ))}
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Monthly Membership */}
                    <div
                        className={`relative p-6 border-4 ${selectedPlan === 'monthly' ? 'border-[#1E4D38] bg-[#F4F6F0]' : 'border-[#E1E6C8]'} rounded-lg text-center cursor-pointer`}
                        onClick={() => handlePlanChange('monthly')}
                    >
                        {selectedPlan === 'monthly' && (
                            <Image src={checkIcon} alt="Selected check icon" width={20} height={20} className="absolute top-2 left-2" />
                        )}

                        <h3 className="font-bold text-[#1E4D38] mb-2">MONTHLY MEMBERSHIP</h3>
                        <p className="text-4xl font-bold text-[#1E4D38]">$12</p>
                        <p className={`mb-4 font-bold ${selectedPlan === 'monthly' ? 'text-[#1E4D38] ' : 'text-[#E1E6C8] '} `}>per month</p>
                        <p className="text-sm text-[#1E4D38]">Billed monthly at $12, cancel anytime.</p>
                    </div>

                    {/* Yearly Membership */}
                    <div
                        className={`relative p-6 border-4 ${selectedPlan === 'yearly' ? 'border-[#1E4D38] bg-[#F4F6F0]'  : 'border-[#E1E6C8]'} rounded-lg text-center cursor-pointer`}
                        onClick={() => handlePlanChange('yearly')}
                    >
                        <div className="absolute top-[-1.125rem] right-[-0.1875rem] font-bold text-[#1E4D38] flex flex-row-reverse items-center">
                            <Image src={arrowIcon} alt="Arrow pointing to discount" width={30} height={14} className="ml-2" />
                            <span className="mr-[-2.5rem] ml-[-4rem] absolute top-[-25px] text-2xl" >51% off!</span>
                        </div>
                        {selectedPlan === 'yearly' && (
                            <Image src={checkIcon} alt="Selected check icon" width={20} height={20} className="absolute top-2 left-2" />
                        )}
                        <h3 className="font-bold text-[#1E4D38] mb-2">YEARLY MEMBERSHIP</h3>
                        <p className="text-4xl font-bold text-[#1E4D38]">$5.83</p>
                        <p className={`mb-4 font-bold ${selectedPlan === 'yearly' ? 'text-[#1E4D38] ' : 'text-[#E1E6C8] '} `}>per month</p>
                        <p className="text-sm text-[#1E4D38]">Billed annually at $69, cancel anytime.</p>
                    </div>
                </div>

                <div className="flex justify-center mt-5">
                    <Button className='!bg-[#1E4D38] !text-[#fff] !rounded-3xl !px-12 !py-6 !font-poppins !text-lg font-bold mt-[2.1875rem]'>Join Now</Button>
                </div>
            </div>
        </section>
    );
};

export default WhatsIncluded;