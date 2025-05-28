"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const quotes = containerRef.current.querySelectorAll(".quote");
    const splitInstances = [];
    const animations = [];

    const setupSplits = () => {
      // Clean up previous animations and splits first
      animations.forEach((anim) => anim.kill());
      splitInstances.forEach((split) => {
        try {
          if (split && split.revert) {
            split.revert();
          }
        } catch (error) {
          console.error("Error reverting split:", error);
        }
      });

      // Clear the arrays
      animations.length = 0;
      splitInstances.length = 0;

      // Create new splits and animations
      quotes.forEach((quote) => {
        if (!quote) return;

        try {
          // Create new SplitText instance
          const split = new SplitText(quote, {
            type: "words,chars",
            linesClass: "split-line",
          });

          splitInstances.push(split);

          // Set initial styles for words
          gsap.set(split.words, {
            opacity: 0,
            y: 40,
            display: "inline-block",
          });

          // Make quote visible immediately but with opacity 0 elements
          quote.style.visibility = "visible";

          // Create smoother animation with better timing
          const anim = gsap.to(split.words, {
            scrollTrigger: {
              trigger: quote,
              toggleActions: "play none none reverse",
              start: "top 60%",
              end: "bottom 90%",
              scrub: "true",
            },
            duration: 0.9,
            ease: "power3.out",
            y: 30,
            opacity: 1,
            stagger: 0.03,
            force3D: true,
          });

          animations.push(anim);
        } catch (error) {
          console.error("Error setting up animation:", error);
        }
      });
    };

    // Initial setup with a small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      setupSplits();
    }, 100);

    // Handle resize/refresh
    ScrollTrigger.addEventListener("refresh", setupSplits);

    return () => {
      clearTimeout(initTimeout);
      ScrollTrigger.removeEventListener("refresh", setupSplits);

      // Clean up animations
      animations.forEach((anim) => anim && anim.kill());

      // Clean up splits
      splitInstances.forEach((split) => {
        try {
          if (split && split.revert) {
            split.revert();
          }
        } catch (error) {
          console.error("Error cleaning up split:", error);
        }
      });
    };
  }, []);

  return (
    <section id="about" className="w-full h-auto  lg:h-[100vh] py-[20%] px-[5%]  lg:p-[5%] relative" ref={containerRef}>
      <div className="flex flex-col gap-6 relative z-10">
        <h2 className="sub_heading">About us</h2>
        <p className="para quote h-auto flex flex-col gap-3">
          <span>
            {" "}
            Arafa Webs is a specialized web development company founded in 2022,
            focused on delivering high-quality, custom-built websites tailored
            to meet modern business needs.
          </span>{" "}
          <br />
          <span>
            {" "}
            We started with a clear purpose: to simplify the web development
            process by offering focused, professional solutions — without the
            confusion of unrelated services. Our mission is simple — build
            websites that are fast, functional, and built to scale.
          </span>{" "}
          <br />
          <span>
            {" "}
            From advanced web systems to e-commerce platforms and portfolio
            sites, we work with businesses across the globe to help them
            establish a strong digital presence.
          </span>{" "}
          <br />
          <span className="text-4xl">|</span>
          {"  "}At Arafa Webs, we don’t just create websites — we craft digital
          solutions that drive real results.
        </p>
      </div>

      <div className="absolute inset-0 z-0">
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl" />
        {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" /> */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_1px,transparent_1px,transparent_8px)]" />
        
                {/* Floating elements */}
        <div className="absolute bottom-20 right-32 w-16 h-16 border border-white/20 rounded-full" />
        <div className="absolute top-20 right-20 w-8 h-8 border border-white/20 rounded-md rotate-45" />
        <div className="absolute bottom-32 left-24 w-24 h-24 border border-white/20 rounded-lg rotate-12" />
        {/* <div className="absolute top-6 left-12 w-12 h-12 border border-white/20 rounded-full" /> */}
      </div>
    </section>
  );
};

export default AboutSection;
