"use client"
import { ChevronRight } from "lucide-react";
import React from "react";
import { TechShowcase } from "./Techstack/page";
import ContactForm from "../Sections/ContactForm/page";
import WhyMern from "./WhyMern/page";
import ProjectsSection from "../Sections/ProjectsSection/page";
import WhyModernStack from "./WhyModernStack/page";
import { motion } from 'framer-motion';
import { blurInVariant } from "../utils/blurInVariant";

const mernstack = () => {
  return (
    <main className="w-full h-auto relative ">
      <div className="h-[100vh] md:h-full flex flex-col gap-10 md:gap-0  justify-center">
      <div className="w-full px-[5%] pt-[10%] relative flex flex-col gap-4 mern_hero">
      <motion.span
        variants={blurInVariant}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-gray-400 text"
      >
        [ Modren Stack ]
      </motion.span>

      <motion.h1
        variants={blurInVariant}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="text-5xl font-semibold leading-[3.5rem]"
      >
        Build Modren <br /> and Highly Optimized <br /> sites With Arafa
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
      {/* <div className="w-full px-[5%] pt-[10%] relative flex flex-col gap-4 mern_hero">
        <span className="text-gray-400 text">[ Modren Stack ]</span>
        <h1 className="text-5xl font-semibold leading-[3.5rem]">
          Build Modren <br /> and Highly Optimized <br /> sites With Arafa
        </h1>
        <div className="flex gap-2 mt-2">
          <button className="main_btn">Start building</button>
          <button className="web_btn flex gap-1 justify-center">
            Meet with Experts
          </button>
        </div>
      </div> */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute h-[40vh]  md:h-[110vh] w-[100vw] top-[10%] z-10 zzz"></div>
        <div className="ms-box z-1 ">
          <img
            src="/images/mernstack.png"
            alt="jsdh"
            className="ms-img relative p-2  border-white/20 border "
          />
        </div>
      </div>
      </div>
      <WhyModernStack />
      <div className="w-full  flex flex-col font-semibold items-center px-[5%] py-[2%]">
        <h2 className="text-xl">ARAFA TECH STACK</h2>
        <span className="text-gray-400">From next-gen startups to established businesses.</span>
      </div>
      <TechShowcase />
      <WhyMern/>
      <ProjectsSection />
      <ContactForm/>
      
      <div className=""></div>
    </main>
  );
};

export default mernstack;
