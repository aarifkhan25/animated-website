"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent from "@/components/FadeContent";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
const talent = [
  {
    title: "  Fractional designers",
    title1: "step 1",
    name: "Design",
    des: "The graphic, UI/UX, and content designers you need to differentiate your company",
  },
  {
    title: " Fractional ops props",
    title1: "step 2",
    name: "Oprations",
    des: "Project + Product Managers to keep your team running smoothly",
  },

  {
    title: " Fractional devs",
    title1: "step 3",
    name: "Engineering",
    des: "Front-End, Back-End, and Full-Stack devs that know your tech stack",
  },
  {
    title: " Fractional Marketers",
    title1: "step 4",
    name: "Marketing",
    des: "From GTM Strategy, to Growth Management, to Social Media Management",
  },
];
const sections = [
  {
    title: "Top fractional design roles",
    roles: [
      "UX Designer",
      "Brand Designer",
      "Product Designer",
      "UI Designer",
      "Graphic Designer",
      "Graphic Designer",
      "Web Designer",
    ],
  },
  {
    title: "Top fractional marketing roles",
    roles: [
      "Marketing Writer",
      "Marketer",
      "Email Marketer",
      "Growth Marketer",
      "Product Marketer",
    ],
  },
  {
    title: "Top fractional operations roles",
    roles: ["Product Analyst", "Product Manager"],
  },
  {
    title: "Top fractional engineering roles",
    roles: ["Web Developer"],
  },
];
export default function FractionalTalent({
  textColor,
  bgColor,
  title,
  heading,
  subheading,
  role,
}) {
  const targetRef = useRef(null);
  // 1. Vertical Scroll track
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const data = [
    { name: "160+", title: "Countries", delay: 1 },
    { name: "4.6/5", title: "Rating on G2", delay: 2 },
    { name: "1st", title: "Product Hunt Approved", delay: 3,img:'/assets/product1.svg' },
  ];

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [talent]);
  const comptition = [
    { img: "/assets/comperision/img1.png", name: "Upwork" },
    { img: "/assets/comperision/img2.png", name: "Toptal" },
    { img: "/assets/comperision/img3.jpg", name: "Marketerhire" },
    { img: "/assets/comperision/img4.jpg", name: "Braintrust" },
    { img: "/assets/comperision/img5.png", name: "Fivver" },
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
              delay={0.2}
            >
              <div className="mb-8">
                <span
                  className="px-4 py-1.5 rounded-full    text-[8px] md:text-[12px] font-jb-mono font-semibold uppercase"
                  style={{ backgroundColor: bgColor, color: textColor }}
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
              <h2 className="text-3xl md:text-[65px] lg:text-[72px] font-mulish leading-[1] tracking-tight mb-12">
                {heading}
              </h2>
              {/* Subtext */}
              <div className="grid md:flex justify-between gap-5 items-center">
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
        className={`relative h-[200vh] ${role === "work" ? "hidden" : "block"}  -mt-10 sm:-mt-70 md:-mt-70 xl:-mt-15 2xl:-mt-50`}
      >
        <div className="sticky top-0 flex md:h-screen h-[50vh] items-center overflow-hidden scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <motion.div
            style={{ x }}
            className="flex gap-5 md:gap-7 lg:gap-10 p-5 md:p-20 lg:p-32"
          >
            {bgColor !== "#1c143d"
              ? visibleCards?.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex-shrink-0 w-[240px] h-[180px] md:w-[350px] md:h-[200px] lg:w-[450px] lg:h-[250px] overflow-hidden rounded-xl bg-[#141414] p-3 lg:p-5 font-sans shadow-2xl"
                  >
                    <div className=" grid h-full gap-5 lg:gap-10  justify-between">
                      <div className="">
                        <span
                          className=" text-[8px] md:text-xs font-jb-mono font-semibold uppercase tracking-wider "
                          style={{ color: textColor }}
                        >
                          {textColor === "#009ded" ? item.title : item.title1}
                        </span>
                      </div>

                      <h2 className="  text-xl md:text-2xl lg:text-3xl font-mulish font-bold text-white">
                        {item.name}
                      </h2>

                      <p className="flex text-xs md:text-sm lg:text-base  font-mulish font-medium text-white">
                        {item.des}
                      </p>
                    </div>
                  </div>
                ))
              : comptition?.map((curE, i) => {
                  return (
                    <div
                      key={i}
                      className="relative flex-shrink-0 w-[240px] h-[180px] md:w-[330px] md:h-[200px] lg:w-[430px] lg:h-[250px] overflow-hidden rounded-xl bg-[#141414] p-3 lg:p-5 font-sans shadow-2xl"
                    >
                      <div className=" grid h-full gap-5 lg:gap-10  justify-between">
                        <div>
                          <img
                            alt={curE.name}
                            src={curE.img}
                            className="w-11 h-11 md:w-13 md::h-13 lg:w-15 lg:h-15 rounded-xl"
                          />
                        </div>

                        <h2 className="  text-lg md:text-2xl lg:text-3xl font-mulish  text-white">
                          Pangeya vs {curE.name}
                        </h2>

                        <button
                          className={`group flex w-fit items-center gap-1 md:gap-2 text-[10px] md:text-sm lg:text-base rounded-full px-1 md:px-2 lg:px-4  py-  md:py-1 lg:py-2 font-mulish font-bold text-black transition-transform hover:scale-105 active:scale-95`}
                          style={{ backgroundColor: textColor }}
                        >
                          Compare
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
                  );
                })}
          </motion.div>
        </div>
      </section>

      <div className="px-10 lg:px-32">
        {" "}
        <div
          className={`${role === "work" ? "block" : "hidden"} grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 w-full mx-auto`}
        >
          {sections.map((section, index) => (
              <FadeContent
                    blur={true}
                    duration={1000}
                    delay={0.5}
                    easing="ease-out"
                    initialOpacity={0}
                     key={index}
                  >
            <div
             
              className="bg-[#141414] rounded-xl p-8 lg:p-12 border border-white/5 flex flex-col h-full"
            >
              {/* Title from image_46fc63.png */}
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-mulish font-semibold leading-[1.2] mb-3 md:mb-5 lg:mb-10 max-w-[90%]">
                {section.title}
              </h2>

              {/* Roles List */}
              <ul className="space-y-1 md:space-y-2 lg:space-y-4">
                {section.roles.map((role, idx) => (
                  <li
                    key={idx}
                    className="text-[#f5f5f5] cursor-pointer  font-mulish text-xs  md:text-base lg:text-lg font-medium opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div></FadeContent>
          ))}
        </div>
      </div>

      <>
        {textColor === "#ff0044" ? (
          <div className="md:px-10 lg:px-32 pb-10 -mt-40  flex flex-grow gap-1 md:gap-3 lg:gap-5 justify-center items-center">
            {data?.map((curE, i) => {
              return (
                <span key={i}>
                  <FadeContent
                    blur={true}
                    duration={1000}
                    delay={curE.delay}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <div className="md:w-[200px] lg:w-[320px] grid gap-3 h-auto rounded-xl bg-[#141414] p-3  shadow-2xl">
                    {curE.delay !==3 ?  <h2 className="font-jb-mono text-xl md:text-2xl lg:text-5xl">
                        {curE.name}
                      </h2>: <Image
                                        src={curE.img}
                                        width={500}
                                        height={500}
                                        alt="1st Product"
                                        loading="lazy"
                                        className={` w-[110px] md:w-[200px]  `}
                                      />}
                   <p className={` text-sm md:text-base lg:text-lg font-mulish `}>
                        {curE.title}
                      </p>
                    </div>
                  </FadeContent>
                </span>
              );
            })}
          </div>
        ) : null}
      </>
    </>
  );
}
