'use client';
import React, { useEffect, useRef, useState } from 'react';

interface AutoPlayVideoProps {
  src: string;  // Now expecting src as a prop for flexibility
  poster?: string;
}

const AutoPlayVideoComponent: React.FC<AutoPlayVideoProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
 const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false); 

  const [videoHeight, setVideoHeight] = useState('64');

  useEffect(() => {
    function updateVideoHeight() {
      const screenHeight = window.innerHeight;
      const calculatedHeight = Math.round(screenHeight / 4); // Example: Set video height to 1/4 of screen height
      setVideoHeight(`${calculatedHeight}`);
    }

    updateVideoHeight(); // Update on component mount
    window.addEventListener('resize', updateVideoHeight); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateVideoHeight);
    };
  }, []);



  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && !hasPlayed) {
        console.log('Video is visible and ready to play');
      }
    }, { threshold: 0.5 });

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, [hasPlayed]);

  const handlePlayVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.play()
        .then(() => {
          console.log('Video played successfully');
          setHasPlayed(true); // Mark as played
          video.muted = false; // Unmute the video
        })
        .catch(error => {
          console.error("Error attempting to play video:", error);
          // Handle the case where user interaction is required to play with sound
        });
    }
  };

  return (
    <div className={`relative w-full h-[${videoHeight}px]`}>
      <video
        // autoPlay={hasPlayed}
        ref={videoRef}
        src={src}
        poster={poster}
        controls
        style={{ width: '100%', height: '100%' }} 
        muted={!hasPlayed} 
        // muted={false}  // Initially muted, unmute after first play
      >
        Sorry, your browser doesn&rsquo;t support embedded videos.
      </video>
      {!hasPlayed && isIntersecting && (
          // <div style={{
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          //   width: '100%',
          //   height: '100%',
          //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
          //   display: 'flex',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   zIndex: 10
          // }}>
          //   <button onClick={handlePlayVideo} className='!bg-[#1E4D38] !text-[#fff] !rounded-3xl !px-12 !py-3 !font-poppins !text-lg font-bold mt-[2.1875rem]' style={{
          //     border: 'none', 
          //     cursor: 'pointer'
          //   }}>
          //     Play Video
          //   </button>
          // </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <button onClick={handlePlayVideo} className="bg-[#1E4D38] text-white rounded-lg px-4 py-2 text-lg font-bold">
            Play Video
          </button>
        </div>
      )}
    </div>
  );
};

export default AutoPlayVideoComponent;