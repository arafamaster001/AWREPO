import React from "react";
import ContactForm from "../Sections/ContactForm/page";
import WhyMern from "./WhyMern/page";
import ProjectsSection from "../Sections/ProjectsSection/page";
import WhyModernStack from "./WhyModernStack/page";
import TechCase from "./Techstack/page";
import MernHeroSection from "./MerHeroSection/page";

const MernStack = () => {
  return (
    <main className="w-full h-auto relative responsive_cont">
      <MernHeroSection />
       <TechCase />
       <WhyModernStack />
       <WhyMern/>
       <ProjectsSection />
       <ContactForm/>
    </main>
  );
};

export default MernStack;
