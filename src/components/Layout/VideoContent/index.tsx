'use client';
import React, { useEffect, useState } from "react";
import type { NextPage } from 'next';
import { Button } from 'antd';
import Image from 'next/image';
import arrowIcon from '../../../../public/arrow-icon-pointer.png';
import checkIcon from '../../../../public/check-icon.png';
import checkIconList from '../../../../public/check.svg'
import SpringBonusComponent from "@/components/SpringBonus/SpringBonusComponent";
import AutoPlayVideoComponent from "@/components/VideoElement/AutoPlayVideoComponent";


const getVideoSrc = () => {
    const screenWidth = window.innerWidth;
    return screenWidth > 768
        ? "https://planned-app.s3.us-west-1.amazonaws.com/landing-page/planned-demo-desktop-video.mp4"
        : "https://planned-app.s3.us-west-1.amazonaws.com/landing-page/planned-mobile-version.mp4";
}
const VideoContent: NextPage<{}> = () => {

    const [videoSrc, setVideoSrc] = useState(getVideoSrc());

    useEffect(() => {
        function handleResize() {
            setVideoSrc(getVideoSrc());
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        <section className="px-4 md:px-8 lg:px-16 py-8 bg-[#F4F6F0] h-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E4D38] mb-8 text-center">Planned makes healthy eating easy for thousands of people...</h2>
            <div>
            <AutoPlayVideoComponent
                    src={videoSrc}
                    poster="https://example.com/path-to-your-poster-image.jpg"
                />
            </div>
        </section>
    
        </>
    );
};

export default VideoContent;