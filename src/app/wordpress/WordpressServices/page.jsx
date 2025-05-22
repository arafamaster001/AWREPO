import { ArrowRight, BarChart, Code, Palette, Search, Server, Shield, ShoppingBag, ShoppingCart, Zap } from 'lucide-react'
import React from 'react'

const WordpressServices = () => {
    const services = [
        {
          icon: <Server className="h-6 w-6 text-white" />,
          title: "Website Setup & Migration",
          description: "Professional WordPress installation or migration from other CMS platforms.",
          features: ["Hosting & domain setup", "Secure site migration", "Initial plugin configuration"],
        },
        {
          icon: <Palette className="h-6 w-6 text-white" />,
          title: "Custom Theme Development",
          description: "Fully responsive and branded WordPress themes tailored to your business goals.",
          features: ["Bespoke design", "Mobile-first development", "Branding consistency"],
        },
        {
          icon: <ShoppingCart className="h-6 w-6 text-white" />,
          title: "WooCommerce Store Setup",
          description: "Launch or scale an eCommerce store using the power of WooCommerce.",
          features: ["Product setup", "Payment & shipping", "Cart customization"],
        },
        {
          icon: <BarChart className="h-6 w-6 text-white" />,
          title: "Performance Optimization",
          description: "Improve site speed, SEO readiness, and core web vitals.",
          features: ["Page speed improvements", "On-page SEO tuning", "Cache & CDN setup"],
        },
        {
          icon: <Search className="h-6 w-6 text-white" />,
          title: "Content & SEO Strategy",
          description: "Drive organic traffic with content planning and SEO implementation.",
          features: ["Keyword optimization", "Blog structure", "SEO plugins"],
        },
        {
          icon: <Shield className="h-6 w-6 text-white" />,
          title: "Ongoing Maintenance & Support",
          description: "Keep your WordPress site secure, updated, and running smoothly.",
          features: ["Backups & updates", "Security monitoring", "Technical troubleshooting"],
        },
      ]
      
  return (
    <section id="services" className="w-full p-[5%] flex flex-col gap-14">
    <div className="container ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className='flex flex-col gap-3'>
          <div className="text-gray-400">
            <span>[ Our Services ]</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">OUR WORDPRESS SERVICES</h2>
        </div>
        <p className="text-zinc-400 md:text-lg max-w-md">
        From business websites to fully-featured WooCommerce stores.
        </p>
      </div>

      {/* Services grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group relative">
            {/* Service card with hover effect */}
            <div className="relative z-10 p-6  border-l   border-white/20  transition-all duration-300 group-hover:translate-y-[-4px] group-hover:border-zinc-700 hover:border-l">
              {/* Top section with icon and number */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-zinc-900 rounded-lg">
                  {service.icon}
                </div>
                <span className="text-3xl font-bold text-zinc-800">{(index + 1).toString().padStart(2, "0")}</span>
              </div>

              {/* Title and description */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-6">{service.description}</p>

              {/* Bottom section with key features */}
              <div className="space-y-2">
                {service.features &&
                  service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-sm text-zinc-500">
                      <div className="w-1 h-1 bg-zinc-500 rounded-full mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
              </div>

              {/* Learn more link */}
              {/* <div className="mt-6 flex items-center text-sm font-medium text-zinc-500 group-hover:text-white transition-colors">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div> */}
            </div>

            {/* Background glow effect on hover */}
            <div className="absolute inset-0 bg-zinc-900 rounded-lg opacity-0 blur-xl transition-opacity group-hover:opacity-20"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default WordpressServices