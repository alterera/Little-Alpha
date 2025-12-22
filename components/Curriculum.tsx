"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./Hero/DotButtons";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import "@/styles/embla.css";

type CurriculumItem = {
  id: number;
  title: string;
  titleHighlight: string;
  description: string;
  link: string;
  image: string;
  bgColor: string;
  textBgColor: string;
  textColor: string;
  highlightColor: string;
};

const curriculumData: CurriculumItem[] = [
  {
    id: 1,
    title: "Inquiry Based",
    titleHighlight: "Learning",
    description: "Encouraging children to ask questions, explore ideas, and learn through curiosity.",
    link: "/curriculum/inquiry-based-learning",
    image: "/assets/curriculum/inquiry.jpg",
    bgColor: "#DFC8FD",
    textBgColor: "#DFC8FD",
    textColor: "text-black",
    highlightColor: "text-[#F75691]",
  },
  {
    id: 2,
    title: "Collaborative",
    titleHighlight: "Spaces",
    description: "Promoting teamwork, communication, and social skills through shared learning spaces.",
    link: "/curriculum/collaborative-spaces",
    image: "/assets/curriculum/collab.jpg",
    bgColor: "#704FE7",
    textBgColor: "#704FE7",
    textColor: "text-white",
    highlightColor: "text-[#F4D548]",
  },
  {
    id: 3,
    title: "Experiential",
    titleHighlight: "Learning",
    description: "Hands-on activities that help children learn by doing, experiencing, and reflecting.",
    link: "/curriculum/experiential-learning",
    image: "/assets/curriculum/experiential.webp",
    bgColor: "#FFD463",
    textBgColor: "#FFD463",
    textColor: "text-black",
    highlightColor: "text-[#0F715F]",
  },  
];

// Helper function to convert hex to rgba with opacity
const hexToRgba = (hex: string, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const Curriculum = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: false,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full bg-[#0F715F] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={"/assets/black-cat-1.png"}
          height={300}
          width={350}
          alt="black-panthar"
          className="absolute right-0 top-10 hidden md:block z-10"
        />
        <Image
          src={"/assets/icons/airplane.svg"}
          height={300}
          width={150}
          alt="airplane"
          className="absolute -left-10 top-35 hidden md:block z-10"
        />
      </motion.div>
      <div className="max-w-8xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-5 sm:pb-6 md:pb-8 text-2xl sm:text-3xl md:text-4xl text-white font-bold"
        >
          Interactive <span className="font-marckscript text-[#F4D548]">Curriculum</span> <br/> for kids
        </motion.h1>

        {/* Carousel Container - Only visible on small screens */}
        <div className="relative lg:hidden -mx-4 sm:-mx-6 lg:mx-0">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {curriculumData.map((item) => (
                <div key={item.id} className="shrink-0 w-full px-4 sm:px-6">
                  <Link href={item.link}>
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="relative aspect-9/10 sm:aspect-2/3 md:aspect-3/4 rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer"
                      style={{ backgroundColor: item.bgColor }}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0 overflow-hidden">
                        <Image
                          src={item.image}
                          fill
                          alt={item.title}
                          className="object-cover transition-transform duration-700 delay-150 ease-out group-hover:scale-110"
                        />
                      </div>
                      
                      {/* Text Content at Bottom */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 p-8 md:p-8 lg:p-10 z-10"
                        style={{ backgroundColor: hexToRgba(item.textBgColor, 0.85) }}
                      >
                        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 ${item.textColor}`}>
                          {item.title} <span className={`font-marckscript text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${item.highlightColor}`}>
                            {item.titleHighlight}
                          </span>
                        </h2>
                        <p className={`text-sm md:text-base lg:text-lg ${item.textColor} opacity-90`}>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation - Only visible on small screens */}
          <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`embla__dot flex items-center justify-center rounded-full ${
                  index === selectedIndex ? "embla__dot--selected" : ""
                }`}
                aria-label={`Go to curriculum slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid Layout - Only visible on large screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:grid lg:grid-cols-3 gap-5 xl:gap-6"
        >
          {curriculumData.map((item) => (
            <Link key={item.id} href={item.link}>
              <motion.div
                variants={cardVariants}
                className="relative aspect-3/4 lg:aspect-2/3 xl:aspect-3/4 rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer"
                style={{ backgroundColor: item.bgColor }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    className="object-cover transition-transform duration-700 delay-150 ease-out group-hover:scale-110"
                  />
                </div>
                
                {/* Text Content at Bottom */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 z-10"
                  style={{ backgroundColor: hexToRgba(item.textBgColor, 0.85) }}
                >
                  <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 ${item.textColor}`}>
                    {item.title} <span className={`font-marckscript text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl ${item.highlightColor}`}>
                      {item.titleHighlight}
                    </span>
                  </h2>
                  <p className={`text-xs sm:text-sm md:text-base lg:text-sm xl:text-base ${item.textColor} opacity-90`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-5 sm:pt-6 md:pt-8 text-white text-sm sm:text-base md:text-lg"
        >
          Our curriculum is divided into three parts to provide holistic
          education that integrates academic excellence, values, and innovation.
        </motion.p>
      </div>
    </div>
  );
};

export default Curriculum;
