import GetStarted from '@/components/Layout/GetStarted';
import HeaderMenu from '@/components/Layout/HeaderMenu';
import HeroSection from '@/components/Layout/HeroSection';
import HowItWorks from '@/components/Layout/HowItWorks';
import Testimonials from '@/components/Layout/Testimonials';
import FooterCarousel from '@/components/Layout/FooterCarousel';
import WhatsIncluded from '@/components/Layout/WhatsIncluded';
import TestimonialsCarousel from '@/components/Layout/TestimonialsCarousel';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <GetStarted />
      <TestimonialsCarousel />
      {/* <Testimonials /> */}
      <WhatsIncluded />
      <FooterCarousel />
    </>
  );
}
