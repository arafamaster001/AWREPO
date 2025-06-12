import HeroSection from "./Sections/HeroSection/page";
import AboutSection from "./Sections/AboutSection/page";
import ServicesSection from "./Sections/ServicesSection/page";
import TeamSection from "./Sections/TeamSection/page";
import ProjectsSection from "./Sections/ProjectsSection/page";
import ContactForm from "./Sections/ContactForm/page";
import WhyUsSection from "./Sections/WhyUsSection/page";
import TestimonialSection from "./Sections/TestimonialSection/page";
import CookieConsentBanner from "./Components/cookieConset";

export default function Home() {
  return (
    <>
      <CookieConsentBanner />
      <HeroSection /> 
      <AboutSection />  {/* Done */}
      <ServicesSection />  {/* Done */}
      <WhyUsSection /> {/* Done */}
      <ProjectsSection /> {/* Done */}
      <TestimonialSection /> {/* Done */}
      <ContactForm /> {/* Done */}
      {/* <TeamSection/> */}
    </>
  );
}
