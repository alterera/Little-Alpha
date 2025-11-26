"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Campus = () => {
  return (
    <div className="w-full">
      {/* Large Screen: Grid Layout (Text Left, Image Right, then Image Left, Text Right) */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-0">
        {/* First Row: Text Left, Image Right */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#E1F8DC] p-8 xl:p-12 flex flex-col gap-6 xl:gap-10"
        >
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[#0F715F] font-bold leading-tight">
            Building a love for <br />
            Learning
          </h2>
          <p className="text-sm xl:text-base text-gray-700 leading-relaxed">
            Our spaces are thoughtfully designed keeping in mind the safety of
            young children as they move freely and explore the world. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            aut sequi eum similique modi at dolorum id! Repellat, dolor iure
            soluta illo nihil placeat a sunt minima ducimus quia earum Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Facilis amet
            praesentium at sunt corporis minus mollitia dignissimos quisquam
            perspiciatis minima.
          </p>

          <div className="flex items-end gap-2 mt-auto">
            <Image
              src={"/assets/shapes/half-circle.png"}
              height={70}
              width={70}
              alt="half circle"
              className="w-12 h-12 xl:w-16 xl:h-16"
            />
            <p className="text-sm xl:text-base font-medium text-[#0F715F] cursor-pointer hover:underline">
              Read More
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative min-h-[400px] xl:min-h-[500px]"
        >
          <Image
            src={"/assets/campus/welcome.png"}
            fill
            alt="campus 1"
            className="object-cover"
          />
        </motion.div>

        {/* Second Row: Image Left, Text Right */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="row-start-2 relative min-h-[400px] xl:min-h-[500px]"
        >
          <Image
            src={"/assets/campus/welcome.png"}
            fill
            alt="campus 2"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="row-start-2 bg-[#FF81B9]/15 p-8 xl:p-12 flex flex-col gap-6 xl:gap-10"
        >
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[#E15E89] font-bold leading-tight">
            A school for the <br />
            real world
          </h2>
          <p className="text-sm xl:text-base text-gray-700 leading-relaxed">
            Our spaces are thoughtfully designed keeping in mind the safety of
            young children as they move freely and explore the world. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            aut sequi eum similique modi at dolorum id! Repellat, dolor iure
            soluta illo nihil placeat a sunt minima ducimus quia earum Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Facilis amet
            praesentium at sunt corporis minus mollitia dignissimos quisquam
            perspiciatis minima.
          </p>

          <div className="flex items-end gap-2 mt-auto">
            <Image
              src={"/assets/shapes/double-triangle.png"}
              height={70}
              width={70}
              alt="double triangle"
              className="w-12 h-12 xl:w-16 xl:h-16"
            />
            <p className="text-sm xl:text-base font-medium text-[#E15E89] cursor-pointer hover:underline">
              Read More
            </p>
          </div>
        </motion.div>
      </div>

      {/* Small Screen: Sequential Layout (Text, Image, Text, Image) */}
      <div className="flex flex-col lg:hidden">
        {/* First Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#E1F8DC] p-6 sm:p-8 flex flex-col gap-4 sm:gap-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0F715F] font-bold leading-tight">
            Building a love for <br />
            Learning
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our spaces are thoughtfully designed keeping in mind the safety of
            young children as they move freely and explore the world. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            aut sequi eum similique modi at dolorum id! Repellat, dolor iure
            soluta illo nihil placeat a sunt minima ducimus quia earum Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Facilis amet
            praesentium at sunt corporis minus mollitia dignissimos quisquam
            perspiciatis minima.
          </p>

          <div className="flex items-end gap-2 mt-2">
            <Image
              src={"/assets/shapes/half-circle.png"}
              height={70}
              width={70}
              alt="half circle"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <p className="text-sm sm:text-base font-medium text-[#0F715F] cursor-pointer hover:underline">
              Read More
            </p>
          </div>
        </motion.div>

        {/* First Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-64 sm:h-80 md:h-96"
        >
          <Image
            src={"/assets/campus/welcome.png"}
            fill
            alt="campus 1"
            className="object-cover"
          />
        </motion.div>

        {/* Second Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FF81B9]/15 p-6 sm:p-8 flex flex-col gap-4 sm:gap-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E15E89] font-bold leading-tight">
            A school for the <br />
            real world
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our spaces are thoughtfully designed keeping in mind the safety of
            young children as they move freely and explore the world. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            aut sequi eum similique modi at dolorum id! Repellat, dolor iure
            soluta illo nihil placeat a sunt minima ducimus quia earum Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Facilis amet
            praesentium at sunt corporis minus mollitia dignissimos quisquam
            perspiciatis minima.
          </p>

          <div className="flex items-end gap-2 mt-2">
            <Image
              src={"/assets/shapes/double-triangle.png"}
              height={70}
              width={70}
              alt="double triangle"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <p className="text-sm sm:text-base font-medium text-[#E15E89] cursor-pointer hover:underline">
              Read More
            </p>
          </div>
        </motion.div>

        {/* Second Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-64 sm:h-80 md:h-96"
        >
          <Image
            src={"/assets/campus/welcome.png"}
            fill
            alt="campus 2"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Campus;
