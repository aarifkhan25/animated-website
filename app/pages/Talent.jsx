"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
export default function Talent() {
  const targetRef = useRef(null);
  // 1. Vertical Scroll track
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const talent = [
    {
      img: "/assets/talent/t1.avif",
      title: "designers",
      name: "Design",
      des: "The graphic, UI/UX, and content designers you need to differentiate your company",
    },
    {
      img: "/assets/talent/t5.avif",
      title: "ops props",
      name: "Oprations",
      des: "Project + Product Managers to keep your team running smoothly",
    },

    {
      img: "/assets/talent/t3.avif",
      title: "devs",
      name: "Engineering",
      des: "Front-End, Back-End, and Full-Stack devs that know your tech stack",
    },
    {
      img: "/assets/talent/t4.avif",
      title: "Marketers",
      name: "Marketing",
      des: "From GTM Strategy, to Growth Management, to Social Media Management",
    },
  ];
  return (
    <>
      <section className="w-full  text-white py-0 px-10 md:px-20 lg:px-32">
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
              delay={0.5}
            >
              <div className="mb-8">
                <span className="px-4 py-1.5 rounded-full bg-[#2a1205] border border-[#ff4d00]/20 text-[#ff4d00] text-[8px] md:text-[12px] font-jb-mono font-bold uppercase">
                  Pick from high-quality fractional talent
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
                Access the <br /> talent you need
              </h2>
              {/* Subtext */}
              <div className="flex justify-between gap-5 items-center">
                <div>
                  <p className="max-w-xl text-white text-xs md:text-sm lg:text-base font-mulish leading-relaxed">
                    Interview curated candidates for every role you're hiring
                    for, hand-picked to select the world's best fractional
                    talent
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
        className="relative h-[200vh] -mt-10 sm:-mt-70 md:-mt-70 xl:-mt-15 2xl:-mt-50"
      >
        <div className="sticky top-0 flex md:h-screen h-[50vh] items-center overflow-scroll scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <motion.div
            style={{ x }}
            className="flex gap-5 md:gap-7 lg:gap-10 p-5 md:p-7 lg:p-10"
          >
            {talent?.map((item, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[250px] h-[300px] md:w-[350px] md:h-[400px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl bg-[#141414] p-5 lg:p-8 font-sans shadow-2xl"
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
                    <span className="rounded-full bg-[#2a1205] border border-[#ff4d00]/20 text-[#ff4d00] px-3 py-1 text-[8px] md:text-[10px] font-jb-mono uppercase tracking-wider ">
                      Fractional {item.title}
                    </span>
                  </div>

                  <h2 className=" mb-1 md:mb-3 lg:mb-4 text-2xl md:text-3xl lg:text-4xl font-mulish text-white">
                    {item.name}
                  </h2>

                  <p className="mb-2 md:mb-5 lg:mb-8 text-xs md:text-base lg:text-lg font-mulish md:leading-relaxed text-white">
                    {item.des}
                  </p>

                  <button className="group flex w-fit items-center gap-1 md:gap-2 text-[10px] md:text-base lg:text-lg rounded-full bg-[#f4510b] px-3 md:px-4 lg:px-6 py-1  md:py-2 lg:py-3 font-mulish font-bold text-black transition-transform hover:scale-105 active:scale-95">
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
