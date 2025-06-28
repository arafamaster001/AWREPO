"use client"

import { Headphones, Mail, Phone, Clock } from "lucide-react"
import { colors } from "./config"

export default function ContactInfo() {
  return (
    <div
      className="card border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
      // style={{
      //   backgroundColor: colors.background.card,
      //   borderColor: colors.border.primary,
      //   boxShadow: `0 25px 50px -12px ${colors.primary.cyan}${Math.round(255 * 0.2)
      //     .toString(16)
      //     .padStart(2, "0")}`,
      // }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to bottom right, ${colors.primary.cyan}${Math.round(255 * 0.05)
            .toString(16)
            .padStart(2, "0")}, transparent)`,
        }}
      />
      <div className="p-6 border-b relative z-10" style={{ borderColor: colors.border.primary }}>
        <h2 className="text-xl font-bold flex items-center" style={{ color: colors.text.primary }}>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
            style={{ background: colors.gradients.primary }}
          >
            <Headphones className="w-4 h-4" style={{ color: colors.primary.black }} />
          </div>
          Get In Touch
        </h2>
      </div>
      <div className="p-6 space-y-6 relative z-10">
        <div
          className="flex items-center space-x-4 p-3 rounded-lg transition-colors group/contact"
          style={{
            backgroundColor: `${colors.background.primary}${Math.round(255 * 0.4)
              .toString(16)
              .padStart(2, "0")}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${colors.primary.cyan}${Math.round(255 * 0.05)
              .toString(16)
              .padStart(2, "0")}`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${colors.background.primary}${Math.round(255 * 0.4)
              .toString(16)
              .padStart(2, "0")}`
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: `${colors.primary.cyan}${Math.round(255 * 0.2)
                .toString(16)
                .padStart(2, "0")}`,
            }}
          >
            <Mail className="w-5 h-5" style={{ color: colors.primary.cyan }} />
          </div>
          <div>
            <p className="text-xs" style={{ color: colors.text.muted }}>
              Email us at
            </p>
            <span
              className="transition-colors group-hover/contact:text-cyan-400"
              style={{ color: colors.text.primary }}
            >
              hello@arafawebs.com
            </span>
          </div>
        </div>
        <div
          className="flex items-center space-x-4 p-3 rounded-lg transition-colors group/contact"
          style={{
            backgroundColor: `${colors.background.primary}${Math.round(255 * 0.4)
              .toString(16)
              .padStart(2, "0")}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${colors.primary.cyan}${Math.round(255 * 0.05)
              .toString(16)
              .padStart(2, "0")}`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${colors.background.primary}${Math.round(255 * 0.4)
              .toString(16)
              .padStart(2, "0")}`
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: `${colors.primary.cyan}${Math.round(255 * 0.2)
                .toString(16)
                .padStart(2, "0")}`,
            }}
          >
            <Phone className="w-5 h-5" style={{ color: colors.primary.cyan }} />
          </div>
          <div>
            <p className="text-xs" style={{ color: colors.text.muted }}>
              Call us at
            </p>
            <span
              className="transition-colors group-hover/contact:text-cyan-400"
              style={{ color: colors.text.primary }}
            >
              +1 (555) 123-4567
            </span>
          </div>
        </div>
        <div
          className="flex items-center space-x-4 p-3 rounded-lg transition-colors group/contact"
          style={{
            backgroundColor: `${colors.background.primary}${Math.round(255 * 0.4)
              .toString(16)
              .padStart(2, "0")}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${colors.primary.cyan}${Math.round(255 * 0.05)
              .toString(16)
              .padStart(2, "0")}`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${colors.background.primary}${Math.round(255 * 0.4)
              .toString(16)
              .padStart(2, "0")}`
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: `${colors.primary.cyan}${Math.round(255 * 0.2)
                .toString(16)
                .padStart(2, "0")}`,
            }}
          >
            <Clock className="w-5 h-5" style={{ color: colors.primary.cyan }} />
          </div>
          <div>
            <p className="text-xs" style={{ color: colors.text.muted }}>
              Working hours
            </p>
            <span
              className="transition-colors group-hover/contact:text-cyan-400"
              style={{ color: colors.text.primary }}
            >
              Mon-Fri: 9AM-6PM EST
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
