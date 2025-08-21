import GetStarted from '@/components/Layout/GetStarted';
import HeaderMenu from '@/components/Layout/HeaderMenu';
import HeroSection from '@/components/Layout/HeroSection';
import HowItWorks from '@/components/Layout/HowItWorks';
import FooterCarousel from '@/components/Layout/FooterCarousel';
import WhatsIncluded from '@/components/Layout/WhatsIncluded';
import TestimonialsCarousel from '@/components/Layout/TestimonialsCarousel';
import Footer from '@/components/Layout/Footer';
import VideoContent from '@/components/Layout/VideoContent';
import { Metadata } from 'next';


const SITE_URL = "https://healthykitchen.app";
const TITLE = "Healthy Kitchen — Meal Plans, Smart Grocery Lists & Quick Healthy Recipes";
const DESCRIPTION =
  "Join Healthy Kitchen to get curated meal plans, high‑protein recipes ready in 30 minutes or less, and a smart grocery list with delivery. Eat healthy without the stress.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': "large" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Healthy Kitchen",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og/home-og.png", // place an image in public/og/home-og.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: "Healthy Kitchen — meal plans and smart grocery lists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og/home-og.png"],
  },
};

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
