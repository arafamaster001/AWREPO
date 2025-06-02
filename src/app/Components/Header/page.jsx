"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { X, Calendar, DollarSign, Globe } from "lucide-react";
import splitStringUsingRegex from "@/app/utils/page";

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const pathname = usePathname();

  const NavLinks = [
    { label: "Home", path: "landing" },
    { label: "About Us", path: "about" },
    { label: "Services", path: "services" },
    { label: "Projects", path: "projects" },
  ];

  const scrollToSection = (id) => {
    if (pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        const offset = -70;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionTop + offset,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const getTransformStyles = (isHovered, index) => ({
    transform: `translateY(${isHovered ? "-100%" : "0%"})`,
    transitionDelay: `${index * 0.02}s`,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project booking data:", formData);
    alert("Project booking submitted! We'll contact you soon.");
    setShowBookingForm(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      timeline: "",
      budget: "",
      description: "",
    });
  };

  const projectTypes = [
    { value: "business-website", label: "Business Website" },
    { value: "e-commerce", label: "E-commerce Store" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "portfolio", label: "Portfolio Website" },
    { value: "custom", label: "Custom Solution" },
  ];

  const budgetRanges = ["$500 - $1,000", "$1,000 - $3,000", "$3,000 - $5,000", "$5,000 - $10,000", "$10,000+"];
  const timelineOptions = ["1-2 weeks", "2-4 weeks", "1-2 months", "2-3 months", "3+ months"];

  return (
    <>
      <header className="fixed w-full z-20 bg-transparent" style={{ backdropFilter: "blur(20px)" }}>
        <nav className="px-[5%] flex items-center justify-between h-16">
          <div className="logo">
            <Link href={"/"} className="text-3xl font-bold">Arafa Webs</Link>
          </div>
          <div className="abc">

            <div className="nav_links hidden lg:flex items-center gap-6">
              {NavLinks.map((nav, navIndex) => (
                <p
                  key={nav.label}
                  id={`navmanu_${navIndex + 1}`}
                  onClick={() => scrollToSection(nav.path)}
                  onMouseEnter={() => setHoveredIndex(navIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`text_container relative cursor-pointer ${
                    pathname === nav.path ? " font-semibold" : "text-white"
                  }`}
                >
                  <div className="overflow-hidden">
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
                  </div>
                   <div className="dropdown_container w-full opacity-0 top-5 bg-white text-black absolute">
                      <ul>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                      </ul>
                    </div>
                </p>

              ))}
            </div>
           

          </div>

          <div className="hidden lg:block">
            <button className="main_btn" onClick={() => setShowBookingForm(true)}>Get Started</button>
          </div>

          <div
            className="nav_toggle_box flex flex-col gap-1 cursor-pointer lg:hidden z-40"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`nav_toggle_btns w-6 h-[2px] bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`nav_toggle_btns w-6 h-[2px] bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </div>
        </nav>

        <div className={`fixed top-0 right-0 h-screen w-full   bg-black text-white px-6 py-10 flex flex-col justify-between gap-6 z-30 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {/* <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-white text-xl"></button>
          </div> */}
          <div className="flex flex-col gap-5 py-[10%]">
          {NavLinks.map((nav) => (
            <button
              key={nav.label}
              onClick={() => {
                scrollToSection(nav.path);
                setIsOpen(false);
              }}
              className={`text-lg text-left ${pathname === nav.path ? " font-semibold" : "text-white"}`}
            >
              {nav.label}
            </button>
          ))}
          </div>
          <button className="main_btn  mt-4" onClick={() => {
            setIsOpen(false);
            setShowBookingForm(true);
          }}>Get Started</button>
        </div>
      </header>

      {showBookingForm && (
        <div className="modal-overlay">
          <div className="modal-backdrop" onClick={() => setShowBookingForm(false)} />
          <div className="modal-dot" />
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h2 className="text-2xl font-bold">Book Your Project</h2>
                <p className="text-white/80 mt-1">Let's bring your web vision to life</p>
              </div>
              <button onClick={() => setShowBookingForm(false)} className="close-btn">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-grid">
                <div>
                  <label>Full Name *</label>
                  <input name="name" required value={formData.name} onChange={handleInputChange} className="form-input" />
                </div>
                <div>
                  <label>Email Address *</label>
                  <input name="email" type="email" required value={formData.email} onChange={handleInputChange} className="form-input" />
                </div>
              </div>

              <div>
                <label>Phone Number</label>
                <input name="phone" value={formData.phone} onChange={handleInputChange} className="form-input" />
              </div>

              <div>
                <label><Globe className="icon" /> Project Type *</label>
                <select name="projectType" required value={formData.projectType} onChange={handleInputChange} className="form-input">
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-grid">
                <div>
                  <label><Calendar className="icon" /> Timeline *</label>
                  <select name="timeline" required value={formData.timeline} onChange={handleInputChange} className="form-input">
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label><DollarSign className="icon" /> Budget Range *</label>
                  <select name="budget" required value={formData.budget} onChange={handleInputChange} className="form-input">
                    <option value="">Select budget</option>
                    {budgetRanges.map((range) => (
                      <option className="" key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label>Project Description</label>
                <textarea name="description" rows={4} value={formData.description} onChange={handleInputChange} className="form-input resize-none" />
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setShowBookingForm(false)} className="cancel-btn">Cancel</button>
                <button type="submit" className="submit-btn">Book Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;


// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import { X, Calendar, DollarSign, Globe } from "lucide-react";
// import splitStringUsingRegex from "@/app/utils/page";


// const Header = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   const pathname = usePathname();

//   const NavLinks = [
//     { label: "Home", path: "landing" },
//     { label: "About Us", path: "about" },
//     { label: "Services", path: "services" },
//     { label: "Projects", path: "projects" },
//   ];

//   const scrollToSection = (id) => {
//     if (pathname === "/") {
//       const section = document.getElementById(id);
//       if (section) {
//         const offset = -70;
//         const sectionTop = section.getBoundingClientRect().top + window.scrollY;
//         window.scrollTo({
//           top: sectionTop + offset,
//           behavior: "smooth",
//         });
//       }
//     } else {
//       window.location.href = `/#${id}`;
//     }
//   };

//   const getTransformStyles = (isHovered, index) => ({
//     transform: `translateY(${isHovered ? "-100%" : "0%"})`,
//     transitionDelay: `${index * 0.02}s`,
//   });

//   // Booking form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     projectType: "",
//     timeline: "",
//     budget: "",
//     description: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Project booking data:", formData);
//     alert("Project booking submitted! We'll contact you soon.");
//     setShowBookingForm(false);
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       projectType: "",
//       timeline: "",
//       budget: "",
//       description: "",
//     });
//   };

//   const projectTypes = [
//     { value: "business-website", label: "Business Website" },
//     { value: "e-commerce", label: "E-commerce Store" },
//     { value: "mobile-app", label: "Mobile App" },
//     { value: "portfolio", label: "Portfolio Website" },
//     { value: "custom", label: "Custom Solution" },
//   ];

//   const budgetRanges = ["$500 - $1,000", "$1,000 - $3,000", "$3,000 - $5,000", "$5,000 - $10,000", "$10,000+"];
//   const timelineOptions = ["1-2 weeks", "2-4 weeks", "1-2 months", "2-3 months", "3+ months"];

//   return (
//     <>
//       <header className="fixed w-full z-20 bg-transparent" style={{ backdropFilter: "blur(20px)" }}>
//         <nav className="px-[5%] flex items-center justify-between h-16">
//           <div className="logo">
//             <Link href={"/"} className="text-3xl font-bold">Arafa Webs</Link>
//           </div>

//           <div className="nav_links hidden lg:flex items-center gap-6">
//             {NavLinks.map((nav, navIndex) => (
//               <p
//                 key={nav.label}
//                 onClick={() => scrollToSection(nav.path)}
//                 onMouseEnter={() => setHoveredIndex(navIndex)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className={`text_container relative cursor-pointer ${
//                   pathname === nav.path ? " font-semibold" : "text-white"
//                 }`}
//               >
//                 {splitStringUsingRegex(nav.label).map((character, index) => (
//                   <span className="char_container inline-block" key={index}>
//                     <span style={getTransformStyles(hoveredIndex === navIndex, index)}>
//                       {character}
//                     </span>
//                     <span style={getTransformStyles(hoveredIndex === navIndex, index)}>
//                       {character}
//                     </span>
//                   </span>
//                 ))}
//               </p>
//             ))}
//           </div>

// <<<<<<< HEAD
//           <div className="hidden lg:block">
//             <button className="main_btn" onClick={() => setShowBookingForm(true)}>Get Started</button>
//           </div>
// =======
//         {/* Desktop CTA */}
//         <div className="hidden lg:block">
//           <button
//         onClick={() => scrollToSection("contactForm")}
          
//           className="main_btn">Get Started</button>
//         </div>
// >>>>>>> a9348db86aaa2272099372ab1f17493b66aa0756

//           <div
//             className="nav_toggle_box flex flex-col gap-1 cursor-pointer lg:hidden z-40"
//             onClick={() => setIsOpen(!isOpen)}
//           >
// <<<<<<< HEAD
//             <span className={`nav_toggle_btns w-6 h-[2px] bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
//             <span className={`nav_toggle_btns w-6 h-[2px] bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
//           </div>
//         </nav>

//         <div className={`fixed top-0 right-0 h-screen w-64 bg-black text-white px-6 py-10 flex flex-col gap-6 z-30 transform transition-transform duration-300 lg:hidden ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}>
//           <div className="flex justify-end">
//             <button onClick={() => setIsOpen(false)} className="text-white text-xl"></button>
//           </div>
//           {NavLinks.map((nav) => (
//             <button
//               key={nav.label}
//               onClick={() => {
//                 scrollToSection(nav.path);
//                 setIsOpen(false);
//               }}
//               className={`text-lg text-left ${pathname === nav.path ? " font-semibold" : "text-white"}`}
//             >
//               {nav.label}
//             </button>
//           ))}
//           <button className="main_btn w-fit mt-4" onClick={() => {
//             setIsOpen(false);
//             setShowBookingForm(true);
//           }}>Get Started</button>
//         </div>
//       </header>

//       {showBookingForm && (
//         <div className="modal-overlay">
//           <div className="modal-backdrop" onClick={() => setShowBookingForm(false)} />
//           <div className="modal-dot" />
//           <div className="modal-content">
//             <div className="modal-header">
//               <div>
//                 <h2 className="text-2xl font-bold">Book Your Project</h2>
//                 <p className="text-white/80 mt-1">Let's bring your web vision to life</p>
//               </div>
//               <button onClick={() => setShowBookingForm(false)} className="close-btn">
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="modal-form">
//               <div className="form-grid">
//                 <div>
//                   <label>Full Name *</label>
//                   <input name="name" required value={formData.name} onChange={handleInputChange} className="form-input" />
//                 </div>
//                 <div>
//                   <label>Email Address *</label>
//                   <input name="email" type="email" required value={formData.email} onChange={handleInputChange} className="form-input" />
//                 </div>
//               </div>

//               <div>
//                 <label>Phone Number</label>
//                 <input name="phone" value={formData.phone} onChange={handleInputChange} className="form-input" />
//               </div>

//               <div>
//                 <label><Globe className="icon" /> Project Type *</label>
//                 <select name="projectType" required value={formData.projectType} onChange={handleInputChange} className="form-input">
//                   <option value="">Select project type</option>
//                   {projectTypes.map((type) => (
//                     <option key={type.value} value={type.value}>{type.label}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-grid">
//                 <div>
//                   <label><Calendar className="icon" /> Timeline *</label>
//                   <select name="timeline" required value={formData.timeline} onChange={handleInputChange} className="form-input">
//                     <option value="">Select timeline</option>
//                     {timelineOptions.map((option) => (
//                       <option key={option} value={option}>{option}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label><DollarSign className="icon" /> Budget Range *</label>
//                   <select name="budget" required value={formData.budget} onChange={handleInputChange} className="form-input">
//                     <option value="">Select budget</option>
//                     {budgetRanges.map((range) => (
//                       <option className="" key={range} value={range}>{range}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label>Project Description</label>
//                 <textarea name="description" rows={4} value={formData.description} onChange={handleInputChange} className="form-input resize-none" />
//               </div>

//               <div className="form-actions">
//                 <button type="button" onClick={() => setShowBookingForm(false)} className="cancel-btn">Cancel</button>
//                 <button type="submit" className="submit-btn">Book Project</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
// =======
//             {nav.label}
//           </Link>
//         ))}
//         <button
//         onClick={() => scrollToSection("contactForm")}
//         className="main_btn w-fit mt-4">Get Started</button>
//       </div>
//     </header>
// >>>>>>> a9348db86aaa2272099372ab1f17493b66aa0756
//   );
// };

// export default Header;


// "use client";
// import Link from "next/link";
// import React, { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import splitStringUsingRegex from "@/app/utils/page";

// const Header = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//   const servicesRef = useRef(null);

//   const pathname = usePathname();

//   const NavLinks = [
//     { label: "Home", path: "landing" },
//     { label: "About Us", path: "about" },
//     { label: "Services", path: "services" },
//     { label: "Projects", path: "projects" },
//   ];

//   const scrollToSection = (id) => {
//     if (pathname === "/") {
//       const section = document.getElementById(id);
//       if (section) {
//         const offset = -70;
//         const sectionTop = section.getBoundingClientRect().top + window.scrollY;
//         window.scrollTo({
//           top: sectionTop + offset,
//           behavior: "smooth",
//         });
//       }
//     } else {
//       window.location.href = `/#${id}`;
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (servicesRef.current && !servicesRef.current.contains(event.target)) {
//         setServicesDropdownOpen(false);
//       }
//     };
//     if (servicesDropdownOpen) {
//       window.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       window.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [servicesDropdownOpen]);

//   const getTransformStyles = (isHovered, index) => ({
//     transform: `translateY(${isHovered ? "-100%" : "0%"})`,
//     transitionDelay: `${index * 0.02}s`,
//   });

//   // Dropdown items for Services with links
//   const servicesDropdownItems = [
//     { label: "Mernstack", path: "/mernstack" },
//     { label: "Shopify", path: "/shopify" },
//     { label: "Wordpress", path: "/wordpress" },
//   ];

//   return (
//     <>
//       <header
//         className="fixed w-full z-20 bg-transparent border-b border-white/20"
//         style={{ backdropFilter: "blur(20px)" }}
//       >
//         <nav className="px-[5%] flex items-center justify-between h-16 relative max-w-7xl mx-auto">
//           <div className="logo">
//             <Link href={"/"} className="text-3xl font-bold">
//               Arafa Webs
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="nav_links hidden lg:flex items-center gap-6">
//             {NavLinks.map((nav, navIndex) => {
//               if (nav.label === "Services") {
//                 return (
//                   <div
//                     key={nav.label}
//                     className="relative"
//                     ref={servicesRef}
//                     onMouseEnter={() => {
//                       setHoveredIndex(navIndex);
//                       setServicesDropdownOpen(true);
//                     }}
//                     onMouseLeave={() => {
//                       setHoveredIndex(null);
//                       setServicesDropdownOpen(false);
//                     }}
//                   >
//                     <p
//                       onClick={() => scrollToSection(nav.path)}
//                       className={`text_container relative cursor-pointer ${
//                         pathname === nav.path ? "font-semibold" : "text-white"
//                       }`}
//                     >
//                       {splitStringUsingRegex(nav.label).map((character, index) => (
//                         <span className="char_container inline-block" key={index}>
//                           <span style={getTransformStyles(hoveredIndex === navIndex, index)}>
//                             {character}
//                           </span>
//                           <span style={getTransformStyles(hoveredIndex === navIndex, index)}>
//                             {character}
//                           </span>
//                         </span>
//                       ))}
//                     </p>

//                     {/* Dropdown */}
//                     {servicesDropdownOpen && (
//                       <ul className="absolute top-full left-0 w-[200px] bg-black text-white mt-1 rounded shadow-lg z-30">
//                         {servicesDropdownItems.map(({ label, path }) => (
//                           <li
//                             key={label}
//                             className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
//                           >
//                             <Link href={path} onClick={() => setServicesDropdownOpen(false)}>
//                               {label}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 );
//               } else {
//                 return (
//                   <p
//                     key={nav.label}
//                     onClick={() => scrollToSection(nav.path)}
//                     onMouseEnter={() => setHoveredIndex(navIndex)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                     className={`text_container relative cursor-pointer ${
//                       pathname === nav.path ? "font-semibold" : "text-white"
//                     }`}
//                   >
//                     {splitStringUsingRegex(nav.label).map((character, index) => (
//                       <span className="char_container inline-block" key={index}>
//                         <span style={getTransformStyles(hoveredIndex === navIndex, index)}>
//                           {character}
//                         </span>
//                         <span style={getTransformStyles(hoveredIndex === navIndex, index)}>
//                           {character}
//                         </span>
//                       </span>
//                     ))}
//                   </p>
//                 );
//               }
//             })}
//           </div>

//           {/* Desktop CTA */}
//           <div className="hidden lg:block">
//             <button className="main_btn" onClick={() => setShowBookingForm(true)}>
//               Get Started
//             </button>
//           </div>

//           {/* Hamburger Toggle (Mobile) */}
//           <div
//             className="nav_toggle_box flex flex-col gap-1 cursor-pointer lg:hidden z-40"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span
//               className={`nav_toggle_btns w-6 h-[2px] bg-white transition-transform duration-300 ${
//                 isOpen ? "rotate-45 translate-y-[5px]" : ""
//               }`}
//             />
//             <span
//               className={`nav_toggle_btns w-6 h-[2px] bg-white transition-transform duration-300 ${
//                 isOpen ? "-rotate-45 -translate-y-[5px]" : ""
//               }`}
//             />
//           </div>
//         </nav>

//         {/* Mobile Slide-in Menu */}
//         <div
//           className={`fixed top-0 right-0 h-screen w-64 bg-black text-white px-6 py-10 flex flex-col gap-6 z-30 transform transition-transform duration-300 lg:hidden ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="flex justify-end">
//             <button onClick={() => setIsOpen(false)} className="text-white text-xl"></button>
//           </div>
//           {NavLinks.map((nav) => (
//             <button
//               key={nav.label}
//               onClick={() => {
//                 scrollToSection(nav.path);
//                 setIsOpen(false);
//               }}
//               className={`text-lg text-left ${
//                 pathname === nav.path ? "font-semibold" : "text-white"
//               }`}
//             >
//               {nav.label}
//             </button>
//           ))}
//           <button
//             className="main_btn w-fit mt-4"
//             onClick={() => {
//               setIsOpen(false);
//               setShowBookingForm(true);
//             }}
//           >
//             Get Started
//           </button>
//         </div>
//       </header>

//       {/* Booking form modal code here (unchanged) */}
//     </>
//   );
// };

// export default Header;
