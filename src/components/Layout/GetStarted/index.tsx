'use client';
import React, { useState } from "react";
import type { NextPage } from 'next';
import { Button } from 'antd';
import Image from 'next/image';
import arrowIcon from '../../../../public/arrow-icon-pointer.png';
import checkIcon from '../../../../public/check-icon.png';

const GetStarted: NextPage<{}> = () => {
    // State to keep track of selected membership
    const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

    const joinNowUrl = selectedPlan === 'monthly'
        ? 'https://buy.stripe.com/test_28o6q81Sp14vepW5kk'
        : 'https://buy.stripe.com/test_00gdSAeFbaF5fu09AB';

    return (
        <section className="px-4 md:px-8 lg:px-16 py-8 bg-[#F4F6F0] flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#1E4D38] mb-8 text-center">Join today & get ALL premium upgrades Included—100% FREE!</h2>
            <div className="bg-white border-4 border-[#1E4D38] px-6 py-6 md:px-16 md:pb-10 md:pt-16 rounded-lg w-full max-w-4xl">

                <div className="grid grid-cols-2 gap-3 md:gap-8 mt-10 md:mt-0">
                    {/* Yearly Membership - Displayed first on mobile */}
                    <div
                        className={`relative p-6 border-4 ${selectedPlan === 'yearly' ? 'border-[#1E4D38] bg-[#F4F6F0]' : 'border-[#E1E6C8]'} rounded-lg text-center cursor-pointer order-2`}
                        onClick={() => setSelectedPlan('yearly')}
                    >
                        <div className="absolute top-[-1.125rem] right-[-0.1875rem] font-bold text-[#1E4D38] flex flex-row-reverse items-center">
                            <Image src={arrowIcon} alt="Arrow pointing to discount" width={30} height={14} className="ml-2" />
                            <span className="md:mr-[-2.5rem] mr-[-1.2rem] ml-[-4rem] absolute top-[-25px] text-xl md:text-2xl">51% off!</span>
                        </div>
                        {selectedPlan === 'yearly' && (
                            <Image src={checkIcon} alt="Selected check icon" width={20} height={20} className="absolute top-2 left-2" />
                        )}
                        <h3 className="font-bold text-[#1E4D38] mb-2 md:text-[1.0625rem] text-[0.625rem]">YEARLY MEMBERSHIP</h3>
                        <p className="text-2xl md:text-4xl font-bold text-[#1E4D38]">$5.83</p>
                        <p className={`mb-4 font-bold text-[11px] md:text-base ${selectedPlan === 'yearly' ? 'text-[#1E4D38]' : 'text-[#E1E6C8]'}`}>per month</p>
                        <p className="text-[0.5rem] md:text-sm  text-[#1E4D38]">$69 billed annually (Saves $75 per year!), cancel anytime.</p>
                    </div>

                    {/* Monthly Membership - Displayed second on mobile */}
                    <div
                        className={`relative p-6 border-4 ${selectedPlan === 'monthly' ? 'border-[#1E4D38] bg-[#F4F6F0]' : 'border-[#E1E6C8]'} rounded-lg text-center cursor-pointer order-1`}
                        onClick={() => setSelectedPlan('monthly')}
                    >
                        {selectedPlan === 'monthly' && (
                            <Image src={checkIcon} alt="Selected check icon" width={20} height={20} className="absolute top-2 left-2" />
                        )}
                        <h3 className="font-bold text-[#1E4D38] mb-2 md:text-[1.0625rem] text-[0.625rem]">MONTHLY MEMBERSHIP</h3>
                        <p className="text-2xl md:text-4xl font-bold text-[#1E4D38]">$12</p>
                        <p className={`mb-4 font-bold text-[0.6875rem] md:text-base ${selectedPlan === 'monthly' ? 'text-[#1E4D38]' : 'text-[#E1E6C8]'}`}>per month</p>
                        <p className="text-[0.5rem] md:text-sm  text-[#1E4D38]">Billed monthly at $12, cancel anytime.</p>
                    </div>
                </div>

                <div className="mt-6 mb-2">
                    <p className="font-poppins text-[0.75rem] md:text-xl italic font-normal">🎉 Plus our Limited Time Bonus: Get access to our premium breakfast, lunch, snack & seasonal cookbook recipes ($70 value)—FREE with any plan!</p>
                </div>
                <div className="flex justify-center mb-2">
                    <Button
                        href={joinNowUrl}
                        className='!bg-[#1E4D38] !text-[#fff] !rounded-3xl !px-12 !py-6 !font-poppins !text-lg font-bold'>Join Now</Button>
                </div>
                <p className="text-[0.75rem] md:text-[1rem] italic font-normal text-center mt-4">Easily cancel through the app anytime. No commitments.</p>
            </div>
        </section>
    );
};

export default GetStarted;