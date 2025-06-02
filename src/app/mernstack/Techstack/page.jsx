"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiMongodb,
  SiDocker,
  SiPostgresql,
  SiVite,
  SiFirebase,
  SiSvelte,
  SiRemix,
  SiAstro,
  SiLit,
  SiBun,
  SiPrisma,
  SiSupabase,
  SiHasura,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb"; // For Three.js

const blurInVariant = {
  hidden: {
    opacity: 0,
    filter: "blur(20px) brightness(0.3)",
    scale: 0.8,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  visible: (delay = 0) => ({
    opacity: 1,
    filter: "blur(0px) brightness(1)",
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    filter: "blur(20px) brightness(1)",
    scale: 1.2,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const frontendIcons = [
  { id: "React", icon: <SiReact /> },
  { id: "Next.js", icon: <SiNextdotjs /> },
  { id: "Vue", icon: <SiVuedotjs /> },
  { id: "Angular", icon: <SiAngular /> },
  { id: "Svelte", icon: <SiSvelte /> },
  { id: "Remix", icon: <SiRemix /> },
  { id: "Astro", icon: <SiAstro /> },
  // { id: "Qwik", icon: <span>Qwik</span> }, // No official icon in react-icons
  { id: "Lit", icon: <SiLit /> },
  { id: "Three.js", icon: <TbBrandThreejs /> },
  // { id: "Tailwind", icon: <SiTailwindcss /> },
  { id: "JavaScript", icon: <SiJavascript /> },
  { id: "TypeScript", icon: <SiTypescript /> },
  { id: "Vite", icon: <SiVite /> },
];


const backendIcons = [
  { id: "Node.js", icon: <SiNodedotjs /> },
  { id: "Bun", icon: <SiBun /> },
  { id: "Express", icon: <SiExpress /> },
  // { id: "tRPC", icon: <span>tRPC</span> }, // No official icon
  { id: "GraphQL", icon: <SiGraphql /> },
  { id: "MongoDB", icon: <SiMongodb /> },
  { id: "PostgreSQL", icon: <SiPostgresql /> },
  { id: "Prisma", icon: <SiPrisma /> },
  { id: "Supabase", icon: <SiSupabase /> },
  { id: "Firebase", icon: <SiFirebase /> },
  { id: "Hasura", icon: <SiHasura /> },
  { id: "Docker", icon: <SiDocker /> },
];


const TechCase = () => {
  const [showFrontend, setShowFrontend] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFrontend((prev) => !prev);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentIcons = showFrontend ? frontendIcons : backendIcons;

  return (
    <div className="w-full h-auto   bg-black flex justify-center items-center relative px-[5%] py-[10%] md:p-[5%]">
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:52px_52px]" /> */}
      <AnimatePresence mode="wait">
        <motion.div
          key={showFrontend ? "frontend" : "backend"}
          variants={blurInVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={0}
          className="grid grid-cols-3 md:grid-cols-6 gap-14 md:gap-24 text-white text-4xl md:text-5xl"
        >
          {currentIcons.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
              title={item.id}
            >
              {item.icon}
              <span className="text-sm mt-2">{item.id}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TechCase
// "use client";

// import { useRef, useState } from "react";
// import {
//   SiNextdotjs,
//   SiVuedotjs,
//   SiAngular,
//   SiNodedotjs,
//   SiExpress,
//   SiJavascript,
//   SiReact,
//   SiTypescript,
//   SiTailwindcss,
//   SiGraphql,
//   SiMongodb,
//   SiDocker,
// } from "react-icons/si";
// import { X } from "lucide-react";

// export function TechShowcase() {
//   const containerRef = useRef(null);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [selectedTech, setSelectedTech] = useState(null);

//   // Tech items with their properties and descriptions
//   const techItems = [
//     {
//       id: "javascript",
//       name: "JavaScript",
//       icon: <SiJavascript />,
//       position: "left-[15%] top-[21%]",
//       description:
//         "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It's a core technology of the World Wide Web and enables interactive web pages.",
//     },
//     {
//       id: "typescript",
//       name: "TypeScript",
//       icon: <SiTypescript />,
//       position: "left-[35%] top-[15%]",
//       description:
//         "TypeScript is a strict syntactical superset of JavaScript that adds optional static typing. It is designed for the development of large applications and transpiles to JavaScript.",
//     },
//     {
//       id: "react",
//       name: "React",
//       icon: <SiReact />,
//       position: "left-[50%] top-[25%]",
//       description:
//         "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
//     },
//     {
//       id: "nextjs",
//       name: "Next.js",
//       icon: <SiNextdotjs />,
//       position: "right-[35%] top-[15%]",
//       description:
//         "Next.js is a React framework that enables server-side rendering and generating static websites. It offers a great developer experience with features like file-system routing and API routes.",
//     },
//     {
//       id: "vuejs",
//       name: "Vue.js",
//       icon: <SiVuedotjs />,
//       position: "right-[15%] top-[21%]",
//       description:
//         "Vue.js is a progressive JavaScript framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.",
//     },
//     {
//       id: "angular",
//       name: "Angular",
//       icon: <SiAngular />,
//       position: "left-[15%] bottom-[20%]",
//       description:
//         "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google. It offers a complete solution for building complex applications in the browser.",
//     },
//     {
//       id: "nodejs",
//       name: "Node.js",
//       icon: <SiNodedotjs />,
//       position: "left-[32%] top-[45%]",
//       description:
//         "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript for server-side scripting.",
//     },
//     {
//       id: "expressjs",
//       name: "Express.js",
//       icon: <SiExpress />,
//       position: "left-[48%] bottom-[20%]",
//       description:
//         "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is the de facto standard server framework for Node.js.",
//     },
//     {
//       id: "mongodb",
//       name: "MongoDB",
//       icon: <SiMongodb />,
//       position: "right-[30%] top-[45%]",
//       description:
//         "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database, MongoDB uses JSON-like documents with optional schemas instead of traditional table-based relational database structures.",
//     },
//     {
//       id: "graphql",
//       name: "GraphQL",
//       icon: <SiGraphql />,
//       position: "right-[13%] bottom-[20%]",
//       description:
//         "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. It provides a more efficient, powerful and flexible alternative to REST.",
//     },
//     {
//       id: "tailwind",
//       name: "Tailwind CSS",
//       icon: <SiTailwindcss />,
//       position: "left-[32%] bottom-[5%]",
//       description:
//         "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all the building blocks you need to build bespoke designs.",
//     },
//     {
//       id: "docker",
//       name: "Docker",
//       icon: <SiDocker />,
//       position: "right-[32%] bottom-[5%]",
//       description:
//         "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files.",
//     },
//   ];

//   const handleTechClick = (tech) => {
//     setSelectedTech(tech);
//   };

//   const closePopup = () => {
//     setSelectedTech(null);
//   };

//   return (
//     <div className="relative w-full px-[5%]   h-[90vh] " ref={containerRef}>
//       <div className="absolute inset-0 bg-black overflow-hidden">
//         {/* Subtle gradient background */}
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             background: `radial-gradient(circle at 50% 50%, rgba(50, 50, 50, 0.6) 0%, rgba(0, 0, 0, 1) 70%)`,
//           }}
//         ></div>

//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, #333 1px, transparent 1px),
//               linear-gradient(to bottom, #333 1px, transparent 1px)
//             `,
//             backgroundSize: "50px 50px",
//           }}
//         ></div>
//       </div>

//       <div className="relative w-full h-full">
//         {/* <span className="text-gray-400">[ Tech Stack ]</span> */}
//         {/* Tech icons */}
//         {techItems.map((item) => (
//           <div
//             key={item.id}
//             className={`absolute ${item.position} transition-all duration-300 ease-out `}
//             onMouseEnter={() => setHoveredItem(item.id)}
//             onMouseLeave={() => setHoveredItem(null)}
//             onClick={() => handleTechClick(item)}
//           >
//             <div className="flex flex-col items-center cursor-pointer">
//               {/* Icon with improved animation */}
//               <div
//                 className={`text-gray-300 transition-all duration-300 ease-out`}
//                 style={{
//                   fontSize: hoveredItem === item.id ? "3.2rem" : "3rem",
//                   filter:
//                     hoveredItem === item.id
//                       ? "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))"
//                       : "",
//                   transform:
//                     hoveredItem === item.id
//                       ? "scale(1.2) translateY(-5px)"
//                       : "scale(1) translateY(0)",
//                 }}
//               >
//                 {item.icon}
//               </div>

//               {/* Name with smooth reveal animation */}
//               <div className="h-8 mt-2 relative flex items-center justify-center overflow-hidden">
//                 <div
//                   className={`text-gray-300 font-light tracking-wide transition-all duration-300 ease-out`}
//                   style={{
//                     opacity: hoveredItem === item.id ? 1 : 0,
//                     transform:
//                       hoveredItem === item.id
//                         ? "translateY(0)"
//                         : "translateY(10px)",
//                     maxHeight: hoveredItem === item.id ? "2rem" : "0",
//                   }}
//                 >
//                   {item.name}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Tech Info Popup - Modern Black Design */}
//       {selectedTech && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
//           onClick={closePopup}
//         >
//           <div
//             className="relative bg-black border border-gray-800 rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden backdrop-blur-md animate-in zoom-in-95 duration-300"
//             style={{
//               background:
//                 "linear-gradient(to bottom right, rgba(30, 30, 30, 0.8), rgba(10, 10, 10, 0.9))",
//               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Subtle glow effect on the border */}
//             <div
//               className="absolute inset-0 rounded-xl opacity-20 z-0"
//               style={{
//                 boxShadow: "inset 0 0 30px rgba(100, 100, 100, 0.3)",
//                 background:
//                   "linear-gradient(45deg, transparent, rgba(100, 100, 100, 0.1), transparent)",
//               }}
//             ></div>

//             <div className="relative z-10">
//               {/* Header with gradient underline */}
//               <div className="p-6 pb-4">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-2xl font-medium text-white tracking-wide">
//                     {selectedTech.name}
//                   </h3>
//                   <button
//                     onClick={closePopup}
//                     className="text-gray-500 hover:text-white transition-colors duration-200 rounded-full hover:bg-gray-800 p-2"
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>
//                 <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-4"></div>
//               </div>

//               {/* Content area */}
//               <div className="p-6 pt-2 flex flex-col md:flex-row gap-8">
//                 {/* Icon with glow effect */}
//                 <div className="flex items-center justify-center md:w-1/4">
//                   <div
//                     className="text-7xl text-gray-200 transform transition-all duration-300 hover:scale-110"
//                     style={{
//                       filter: "drop-shadow(0 0 15px rgba(150, 150, 150, 0.3))",
//                     }}
//                   >
//                     {selectedTech.icon}
//                   </div>
//                 </div>

//                 {/* Description with improved typography */}
//                 <div className="md:w-3/4">
//                   <p className="text-gray-300 leading-relaxed text-lg font-light tracking-wide">
//                     {selectedTech.description}
//                   </p>

//                   {/* Additional subtle details */}
//                   <div className="mt-6 pt-4 border-t border-gray-800">
//                     <div className="flex items-center text-gray-500 text-sm">
//                       <span className="inline-block w-2 h-2 rounded-full bg-gray-500 mr-2"></span>
//                       Click anywhere outside to close
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
