"use client"

import { useState } from "react"
import { Mail, Phone, User, MessageSquare, Send, Sparkles } from "lucide-react"

export default function ContactForm() {
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted")
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden px-[5%]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gray-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-800/5 to-gray-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Headings */}
          <div className="flex flex-col justify-start pt-16 lg:pt-24">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-xs uppercase tracking-wider font-medium">Get In Touch</span>
                <Sparkles className="w-4 h-4 text-gray-400" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-6 tracking-tight leading-tight">
                Let's Create
                <span className="block ">Something</span>
                <span className="block ">Amazing</span>
              </h1>
              <p className="text-gray-400 text-base font-light leading-relaxed max-w-lg">
                Ready to bring your vision to life? We're here to make it happen. Let's discuss your project and create
                something extraordinary together.
              </p>
            </div>

            {/* Contact Info on Left */}
            <div className="mt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-light">support@arafawebs.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-light">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex flex-col justify-start pt-16 lg:pt-32">
            <div className="w-full max-w-md ml-auto">
              {/* Form */}
              <div className="backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-5">
                      <div className="relative group">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                          <User
                            className={`w-4 h-4 transition-colors duration-300 ${focusedField === "name" ? "text-white" : "text-gray-400"}`}
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Your name"
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 focus:outline-none pl-10 py-4 text-sm font-light transition-all duration-300 hover:bg-gray-800/70"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="relative group">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                          <Mail
                            className={`w-4 h-4 transition-colors duration-300 ${focusedField === "email" ? "text-white" : "text-gray-400"}`}
                          />
                        </div>
                        <input
                          type="email"
                          placeholder="Email address"
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 focus:outline-none pl-10 py-4 text-sm font-light transition-all duration-300 hover:bg-gray-800/70"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="relative group">
                        <div className="absolute left-3 top-4 z-10">
                          <Phone
                            className={`w-4 h-4 transition-colors duration-300 ${focusedField === "phone" ? "text-white" : "text-gray-400"}`}
                          />
                        </div>
                        <input
                          type="tel"
                          placeholder="Phone number"
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 focus:outline-none pl-10 py-4 text-sm font-light transition-all duration-300 hover:bg-gray-800/70"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="relative group">
                        <div className="absolute left-3 top-4 z-10">
                          <MessageSquare
                            className={`w-4 h-4 transition-colors duration-300 ${focusedField === "message" ? "text-white" : "text-gray-400"}`}
                          />
                        </div>
                        <textarea
                          placeholder="Tell us about your project..."
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 focus:outline-none pl-10 pt-4 pb-4 text-sm font-light min-h-[100px] resize-none transition-all duration-300 hover:bg-gray-800/70"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 disabled:from-gray-800 disabled:to-gray-800 disabled:cursor-not-allowed text-white font-medium text-sm py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg group focus:outline-none focus:ring-2 focus:ring-gray-400/20"
                      >
                        <span className="flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-light text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400 text-sm">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
