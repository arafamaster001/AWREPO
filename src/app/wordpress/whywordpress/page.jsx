"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, Smartphone, Puzzle, Shield, Search, Globe, LayoutTemplate, Paintbrush, ShoppingBasket, Settings, SearchCheck, Languages } from "lucide-react"

export default function WhyWordpress() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("why-shopify-section")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const benefits =[
    {
      icon: <LayoutTemplate className="w-6 h-6" />,
      title: "Unmatched Content Flexibility",
      description: "From blogs to business sites, WordPress lets you build anything with ease.",
      number: "01",
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Vast Theme Library",
      description: "Thousands of free and premium themes tailored for blogs, portfolios, or online shops.",
      number: "02",
    },
    {
      icon: <ShoppingBasket className="w-6 h-6" />,
      title: "Seamless WooCommerce Integration",
      description: "Turn your site into a powerful online store with WooCommerce – trusted by millions.",
      number: "03",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Full Design Control",
      description: "Customize every detail of your site’s look and feel – no coding required.",
      number: "04",
    },
    {
      icon: <SearchCheck className="w-6 h-6" />,
      title: "SEO-Ready Structure",
      description: "Built with clean code and top SEO plugins like Yoast for better visibility.",
      number: "05",
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Multilingual & Global Ready",
      description: "Reach global audiences with multilingual plugins and currency support.",
      number: "06",
    },
  ]

  return (
    <section id="why-shopify-section" className="px-[5%] py-[10%] bg-black text-white overflow-hidden relative">
      {/* Background gradient */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-900/10 to-transparent rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-900/10 to-transparent rounded-full blur-3xl"></div> */}

{/* Diagonal line */}
      <div className="container  relative flex flex-col gap-20">
        
        {/* <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-gray-800 to-transparent transform -rotate-12 hidden lg:block"></div> */}
        {/* <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent transform rotate-12 hidden lg:block"></div> */}

        <div className="relative flex flex-col gap-3">
          <span className="text-gray-400">[ Why Wordpress ]</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Wordpress.</h2>
          {/* <div className="h-px w-24 bg-gradient-to-r from-gray-500 to-transparent"></div> */}
        </div>

        {/* Desktop: Masonry-style layout */}
        <div className="hidden lg:grid grid-cols-3 gap-x-12 gap-y-24 relative">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative group ${index % 3 === 1 ? "mt-16" : index % 3 === 2 ? "mt-8" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Large background number */}
              <div className="absolute -top-10 -left-4 text-7xl font-bold text-gray-900 opacity-30 group-hover:text-gray-800 transition-colors duration-300">
                {benefit.number}
              </div>

              <div
                className={`relative z-10 transition-all duration-500 transform ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm mr-4 group-hover:border-gray-600 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent transform origin-left group-hover:scale-x-110 transition-transform duration-300"></div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Stacked layout with horizontal scroll for medium screens */}
        <div className="lg:hidden">
          <div className="md:flex md:overflow-x-auto md:pb-6 md:-mx-4 md:space-x-6 space-y-10 md:space-y-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`relative md:min-w-[300px] md:max-w-[300px] md:px-4 ${
                  isInView ? "animate-fadeIn" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-6 -left-2 text-5xl font-bold text-gray-900 opacity-30">
                  {benefit.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm mr-4">
                      {benefit.icon}
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
