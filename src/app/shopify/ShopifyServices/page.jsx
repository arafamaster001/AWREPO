import { ArrowRight, BarChart, Code, Palette, ShoppingBag, ShoppingCart, Zap } from 'lucide-react'
import React from 'react'

const ShopifyStacks = () => {
    const services = [
        {
          icon: <ShoppingBag className="h-6 w-6 text-white" />,
          title: "Store Setup & Migration",
          description: "Professional setup of new Shopify stores or seamless migration from other platforms.",
          features: ["Custom configuration", "Data migration", "Domain setup"],
        },
        {
          icon: <Palette className="h-6 w-6 text-white" />,
          title: "Custom Theme Development",
          description: "Tailor-made themes that reflect your brand identity and optimize for conversions.",
          features: ["Unique design", "Mobile optimization", "Brand consistency"],
        },
        {
          icon: <Code className="h-6 w-6 text-white" />,
          title: "App Development",
          description: "Custom Shopify apps to extend functionality and create unique shopping experiences.",
          features: ["Custom functionality", "API integration", "Performance optimization"],
        },
        {
          icon: <BarChart className="h-6 w-6 text-white" />,
          title: "Performance Optimization",
          description: "Speed up your store, improve SEO, and enhance overall performance metrics.",
          features: ["Speed optimization", "SEO improvements", "Conversion tracking"],
        },
        {
          icon: <Zap className="h-6 w-6 text-white" />,
          title: "Conversion Rate Optimization",
          description: "Data-driven strategies to increase your store's conversion rate and revenue.",
          features: ["A/B testing", "User flow optimization", "Analytics setup"],
        },
        {
          icon: <ShoppingCart className="h-6 w-6 text-white" />,
          title: "Ongoing Maintenance",
          description: "Regular updates, security patches, and technical support to keep your store running smoothly.",
          features: ["Regular updates", "Security monitoring", "Technical support"],
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
          <h2 className="text-3xl md:text-4xl font-bold">OUR SHOPIFY SERVICES</h2>
        </div>
        <p className="text-zinc-400 md:text-lg max-w-md">
          From new online stores to established e-commerce businesses.
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

export default ShopifyStacks