// src/app/layout.jsx
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
  description:
    "Arafa Webs offers expert services in website design, Shopify store setup, WordPress development, and Next.js apps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
