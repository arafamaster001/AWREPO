"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useRef, useState, useEffect } from "react"
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function ProjectsSection() {
 const cards = [
  {
    img: "/shopify/1.png",
    title: "RepZone Active Wear",
    technology: "Next.Js",
    number: "01",
    link: "http://repzoneactivewear.com/",
    alt: "Screenshot of RepZone Active Wear Shopify website built with Next.js",
  },
  {
    img: "/shopify/2.png",
    title: "Minimarvels",
    technology: "Next.Js",
    number: "02",
    link: "https://the-minimarvels.com/",
    alt: "Screenshot of Minimarvels Shopify website built with Next.js",
  },
  {
    img: "/shopify/3.png",
    title: "Zenzed",
    technology: "Next.Js",
    number: "03",
    link: "http://zenzed.com.au/",
    alt: "Screenshot of Zenzed Shopify website built with Next.js",
  },
  {
    img: "/shopify/4.png",
    title: "Junk Brands",
    technology: "Next.Js",
    number: "04",
    link: "https://www.junkbrands.com/",
    alt: "Screenshot of Junk Brands Shopify website built with Next.js",
  },
  {
    img: "/shopify/5.png",
    title: "Zenzed",
    technology: "Next.Js",
    number: "05",
    link: "http://zenzed.com.au/",
    alt: "Screenshot of Zenzed Shopify website built with Next.js",
  },
  {
    img: "/shopify/6.png",
    title: "Mamas Armour",
    technology: "Next.Js",
    number: "06",
    link: "https://mamasarmour.com/",
    alt: "Screenshot of Mamas Armour Shopify website built with Next.js",
  },
  {
    img: "/shopify/7.png",
    title: "Maseer",
    technology: "Next.Js",
    number: "07",
    link: "https://maseer.nl/",
    alt: "Screenshot of Maseer Shopify website built with Next.js",
  },
  {
    img: "/shopify/8.png",
    title: "Sofasway",
    technology: "Next.Js",
    number: "08",
    link: "http://sofasway.co/",
    alt: "Screenshot of Sofasway Shopify website built with Next.js",
  },
  {
    img: "/shopify/9.png",
    title: "RepFitness",
    technology: "Next.Js",
    number: "09",
    link: "https://repfitness.com/",
    alt: "Screenshot of RepFitness Shopify website built with Next.js",
  },
  {
    img: "/shopify/10.png",
    title: "Mantelsdirect",
    technology: "Next.Js",
    number: "10",
    link: "https://www.mantelsdirect.com/",
    alt: "Screenshot of Mantelsdirect Shopify website built with Next.js",
  },
  {
    img: "/shopify/11.png",
    title: "Kinobody",
    technology: "Next.Js",
    number: "11",
    link: "https://kinobody.com/",
    alt: "Screenshot of Kinobody Shopify website built with Next.js",
  },
  {
    img: "/shopify/12.png",
    title: "Beach Camera",
    technology: "Next.Js",
    number: "12",
    link: "https://www.beachcamera.com/",
    alt: "Screenshot of Beach Camera Shopify website built with Next.js",
  },
  {
    img: "/shopify/13.png",
    title: "Worldwide Stereo",
    technology: "Next.Js",
    number: "13",
    link: "https://www.worldwidestereo.com/",
    alt: "Screenshot of Worldwide Stereo Shopify website built with Next.js",
  },
  {
    img: "/shopify/14.png",
    title: "Jula Amsterdam",
    technology: "Next.Js",
    number: "14",
    link: "https://jula-amsterdam.nl/",
    alt: "Screenshot of Jula Amsterdam Shopify website built with Next.js",
  },
  {
    img: "/shopify/15.png",
    title: "Mod Lighting",
    technology: "Next.Js",
    number: "15",
    link: "https://mod-lighting.com/",
    alt: "Screenshot of Mod Lighting Shopify website built with Next.js",
  },
  {
    img: "/shopify/16.png",
    title: "Everyday",
    technology: "Next.Js",
    number: "16",
    link: "https://evryday.co.za/",
    alt: "Screenshot of Everyday Shopify website built with Next.js",
  },
  {
    img: "/shopify/17.png",
    title: "Goosecreekcandle",
    technology: "Next.Js",
    number: "17",
    link: "https://goosecreekcandle.com/",
    alt: "Screenshot of Goosecreekcandle Shopify website built with Next.js",
  },
  {
    img: "/shopify/18.png",
    title: "eGoat",
    technology: "Next.Js",
    number: "18",
    link: "http://egoat.nl/",
    alt: "Screenshot of eGoat Shopify website built with Next.js",
  },
  {
    img: "/shopify/19.png",
    title: "La Bottine",
    technology: "Next.Js",
    number: "19",
    link: "https://labottine.com/",
    alt: "Screenshot of La Bottine Shopify website built with Next.js",
  },
  {
    img: "/shopify/20.png",
    title: "Noah Moda",
    technology: "Next.Js",
    number: "20",
    link: "https://noah-moda.nl/",
    alt: "Screenshot of Noah Moda Shopify website built with Next.js",
  },
  {
    img: "/shopify/21.png",
    title: "Tempotent",
    technology: "Next.Js",
    number: "21",
    link: "https://tempotent.hu/",
    alt: "Screenshot of Tempotent Shopify website built with Next.js",
  },
  {
    img: "/shopify/22.png",
    title: "Lumber Liquidators",
    technology: "Next.Js",
    number: "22",
    link: "https://lumberliquidators.com/",
    alt: "Screenshot of Lumber Liquidators Shopify website built with Next.js",
  },
];


  const sliderRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const checkScrollability = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollability()
    window.addEventListener("resize", checkScrollability)
    return () => window.removeEventListener("resize", checkScrollability)
  }, [])

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8
      const newScrollLeft =
        direction === "left"
          ? sliderRef.current.scrollLeft - scrollAmount
          : sliderRef.current.scrollLeft + scrollAmount

      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      setTimeout(checkScrollability, 300)
    }
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    if (sliderRef.current) {
      const x = e.pageX - (sliderRef.current.offsetLeft || 0)
      const walk = (x - startX) * 2
      sliderRef.current.scrollLeft = scrollLeft - walk
      checkScrollability()
    }
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    const currentX = e.targetTouches[0].clientX
    setTouchEnd(currentX)
    if (touchStart && sliderRef.current) {
      const distance = touchStart - currentX
      sliderRef.current.scrollLeft += distance * 0.5
      setTouchStart(currentX)
      checkScrollability()
    }
  }

  const onTouchEnd = () => checkScrollability()
  const handleScroll = () => checkScrollability()

  return (
    <section id="projects" className="min-h-screen p-[5%] flex flex-col gap-10">
      <div className="py-[2%]">
        <h2 className="sub_heading">Our Projects</h2>
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide gap-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[302px] md:w-[320px]  rounded-3xl overflow-hidden flex flex-col border-white/20 border h-full"
            >
              <div className="p-5 flex-1 flex flex-col h-full">
                <div className=" flex-1"></div>
                <div className=" flex flex-col gap-4">
                  <div> 
                    <img src={card.img} alt={card.alt} className="w-full rounded-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl">{card.title}</h3>
                    {/* <span className="text-gray-400 text-sm  mt-1">{card.technology}</span> */}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-5xl project_numbering font-bold mt-2">{card.number}</span>
                    <a href={card.link} target="_blank">
                      <IoArrowForwardCircleOutline className="w-10 text-white/20 rotate-45 hover:-rotate-45 duration-150 ease-linear h-10" />
                    </a>
                  </div>
                  {/* <div className="flex flex-col w-full items-end">
                    <span className="text-[16px]">Tools and Features</span>
                    <span className="text-[12px] text-gray-400">TypeScript,Tailwind,MongoDb</span>
                  </div> */}
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 px-6">No projects available.</p>
        )}
      </div>

      <div className="flex  mt-6 gap-2 ">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="w-10 h-10 rounded-full bg-[#222] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold"
          aria-label="Scroll left"
        >
          <ChevronLeft className="text-white/20" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="w-10 h-10 rounded-full bg-[#222] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold"
          aria-label="Scroll right"
        >
          <ChevronRight className="text-white/20" />
        </button>
      </div>
    </section>
  )
}
