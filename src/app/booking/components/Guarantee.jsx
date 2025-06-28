import { Shield, CheckCircle } from "lucide-react"
import { colors } from "./config"

export default function Guarantee() {
  return (
    <div
      className="card border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden"
      // style={{
      //   background: `linear-gradient(to bottom right, ${colors.primary.green}${Math.round(255 * 0.2)
      //     .toString(16)
      //     .padStart(2, "0")}, ${colors.primary.cyan}${Math.round(255 * 0.2)
      //     .toString(16)
      //     .padStart(2, "0")})`,
      //   borderColor: colors.primary.green,
      //   boxShadow: `0 25px 50px -12px ${colors.primary.green}${Math.round(255 * 0.3)
      //     .toString(16)
      //     .padStart(2, "0")}`,
      // }}
    >
      <div
        className="absolute inset-0 animate-pulse-slow"
        // style={{
        //   background: `linear-gradient(to bottom right, ${colors.primary.green}${Math.round(255 * 0.1)
        //     .toString(16)
        //     .padStart(2, "0")}, ${colors.primary.cyan}${Math.round(255 * 0.1)
        //     .toString(16)
        //     .padStart(2, "0")})`,
        // }}
      />
      <div className="p-6 relative z-10">
        <div className="flex items-start space-x-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
            style={{ background: colors.gradients.primaryReverse }}
          >
            <Shield className="w-6 h-6" style={{ color: colors.primary.black }} />
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg" style={{ color: colors.text.primary }}>
              100% Satisfaction Guarantee
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: colors.text.secondary }}>
              If you're not completely satisfied with our work, we'll make it right. Your success is our priority, and
              we stand behind every project we deliver.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: colors.primary.green }}>
              <CheckCircle className="w-4 h-4" />
              <span>Risk-free development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
