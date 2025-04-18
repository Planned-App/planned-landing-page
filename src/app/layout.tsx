import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { FacebookPixelEvents } from '@/components/PixelEvents';


const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ["latin"]
});


const inter = Inter({
  weight: ['300', '400', '600', '700'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Planned",
  description: "Planned App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className}`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
      <GoogleAnalytics gaId="G-6T7VVHB450" />
      <FacebookPixelEvents/>
    </html>
  );
}
