"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

export default function WhyUsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  const features = [
    {
      title: "Strategy-Led Development",
      description:
        "We don’t just write code — we build with purpose. Every solution starts with a deep understanding of your business goals and user needs.",
    },
    {
      title: "Tech-First, Platform-Perfect",
      description:
        "Our specialized team brings deep technical knowledge and years of experience across multiple development frameworks.",
    },
    {
      title: "Human-Centered Design",
      description:
        "We blend creativity with functionality, building interfaces that look stunning and work beautifully across devices.",
    },
    {
      title: "Built to Scale",
      description:
        "Whether you're a startup or scaling enterprise, we engineer solutions that grow with you — not ones that break under pressure.",
    },
    {
      title: "Partnership Beyond Launch",
      description:
        "We stick around after deployment — for updates, improvements, and whenever you need a reliable hand.",
    },
  ]

  return (
    <section className="w-full px-[5%] pt-[10%] pb-[5%] bg-black">
      <div className="container ">
        {/* Minimalist header */}
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gray-400 text-sm tracking-widest uppercase mb-2"
          >
            Why choose us
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Our Approach
          </motion.h2>
        </div>

        {/* Modern horizontal layout with line indicators */}
        <div className="flex flex-col lg:flex-row">
          {/* Left side - interactive selector */}
          <div className="lg:w-1/3 mb-12 lg:mb-0 lg:pr-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`cursor-pointer transition-all duration-300 py-4 border-l-2 pl-6 ${
                    activeIndex === index ? "border-gray-400" : "border-gray-800 hover:border-gray-600"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <h3
                    className={`text-xl font-medium transition-colors duration-300 ${
                      activeIndex === index ? "text-gray-400" : "text-white"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - content display with minimalist design */}
          <div className="lg:w-2/3 lg:pl-12 lg:border-l border-gray-800">
            <div className="relative h-[300px]">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{ display: activeIndex === index ? "block" : "none" }}
                >
                  <span className="text-8xl font-bold text-gray-400/10 absolute -top-10 -left-4">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6">{feature.title}</h3>
                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed">{feature.description}</p>
                    <div className="mt-12 flex items-center">
                      <div className="w-12 h-[1px] bg-gray-400 mr-4"></div>
                      <span className="text-gray-400 text-sm">Learn more</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Minimalist statistics row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Years</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">12+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Experts</div>
          </div>
        </motion.div>

        {/* Minimalist CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center text-white hover:text-green-400 transition-colors duration-300"
          >
            <span className="mr-2 text-lg">Start your project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
