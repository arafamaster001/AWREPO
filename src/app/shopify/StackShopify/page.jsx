import { Code, Globe, Layers, Monitor, Palette, Search, Settings, Shield, ShoppingBag, Zap } from 'lucide-react'
import React from 'react'

const StacksShopify = () => {
  return (
    <section className="w-full p-[5%] ">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="space-x-1  mb-4">
                <span className='text-gray-400'>[Technologies]</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">SHOPIFY TECH STACK</h2>
            </div>
            <p className="text-zinc-400 md:text-lg max-w-md">
              We use the latest technologies to build high-performance Shopify stores.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="group">
                <div className="relative h-24 border border-zinc-800 rounded-lg flex flex-col items-center justify-center p-4 group-hover:border-zinc-700 transition-colors">
                  <div className="mb-2">{tech.icon}</div>
                  <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">{tech.name}</span>
                  <div className="absolute inset-0 bg-zinc-800/0 group-hover:bg-zinc-800/10 transition-colors rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
const techStack = [
    {
      name: "Shopify",
      icon: <ShoppingBag className="h-6 w-6 text-white" />,
    },
    {
      name: "JavaScript",
      icon: <Code className="h-6 w-6 text-white" />,
    },
    {
      name: "React",
      icon: <Zap className="h-6 w-6 text-white" />,
    },
    {
      name: "Node.js",
      icon: <Shield className="h-6 w-6 text-white" />,
    },
    {
      name: "GraphQL",
      icon: <Globe className="h-6 w-6 text-white" />,
    },
    {
      name: "Shopify CLI",
      icon: <Settings className="h-6 w-6 text-white" />,
    },
    {
      name: "Liquid",
      icon: <Layers className="h-6 w-6 text-white" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="h-6 w-6 text-white" />,
    },
    {
      name: "TypeScript",
      icon: <Code className="h-6 w-6 text-white" />,
    },
    {
      name: "Next.js",
      icon: <Zap className="h-6 w-6 text-white" />,
    },
    {
      name: "Headless CMS",
      icon: <Monitor className="h-6 w-6 text-white" />,
    },
    {
      name: "Analytics",
      icon: <Search className="h-6 w-6 text-white" />,
    },
  ]
export default StacksShopify