"use client";
import React from "react";
import {
  FaAngrycreative,
  FaShopify,
  FaWordpress,
  FaWordpressSimple,
} from "react-icons/fa";
import { LiaBlogSolid } from "react-icons/lia";
import { SiWoocommerce } from "react-icons/si";
import { motion } from "framer-motion";
import { blurInVariant } from "@/app/utils/blurInVariant";

const WordHeroSection = () => {
  return (
    <section>
      <div className="p-[5%] grid  grid-cols-1 lg:grid-cols-2 gap-12 min-h-[100vh] relative">
        <div className="col-span-1 w-full h-full pt-[20%] lg:pt-[10%] relative flex flex-col gap-4">
          <motion.span
            variants={blurInVariant}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-gray-400 text"
          >
            [ WordPress ]
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
              <span className="relative z-10">WordPress</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5C50 -1.5 150 -1.5 200 5"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
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
            <button className="web_btn flex gap-1 justify-center">
              Meet with Experts
            </button>
          </motion.div>
        </div>
        <div className="col-span-1  flex items-center justify-center relative">
          <SiWoocommerce className="text-9xl text-gray-400 -rotate-6 absolute top-0 right-0 lg:top-10 lg:right-20 w-16 h-16" />

          {/* <div className="absolute w-16 h-16 rounded-full bg-white/20 top-10 right-10"></div> */}
          <div className="absolute  rounded-full bottom-0 left-0  lg:bottom-10  lg:left-10">
            <LiaBlogSolid className="text-6xl text-gray-400 rotate-6" />
          </div>
          <div className="relative ">
            <FaWordpress className="text-[20rem] text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordHeroSection;
