"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const testimonialRef = useRef(null)

  const testimonials = [
    {
      quote:
        "Arafa Webs transformed our online presence with a stunning website that perfectly captures our brand. Their technical expertise and attention to detail exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, TechVision",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with Arafa Webs was a game-changer for our e-commerce platform. Their Shopify expertise helped us increase conversions by 40% within the first month.",
      author: "Michael Chen",
      position: "Founder, StyleHub",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The team at Arafa Webs delivered our complex web application ahead of schedule and with flawless functionality. Their technical knowledge and problem-solving abilities are outstanding.",
      author: "Emma Rodriguez",
      position: "CTO, DataFlow Systems",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "We've worked with several development agencies, but Arafa Webs stands out for their communication, reliability, and exceptional quality of work. They're now our go-to partner for all web projects.",
      author: "David Park",
      position: "Marketing Director, GrowthLabs",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "We've worked with several development agencies, but Arafa Webs stands out for their communication, reliability, and exceptional quality of work. They're now our go-to partner for all web projects.",
      author: "David Park",
      position: "Marketing Director, GrowthLabs",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials unless hovering
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [isHovering])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <section className="w-full p-[5%] bg-black text-white relative overflow-hidden ">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gray-400 rounded-full opacity-70"></div>
          <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-gray-400 rounded-full opacity-50"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gray-400 rounded-full opacity-60"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-40"></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-gray-400/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-gray-400/5"></div>
      </div>

      <div className="container flex-col flex gap-14">
        {/* Minimalist header with line accent */}
        <div className=" relative">
         
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gray-400 text-sm tracking-widest uppercase mb-2"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sub_heading"
          >
            Testimonials
          </motion.h2>
        </div>

        {/* Enhanced testimonial display */}
        <div
          className="relative w-full max-w-5xl mx-auto h-auto"
          ref={testimonialRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Large quote marks */}
          <div className="absolute -top-20 -left-4 text-9xl text-gray-400/10 font-serif">"</div>
          <div className="absolute -bottom-40 -right-4 text-9xl text-gray-400/10 font-serif rotate-180">"</div>

          {/* Testimonial content with enhanced layout */}
          <div className="relative min-h-[300px] flex items-center w-full">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Author image - larger and more prominent */}
                  <div className="md:col-span-3 flex flex-col items-center  ">
                    <div className="relative">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-400/20">
                        <img
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -z-10 -inset-1 bg-gradient-to-br from-gray-400/20 to-transparent rounded-full blur-sm"></div>
                    </div>

                    <div className="mt-4 text-center md:text-left">
                      <h4 className="text-lg font-medium text-center">{testimonials[currentIndex].author}</h4>
                      <p className="text-sm text-gray-400 text-center">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>

                  {/* Quote with enhanced typography */}
                  <div className="md:col-span-9">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
                      {testimonials[currentIndex].quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced navigation with progress indicator */}
          <div className=" flex flex-col items-center mt-14 lg:mt-0">
            {/* Progress bar */}
            <div className="w-full max-w-md h-[2px] bg-gray-800 mb-8 relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gray-400"
                initial={{ width: `${(currentIndex / (testimonials.length - 1)) * 100}%` }}
                animate={{ width: `${(currentIndex / (testimonials.length - 1)) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-between w-full max-w-md">
              <button
                onClick={prevTestimonial}
                className="group flex items-center text-gray-500 hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center mr-2 group-hover:border-gray-400 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </div>
                <span className="text-sm">Previous</span>
              </button>

              <div className="text-sm text-gray-500">
                <span className="text-white">{currentIndex + 1}</span>
                <span> / {testimonials.length}</span>
              </div>

              <button
                onClick={nextTestimonial}
                className="group flex items-center text-gray-500 hover:text-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <span className="text-sm">Next</span>
                <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center ml-2 group-hover:border-gray-400 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced client logos section */}
        <div className=" relative">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "4rem" }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent to-gray-400/30"
          ></motion.div>

          <div className="text-center mb-16 pt-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-widest text-gray-400"
            >
              Trusted by innovative companies
            </motion.p>
          </div>

          {/* Modern client logo grid with abstract shapes */}
          {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {[
              { name: "TechVision", shape: "circle" },
              { name: "StyleHub", shape: "square" },
              { name: "DataFlow", shape: "triangle" },
              { name: "GrowthLabs", shape: "hexagon" },
              { name: "FutureWorks", shape: "pentagon" },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center group"
              >
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    {client.shape === "circle" && (
                      <div className="w-full h-full rounded-full border-2 border-gray-400"></div>
                    )}
                    {client.shape === "square" && (
                      <div className="w-full h-full border-2 border-gray-400 rotate-45"></div>
                    )}
                    {client.shape === "triangle" && (
                      <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[52px] border-l-transparent border-r-transparent border-b-gray-400/20"></div>
                    )}
                    {client.shape === "hexagon" && (
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 border-2 border-gray-400 rotate-[30deg]"></div>
                        <div className="absolute inset-0 border-2 border-gray-400 rotate-[60deg]"></div>
                      </div>
                    )}
                    {client.shape === "pentagon" && (
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 border-2 border-gray-400 rotate-[72deg] rounded-t-full"></div>
                      </div>
                    )}
                  </div>

                  
                  <span className="relative z-10 text-2xl font-bold text-gray-400/50 group-hover:text-gray-400 transition-colors duration-300">
                    {client.name.charAt(0)}
                  </span>
                </div>

                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300"
                >
                  {client.name}
                </motion.p>

                <div className="h-[1px] w-0 bg-gray-400 mt-2 group-hover:w-full transition-all duration-300 ease-out"></div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
