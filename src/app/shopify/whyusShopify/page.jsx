"use client";

import { useState, useEffect, useRef } from "react";
import { Code, BarChart3, Puzzle, Zap, HeadphonesIcon } from "lucide-react";

export default function WhyusShopify() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Certified Shopify Experts",
      description:
        "We work with Liquid, Hydrogen, and advanced app integrations.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Optimized for Conversions",
      description: "UX-focused layouts designed to boost revenue.",
    },
    {
      icon: <Puzzle className="w-5 h-5" />,
      title: "Custom Store Features",
      description: "Filters, subscriptions, bundling, and beyond.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Lightning-Fast Performance",
      description: "Speed and SEO that power growth.",
    },
    {
      icon: <HeadphonesIcon className="w-5 h-5" />,
      title: "Growth-Focused Support",
      description: "Post-launch help with CRO, updates, and scale.",
    },
  ];

  return (
    // <section  className="gpp  text-white overflow-hidden">
      <section ref={sectionRef} className="container gpp">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Left Column - Heading */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="md:sticky md:top-24 md:self-start">
              {/* <div className="sticky top-1/3" > */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Brands Choose Us for Shopify
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Tailored storefronts, optimized for growth.
              </p>
              <div className="h-px w-16 bg-gray-700"></div>

              <div className="mt-12 hidden md:block">
                <button className="px-6 py-3 border border-white/20 rounded-md hover:bg-gray-900 transition-colors duration-300">
                  Start a Project
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-12 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${
                  index % 2 === 0
                    ? "md:translate-x-[-5%]"
                    : "md:translate-x-[5%]"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Feature panel with subtle elevation */}
                <div className="relative p-6 rounded-lg  border border-white/20 ">
                  <div className="flex items-start">
                    {/* Icon with animation */}
                    <div
                      className={`p-2.5 rounded-full bg-[#1c1c1c] mr-4 transition-all duration-300 ${
                        hoveredFeature === index
                          ? "transform scale-110 bg-[#222]"
                          : ""
                      }`}
                    >
                      <div
                        className={`transition-all duration-300 ${
                          hoveredFeature === index
                            ? "text-[#e0e0e0]"
                            : "text-gray-400"
                        }`}
                      >
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle accent line that animates on hover */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] bg-gray-700 transition-all duration-300 ease-out"
                    style={{
                      width: hoveredFeature === index ? "100%" : "30%",
                      opacity: hoveredFeature === index ? 1 : 0.5,
                    }}
                  ></div>
                </div>
              </div>
            ))}

            <div className="mt-8 md:hidden">
              <button className="w-full px-6 py-3 border border-white/20 rounded-md hover:bg-gray-900 transition-colors duration-300">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </section>
    //  </section>
  );
}
