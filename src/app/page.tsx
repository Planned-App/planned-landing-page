import GetStarted from '@/components/Layout/GetStarted';
import HeaderMenu from '@/components/Layout/HeaderMenu';
import HeroSection from '@/components/Layout/HeroSection';
import HowItWorks from '@/components/Layout/HowItWorks';
import Testimonials from '@/components/Layout/Testimonials';
import FooterCarousel from '@/components/Layout/FooterCarousel';
import WhatsIncluded from '@/components/Layout/WhatsIncluded';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <GetStarted />
      
      <Testimonials />
      {/* <WhatsIncluded/> */}


      <FooterCarousel />
    </>
  );
}
