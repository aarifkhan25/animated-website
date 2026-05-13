"use client"
import {useState} from "react"
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent  from "@/components/FadeContent.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
const sections = [
    { id: 'quick-view', title: 'Quick view', content: "Jeremy applied for the role of Graphic Designer with a proposed compensation of $75/hr." },
    { id: 'questions', title: 'Questions to Ask', content: "Standard interview questions and specific technical queries." },
    { id: 'talent-profile', title: 'Talent Profile', content: "Detailed resume, portfolio links, and skill assessments." },
    { id: 'job-description', title: 'Job Description', content: "Full breakdown of roles and responsibilities for this position." }
  ];
export default function ChooseUs({textColor,bgColor,title,heading,subheading}) {

    const [openSection, setOpenSection] = useState('quick-view');
  return (
  <section className="w-full md:grid gap-5 md:gap-10 text-white py-10 md:pb-10 px-5 md:px-10  lg:px-38">
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
              delay={0.2}
            >
              <div className="text-center">
                <span className="px-4 py-1.5 rounded-full    text-[10px] md:text-xs font-semibold font-jb-mono  uppercase"
                style={{color:textColor,backgroundColor:bgColor}}
                >
{title}
                </span>
              </div>
            </AnimatedContent>

            {/* Heading */}
            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={1}   baseRotation={0}>
              {" "}
              <div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-center font-semibold font-mulish leading-[1] tracking-wide mb-12">
             {heading}

              </h2>
              </div>
              {/* Subtext */}
            
                <div>

              <p className=" text-white text-xs md:text-sm lg:text-base text-center font-mulish font-semibold leading-relaxed">
   {subheading}

              </p>
                </div>
               
             
            </ScrollReveal>
          </div>
          <FadeContent blur={true} duration={1000} delay={0.5} easing="ease-out" initialOpacity={0}>
   {textColor !=="#ff4d00"?   <div className="flex flex-col md:flex-row bg-[#1A1141] w-full md:h-[350px] lg:h-[470px] w-full rounded-xl overflow-hidden shadow-2xl">
        {/* Left Side (Text Content) */}
        <div className="w-full md:w-1/2 p-5 md:p-8 lg:p-12  flex flex-col justify-center">
          <p className="text-xs md:text-sm lg:text-base font-semibold  uppercase font-jb-mono tracking-wider mb-6"
          style={{color:textColor}}
          >
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
      </div>:<div className=" w-full h-[500px] flex flex-col lg:flex-row  items-cente gap-3 md:gap-5 lg:gap-10 rounded-xl bg-[#141414]  ">
              
              {/* Left Side: The "Mockup" Card */}
              <div className="w-full h-full lg:w-1/2 relative aspect-[4/3] bg-[#1a1a1a] rounded-xl lg:rounded-l-xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex">
                  {/* Image Part */}
                  <div className="w-1/4 h-full">
                    <img 
                    src='/assets/story2.avif'
                      alt="Profile" 
                      className="h-full w-full object-cover "
                    />
                  </div>
                  
                  {/* Interface Part */}
                  <div className="w-full h-full bg-white p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-xl font-bold text-black">Interview Co-Pilot</h3>
                      <div className="p-1 border border-black/10 rounded-md">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                    </div>
      
                    <div className="space-y-4">
                      {sections.map((sec) => (
                        <div key={sec.id} className="border-b border-black/5 pb-2">
                          <button 
                            onClick={() => setOpenSection(sec.id)}
                            className="w-full cursor-pointer flex justify-between items-center py-2 text-left text-sm font-bold text-black"
                          >
                            {sec.title}
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${openSection === sec.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </button>
                          
                          <AnimatePresence>
                            {openSection === sec.id && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <p className="text-[10px] text-gray-500 mb-3 leading-relaxed">
                                  {sec.content}
                                </p>
                                {sec.id === 'quick-view' && (
                                  <div className="flex gap-2">
                                    <button className="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold border border-black/5">Send Message</button>
                                    <button className="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold border border-black/5">View Contract</button>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
      
              {/* Right Side: Text Content */}
              <div className="w-full lg:mt-[10%] lg:w-1/2 p-3 md:p-5">
                <span className="bg-[#2a1205] text-[#ff4d00] text-[10px] font-jb-mono font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-[#ff4d00]/20 inline-block mb-8">
                  Every Step of Hiring
                </span>
                
                <h1 className="text-3xl lg:text-5xl font-medium font-mulish font-semibold text-white mb-8 font-centra leading-tight">
                  Hire with Clarity
                </h1>
                
                <p className="text-sm lg:text-base text-white font-mulish font-semibold leading-relaxed max-w-lg">
                  We've tuned our web-based platform to support you at <br/> every step of the way, from scheduling interviews,<br/> to sitting shotgun  for your calls, to making the next steps feel obvious.
                </p>
              </div>
      
            </div>}
</FadeContent>

          
          
      
      </section>
  )
}
