"use client"

import { Sparkles, MessageSquare, CheckCircle, ChevronDown } from "lucide-react"
import { Code, Smartphone, ShoppingCart, Palette } from "lucide-react"
import { colors } from "./config"

const services = [
  { id: "web-dev", name: "Web Development", icon: Code, description: "Custom websites & web apps" },
  { id: "mobile-dev", name: "Mobile App Development", icon: Smartphone, description: "iOS & Android apps" },
  { id: "ecommerce", name: "E-commerce Solutions", icon: ShoppingCart, description: "Online stores & marketplaces" },
  { id: "ui-ux", name: "UI/UX Design", icon: Palette, description: "User-centered design" },
]

export default function FormStep2({ formData, handleInputChange, handleServiceToggle }) {
  const inputStyle = {
    backgroundColor: `${colors.background.primary}${Math.round(255 * 0.8)
      .toString(16)
      .padStart(2, "0")}`,
    borderColor: colors.border.primary,
    color: colors.text.primary,
  }

  const inputFocusStyle = {
    borderColor: colors.border.focus,
    boxShadow: `0 0 0 2px ${colors.primary.cyan}${Math.round(255 * 0.5)
      .toString(16)
      .padStart(2, "0")}, 0 4px 6px -1px ${colors.primary.cyan}${Math.round(255 * 0.3)
      .toString(16)
      .padStart(2, "0")}`,
  }

  return (
    <div className="space-y-10 animate-in slide-in-from-right-5 duration-500">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.primary }}>
          Project Details
        </h3>
        <p style={{ color: colors.text.muted }}>Help us understand your vision and requirements</p>
      </div>

      {/* Services Selection */}
      <div className="space-y-6">
        <label className="font-medium text-lg flex items-center gap-2 block" style={{ color: colors.text.primary }}>
          Services Needed *
          <Sparkles className="w-4 h-4" style={{ color: colors.primary.green }} />
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            const isSelected = formData.services.includes(service.id)
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => handleServiceToggle(service.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group relative overflow-hidden ${
                  isSelected ? "scale-105" : "hover:scale-102"
                }`}
                style={{
                  borderColor: isSelected ? colors.primary.cyan : colors.border.primary,
                  background: isSelected
                    ? `linear-gradient(to bottom right, ${colors.primary.cyan}${Math.round(255 * 0.2)
                        .toString(16)
                        .padStart(2, "0")}, ${colors.primary.green}${Math.round(255 * 0.1)
                        .toString(16)
                        .padStart(2, "0")})`
                    : colors.background.card,
                  boxShadow: isSelected
                    ? `0 25px 50px -12px ${colors.primary.cyan}${Math.round(255 * 0.3)
                        .toString(16)
                        .padStart(2, "0")}`
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.target.style.borderColor = colors.primary.green
                    e.target.style.background = `${colors.primary.green}${Math.round(255 * 0.05)
                      .toString(16)
                      .padStart(2, "0")}`
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.target.style.borderColor = colors.border.primary
                    e.target.style.background = colors.background.card
                  }
                }}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle className="w-5 h-5" style={{ color: colors.primary.cyan }} />
                  </div>
                )}
                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-lg transition-colors"
                    style={{
                      backgroundColor: isSelected
                        ? `${colors.primary.cyan}${Math.round(255 * 0.2)
                            .toString(16)
                            .padStart(2, "0")}`
                        : colors.border.primary,
                    }}
                  >
                    <Icon
                      className="w-6 h-6 transition-colors"
                      style={{
                        color: isSelected ? colors.primary.cyan : colors.text.secondary,
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4
                      className="font-semibold mb-1 transition-colors"
                      style={{
                        color: isSelected ? colors.text.primary : colors.text.secondary,
                      }}
                    >
                      {service.name}
                    </h4>
                    <p className="text-sm" style={{ color: colors.text.muted }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Project Type */}
      <div className="space-y-3">
        <label className="font-medium text-lg block" style={{ color: colors.text.primary }}>
          Project Type *
        </label>
        <div className="relative">
          <select
            value={formData.projectType}
            onChange={(e) => handleInputChange("projectType", e.target.value)}
            className="w-full h-12 rounded-lg px-4 pr-10 outline-none appearance-none transition-colors"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          >
            <option value="" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
              Select project type
            </option>
            <option value="new-project" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
              New Project
            </option>
            <option value="redesign" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
               Website Redesign
            </option>
            <option value="maintenance" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
               Maintenance & Updates
            </option>
            <option value="consultation" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
               Consultation Only
            </option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
            style={{ color: colors.text.placeholder }}
          />
        </div>
      </div>

      {/* Budget and Timeline */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="font-medium block" style={{ color: colors.text.primary }}>
            Budget Range
          </label>
          <div className="relative">
            <select
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
              className="w-full h-12 rounded-lg px-4 pr-10 outline-none appearance-none transition-colors"
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            >
              <option value="" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
                Select budget range
              </option>
              <option value="5k-10k" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
                $100 - $500
              </option>
              <option value="10k-25k" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
                $500 - $1000
              </option>
              <option value="25k-50k" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
                $1,000 - 5,000
              </option>
              <option value="50k+" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
                $5000+
              </option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
              style={{ color: colors.text.placeholder }}
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="font-medium block" style={{ color: colors.text.primary }}>
            Timeline
          </label>
          <div className="relative">
            <select
              value={formData.timeline}
              onChange={(e) => handleInputChange("timeline", e.target.value)}
              className="w-full h-12 rounded-lg px-4 pr-10 outline-none appearance-none transition-colors"
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            >
              <option value="" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
                Select timeline
              </option>
              <option value="asap" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
                ASAP
              </option>
              <option value="1-2months" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
                1-2 months
              </option>
              <option value="3-6months" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
                3-6 months
              </option>
              <option value="6months+" style={{ backgroundColor: "#1a1a1a", color: colors.text.primary }}>
                6+ months
              </option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
              style={{ color: colors.text.placeholder }}
            />
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-3">
        <label
          htmlFor="description"
          className="font-medium text-lg flex items-center gap-2 block"
          style={{ color: colors.text.primary }}
        >
          Project Description *
          <MessageSquare className="w-4 h-4" style={{ color: colors.primary.green }} />
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          className="w-full min-h-[140px] rounded-lg p-4 outline-none resize-vertical transition-all duration-300"
          style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          placeholder="Tell us about your project vision, goals, target audience, and any specific requirements..."
          required
        />
      </div>

      {/* Additional Information */}
      <div className="space-y-3">
        <label htmlFor="additionalInfo" className="font-medium block" style={{ color: colors.text.primary }}>
          Additional Information
        </label>
        <textarea
          id="additionalInfo"
          value={formData.additionalInfo}
          onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
          className="w-full rounded-lg p-4 outline-none resize-vertical transition-all duration-300"
          style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          placeholder="Any additional details, inspiration links, competitor references, or special requirements..."
        />
      </div>
    </div>
  )
}
