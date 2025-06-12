import React from "react";
import ShopifyStacks from "./ShopifyServices/page";
import WhyShopify from "./WhyShopify/page";
import WhyusShopify from "./whyusShopify/page";
import ContactForm from "../Sections/ContactForm/page";
import ProjectsSection from "../Sections/ProjectsSection/page";
import TestimonialSection from "../Sections/TestimonialSection/page";
import StacksShopify from "./StackShopify/page";
import ShopifyHeroSection from "./ShopidyHeroSection/page";

const Shopify = () => {
  return (
    <main>
      <ShopifyHeroSection />
      <WhyShopify />
      <ShopifyStacks />
      <StacksShopify />
      <WhyusShopify />
      <ProjectsSection />
      <TestimonialSection />
      <ContactForm />
    </main>
  );
};

export default Shopify;
