import React from 'react'

const WhyMern = () => {
  return (
    <section className='w-full p-[5%] grid grid-col-1 md:grid-cols-2 min-h-[100vh]'>
        <div className="w-full flex flex-col gap-6 col-span-1 h-full justify-center"> 
            <span className='text-gray-400'>[ Why Us ]</span>
            <div className='flex flex-col gap-1'>
            <h2 className='sub_heading'>Advance JS Solutions.</h2>
            <span className=' font-semibold text-lg'>Build lightning-fast, scalable, and modern web applications with cutting-edge JavaScript frameworks.</span>
            
            </div>
            <p className='text-gray-400 text-lg'>At ArafaWebs, we craft high-performance, scalable, and future-ready web applications using the latest JavaScript technologies — including Next.js, Vue.js, Node.js, Express, Angular, TypeScript, Three.js, and more. From intuitive UIs to powerful backend architectures, we deliver full-stack solutions tailored for startups, enterprises, and everything in between.</p>
            <div>
            <button className="main_btn">Start building</button>
            </div>
        </div>
        <div className='col-span-1 relative p-[5%]  flex-col flex gap-5 overflow-hidden h-[60vh]'>
            <div className='mern_cardss  absolute left-[20%] top-[20%] w-full border-white/20 border bg-white/20 p-5 rounded-2xl'>
            <span>Plan & Design</span>
            <p>We map your idea and create a modern, user-friendly design.</p>
            </div>
            <div className='mern_cardss  absolute left-[35%] top-[35%] w-full border-white/20 border p-5 bg-white/20 rounded-2xl'>
            <span>Develop and Integrate</span>
            <p>Built with purpose, integrated with precision.</p>
            </div>
            <div className='mern_cardss  absolute left-[50%] top-[50%] w-full border-white/20 border p-5 bg-white/20 rounded-2xl'>
            <span>Launch and Support</span>
            <p>We launch it right — and stand by it always.</p>
            </div>
            <div className='absolute w-full h-[120%] bottom-0 cards_bg'></div>
        </div>
    </section>
  )
}

export default WhyMern