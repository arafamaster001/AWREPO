import { colors } from "./config"

const FloatingParticle = ({ delay = 0 }) => (
  <div
    className="absolute w-1 h-1 rounded-full opacity-60 animate-float"
    style={{
      backgroundColor: colors.primary.cyan,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }}
  />
)

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* {Array.from({ length: 20 }).map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.2} />
      ))} */}

      {/* Gradient Orbs */}
      {/* <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow"
        style={{
          backgroundColor: `${colors.primary.cyan}${Math.round(255 * 0.05)
            .toString(16)
            .padStart(2, "0")}`,
        }}
      /> */}
      {/* <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow"
        style={{
          backgroundColor: `${colors.primary.green}${Math.round(255 * 0.05)
            .toString(16)
            .padStart(2, "0")}`,
          animationDelay: "1s",
        }}
      /> */}

      {/* Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%2300ffff&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" /> */}
    </div>
  )
}
