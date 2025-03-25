import GetStarted from '@/components/Layout/GetStarted';
import HeaderMenu from '@/components/Layout/HeaderMenu';
import HeroSection from '@/components/Layout/HeroSection';
import HowItWorks from '@/components/Layout/HowItWorks';
import FooterCarousel from '@/components/Layout/FooterCarousel';
import WhatsIncluded from '@/components/Layout/WhatsIncluded';
import TestimonialsCarousel from '@/components/Layout/TestimonialsCarousel';
import Footer from '@/components/Layout/Footer';
import VideoContent from '@/components/Layout/VideoContent';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhatsIncluded />
      
      <TestimonialsCarousel />
      <VideoContent/>
      <GetStarted />
      <FooterCarousel />
      <Footer />
    </>
  );
}
