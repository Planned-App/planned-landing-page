import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { FacebookPixelEvents } from "@/components/PixelEvents";
import Script from "next/script";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"]
});

const inter = Inter({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Healthy Kitchen App",
  description: "Healthy Kitchen App"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className}`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
      <GoogleAnalytics gaId="G-6T7VVHB450" />
      <FacebookPixelEvents />
      {/* <!-- TikTok Pixel Code Start --> */}
      <Script id="tiktok-pixel" strategy="lazyOnload">
        {`
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
        var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
        ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
          ttq.load('D1CR06JC77UC7904JV50');
          ttq.page();
        }(window, document, 'ttq');
      `}
      </Script>
      {/* <!-- TikTok Pixel Code End --> */}
    </html>
  );
}
