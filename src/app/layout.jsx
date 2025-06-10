// src/app/layout.jsx
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header/page";
import Footer from "./Components/Footer/page";
import { HeroUIProvider } from "@heroui/react";
// import SessionTracker from "./Components/SessionTracker";
import { PostHogProvider } from "./Components/PostHogProvider";
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
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Boldonse&family=Teko:wght@300..700&family=Tektur:wght@400..900&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider>
          <ToastContainer />
          <HeroUIProvider>
            <Header />
            {/* <SessionTracker /> */}
            {/* <GoogleAnalytics /> */}
            {children}
            <Footer />
          </HeroUIProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}