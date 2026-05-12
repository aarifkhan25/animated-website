"use client"
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent  from "@/components/FadeContent.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
export default function ChooseUs() {
  return (
  <section className="w-full grid gap-5 md:gap-10 text-white md:pb-10 px-10 md:px-20 lg:px-38">
        <div className="w-full mx-auto grid  justify-center items-center  ">
         
            {/* Orange Badge */}
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse
              duration={0.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.5}
            >
              <div className="text-center">
                <span className="px-4 py-1.5 rounded-full   bg-[#1c143d] text-[#ae95ff] text-[6px] md:text-xs font-semibold font-jb-mono  uppercase">
                Why companies choose Pangea
                </span>
              </div>
            </AnimatedContent>

            {/* Heading */}
            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={1}   baseRotation={0}>
              {" "}
              <div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-center font-semibold font-mulish leading-[1] tracking-wide mb-12">
             A trusted partner <br/> for growth

              </h2>
              </div>
              {/* Subtext */}
            
                <div>

              <p className="max-w-xl text-white text-xs md:text-sm lg:text-base text-center font-mulish font-semibold leading-relaxed">
              Pangea's proudly helped thousands of clients connect with talent

              </p>
                </div>
               
             
            </ScrollReveal>
          </div>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <div className="flex flex-col md:flex-row bg-[#1A1141] w-full md:h-[350px] lg:h-[470px] w-full rounded-xl overflow-hidden shadow-2xl">
        {/* Left Side (Text Content) */}
        <div className="w-full md:w-1/2 p-5 md:p-8 lg:p-12  flex flex-col justify-center">
          <p className="text-xs md:text-sm lg:text-base font-semibold text-[#8B7FF1] uppercase font-jb-mono tracking-wider mb-6">
            Customer Story
          </p>
          <h2 className="text-3xl  lg:text-5xl font-medium text-white leading-snug font-mulish  mb-10">
            Pangea helped LuxCitizenship launch a new product
          </h2>
          <button className="flex w-fit items-center gap-2 rounded-full bg-[#8B7FF1] px-5 py-3 text-sm md:text-base lg:text-lg font-bold text-black transition-all hover:bg-[#A59DF5] ">
            See How
           <FaArrowRightLong/>
           
          </button>
        </div>

        {/* Right Side (Image Content) */}
        <div className="w-full md:w-1/2 p-3 md:p-5 lg:p-10  bg-[#D6D0F8] rounded-xl flex items-center justify-center">

            <Image
              src="/assets/story.png"
              alt="Man walking past large billboard advertisement"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl"
            />
          
        </div>
      </div>
</FadeContent>

          
          
      
      </section>
  )
}
