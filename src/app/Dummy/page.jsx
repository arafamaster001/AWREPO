"use client"
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from "react-icons/si";

const blurInVariant = {
  hidden: {
    opacity: 0,
    filter: 'blur(20px) brightness(0.3)',
    scale: 0.8,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  },
  visible: (delay = 0) => ({
    opacity: 1,
    filter: 'blur(0px) brightness(1)',
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: 'easeOut'
    }
  }),
  exit: {
    opacity: 0,
    filter: 'blur(20px) brightness(0.2)',
    scale: 1.2,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

const frontendIcons = [
  { id: 'react', icon: <SiReact /> },
  { id: 'vue', icon: <SiVuedotjs /> },
  { id: 'angular', icon: <SiAngular /> },
  { id: 'javascript', icon: <SiJavascript /> },
  { id: 'typescript', icon: <SiTypescript /> },
  { id: 'tailwind', icon: <SiTailwindcss /> },
];

const backendIcons = [
  { id: 'node', icon: <SiNodedotjs /> },
  { id: 'express', icon: <SiExpress /> },
  { id: 'graphql', icon: <SiGraphql /> },
  { id: 'next', icon: <SiNextdotjs /> },
  { id: 'mongo', icon: <SiMongodb /> },
  { id: 'docker', icon: <SiDocker /> },
];

const Dummy = () => {
  const [showFrontend, setShowFrontend] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFrontend((prev) => !prev);
    }, 4000); // Every 4 seconds toggle

    return () => clearInterval(interval);
  }, []);

  const currentIcons = showFrontend ? frontendIcons : backendIcons;

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <AnimatePresence mode="wait">
        <motion.div
          key={showFrontend ? 'frontend' : 'backend'}
          variants={blurInVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={0}
          className="grid grid-cols-4 grid-rows-2 gap-44 text-white text-6xl"
        >
          {currentIcons.map((item) => (
            <div key={item.id} className="flex justify-center items-center" title={item.id}>
              {item.icon}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Dummy;

// "use client"
// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiSvelte, SiNuxtdotjs,
//   SiTailwindcss, SiBootstrap, SiSass,
//   SiJavascript, SiTypescript, SiHtml5, SiCss3,
//   SiNodedotjs, SiExpress, SiDjango, SiLaravel,
//   SiGraphql, SiApollographql, SiJsonwebtokens,
//   SiMongodb, SiPostgresql, SiMysql, SiFirebase,
//   SiDocker, SiGit, SiGithub, SiVercel, SiNetlify, SiWebpack
// } from 'react-icons/si';

// const blurInVariant = {
//   hidden: {
//     opacity: 0,
//     filter: 'blur(20px) brightness(0.3)',
//     scale: 0.8,
//     transition: { duration: 0.6, ease: 'easeInOut' }
//   },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     filter: 'blur(0px) brightness(1)',
//     scale: 1,
//     transition: { duration: 0.8, delay, ease: 'easeOut' }
//   }),
//   exit: {
//     opacity: 0,
//     filter: 'blur(20px) brightness(0.2)',
//     scale: 1.2,
//     transition: { duration: 0.6, ease: 'easeInOut' }
//   }
// };

// const techIcons = [
//   { id: 'react', icon: <SiReact /> }, { id: 'vue', icon: <SiVuedotjs /> }, { id: 'angular', icon: <SiAngular /> },
//   { id: 'nextjs', icon: <SiNextdotjs /> }, { id: 'svelte', icon: <SiSvelte /> }, { id: 'nuxtjs', icon: <SiNuxtdotjs /> },
//   { id: 'tailwind', icon: <SiTailwindcss /> }, { id: 'bootstrap', icon: <SiBootstrap /> }, { id: 'sass', icon: <SiSass /> },
//   { id: 'js', icon: <SiJavascript /> }, { id: 'ts', icon: <SiTypescript /> }, { id: 'html', icon: <SiHtml5 /> },
//   { id: 'css', icon: <SiCss3 /> }, { id: 'node', icon: <SiNodedotjs /> }, { id: 'express', icon: <SiExpress /> },
//   { id: 'django', icon: <SiDjango /> }, { id: 'laravel', icon: <SiLaravel /> },
//   { id: 'graphql', icon: <SiGraphql /> }, { id: 'apollo', icon: <SiApollographql /> }, { id: 'jwt', icon: <SiJsonwebtokens /> },
//   { id: 'mongo', icon: <SiMongodb /> }, { id: 'postgres', icon: <SiPostgresql /> }, { id: 'mysql', icon: <SiMysql /> },
//   { id: 'firebase', icon: <SiFirebase /> }, { id: 'docker', icon: <SiDocker /> },
//   { id: 'git', icon: <SiGit /> }, { id: 'github', icon: <SiGithub /> }, { id: 'vercel', icon: <SiVercel /> },
//   { id: 'netlify', icon: <SiNetlify /> }, { id: 'webpack', icon: <SiWebpack /> },
// ];

// const Dummy = () => {
//   const [index, setIndex] = useState(0);
//   const itemsPerPage = 6;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % Math.ceil(techIcons.length / itemsPerPage));
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentSlice = techIcons.slice(index * itemsPerPage, (index + 1) * itemsPerPage);

//   // If we’re at the end, loop back to the beginning
//   const displayIcons = currentSlice.length === itemsPerPage
//     ? currentSlice
//     : [...currentSlice, ...techIcons.slice(0, itemsPerPage - currentSlice.length)];

//   return (
//     <div className="w-full h-screen bg-black flex justify-center items-center">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           variants={blurInVariant}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           custom={0}
//           className="grid grid-cols-3 grid-rows gap-20 text-white text-4xl"
//         >
//           {displayIcons.map((item) => (
//             <div key={item.id} className="flex justify-center items-center" title={item.id}>
//               {item.icon}
//             </div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Dummy;

