const AboutSection = () => {

  return (
    <section id="about" className="w-full h-auto  lg:h-[100vh] py-[20%] px-[5%]  lg:p-[5%] relative">
      <div className="flex flex-col gap-6 relative z-10">
        <h2 className="sub_heading">About us</h2>
        <p className="para quote h-auto flex flex-col gap-5">
          <span>
            Arafa Webs is a specialized web development company founded in 2020,
            focused on delivering high-quality, custom-built websites tailored
            to meet modern business needs.
          </span>
          <br />
          <span>
            We started with a clear purpose: to simplify the web development
            process by offering focused, professional solutions — without the
            confusion of unrelated services. Our mission is simple — build
            websites that are fast, functional, and built to scale.
          </span>
          <br />
          <span>
            From advanced web systems to e-commerce platforms and portfolio
            sites, we work with businesses across the globe to help them
            establish a strong digital presence.
          </span>
          <br />
          <span className="text-4xl">|</span>
          &nbsp;At Arafa Webs, we don&rsquo;t just create websites — we craft digital
          solutions that drive real results.
        </p>
      </div>

      <div className="absolute inset-0 z-0">
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl" />
        {/* <div className="absolute inset-0 bg-[repeating-linear-gradient  (45deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_1px,transparent_1px,transparent_8px)]" /> */}

        {/* Floating elements */}
        <div className="absolute bottom-20 right-32 w-16 h-16 border border-white/20 rounded-full" />
        <div className="absolute top-20 right-20 w-8 h-8 border border-white/20 rounded-md rotate-45" />
        <div className="absolute bottom-32 left-24 w-24 h-24 border border-white/20 rounded-lg rotate-12" />
      </div>
    </section>
  );
};

export default AboutSection;
