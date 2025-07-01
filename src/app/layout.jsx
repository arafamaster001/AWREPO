// src/app/layout.jsx
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header/page";
import Footer from "./Components/Footer/page";
// import SessionTracker from "./Components/SessionTracker";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Arafa Webs | Custom Websites & E-commerce Solutions",
  description:
    "Arafa Webs offers expert services in website design, Shopify store setup, WordPress development, and Next.js apps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Boldonse&family=Teko:wght@300..700&family=Tektur:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1293654462190092');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Facebook Pixel noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1293654462190092&ev=PageView&noscript=1"
        />
      </noscript>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer />
        <Header />
        {/* <SessionTracker /> */}
        {/* <GoogleAnalytics /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}