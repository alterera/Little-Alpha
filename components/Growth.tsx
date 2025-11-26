"use client";

import Image from "next/image";
import React from "react";
import { NumberTicker } from "./ui/number-ticker";
import { motion } from "framer-motion";

const CounterData = [
  {
    count: 100,
    color: "E4282E",
    title: "Years of Experience"
  },
  {
    count: 53,
    color: "0C7C55",
    title: "Awards Won"
  },
  {
    count: 500,
    color: "D63E75",
    title: "Students Enrolled"
  },
  {
    count: 34,
    color: "6C3891",
    title: "Expert Faculty"
  },
]

const Growth = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full bg-[#FEFFEF] relative pb-14 sm:pb-16 md:pb-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={"/assets/icons/crown.png"}
          height={100}
          width={100}
          alt="crown"
          className="absolute left-0 bottom-10 hidden sm:block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
      </motion.div>
      <div className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#0F715F] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold mb-4 sm:mb-6"
        >
          Growth Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          The story, which begins 5 years back with one preschool, resulted in a
          well-established leading preschool brand and writing a new chapter in
          its success story every day. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Dicta eligendi deleniti quo esse culpa recusandae
          commodi sapiente tempore error asperiores?
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 pb-6 sm:pb-8 md:pb-10"
        >
          {CounterData.map((data) => (
            <motion.div
              variants={cardVariants}
              className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4"
              key={data.count}
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{ color: `#${data.color}` }}
              >
                <NumberTicker value={data.count} style={{ color: `#${data.color}` }} />+
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-700">
                {data.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Growth;
