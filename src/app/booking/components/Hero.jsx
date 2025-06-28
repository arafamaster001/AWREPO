import { Sparkles, Zap, CheckCircle } from "lucide-react"
import { colors } from "./config"

export default function Hero() {
  return (
    <div className="text-center max-w-5xl mx-auto mb-20">
      <div
        className="inline-flex items-center gap-2 border rounded-full px-6 py-2 mb-8 backdrop-blur-sm"
        style={{
          background: `linear-gradient(to right, ${colors.primary.cyan}${Math.round(255 * 0.2)
            .toString(16)
            .padStart(2, "0")}, ${colors.primary.green}${Math.round(255 * 0.2)
            .toString(16)
            .padStart(2, "0")})`,
          borderColor: `${colors.primary.cyan}${Math.round(255 * 0.3)
            .toString(16)
            .padStart(2, "0")}`,
        }}
      >
        <Sparkles className="w-4 h-4" style={{ color: colors.primary.cyan }} />
        <span className="text-sm font-medium" style={{ color: colors.primary.cyan }}>
          Premium Web Development Agency
        </span>
        <Zap className="w-4 h-4" style={{ color: colors.primary.green }} />
      </div>

      <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
        Start Your Next
        <span
          className="bg-clip-text text-transparent animate-gradient-x"
          // style={{ backgroundImage: colors.gradients.text }}
        >
          
        </span>
        <br />
        <span
          className="bg-clip-text text-transparent animate-gradient-x-reverse"
          // style={{ backgroundImage: colors.gradients.textReverse }}
        >
        </span>
                  Digital Project

      </h1>

      <p
        className="text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto"
        style={{ color: colors.text.secondary }}
      >
        Ready to bring your vision to life? Let's discuss your requirements and build something
        <span className="font-semibold" style={{ color: colors.primary.cyan }}>
          {" "}
          extraordinary{" "}
        </span>
        together.
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-sm" style={{ color: colors.text.muted }}>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4" style={{ color: colors.primary.green }} />
          <span>Free Consultation</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4" style={{ color: colors.primary.green }} />
          <span>24/7 Support</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4" style={{ color: colors.primary.green }} />
          <span>100% Satisfaction Guarantee</span>
        </div>
      </div>
    </div>
  )
}
