"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./Hero/DotButtons";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import "@/styles/embla.css";

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
              {/* Box 1 - Inquiry Based Learning */}
              <div className="shrink-0 w-full px-4 sm:px-6">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-[#DFC8FD] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between"
                >
              <Image
                    src="/assets/curriculum/circle.png"
                    height={250}
                    width={250}
                alt="shape"
                    className="absolute right-0 top-0 w-48 h-48 sm:w-64 sm:h-64 md:w-[200px] md:h-[200px]"
              />
                  <div className="relative flex items-center">
                <Image
                      src="/assets/curriculum/icon-bg.png"
                  height={80}
                  width={80}
                  alt="icon bg"
                      className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24"
                    />
                    <Image
                      src="/assets/curriculum/yellow-paint-tube.png"
                      height={50}
                      width={50}
                      alt="icon"
                      className="absolute left-5 w-12 h-12 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
                    />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-black">
                      Inquiry Based <br/>
                      <span className="font-marckscript text-pink-500 text-4xl">
                        Learning
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-black">
                      Lorem ipsum dolor sit amet consectur adipiscing elit sed do
                      iusmod.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Box 2 - Collaborative Spaces */}
              <div className="shrink-0 w-full px-4 sm:px-6">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-[#704FE7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between"
                >
                  <Image
                    src="/assets/curriculum/thunder.png"
                    height={250}
                    width={250}
                    alt="shape"
                    className="absolute right-0 top-0 w-48 h-48 sm:w-64 sm:h-64 md:w-[200px] md:h-[200px]"
                  />
                  <div className="relative flex items-center">
                    <Image
                      src="/assets/curriculum/icon-bg.png"
                      height={80}
                      width={80}
                      alt="icon bg"
                      className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24"
                    />
                <Image
                      src="/assets/curriculum/yellow-paint-tube.png"
                  height={50}
                  width={50}
                  alt="icon"
                      className="absolute left-5 w-12 h-12 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
                    />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">
                      Collaborative<br/>
                      <span className="font-marckscript text-4xl text-yellow-400">
                        Spaces
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-white">
                      Lorem ipsum dolor sit amet consectur adipiscing elit sed do
                      iusmod.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Box 3 - Experential Learning */}
              <div className="shrink-0 w-full px-4 sm:px-6">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-[#FFD463] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between"
                >
                  <Image
                    src="/assets/curriculum/star.png"
                    height={250}
                    width={250}
                    alt="shape"
                    className="absolute right-0 top-0 w-48 h-48 sm:w-64 sm:h-64 md:w-[200px] md:h-[200px]"
                  />
                  <div className="relative flex items-center">
                    <Image
                      src="/assets/curriculum/icon-bg.png"
                      height={80}
                      width={80}
                      alt="icon bg"
                      className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24"
                    />
                    <Image
                      src="/assets/curriculum/yellow-paint-tube.png"
                      height={50}
                      width={50}
                      alt="icon"
                      className="absolute left-5 w-12 h-12 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
                    />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-black">
                      Experential <br/>
                      <span className="font-marckscript text-4xl text-green-600">
                        Learning
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-black">
                      Lorem ipsum dolor sit amet consectur adipiscing elit sed do
                      iusmod.
                    </p>
                  </div>
                </motion.div>
              </div>
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
          {/* Box 1 - Inquiry Based Learning */}
          <motion.div
            variants={cardVariants}
            className="bg-[#DFC8FD] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between"
          >
            <Image
              src="/assets/curriculum/circle.png"
              height={250}
              width={250}
              alt="shape"
              className="absolute right-0 top-0 w-48 h-48 sm:w-64 sm:h-64 md:w-[180px] md:h-[180px]"
            />
            <div className="relative flex items-center">
              <Image
                src="/assets/curriculum/icon-bg.png"
                height={80}
                width={80}
                alt="icon bg"
                className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24"
              />
              <Image
                src="/assets/curriculum/yellow-paint-tube.png"
                height={50}
                width={50}
                alt="icon"
                className="absolute left-5 w-12 h-12 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3 text-black">
                Inquiry Based <br/>
                <span className="font-marckscript text-[#F75691] text-4xl">Learning</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-black">
                Lorem ipsum dolor sit amet consectur.
              </p>
            </div>
          </motion.div>

          {/* Box 2 - Collaborative Spaces */}
          <motion.div
            variants={cardVariants}
            className="bg-[#704FE7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between"
          >
            <Image
              src="/assets/curriculum/thunder.png"
              height={250}
              width={250}
              alt="shape"
              className="absolute right-0 top-0 w-48 h-48 sm:w-64 sm:h-64 md:w-[180px] md:h-[180px]"
            />
            <div className="relative flex items-center">
              <Image
                src="/assets/curriculum/icon-bg.png"
                height={80}
                width={80}
                alt="icon bg"
                className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24"
              />
              <Image
                src="/assets/curriculum/yellow-paint-tube.png"
                height={50}
                width={50}
                alt="icon"
                className="absolute left-5 w-12 h-12 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3 text-white">
                Collaborative<br/>
                <span className="font-marckscript text-[#F4D548] text-4xl">Spaces</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white">
                Lorem ipsum dolor sit amet consectur.
              </p>
            </div>
          </motion.div>

          {/* Box 3 - Experential Learning */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFD463] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between"
          >
            <Image
              src="/assets/curriculum/star.png"
              height={250}
              width={250}
              alt="shape"
              className="absolute right-0 top-0 w-48 h-48 sm:w-64 sm:h-64 md:w-[180px] md:h-[180px]"
            />
            <div className="relative flex items-center">
              <Image
                src="/assets/curriculum/icon-bg.png"
                height={80}
                width={80}
                alt="icon bg"
                className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24"
              />
              <Image
                src="/assets/curriculum/yellow-paint-tube.png"
                height={50}
                width={50}
                alt="icon"
                className="absolute left-5 w-12 h-12 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3 text-black">
                Experential <br/>
                <span className="font-marckscript text-[#0F715F] text-4xl">Learning</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-black">
                Lorem ipsum dolor sit amet consectur.
              </p>
            </div>
          </motion.div>
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
