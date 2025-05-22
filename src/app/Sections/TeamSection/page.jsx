"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { GithubIcon, LinkedinIcon, ExternalLinkIcon, ChevronRightIcon } from "lucide-react"

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleMemberChange = (index) => {
    if (index === activeMember || isAnimating) return
    setIsAnimating(true)
    setActiveMember(index)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [activeMember])

  return (
    <section className="relative w-full py-24 overflow-hidden bg-black text-white gpp">
      {/* Geometric background elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-gray-800 rotate-45 opacity-30"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full border border-gray-800 opacity-20"></div>
      <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gray-900 opacity-10"></div>
      <div className="absolute -bottom-10 left-1/4 w-32 h-32 rotate-12 border border-gray-800 opacity-20"></div>

      <div className="container ">
        <div className="mb-16">
          <h2 className="sub_heading">Our Team</h2>
          <div className="w-20 h-0.5 bg-white mb-6"></div>
          <p className="max-w-2xl text-gray-400 text-lg">
            The brilliant minds behind our innovative solutions. Our small but mighty team brings together diverse
            expertise to deliver exceptional results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Team navigation - vertical tabs */}
          <div className="w-full lg:w-1/4">
            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <button
                  key={member.id}
                  className={`w-full text-left p-4 border-l-2 transition-all duration-300 ${
                    activeMember === index
                      ? "border-white bg-gray-900/30"
                      : "border-gray-800 hover:border-gray-600 hover:bg-gray-900/10"
                  }`}
                  onClick={() => handleMemberChange(index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-gray-400">{member.role}</p>
                    </div>
                    <ChevronRightIcon
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeMember === index ? "rotate-90 opacity-100" : "opacity-50"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Team member details - main content area */}
          <div className="w-full lg:w-3/4">
            <div className="relative">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`${
                    activeMember === index ? "block" : "hidden"
                  } grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
                >
                  {/* Image with geometric accents */}
                  <div className="relative">
                    <div className="aspect-square relative overflow-hidden border border-gray-800">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className={`object-cover transition-opacity duration-500 ${
                          isAnimating ? "opacity-80" : "opacity-100"
                        }`}
                      />

                      {/* Overlay with member number */}
                      <div className="absolute bottom-0 left-0 bg-black/70 px-6 py-3">
                        <span className="text-4xl font-bold">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </div>

                    {/* Geometric accents */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gray-800 rotate-45 -z-10"></div>
                    <div className="absolute -top-4 -left-4 w-16 h-16 border border-gray-800 -z-10"></div>
                  </div>

                  {/* Member details */}
                  <div className="space-y-8">
                    <div
                      className={`transition-all duration-500 ${isAnimating ? "opacity-80 translate-y-2" : "opacity-100 translate-y-0"}`}
                    >
                      <h3 className="text-4xl font-bold mb-2">{member.name}</h3>
                      <p className="text-xl text-gray-400 mb-6">{member.role}</p>
                      <div className="w-12 h-0.5 bg-white mb-6"></div>
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">{member.bio}</p>

                      {/* Skills section */}
                      <div className="mb-8">
                        <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 border border-gray-800 text-sm text-gray-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social links */}
                      <div className="flex space-x-4 pt-4">
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                        >
                          <GithubIcon className="w-5 h-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                        >
                          <LinkedinIcon className="w-5 h-5" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                          href={member.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                        >
                          <ExternalLinkIcon className="w-5 h-5" />
                          <span className="sr-only">Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const teamMembers = [
  {
    id: 1,
    name: "Mujeeb Shahbaz",
    role: "Founder & CEO",
    bio: "Alex leads our vision and technical strategy with over 10 years of experience in software development. His expertise in modern web technologies drives our innovative approach to client solutions and ensures we stay at the cutting edge of the industry.",
    image: "/placeholder.svg?height=600&width=600",
    skills: ["Full-stack Development", "System Architecture", "Technical Leadership", "Cloud Infrastructure"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  },
  {
    id: 2,
    name: "Muhammad Nouman",
    role: "Senior Developer",
    bio: "Michael specializes in building robust backend systems and optimizing application performance. His attention to detail ensures our projects are secure, scalable, and maintainable, while his problem-solving skills help overcome complex technical challenges.",
    image: "/placeholder.svg?height=600&width=600",
    skills: ["Backend Development", "Database Optimization", "API Design", "Security"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  },
  {
    id: 3,
    name: "Ahmad Sajjad",
    role: "Project Planner",
    bio: "Sarah brings creative vision to life with her exceptional design skills. Her background in both digital and print design allows her to create cohesive brand experiences across all touchpoints, ensuring our clients receive visually stunning and user-friendly solutions.",
    image: "/placeholder.svg?height=600&width=600",
    skills: ["UI/UX Design", "Brand Identity", "Motion Design", "User Research"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  },
 
]
