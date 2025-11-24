import React, { useEffect, useState } from 'react';
import HeaderMenu from '../../Layout/HeaderMenu';

const scrollToJoinNow = () => {
  const targetElement = document.getElementById('join-now');
  if (!targetElement) return;

  const startPosition = window.pageYOffset;
  const targetPosition =
    targetElement.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollProgress = easeInOutQuad(
      timeElapsed,
      startPosition,
      distance,
      duration
    );

    window.scrollTo(0, scrollProgress);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};

const BlackFridayBanner: React.FC = () => {
  const [showBreak, setShowBreak] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowBreak(window.innerWidth >= 768); // Tailwind's md breakpoint
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#F4F6F0] text-[#1E4D38] relative">
      {/* Header overlay - visible but does NOT block clicks */}
      <div className="absolute top-0 left-0 w-full md:block hidden pointer-events-none z-10">
        <HeaderMenu />
      </div>

      {/* Clickable banner content */}
      <div
        className="relative z-20 flex flex-col items-center justify-center py-6 md:px-[3.1875rem] px-[25px] md:pt-20 lg:pt-6 cursor-pointer"
        onClick={scrollToJoinNow}
      >
        <div className="text-[#1E4D38] font-bold text-lg mb-2">
          <span className="px-2 text-[20px] md:text-[34px] font-poppins font-semibold italic">
            🎉 BLACK FRIDAY SALE IS LIVE 🎉
          </span>
        </div>

        <div className="text-xs md:text-md font-normal text-[#1E4D38] font-poppins justify-center text-center">
          <span>
            <span className="font-bold">
              SAVE OVER 50% ON YEARLY MEMBERSHIPS!
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayBanner;