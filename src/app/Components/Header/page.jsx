"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import splitStringUsingRegex from "@/app/utils/page";

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLinks = [
    { label: "Home", path: "landing" },
    { label: "About Us", path: "about" },
    { label: "Services", path: "services" },
    { label: "Projects", path: "projects" },
    // { label: "Blogs", path: "blogs" },
    // { label: "Blogs", path: "blogs" }
  ];

   // Function to scroll to a specific section with an offset
  const scrollToSection = (id) => {
    // If already on the home page, just scroll to the section
    if (pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        const offset = -70; // Adjust this value as needed
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionTop + offset,
          behavior: "smooth",
        });
      }
    } else {
      // Navigate to the home page and then scroll to the section
      window.location.href = `/#${id}`;
    }
  };

  const getTransformStyles = (isHovered, index) => ({
    transform: `translateY(${isHovered ? "-100%" : "0%"})`,
    transitionDelay: `${index * 0.02}s`,
  });

  return (
    <header className="fixed w-full z-20 bg-transparent" style={{ backdropFilter: "blur(20px)" }}>
      <nav className="px-[5%] flex items-center justify-between h-16">
        <div className="logo">
          <Link href={"/"} className="text-3xl font-bold">Arafa Webs</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav_links hidden lg:flex items-center gap-6">
          {NavLinks.map((nav, navIndex) => (
            <p
              key={nav.label}
              // href={nav.path}
                onClick={() => scrollToSection(nav.path)}
              onMouseEnter={() => setHoveredIndex(navIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`text_container relative ${
                pathname === nav.path ? " font-semibold" : "text-white"
              }`}
            >
              {splitStringUsingRegex(nav.label).map((character, index) => (
                <span className="char_container inline-block" key={index}>
                  <span style={getTransformStyles(hoveredIndex === navIndex, index)}>
                    {character}
                  </span>
                  <span style={getTransformStyles(hoveredIndex === navIndex, index)}>
                    {character}
                  </span>
                </span>
              ))}
            </p>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
        onClick={() => scrollToSection("contactForm")}
          
          className="main_btn">Get Started</button>
        </div>

        {/* Hamburger Toggle (Mobile) */}
        <div
          className="nav_toggle_box flex flex-col gap-1 cursor-pointer lg:hidden z-40"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`nav_toggle_btns w-6 h-[2px] bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          ></span>
          <span
            className={`nav_toggle_btns w-6 h-[2px] bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          ></span>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-black text-white px-6 py-10 flex flex-col gap-6 z-30 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-white text-xl"></button>
        </div>
        {NavLinks.map((nav) => (
          <Link
            key={nav.label}
            href={nav.path}
            onClick={() => setIsOpen(false)}
            className={`text-lg ${
              pathname === nav.path ? " font-semibold" : "text-white"
            }`}
          >
            {nav.label}
          </Link>
        ))}
        <button
        onClick={() => scrollToSection("contactForm")}
        className="main_btn w-fit mt-4">Get Started</button>
      </div>
    </header>
  );
};

export default Header;



// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import splitStringUsingRegex from "@/app/utils/page";

// const Header = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null); 
//   const [isOpen, setIsOpen] = useState(false);

//   const NavLinks = ["Home", "About Us", "Services", "Projects", "Blogs"];

//   const getTransformStyles = (isHovered, index) => ({
//     transform: `translateY(${isHovered ? "-100%" : "0%"})`,
//     transitionDelay: `${index * 0.02}s`,
//   });

//   return (
//     <header className="fixed w-full z-20 bg-transparent" style={{ backdropFilter: 'blur(20px)' }}>
//       <nav className="px-[5%] flex items-center justify-between h-16">
//         <div className="logo">
//           <span className="text-3xl font-bold">Arafa Webs</span>
//         </div>

//         {/* Desktop Nav */}
//         <div className="nav_links hidden lg:flex items-center gap-6">
//           {NavLinks.map((Nav, navIndex) => (
//             <Link
//               key={Nav}
//               href={"/"}
//               onMouseEnter={() => setHoveredIndex(navIndex)} 
//               onMouseLeave={() => setHoveredIndex(null)} 
//             >
//               <span className="text_container">
//                 {splitStringUsingRegex(Nav).map((character, index) => (
//                   <span className="char_container" key={index}>
//                     <span style={getTransformStyles(hoveredIndex === navIndex, index)}>
//                       {character}
//                     </span>
//                     <span style={getTransformStyles(hoveredIndex === navIndex, index)}>
//                       {character}
//                     </span>
//                   </span>
//                 ))}
//               </span>
//             </Link>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden lg:block">
//           <button className="main_btn">Get Started</button>
//         </div>

//         {/* Hamburger Toggle (Mobile) */}
//         <div
//           className="nav_toggle_box flex flex-col gap-1 cursor-pointer lg:hidden z-40"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span
//             className={`nav_toggle_btns w-6 h-[2px] bg-white transition-transform duration-300 ${
//               isOpen ? "rotate-45 translate-y-[5px]" : ""
//             }`}
//           ></span>
//           <span
//             className={`nav_toggle_btns w-6 h-[2px] bg-white transition-transform duration-300 ${
//               isOpen ? "-rotate-45 -translate-y-[5px]" : ""
//             }`}
//           ></span>
//         </div>
//       </nav>

//       {/* Right Slide-in Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-64 bg-black text-white px-6 py-10 flex flex-col gap-6 z-30 transform transition-transform duration-300 lg:hidden  ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-end">
//           <button onClick={() => setIsOpen(false)} className="text-white text-xl"></button>
//         </div>
//         {/* Nav Links */}
//         {NavLinks.map((Nav) => (
//           <Link key={Nav} href={"/"} onClick={() => setIsOpen(false)}>
//             <span className="text-lg">{Nav}</span>
//           </Link>
//         ))}
        
//         {/* CTA Button */}
//         <button className="main_btn w-fit mt-4 justify-self-end">Get Started</button>
//       </div>
//     </header>
//   );
// };

// export default Header;
