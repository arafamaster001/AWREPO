import { colors } from "./components/config"
import FloatingParticles from "./components/FloatingParticles"
import Hero from "./components/Hero"
import ContactForm from "./components/ContactForm"
import ProcessSteps from "./components/ProcessSteps"
import ContactInfo from "./components/ContactInfo"
import Guarantee from "./components/Guarantee"

const page = () => {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden bg-black"
    //   style={{ background: colors.gradients.background }}
    >
      {/* Animated Background Elements */}
      <FloatingParticles />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16 z-10 relative">
        <Hero />

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto  relative ">
          {/* Main Form */}
          <div className="lg:col-span-2 sticky top-2">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ProcessSteps />
            <ContactInfo />
            <Guarantee />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
















