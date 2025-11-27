"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

type FacilityData = {
  id: number;
  bgColor: string;
  decorationImage: string;
  decorationImageClass: string;
  facilityImage: string;
  title: string;
  borderRadius: string;
};

const facilitiesData: FacilityData[] = [
  {
    id: 1,
    bgColor: "bg-[#FF9759]",
    decorationImage: "/assets/facilities/cloud.png",
    decorationImageClass: "absolute left-0 top-10",
    facilityImage: "/assets/facilities/f-1.png",
    title: "Montessori Learning Tools",
    borderRadius: "rounded-tr-[10%] rounded-bl-[10%]",
  },
  {
    id: 2,
    bgColor: "bg-[#1A8049]",
    decorationImage: "/assets/facilities/curve.png",
    decorationImageClass: "absolute left-0 top-0",
    facilityImage: "/assets/facilities/f-1.png",
    title: "Play Based Learning",
    borderRadius: "rounded-tr-[10%] rounded-bl-[10%]",
  },
  {
    id: 3,
    bgColor: "bg-[#4792C7]",
    decorationImage: "/assets/facilities/leaf.png",
    decorationImageClass: "absolute left-0 bottom-0",
    facilityImage: "/assets/facilities/f-1.png",
    title: "Holistic Child Development",
    borderRadius: "rounded-tl-[10%] rounded-br-[10%]",
  },
];

const Facilities = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="w-full relative">
      <Image
        src={"/assets/bg/learner.png"}
        fill
        alt="bg"
        className="object-cover"
      />
      <div className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-start sm:items-center gap-4 text-[#0F715F] mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold z-10">
            Our Facilities
          </h1>
          <Button
            variant="outline"
            effect="ringHover"
            className="rounded-none z-10 rounded-tl-2xl rounded-br-2xl bg-[] border-[#0F715F] hover:ring-[#0F715F]/90 hover:bg-[#0F715F] hover:text-white font-semibold cursor-pointer"
          >
            View All Facilities
          </Button>
        </motion.div>

        {/* Flex column on small screens, flex row on large screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 w-full"
        >
          {facilitiesData.map((facility) => (
            <motion.div
              key={facility.id}
              variants={cardVariants}
              className={`${facility.bgColor} ${facility.borderRadius} text-white relative py-8 sm:py-10 aspect-square min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[350px] overflow-hidden flex-1`}
            >
              <Image
                src={facility.decorationImage}
                height={150}
                width={280}
                alt={`decoration-${facility.id}`}
                className={`${facility.decorationImageClass} w-60 h-50 sm:w-40 sm:h-24 md:w-64 md:h-42 lg:w-64 lg:h-56`}
              />
              <Image
                src={facility.facilityImage}
                height={200}
                width={280}
                alt={facility.title}
                className="absolute right-0 bottom-0 w-65 h-90 sm:w-40 sm:h-32 md:w-64 md:h-80 lg:w-68 lg:h-92"
              />
              <h2 className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-6 text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                {facility.title.split(" ").map((word, index, array) => (
                  <React.Fragment key={index}>
                    {word}
                    {index < array.length - 2 && <br />}
                  </React.Fragment>
                ))}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Facilities;
