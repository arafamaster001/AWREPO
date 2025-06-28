"use client"

import { Star } from "lucide-react"
import { colors } from "./config"

export default function FormStep1({ formData, handleInputChange }) {
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
    <div className="space-y-8 animate-in slide-in-from-right-5 duration-500">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.primary }}>
          Let's get to know you
        </h3>
        <p style={{ color: colors.text.muted }}>We'll use this information to personalize your experience</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3 group">
          <label
            htmlFor="fullName"
            className="font-medium flex items-center gap-2 block"
            style={{ color: colors.text.primary }}
          >
            Full Name *
            <Star className="w-3 h-3" style={{ color: colors.primary.cyan }} />
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className="input w-full border transition-all duration-300 h-12 rounded-lg px-4 outline-none group-hover:border-opacity-80"
            style={inputStyle}
            // 
            // 
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="space-y-3 group">
          <label
            htmlFor="email"
            className="font-medium flex items-center gap-2 block"
            style={{ color: colors.text.primary }}
          >
            Email Address *
            <Star className="w-3 h-3" style={{ color: colors.primary.cyan }} />
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="input w-full border transition-all duration-300 h-12 rounded-lg px-4 outline-none group-hover:border-opacity-80"
            style={inputStyle}
            
            
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3 group">
          <label htmlFor="phone" className="font-medium block" style={{ color: colors.text.primary }}>
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="input w-full border transition-all duration-300 h-12 rounded-lg px-4 outline-none group-hover:border-opacity-80"
            style={inputStyle}
            
            
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="space-y-3 group">
          <label htmlFor="company" className="font-medium block" style={{ color: colors.text.primary }}>
            Company Name
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="input w-full border transition-all duration-300 h-12 rounded-lg px-4 outline-none group-hover:border-opacity-80"
            style={inputStyle}
            
            
            placeholder="Your company name"
          />
        </div>
      </div>
    </div>
  )
}
