  "use client"

  import React, { useState } from "react"
  import { ArrowRight } from "lucide-react"

  export default function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [activeField, setActiveField] = useState(null)
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    })

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitting(false)
      setIsSubmitted(true)
    }

    if (isSubmitted) {
      return (
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-black border border-white/20 rounded-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05),_transparent_70%)]"></div>
            <div className="relative z-10 p-12 flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="w-20 h-20 mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-white/5"></div>
                <div className="absolute inset-2 rounded-full bg-black border border-white/20 flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-light text-white mb-4">Message sent</h3>
              <p className="text-gray-400 max-w-md text-lg">Thank you for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white transition-colors rounded-full px-8 py-6 h-auto"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-black border border-white/20 rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05),_transparent_70%)]"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-light text-white mb-4">Let's talk</h2>
                <p className="text-gray-400">Fill out the form and we'll get back to you as soon as possible.</p>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center mt-12">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                        fill="white"
                        fillOpacity="0.5"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-400">support@arafawebs.com</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/[0.02] p-8 lg:p-12 relative">
              <div className="absolute top-0 left-0 w-12 h-12 bg-white/5 rounded-br-3xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-tl-3xl"></div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className={`relative transition-all duration-300 ${activeField === "name" ? "translate-x-2" : ""}`}>
                    <div className="absolute top-0 left-0 h-[90%] w-1 bg-white/20 rounded-full"></div>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      className="outline-none bg-transparent border-0 border-b border-white/20  rounded-none pl-4 py-4 text-white focus:ring-0 w-full"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className={`relative transition-all duration-300 ${activeField === "email" ? "translate-x-2" : ""}`}>
                    <div className="absolute top-0 left-0 h-[90%] w-1 bg-white/20 rounded-full"></div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      className="outline-none bg-transparent border-0 border-b border-white/20  rounded-none pl-4 py-4 text-white focus:ring-0 w-full"
                      placeholder="Your email"
                      required
                    />
                  </div>

                  <div className={`relative transition-all duration-300 ${activeField === "message" ? "translate-x-2" : ""}`}>
                    <div className="absolute top-0 left-0 h-[90%] w-1 bg-white/20 rounded-full"></div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      className="outline-none bg-transparent border-0 border-b border-white/20  rounded-none pl-4 py-4  text-white min-h-[150px] resize-none focus:ring-0 w-full"
                      placeholder="Your message"
                      required
                    />
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden bg-white text-black hover:text-white transition-colors rounded-full px-8 py-3"
                  >
                    <span className="absolute inset-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }







