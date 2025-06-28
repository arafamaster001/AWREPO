"use client"

import { Code, MessageSquare, FileText, Rocket } from "lucide-react"
import { colors } from "./config"

const processSteps = [
  { number: 1, title: "Project Discussion", icon: MessageSquare, description: "We analyze your requirements" },
  { number: 2, title: "Proposal & Quote", icon: FileText, description: "Detailed project roadmap" },
  { number: 3, title: "Development", icon: Code, description: "Agile development process" },
  { number: 4, title: "Launch & Support", icon: Rocket, description: "Go live with ongoing support" },
]

export default function ProcessSteps() {
  return (
    <div
      className="card border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
      // style={{
      //   backgroundColor: colors.background.card,
      //   borderColor: colors.border.primary,
      //   boxShadow: `0 25px 50px -12px ${colors.primary.green}${Math.round(255 * 0.2)
      //     .toString(16)
      //     .padStart(2, "0")}`,
      // }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to bottom right, ${colors.primary.green}${Math.round(255 * 0.05)
            .toString(16)
            .padStart(2, "0")}, transparent)`,
        }}
      />
      <div className="p-6 border-b relative z-10" style={{ borderColor: colors.border.primary }}>
        <h2 className="text-xl font-bold flex items-center" style={{ color: colors.text.primary }}>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
            style={{ background: colors.gradients.primaryReverse }}
          >
            <Code className="w-4 h-4" style={{ color: colors.primary.black }} />
          </div>
          Our Process
        </h2>
      </div>
      <div className="p-6 space-y-4 relative z-10">
        {processSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={step.number}
              className="flex items-start space-x-4 p-4 rounded-xl border transition-all duration-300 group/step hover:scale-102"
              style={{
                backgroundColor: colors.background.card,
                borderColor: colors.border.primary,
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${colors.primary.green}${Math.round(255 * 0.5)
                  .toString(16)
                  .padStart(2, "0")}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.border.primary
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                style={{
                  background: colors.gradients.primary,
                  color: colors.primary.black,
                }}
              >
                {step.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4" style={{ color: colors.primary.green }} />
                  <span
                    className="font-semibold transition-colors group-hover/step:text-cyan-400"
                    style={{ color: colors.text.primary }}
                  >
                    {step.title}
                  </span>
                </div>
                <p className="text-sm" style={{ color: colors.text.muted }}>
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
