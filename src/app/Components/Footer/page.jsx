"use client"

import { Facebook } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { RiFacebookCircleFill, RiInstagramFill, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";


const Footer = () => {

    const pathname = usePathname();
  

  const scrollToSection = (id) => {
    // If already on the home page, just scroll to the section
    if (pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        const offset = -70; // Adjust this value as needed
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionTop + offset,
          behavior: "smooth",
        });
      }
    } else {
      // Navigate to the home page and then scroll to the section
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="w-full relative z-10">
      {/* <div className="absolute top-0 z-10 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05),_transparent_70%)]"></div> */}

      <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-5 w-full px-[5%] py-[20%] lg:p-[5%]">
        <div className="lg:col-span-2 flex flex-col gap-5 md:gap-3 ">
          <span className="point">Lets keep in Touch!</span>
          <p className="text-gray-400 lg:w-[80%]">
            Enter your email to stay up to date with the latest updates from
            Arafa
          </p>
          <div className="flex flex-col gap-3 lg:w-[70%]">
            <input
              type="email"
              className="footer_input px-3 py-2 rounded-md bg-white/20"
              placeholder="user@email.com "
            />
            <button className="px-3 py-2 border-white/20 border rounded-3xl">
              Subscribe to our newsletter
            </button>
          </div>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-2">
          <span className="point">Quick Links</span>
          <div className="flex flex-col gap-2">
            <p onClick={() => scrollToSection("landing")} >Home</p>
            <p onClick={() => scrollToSection("about")} >About</p>
            <p onClick={() => scrollToSection("services")} >Services</p>
            <p onClick={() => scrollToSection("projects")} >Projects</p>
            {/* <Link href={"/"}>Blogs</Link> */}
          </div>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-2">
          <span className="point">Social Links</span>

          <div className="flex flex-col gap-2">
            <a target="_blank" href={"https://www.linkedin.com/in/arafa-webs-74a8b6367/"}>LinkedIn</a>
            <a target="_blank" href={"https://www.facebook.com/people/Arafa-Webs/61577071787769/"}>Facebook</a>
            <a target="_blank" href={"https://www.instagram.com/arafawebs.official/"}>Instagram</a>
          </div>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="point">Contact</span>
            <span>support@arafawebs.com</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="point">Legal</span>
            <Link href={"/telemetry"}>Telemetry</Link>
            <Link href={"/privacypolicy"}>Privacy Policy</Link>
            <Link href={"/termsandconditions"}>Terms of Services</Link>
          </div>
        </div>
      </div>
      <div className="w-full px-[5%] ">
        <div className="w-full border-white/20 border-t py-[2%] flex flex-col lg:flex-row lg:justify-between items-center gap-5">
          <div>
            <span className="text-gray-400">All right reserved © 2025 Arafawebs</span>
          </div>
          <div className="flex gap-10 lg:gap-5 items-center  justify-center">
            <a target="_blank" href="https://www.linkedin.com/in/arafa-webs-74a8b6367/"><FaLinkedin className="text-2xl hover:-translate-y-1 duration-200" /></a>
            <a target="_blank" href="https://www.facebook.com/people/Arafa-Webs/61577071787769/"><RiFacebookCircleFill className="text-3xl hover:-translate-y-1 duration-200" /></a>
            <a target="_blank" href="https://www.instagram.com/arafawebs.official/"><RiInstagramLine className="text-3xl hover:-translate-y-1 duration-200" /></a>
            <a target="_blank" href="https://github.com/arafamaster001"><FaGithub className="text-2xl hover:-translate-y-1 duration-200" /></a>
            <a target="_blank" href="#"><RiTwitterXLine className="text-2xl hover:-translate-y-1 duration-200" /></a>
            <a target="_blank" href="#"><FaDiscord className="text-3xl hover:-translate-y-1 duration-200" /></a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
