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
import Script from 'next/script';


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
   // Organization, WebSite (with SearchAction), and SoftwareApplication JSON‑LD
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Planned LLC DBA Healthy Kitchen",
      url: SITE_URL,
      logo: `${SITE_URL}/footer-logo-healthy-kitchen.png`,
      sameAs: [
        // add your profiles if available, else remove this key
        // "https://www.instagram.com/yourhandle",
        // "https://www.facebook.com/yourpage",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@healthykitchen.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Healthy Kitchen",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/search?q={query}`,
        "query-input": "required name=query",
      },
      publisher: { "@id": `${SITE_URL}#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Healthy Kitchen: Meal Planner",
      operatingSystem: "iOS, Android, Web",
      applicationCategory: "HealthApplication",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "100", // replace with real counts if you have them, otherwise remove AggregateRating
      },
      offers: {
        "@type": "Offer",
        price: "0",           // if you have a paid plan, set price and priceCurrency accordingly
        priceCurrency: "USD",
        category: "Subscription",
        url: SITE_URL,
      },
    },
  ];
  return (
    <>
      <Script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
