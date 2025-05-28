"use client";
import { useEffect, useRef } from "react";
import EarthSection from "./EarthSection/page";
import { motion } from 'framer-motion';
import { blurInVariant } from "@/app/utils/blurInVariant";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Create dust particles
    const particleCount = 180;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 2 + 0.5, // z-depth for 3D effect
      size: Math.random() * 1.5 + 0.5,
      // Very slow, gentle movement
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1 - 0.05, // Slight upward drift
      vz: (Math.random() - 0.5) * 0.03,
      // Add slight oscillation
      oscillationX: Math.random() * 0.2,
      oscillationY: Math.random() * 0.2,
      oscillationSpeed: Math.random() * 0.01 + 0.005,
      oscillationOffset: Math.random() * Math.PI * 2,
      // Reduced opacity
      opacity: Math.random() * 0.5 + 0.2,
    }));

    // Animation properties
    let animationFrame;
    let time = 0;

    // Draw the dust particles effect
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        // Add gentle oscillation to movement (like air currents)
        const oscillateX =
          Math.sin(time + particle.oscillationOffset) * particle.oscillationX;
        const oscillateY =
          Math.cos(time + particle.oscillationOffset + Math.PI / 4) *
          particle.oscillationY;

        // Update position with very slow movement + oscillation
        particle.x += particle.vx + oscillateX;
        particle.y += particle.vy + oscillateY;
        particle.z += particle.vz * 0.1; // Even slower z movement

        // Boundary check with wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Z-axis boundaries with gentle reversal
        if (particle.z < 0.2 || particle.z > 2.5) {
          particle.vz = -particle.vz * 0.5; // Gentle bounce
        }

        // Size and opacity based on z-position (subtle 3D effect)
        const perspective = 1 / (3 - particle.z * 0.5);
        const size = particle.size * perspective;
        const opacity = particle.opacity * perspective * 0.8; // Reduced opacity

        // Dust-like color (soft, muted tones)
        const dustColor = Math.floor(180 + particle.z * 15);
        ctx.fillStyle = `rgba(${dustColor}, ${dustColor - 10}, ${
          dustColor - 20
        }, ${opacity})`;

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Very subtle glow for closer particles (significantly reduced)
        if (particle.z > 1.8) {
          // Reduced glow intensity
          ctx.shadowColor = `rgba(255, 240, 220, ${opacity * 0.2})`;
          ctx.shadowBlur = 1.5 * size; // Reduced blur
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Update time for animation (slower)
      time += 0.005;

      // Continue animation
      animationFrame = requestAnimationFrame(draw);
    };

    // Start animation
    draw();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <main id="landing" className="res_cont w-full h-auto  lg:h-[100vh] grid lg:grid-cols-2 items-center  lg:gap-0 relative  text-white px-[5%] py-[15%] lg:p-[5%] ">
      {/* Dust particles background */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="absolute inset-0 z-0">
        {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full  blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full  blur-3xl" />
        {/* Floating elements */}
        <div className="absolute top-20 right-32 w-16 h-16 border border-white/20 rounded-full" />
        <div className="absolute top-40 left-20 w-8 h-8 border border-white/20 rounded-md rotate-45" />
        <div className="absolute bottom-48 left-1/3 w-12 h-12 border border-white/20 rounded-full" />
      </div>

      {/* <div className="Hero_Content h-[80vh]  flex flex-col gap-5 justify-center relative z-10 col-span-1 py-[10%]">
        <h1 className="sub_heading">Power Meets <br /> Precision in Every <br /> Line of Code</h1>
        <span className="text-xl fonr-bold w-[95%] lg:w-[80%]">
        Arafa Webs crafts tailored digital solutions that deliver real-world business results
        </span>
        <div className="mt-5 flex gap-3">
          <button className="bg-white text-black px-8 py-2 text-lg rounded-xl font-bold">Get Strated</button>
          <button className="bg-black text-white px-8 py-2 text-lg rounded-xl font-bold border-white/20 border">Explore More</button>
        </div>
      </div> */}
      


      <div className="Hero_Content h-[80vh] flex flex-col gap-5 justify-center relative z-10 col-span-1 py-[10%]">
      <motion.h1
        variants={blurInVariant}
        initial="hidden"
        animate="visible"
        custom={1}
        className="sub_heading"
      >
        Power Meets <br /> Precision in Every <br /> Line of Code
      </motion.h1>

      <motion.span
        variants={blurInVariant}
        initial="hidden"
        animate="visible"
        custom={1.2}
        className="text-xl font-bold w-[95%] lg:w-[80%]"
      >
        Arafa Webs crafts tailored digital solutions that deliver real-world business results
      </motion.span>

      <motion.div
        variants={blurInVariant}
        initial="hidden"
        animate="visible"
        custom={1.4}
        className="mt-5 flex gap-3"
      >
        <button className="bg-white text-black px-8 py-2 text-lg rounded-xl font-bold">Get Started</button>
        <button className="bg-black text-white px-8 py-2 text-lg rounded-xl font-bold border-white/20 border">Explore More</button>
      </motion.div>
    </div>


      <div className="col-span-1 relative flex justify-center items-center inset-0 h-auto">
        <div className="rounded-full p-5 bg-black">
        <EarthSection/>
        </div>
        
      </div>
    </main>
  );
};

export default HeroSection;







// {/* <div className="hidden lg:block  relative">
//           <div className="absolute -inset-4  rounded-full blur-3xl"></div>
//           <div className="relative aspect-square w-full max-w-lg mx-auto">
           
//             <div className="absolute  inset-0 flex items-center justify-center">
//               <div className="relative  w-64 h-64">
//                 <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_20s_linear_infinite]"></div>
//                 <div className="absolute inset-4 rounded-full border border-white/20 animate-[spin_15s_linear_infinite_reverse]"></div>
//                 <div className="absolute inset-8 rounded-full border border-white/20 animate-[spin_10s_linear_infinite]"></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-32 h-32 bg-white/30 rounded-xl backdrop-blur-md border border-white/20 rotate-45 animate-pulse"></div>
//                 </div>
//               </div>
//             </div>

          
//             <div className="absolute top-12 right-12 w-48 h-24 bg-black/40 backdrop-blur-md rounded-lg  border border-white/10 p-4 shadow-xl transform rotate-6 animate-[float_5s_ease-in-out_infinite]">
//               <div className="h-2 w-12 bg-white/20 rounded-full mb-2"></div>
//               <div className="h-2 w-20 bg-white/20 rounded-full mb-4"></div>
//               <div className="flex space-x-2">
//                 <div className="h-6 w-6 rounded-full bg-white/50"></div>
//                 <div className="h-6 w-16 bg-white/20 rounded-full"></div>
//               </div>
//             </div>

//             <div className="absolute bottom-12 left-12 w-48 h-24 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 p-4 shadow-xl transform -rotate-6 animate-[float_6s_ease-in-out_infinite_1s]">
//               <div className="h-2 w-16 bg-white/20 rounded-full mb-2"></div>
//               <div className="h-2 w-12 bg-white/20 rounded-full mb-4"></div>
//               <div className="flex space-x-2">
//                 <div className="h-6 w-6 rounded-full bg-white/50"></div>
//                 <div className="h-6 w-16 bg-white/20 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div> */}