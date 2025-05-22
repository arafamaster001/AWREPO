"use client"
import React from "react";
import { FaShopify } from "react-icons/fa";
import ShopifyStacks from "./ShopifyServices/page";
import WhyShopify from "./WhyShopify/page";
import WhyusShopify from "./whyusShopify/page";
import ContactForm from "../Sections/ContactForm/page";
import ProjectsSection from "../Sections/ProjectsSection/page";
import TestimonialSection from "../Sections/TestimonialSection/page";
import StacksShopify from "./StackShopify/page";
import {motion} from 'framer-motion';
import { blurInVariant } from "../utils/blurInVariant";

const Shopify = () => {
  return (
    <>
    <section>
      <div className="p-[5%] grid grid-cols-1 lg:grid-cols-2 min-h-[100vh] relative">
      <div className="absolute top-20 right-32 w-16 h-16 border border-white/20 rounded-full" />
      <div className="absolute bottom-10 left-10 text-xs md:text-sm font-mono text-white/10 leading-relaxed hidden md:block">
            {`{
  shopify: {
    theme: "custom",
    optimize: true
  }
}`}
          </div>
        
        {/* <div className=" col-span-1 w-full h-full  pt-[20%] lg:pt-[10%] relative flex flex-col gap-4">
          
          <span className="text-gray-400 text">[ Shopify ]</span>
        
           <h1 className="text-5xl font-bold leading-tight">
           Think {" "}
                  <span className="relative inline-block">
                    <span className="relative z-10"> E-Commerce</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="10"
                      viewBox="0 0 200 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 5C50 -1.5 150 -1.5 200 5" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                  </span>{" "}
                  <br />
               Think ArafaWebs
                </h1>
          <div className="flex gap-2 mt-2">
            <button className="main_btn">Start building</button>
            <button className="web_btn flex gap-1 justify-center">
              Meet with Experts
            </button>
          </div>
        </div> */}
        <div className="col-span-1 w-full h-full pt-[20%] lg:pt-[10%] relative flex flex-col gap-4">
      
      <motion.span
        variants={blurInVariant}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-gray-400 text"
      >
        [ Shopify ]
      </motion.span>

      <motion.h1
        variants={blurInVariant}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="text-5xl font-bold leading-tight"
      >
        Think{" "}
        <span className="relative inline-block">
          <span className="relative z-10">E-Commerce</span>
          <svg
            className="absolute -bottom-2 left-0 w-full"
            height="10"
            viewBox="0 0 200 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 5C50 -1.5 150 -1.5 200 5" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </span>{" "}
        <br />
        Think ArafaWebs
      </motion.h1>

      <motion.div
        variants={blurInVariant}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="flex gap-2 mt-2"
      >
        <button className="main_btn">Start building</button>
        <button className="web_btn flex gap-1 justify-center">Meet with Experts</button>
      </motion.div>
    </div>
        <div className="col-span-1  flex items-center justify-center relative">
          {/* <div className="absolute w-16 h-16 rounded-full bg-white/20 top-10 right-10"></div> */}
          <div className="absolute w-16 h-16 rounded-full bg-white/20 bottom-10  left-10"></div>
            <div className="relative ">
              <FaShopify className="text-[20rem]  text-gray-400/80" />
            </div>
        </div>
      </div>
    </section>
    <WhyShopify />
    <ShopifyStacks />
    <StacksShopify />
    <WhyusShopify />
    <ProjectsSection />
    <TestimonialSection />
    <ContactForm />
    </>
  );
};

export default Shopify;
