"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import FadeContent from "../components/FadeContent.jsx";
import { FiAlignJustify } from "react-icons/fi";
import { JetBrains_Mono } from 'next/font/google'
import { Mulish } from 'next/font/google'

const jbMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jb-mono' 
});
const mulish = Mulish({ 

  subsets: ['latin'],
  variable: '--font-mulish'
})
export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <html lang="en">
      <body className={`${jbMono.variable} ${mulish.variable} `}>
        {/* header */}
        <div className="h-screen w-full  font-sans antialiased text-white">
          <nav
            className={`fixed top-0 left-1/2 -translate-x-1/2 w-full  mx-auto z-50 px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between transition-all duration-300 
      ${isScrolled ? "bg-black/70 backdrop-blur-[4px]" : "bg-transparent"}`}
          >
            {/* Navigation Links */}
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div
                className={`hidden sm:text-xl sm:flex items-center gap-5 lg:gap-10 transition-colors ${isScrolled ? "text-white" : "text-white/90"}`}
              >
                <a
                  href="#"
                  className="hover:opacity-80 cursor-pointer hover:underline"
                >
                  LOGO
                </a>
                <a
                  href="#about"
                  className="hover:opacity-80 cursor-pointer text-base  hover:underline"
                >
                  Hire
                </a>
                <a
                  href="#courses"
                  className="hover:opacity-80 cursor-pointer text-base hover:underline"
                >
                  For Talent
                </a>
                <a
                  href="#about"
                  className="hover:opacity-80 cursor-pointer text-base hover:underline"
                >
                  About
                </a>
                <a
                  href="#courses"
                  className="hover:opacity-80 cursor-pointer text-base hover:underline"
                >
                  Resources
                </a>
              </div>
              <div className="flex text-xl sm:hidden items-center"><FiAlignJustify className="w-6 h-6" /></div>
            </FadeContent >
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div>
                <div className="flex justify-center gap-3 lg:gap-8">
                  <a
                    href="#courses"
                    className="bg-[#1a1a1a] hover:bg-[#242323] cursor-pointer text-white font-bold  px-4 py-1 pb-3 rounded-full text-sm lg:text-base transition duration-150"
                  >
                    Sign In
                  </a>
                  <a
                    href="#courses"
                    className="hidden sm:flex bg-[#ffffff] hover:bg-white cursor-pointer text-black font-semibold  px-4 py-1 pb-3 rounded-full text-base transition duration-150"
                  >
                    Start Hiring Talents
                  </a>
                </div>
              </div>
            </FadeContent>
          </nav>

          {children}
        </div>
      </body>
    </html>
  );
}
