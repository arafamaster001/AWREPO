"use client"

import { useState } from "react"
import { FileText, ChevronLeft, ArrowRight, Rocket, CheckCircle } from "lucide-react"
import { colors } from "./config"
import FormStep1 from "./FormStep1"
import FormStep2 from "./FormStep2"

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    additionalInfo: "",
  })

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setCurrentStep(1)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      services: [],
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      additionalInfo: "",
    })
  }

  return (
    <div
      className="overflow-hidden group"
      // style={{
      //   backgroundColor: colors.background.card,
      //   borderColor: colors.border.primary,
      //   boxShadow: `0 25px 50px -12px ${colors.primary.cyan}${Math.round(255 * 0.2)
      //     .toString(16)
      //     .padStart(2, "0")}`,
      // }}
    >
      {/* Card Glow Effect */}
      {/* <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, ${colors.primary.cyan}${Math.round(255 * 0.1)
            .toString(16)
            .padStart(2, "0")}, transparent, ${colors.primary.green}${Math.round(255 * 0.1)
            .toString(16)
            .padStart(2, "0")})`,
        }}
      /> */}

      <div className="p-6 border-b relative z-10" style={{ borderColor: colors.border.primary }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: colors.gradients.primary }}
            >
              <FileText className="w-5 h-5" style={{ color: colors.primary.black }} />
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{ color: colors.text.primary }}>
                Project Inquiry Form
              </h2>
              <p className="text-sm" style={{ color: colors.text.muted }}>
                Tell us about your dream project
              </p>
            </div>
          </div>
          <span
            className="border rounded-full px-4 py-2 text-sm font-medium"
            style={{
              borderColor: colors.primary.cyan,
              color: colors.primary.cyan,
              backgroundColor: `${colors.primary.cyan}${Math.round(255 * 0.1)
                .toString(16)
                .padStart(2, "0")}`,
            }}
          >
            Step {currentStep} of 2
          </span>
        </div>

        {/* Enhanced Progress Bar */}
        <div
          className="w-full rounded-full h-3 mt-6 overflow-hidden"
          style={{ backgroundColor: colors.border.primary }}
        >
          <div
            className="h-3 rounded-full transition-all duration-700 ease-out shadow-lg relative"
            style={{
              width: `${(currentStep / 2) * 100}%`,
              background: colors.gradients.primary,
              boxShadow: `0 0 20px ${colors.primary.cyan}${Math.round(255 * 0.5)
                .toString(16)
                .padStart(2, "0")}`,
            }}
          >
            <div className="absolute inset-0 animate-shimmer" style={{ background: "rgba(255, 255, 255, 0.2)" }} />
          </div>
        </div>
      </div>

      <div className="p-6 relative z-10">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {currentStep === 1 && <FormStep1 formData={formData} handleInputChange={handleInputChange} />}

            {currentStep === 2 && (
              <FormStep2
                formData={formData}
                handleInputChange={handleInputChange}
                handleServiceToggle={handleServiceToggle}
              />
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t" style={{ borderColor: colors.border.primary }}>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="border transition-all duration-300 px-6 py-3 h-12 rounded-lg flex items-center gap-2 font-medium"
                  style={{
                    borderColor: colors.border.primary,
                    color: colors.text.secondary,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = colors.primary.green
                    e.target.style.color = colors.text.primary
                    e.target.style.backgroundColor = `${colors.primary.green}${Math.round(255 * 0.1)
                      .toString(16)
                      .padStart(2, "0")}`
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = colors.border.primary
                    e.target.style.color = colors.text.secondary
                    e.target.style.backgroundColor = "transparent"
                  }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous Step
                </button>
              )}

              <div className="ml-auto">
                {currentStep < 2 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="font-semibold transition-all duration-300 px-8 py-3 h-12 rounded-lg flex items-center gap-2 hover:scale-105 bg-white"
                    style={{
                      // background: colors.gradients.primary,
                      color: colors.primary.black,
                      // boxShadow: `0 10px 25px -5px ${colors.primary.cyan}${Math.round(255 * 0.4)
                      //   .toString(16)
                      //   .padStart(2, "0")}`,
                    }}
                    onMouseEnter={(e) => {
                      // e.target.style.boxShadow = `0 25px 50px -12px ${colors.primary.cyan}${Math.round(255 * 0.4)
                      //   .toString(16)
                      //   .padStart(2, "0")}`
                    }}
                    onMouseLeave={(e) => {
                      // e.target.style.boxShadow = `0 10px 25px -5px ${colors.primary.cyan}${Math.round(255 * 0.4)
                      //   .toString(16)
                      //   .padStart(2, "0")}`
                    }}
                  >
                    Continue to Project Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="font-semibold transition-all duration-300 px-8 py-3 h-12 rounded-lg flex items-center gap-2 hover:scale-105 relative overflow-hidden group"
                    style={{
                      background: colors.gradients.primary,
                      color: colors.primary.black,
                      boxShadow: `0 10px 25px -5px ${colors.primary.cyan}${Math.round(255 * 0.4)
                        .toString(16)
                        .padStart(2, "0")}`,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow = `0 25px 50px -12px ${colors.primary.cyan}${Math.round(255 * 0.4)
                        .toString(16)
                        .padStart(2, "0")}`
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow = `0 10px 25px -5px ${colors.primary.cyan}${Math.round(255 * 0.4)
                        .toString(16)
                        .padStart(2, "0")}`
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Submit Project Request
                      <Rocket className="w-4 h-4" />
                    </span>
                    <div
                      className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    />
                  </button>
                )}
              </div>
            </div>
          </form>
        ) : (
          <div className="text-center py-16 animate-in fade-in duration-500">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: colors.gradients.primary }}
            >
              <CheckCircle className="w-10 h-10" style={{ color: colors.primary.black }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Thank You!
            </h3>
            <p className="mb-6" style={{ color: colors.text.secondary }}>
              Your project request has been submitted successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={resetForm}
              className="border px-6 py-2 rounded-lg transition-colors"
              style={{
                borderColor: colors.primary.cyan,
                color: colors.primary.cyan,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = `${colors.primary.cyan}${Math.round(255 * 0.1)
                  .toString(16)
                  .padStart(2, "0")}`
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
              }}
            >
              Submit Another Request
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
