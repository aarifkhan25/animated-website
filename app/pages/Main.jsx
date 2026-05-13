
"use client"
import { GoArrowRight } from "react-icons/go";
import SplitText from "@/components/SplitText.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent from "@/components/FadeContent.jsx";



export default function Main() {
  return (
     <section className=" flex flex-col gap-8 sm:gap-10 lg:gap-0 items-center justify-center min-h-screen  text-white px-4 md:px-6 py-5 overflow-hidden">
            
            {/* Top Badge */}
            <AnimatedContent
              distance={20}
              direction="vertical"
           
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.5}
            >
              <div className="mt-10 md:mt-25 mb-10 md:mb-0">
                <span className="px-4 py-1.5 rounded-full  bg-sky-500/10 text-[#009ded]  font-jb-mono   text-xs  md:text-base uppercase">
                  Build faster with fractional hiring
                </span>
              </div>
            </AnimatedContent>
    
            {/* Main Heading */}
            <div className=" text-center  ">
            
              <SplitText
                text="Hire High"
                className="text-5xl md:text-8xl lg:text-9xl/32  tracking-wide leading-[1.1] "
                delay={50}
                duration={1.5}
                ease="power3.out"
                splitType="lines"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <SplitText
                text="quality humans"
                className="text-[47px] md:text-8xl lg:text-9xl/32  tracking-wide leading-[1.1] mb-9 font-mulish"
                delay={50}
                duration={3}
                ease="power3.out"
                splitType="lines"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
    
            {/* Subtext */}
            <div className=" text-center max-w-3xl ">
              <FadeContent
                blur={true}
                duration={1500}
                easing="ease-in"
                initialOpacity={0}
              >
                <p className="text-white text-base md:text-2xl font-mulish">
                  The best marketing, design, ops, and engineering operators in the
                  world, ready to hire in 24 hours. AI-supported, human selected,
                  and flexible to work with.
                </p>
              </FadeContent>
            </div>
    
            {/* CTA Button */}
            <div className=" mt-7">
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                {" "}
                <button className="group flex items-center gap-2 bg-[#0886cf] hover:bg-[#0082cc] transition-colors text-black py-1 md:py-2  pb-2 md:pb-4 px-2 md:px-4  rounded-full font-mulish font-bold text-base md:text-xl">
                  <div className="flex justify-center   items-center gap-1">
                    Start Hiring
                    <GoArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </FadeContent>
            </div>
          </section>
  )
}
