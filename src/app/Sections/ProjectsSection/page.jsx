"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useRef, useState, useEffect } from "react"

export default function ProjectsSection() {
  const cards = [
    {
      img:"/images/image.png",
      title: "Executive Space",
      technology: "Next.Js",
      number:"01"
      // description: "Automate customer feedback and turn it into actionable insights.",
    },
    {
      img:"/images/linear.png",
      title: "Executive Space",
      technology: "Next.Js",
      number:"02"
      // description: "Automate customer feedback and turn it into actionable insights.",
    },
    
    // {
    //   title: "Move product work forward from anywhere",
    //   subtitle: "Linear Mobile",
    //   description: "Access your projects on the go with our mobile application.",
    // },
    // {
    //   title: "Turn workplace requests into actionable issues",
    //   subtitle: "Linear Asks",
    //   description: "Manage and prioritize requests efficiently.",
    // },
    // {
    //   title: "Integrate with your favorite tools",
    //   subtitle: "Integrations",
    //   description: "Connect with the tools your team already uses.",
    // },
  ]

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
    <main className="min-h-screen p-[5%] flex flex-col gap-10">
      <div className="py-[2%]">
      <h1 className="sub_heading">Our Projects</h1>
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
                    <img src={card.img} alt="" className="w-full rounded-xl" />
                  </div>
                  <div>
                  <h3 className="text-xl">{card.title}</h3>
                  <span className="text-gray-400 text-sm  mt-1">{card.technology}</span>
                  </div>
                  <span className="text-white text-5xl project_numbering font-bold mt-2">{card.number}</span>
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
    </main>
  )
}
