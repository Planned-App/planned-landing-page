'use client';
import React, { useEffect, useState } from "react";
import type { NextPage } from 'next';
import AutoPlayVideoComponent from "@/components/VideoElement/AutoPlayVideoComponent";


const VideoContent: NextPage<{}> = () => {

    const [videoSrc, setVideoSrc] = useState("");
      const [isMobile, setIsMobile] = useState(false);
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

    useEffect(() => {
        // Function to determine the video source based on the window width
        const getVideoSrc = () => {
            const screenWidth = window.innerWidth;
            return screenWidth > 768
                ? "https://planned-app.s3.us-west-1.amazonaws.com/landing-page/planned-demo-desktop-video.mp4"
                : "https://planned-app.s3.us-west-1.amazonaws.com/landing-page/planned-mobile-version.mp4";
        };

        // Update the videoSrc state based on the current window size
        setVideoSrc(getVideoSrc());

        // Handle window resize to update the video source dynamically
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
                    poster={isMobile ? "/video/mobile-thumbnail.jpg" : "/video/web-thumbnail.png" }
                />
            </div>
        </section>
    
        </>
    );
};

export default VideoContent;