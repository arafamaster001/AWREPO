import { Zap, Shield, Rocket, Code } from "lucide-react"



export default function WhyModernStack() {
  return (
    <section className="bg-black text-white py-[10%] p-[5%]">
      <div className="container mx-auto ">
        <div className="">
          <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row lg:justify-between">
            {/* Left column with text content */}
            <div className="lg:w-[40%] flex flex-col gap-10 ">
              <div className="flex flex-col gap-5">  
                <p className="text-gray-400">[ Why Modern stack ]</p>
              

              <h2 className="sub_heading">Why Modern Stack</h2>

              <p className="text-gray-400 text-lg  leading-relaxed">
                Modern stack is so powerful yet intuitive, it's easy to overlook the wealth of cutting-edge technologies
                working together to keep your applications fast, secure, and scalable.
              </p>

              <div className="h-px bg-white/10 "></div>
              </div>
              <div className="flex flex-col gap-5">
              <div>
              <div className="flex items-center gap- ">
                <div className=" w-10 h-10 flex items-center justify-center rounded-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Performance Optimized</h3>
              </div>
              <p className="text-gray-400 text-sm ml-10 ">
              Modern frameworks boost speed with SSR, static generation, and hydration.


              </p>
            </div>

            <div>
              <div className="flex items-center gap- ">
                <div className=" w-10 h-10 flex items-center justify-center rounded-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Security First</h3>
              </div>
              <p className="text-gray-400 text-sm ml-10 ">
               Built-in security via input sanitization and secure defaults.

              </p>
            </div>

            <div>
              <div className="flex items-center gap- ">
                <div className=" w-10 h-10 flex items-center justify-center rounded-sm">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Infinitely Scalable</h3>
              </div>
              <p className="text-gray-400 text-sm ml-10 ">
              Component-based architecture enables scalable, reusable, and maintainable code.

              </p>
            </div>

            <div>
              <div className="flex items-center gap- ">
                <div className=" w-10 h-10 flex items-center justify-center rounded-sm">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Developer Experience</h3>
              </div>
              <p className="text-gray-400 text-sm ml-10 ">
              Modern stacks boost productivity with HMR and TypeScript support.

              </p>
            </div>
                {/* <div>
                  <h3 className="point">Performance Optimized</h3>
                  <p className="text-gray-400">
                    Built with a high-performance architecture and an obsessive focus on speed and efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="point">
                    Enterprise-ready security
                  </h3>
                  <p className="text-gray-400">
                    Best-in-class security practices keep your applications and data protected at all times.
                  </p>
                </div> */}

                {/* <div>
                  <h3 className="text-xl font-medium mb-4">Developer Experience</h3>
                  <p className="text-gray-400">
                    Intuitive APIs and comprehensive documentation make development faster and more enjoyable.
                  </p>
                </div> */}
              </div>
            </div>

            {/* Right column with web development visualization */}
            <div className="lg:w-[50%] relative">
              <div className="relative aspect-square border border-dashed border-white/10 rounded-sm p-4 top-[8%]">
                {/* Browser window mockup */}
                <div className="absolute top-4 left-4 right-4 h-1/2 bg-black rounded-md border border-zinc-800 overflow-hidden">
                  {/* Browser toolbar */}
                  <div className="h-8 bg-black border-white/20 border flex items-center px-3 border-b">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="mx-auto border border-white/20 rounded-full h-5 w-48 flex items-center justify-center">
                      <span className="text-xs text-gray-400">https://modern-stack.app</span>
                    </div>
                  </div>

                  {/* Browser content */}
                  <div className="p-3 h-[calc(100%-32px)] flex flex-col">
                    <div className="flex space-x-2 mb-3">
                      <div className="w-20 h-5 bg-black border-white/20 border rounded-sm"></div>
                      <div className="w-20 h-5 bg-black border-white/20 border rounded-sm"></div>
                      <div className="w-20 h-5 bg-black border-white/20 border rounded-sm"></div>
                    </div>
                    <div className="w-3/4 h-6 bg-black border-white/20 border rounded-sm mb-4"></div>
                    <div className="w-full h-20 bg-black border-white/20 border rounded-sm mb-3"></div>
                    <div className="flex space-x-2">
                      <div className="w-1/3 h-16 bg-black border-white/20 border rounded-sm"></div>
                      <div className="w-1/3 h-16 bg-black border-white/20 border rounded-sm"></div>
                      <div className="w-1/3 h-16 bg-black border-white/20 border rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Code editor mockup */}
                <div className="absolute bottom-4 left-4 w-2/3 h-1/3 bg-black rounded-md border border-zinc-800 overflow-hidden">
                  <div className="h-6 bg-black border-white/20 border flex items-center px-3 border-b border-zinc-700">
                    <span className="texttext--xs t400y-400">component.jsx</span>
                  </div>
                  <div className="p-3 text-xs font-mono">
                    <div className="text-gray-400">import</div>
                    <div className="pl-2 text-gray-400">
                      {"{"} useState, useEffect {"}"}
                    </div>
                    <div className="text-gray-400 pl-2">from</div>
                    <div className="text-gray-400 pl-2">'react';</div>
                    <div className="mt-2 text-gray-400">const</div>
                    <div className="text-gray-400 pl-2">Component</div>
                    <div className="text-gray-300 pl-2">{"= () => {"}</div>
                    <div className="text-gray-400 pl-4">// Modern code</div>
                    <div className="text-gray-300 pl-2">{`}`}</div>
                  </div>
                </div>

                {/* Terminal mockup */}
                <div className="absolute bottom-4 right-4 w-1/4 h-1/3 bg-black rounded-md border border-zinc-800 overflow-hidden">
                  <div className="h-6 bg-black border-white/20 border flex items-center px-3 border-b border-zinc-700">
                    <span className="text-xs text-gray-400">terminal</span>
                  </div>
                  <div className="p-2 text-xs font-mono bg-black h-[calc(100%-24px)] text-gray-400">
                    <div className="text-green-400">$ npm run dev</div>
                    <div className="mt-1">ready - started server on 0.0.0.0:3000</div>
                    <div className="">event - compiled client and server</div>
                    <div className="">wait - compiling...</div>
                    <div className="text-green-400">✓ Ready in 150ms</div>
                  </div>
                </div>
                <div className="absolute w-[110%] h-[110%] terminal_box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
