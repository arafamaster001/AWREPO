import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header/page";
import Footer from "./Components/Footer/page";

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
  description: "Arafa Webs offers expert services in website design, Shopify store setup, WordPress development, and Next.js apps. From branding to marketing — we build powerful digital experiences that drive results."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Boldonse&family=Teko:wght@300..700&family=Tektur:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      {/* font-family: "Alfa Slab One", serif;
          font-family: "Tektur", sans-serif;
          font-family: "Boldonse", system-ui;
          font-family: "Teko", sans-serif; */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
