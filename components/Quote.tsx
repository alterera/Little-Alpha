"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const Quote = () => {
  return (
    <div className="w-full bg-[#E2EEFF] relative overflow-hidden">
      <Image
        src={"/assets/shapes/line-shape.png"}
        height={100}
        width={350}
        alt="shape"
        className="absolute top-0 left-0 w-80 h-100 sm:w-48 sm:h-28 md:w-100 md:h-full opacity-60"
      />
      <Image
        src={"/assets/shapes/line-shape-2.png"}
        height={100}
        width={350}
        alt="shape"
        className="absolute bottom-0 sm:bottom-0 right-0 w-48 h-40 sm:w-48 sm:h-28 md:w-64 md:h-full opacity-60"
      />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gap-8 lg:gap-12 xl:gap-16">
        {/* Image - Centered above text on small screens, left side on large screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="z-10 order-1 lg:order-1"
        >
          <Image
            src={"/assets/person/nipun-gupta.webp"}
            height={400}
            width={400}
            alt="nipun gupta"
            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
          />
        </motion.div>

        {/* Quote Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center relative order-1 lg:order-2 flex-1"
        >
          <Image
            src={"/assets/shapes/quote.svg"}
            height={80}
            width={80}
            alt="quote"
            className="absolute -top-12 -left-3 sm:-top-5 sm:-left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:-top-10 md:-left-25 md:h-20 opacity-50"
          />
          <Image
            src={"/assets/shapes/quote.svg"}
            height={80}
            width={80}
            alt="quote"
            className="absolute bottom-0 right-0 rotate-180 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-50"
          />
          <div className="flex flex-col gap-4 sm:gap-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0F715F] leading-tight sm:leading-snug md:leading-normal">
              Learning is what happens <br className="hidden sm:block" /> when
              you are busy doing <br className="hidden sm:block" />
              something else.
            </h2>
            <p className="text-[#4F4F4F] text-base sm:text-lg md:text-xl">
              Mr. Nipun Gupta, Director
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-5">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-[#F4D548] rounded-full"></div>
              {/* <p className="uppercase text-sm sm:text-base font-medium">About Us</p> */}
              <Link href={"/about"}>
                <Button
                  variant="link"
                  effect="underline"
                  className="cursor-pointer"
                >
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quote;
