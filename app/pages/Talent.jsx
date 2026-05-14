"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef,useState,useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPlayer from "react-player";

import { IoPlay, IoPause, IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import { HiOutlineChevronRight } from "react-icons/hi";

import Image from "next/image";
 const talent = [
    {
      img: "/assets/talent/t1.avif",
      title: "Fractional designers",
      name: "Design",
      des: "The graphic, UI/UX, and content designers you need to differentiate your company",
    },
    {
      img: "/assets/talent/t5.avif",
      title: "Fractional ops props",
      name: "Oprations",
      des: "Project + Product Managers to keep your team running smoothly",
    },

    {
      img: "/assets/talent/t3.avif",
      title: "Fractional devs",
      name: "Engineering",
      des: "Front-End, Back-End, and Full-Stack devs that know your tech stack",
    },
    {
      img: "/assets/talent/t4.avif",
      title: "Fractional Marketers",
      name: "Marketing",
      des: "From GTM Strategy, to Growth Management, to Social Media Management",
    },
  ];

  const  clientInfo=[{name:"Anam",post:"co-founder & co-ceo",img:'/assets/clientImg/img.svg',video:"https://youtube.com/shorts/zxjfxrXfROc?si=WincBzNbmmDHQjfZ"},{name:"Jae",post:"founder & managing principal",img:'/assets/clientImg/img2.png',video:"https://player.vimeo.com/video/949215348"},{name:"Arianna",post:"Founder & ceo",img:'/assets/clientImg/img3.svg',video:"https://youtube.com/shorts/zxjfxrXfROc?si=WincBzNbmmDHQjfZ"}]
export default function Talent({textColor,bgColor,title,heading,subheading,role}) {
  const targetRef = useRef(null);
  // 1. Vertical Scroll track
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

 
  const [visibleCards, setVisibleCards] = useState([]);
const handleResize = () => {
      // Agar screen mobile (768px se choti) hai, toh ek card kam dikhao
      if (window.innerWidth < 768) {
        setVisibleCards(talent?.slice(0, -1)); // Last card hata dega
      } else {
        setVisibleCards(talent); // Desktop par saare cards
      }
    };
  useEffect(() => {
    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [talent]);

  // player
const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    setProgress((currentTime / duration) * 100);
  };

  return (
    <>
      <section className="w-full  text-white pt-10 md:pt-30 px-10 md:px-20 lg:px-32">
        <div className="w-full mx-auto flex flex-col justify-between  gap-10">
          {/* Left Content */}
          <div className="flex-1">
            {/* Orange Badge */}
            <AnimatedContent
              distance={20}
              direction="horizontal"
              reverse
              duration={0.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.2}
            >
              <div className="mb-8">
                <span className={`px-4 py-1.5 rounded-full text-[8px] md:text-[12px] font-jb-mono font-bold uppercase`}
                 style={{backgroundColor:bgColor,color:textColor}}
                >
                {title}
                </span>
              </div>
            </AnimatedContent>

            {/* Heading */}
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              blurStrength={1}
              baseRotation={0}
            >
              {" "}
              <h2 className="text-[50px] md:text-[65px] lg:text-[72px] font-mulish leading-[1] tracking-tight mb-12">
               {heading}
              </h2>
              {/* Subtext */}
              <div className="flex justify-between gap-5 items-center">
                <div>
                  <p className="max-w-xl text-white text-xs md:text-sm lg:text-base font-mulish leading-relaxed">
                   {subheading}
                  </p>
                </div>
              
                <div>
                  <div className="flex  gap-4 ">
                    <button className="w-8 md:w-13 h-8 md:h-13 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 hover:bg-white/10 transition-colors">
                      <FiChevronLeft className="md:w-8 md:h-8" />
                    </button>
                    <button className="w-8 md:w-13 h-8 md:h-13 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                      <FiChevronRight className="md:w-8 md:h-8" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section
        ref={targetRef}
        className="relative h-[200vh] -mt-10 sm:-mt-70 md:-mt-50 xl:-mt-15 2xl:-mt-50"
      >
      {role !=="client" ? (<div className="sticky top-0 flex md:h-screen h-[50vh] items-center overflow-scroll scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <motion.div
            style={{ x }}
            className="flex gap-5 md:gap-7 lg:gap-10 p-5 md:p-20 lg:p-32"
          >
            {visibleCards?.map((item, i) => (
              <div
                key={i}
                className={`relative flex-shrink-0 w-[250px] h-[300px] md:w-[350px] md:h-[400px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl bg-[#141414] p-5 lg:p-8 font-sans shadow-2xl`}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    width={500}
                    height={500}
                    src={item.img}
                    className="h-full w-full object-cover opacity-20 grayscale"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:4px_4px] opacity-40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
                </div>

                {/* --- Content Layer --- */}
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <div className="mb-auto">
                    <span className={`rounded-full  px-3 py-1 text-[8px] md:text-[10px] font-jb-mono uppercase tracking-wider `}
                    style={{backgroundColor:bgColor,color:textColor}}
                    >
                       {item.title}
                    </span>
                  </div>

                  <h2 className=" mb-1 md:mb-3 lg:mb-4 text-2xl md:text-3xl lg:text-4xl font-mulish text-white">
                    {item.name}
                  </h2>

                  <p className="mb-2 md:mb-5 lg:mb-8 text-xs md:text-base lg:text-lg font-mulish md:leading-relaxed text-white">
                    {item.des}
                  </p>

                  <button className={`group flex w-fit items-center gap-1 md:gap-2 text-[10px] md:text-base lg:text-lg rounded-full px-3 md:px-4 lg:px-6 py-1  md:py-2 lg:py-3 font-mulish font-bold text-black transition-transform hover:scale-105 active:scale-95`} style={{backgroundColor:textColor}}>
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="h-2 md:h-5 w-3 md:w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            </motion.div></div>)
            
: (<div className="sticky top-0 flex md:h-screen h-[50vh] items-center overflow-scroll scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <motion.div
            style={{ x }}
            className="flex gap-5 md:gap-7 lg:gap-10 p-5 mt-5 md:p-40 lg:p-62 lg:pl-100"
          >
            {clientInfo?.map((curE,i)=>( 
          <div key={i} className="relative   flex-shrink-0 w-[300px] md:w-[380px] h-[600px] aspect-[9/16] bg-[#111] rounded-[2.5rem] overflow-hidden group">
        {/* --- YouTube Player Layer --- */}
         {/* --- Video Layer --- */}
     <div className="absolute inset-0 w-full h-full ">
    <iframe
      src={curE.video}
      className="w-full h-full -ml-[100%] object-cover" // Aspect ratio fix karne ke liye width badhayi hai
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
        {/* Overlay to catch clicks and manage gradients */}
        <div
          className="absolute inset-0 z-10 cursor-pointer bg-gradient-to-b from-black/50 via-transparent to-black/70"
          
        ></div>

        {/* --- Top Info Card --- */}
        <div className="absolute top-4 group-hover:hidden transition duration-500  left-4 right-4 bg-[#021d2e]/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 z-20">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-mulish font-medium text-white mb-0.5">
                {curE.name}
              </h2>
              <p className="text-[9px] sm:text-[10px] font-jb-mono font-bold text-[#009ded] uppercase tracking-[0.2em] mb-4">
                {curE.post}
              </p>
            </div>
            <div className="p-1.5 border border-white/10 rounded-lg text-white/50">
              <HiOutlineChevronRight size={18} />
            </div>
          </div>
          <div className="flex items-center ">
           <Image width={500} height={500} src={curE.img} alt="log" className="w-30 h-15 "/>
          </div>
        </div>

        {/* --- Bottom Controls --- */}
          <div className="absolute bottom-6 left-0 right-0 px-6 z-20">
                 <div className="flex items-center gap-4">
                   
                   {/* React Icons: Play/Pause */}
                   <button onClick={togglePlay} className="text-white text-xl sm:text-2xl hover:scale-110 transition-transform">
                     {isPlaying ? <IoPause /> : <IoPlay />}
                   </button>
       
                   {/* Progress Bar */}
                   <div className="flex-grow h-1 bg-white/20 rounded-full relative overflow-hidden">
                     <div 
                       className="absolute top-0 left-0 h-full bg-white transition-all duration-100" 
                       style={{ width: `${progress}%` }}
                     ></div>
                   </div>
       
                   <span className="text-[10px] sm:text-xs font-medium text-white tabular-nums">
                     00:{Math.floor(videoRef.current?.currentTime || 0).toString().padStart(2, '0')}
                   </span>
       
                   {/* React Icons: Volume/Mute */}
                   <button onClick={toggleMute} className="text-white text-lg sm:text-xl hover:opacity-80 transition-opacity">
                     {isMuted ? <IoVolumeMute /> : <IoVolumeMedium />}
                   </button>
                 </div>
               </div>
      </div>))     }
          </motion.div>
        </div>)}
      </section>
    </>
  );
}
