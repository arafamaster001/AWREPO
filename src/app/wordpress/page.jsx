import React from "react";
import WhyWordpress from "./whywordpress/page";
import WordpressServices from "./WordpressServices/page";
import StackWordpress from "./StackWordpress/page";
import WhyusWordpress from "./WhyusWordpress/page";
import ProjectsSection from "../Sections/ProjectsSection/page";
import TestimonialSection from "../Sections/TestimonialSection/page";
import ContactForm from "../Sections/ContactForm/page";
import WordHeroSection from "./wordPressHeroSection/page";

const WordPress = () => {
  return (
    <main>
    <WordHeroSection />
    <WhyWordpress />
    <WordpressServices/>
    <StackWordpress />
    <WhyusWordpress />
    <ProjectsSection />
    <TestimonialSection/>
    <ContactForm />
    </main>
  );
};

export default WordPress;
