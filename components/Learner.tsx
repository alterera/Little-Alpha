"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Learner = () => {
  return (
    <div className="w-full relative bg-white pt-14 sm:pt-16 md:pt-20">
      {/* Admission Button - 50% on Growth, 50% on Learner */}
      <div className="bg-[#0C7C55] rounded-full p-4 sm:p-5 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 flex items-center justify-center text-white absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-12 md:-top-14 shadow-lg uppercase text-xs sm:text-sm md:text-base font-semibold z-30">
        Admission
      </div>

      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#0C7C55] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-6 sm:mb-8 md:mb-10"
        >
          It takes a school to raise the world
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-between pt-6 sm:pt-8 md:pt-10 items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 lg:pr-6 w-full lg:w-auto"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center lg:text-left">At Little Alpha, Bikaner every child is the heart of our purpose and practice. We believe that true learning happens when a child feels valued, understood, and encouraged to grow at their own pace. That's why our approach focuses on holistic development. <br/> <br/> Nurturing not just academics, but emotional, social, physical, and creative growth. To prepare our learners for the future, we integrate 21st-century skills such as critical thinking, collaboration, communication, and creativity into everyday learning experiences. Our teaching philosophy is deeply rooted in inquiry-based learning, where curiosity leads the way. Instead of simply giving answers, we encourage learners to ask questions, investigate ideas, explore concepts, and construct their own understanding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 flex justify-center items-center w-full lg:w-auto"
          >
            {/* CIRCULAR GRAPHIC */}
            <svg
              viewBox="0 0 500 500"
              className="w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style>
                {`
                  @keyframes rotate-left {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(-360deg);
                    }
                  }
                  @keyframes rotate-right {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(360deg);
                    }
                  }
                  .ring-1-animation {
                    animation: rotate-left 50s linear infinite;
                    transform-origin: 250px 250px;
                  }
                  .ring-2-animation {
                    animation: rotate-right 45s linear infinite;
                    transform-origin: 250px 250px;
                  }
                  .ring-3-animation {
                    animation: rotate-left 40s linear infinite;
                    transform-origin: 250px 250px;
                  }
                  .ring-4-animation {
                    animation: rotate-right 35s linear infinite;
                    transform-origin: 250px 250px;
                  }
                `}
              </style>
              <circle cx="250" cy="250" r="220" fill="#F4BA3A" />
              <circle cx="250" cy="250" r="185" fill="#8884DF" />
              <circle cx="250" cy="250" r="150" fill="#0F715F" />
              <circle cx="250" cy="250" r="115" fill="#8884DF" />
              <circle cx="250" cy="250" r="80" fill="#F4BA3A" />

              <defs>
                <path
                  id="ring-1"
                  d="M250,250 m-195,0 a195,195 0 1,1 390,0 a195,195 0 1,1 -390,0"
                />
                <path
                  id="ring-2"
                  d="M250,250 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0"
                />
                <path
                  id="ring-3"
                  d="M250,250 m-125,0 a125,125 0 1,1 250,0 a125,125 0 1,1 -250,0"
                />
                <path
                  id="ring-4"
                  d="M250,250 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
                />
              </defs>

              <g className="ring-1-animation">
                <text fontSize="18" fill="white" fontFamily="sans-serif" fontWeight="bold">
                  <textPath href="#ring-1" startOffset="0%">
                    COLLABORATOR • COMMUNICATOR • CRITICAL THINKER • CREATIVE
                    THINKER • GLOBAL CITIZEN • DIGITAL CITIZEN • LEADER • LIFELONG
                    LEARNER •
                  </textPath>
                </text>
              </g>

              <g className="ring-2-animation">
                <text fontSize="18" fill="white" fontFamily="sans-serif" fontWeight="bold">
                  <textPath href="#ring-2" startOffset="0%">
                    DIFFERENTIATED INSTRUCTION • TECHNOLOGY INTEGRATION • LEARNING
                    THROUGH INQUIRY • CONCEPTUAL UNDERSTANDING
                  </textPath>
                </text>
              </g>

              <g className="ring-3-animation">
                <text fontSize="20" fill="white" fontFamily="sans-serif" fontWeight="bold">
                  <textPath href="#ring-3" startOffset="0%">
                    JOY OF LEARNING • WELL-BEING • JOY OF LEARNING • WELL-BEING
                  </textPath>
                </text>
              </g>

              <g className="ring-4-animation">
                <text fontSize="18" fill="white" fontFamily="sans-serif" fontWeight="bold">
                  <textPath href="#ring-4" startOffset="0%">
                    HOLISTIC DEVELOPMENT • CULTURE &amp; VALUES • GUIDING
                    STATEMENTS •
                  </textPath>
                </text>
              </g>
              <text
                x="250"
                y="250"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="28"
                fontWeight="700"
                fill="white"
                fontFamily="sans-serif"
              >
                LEARNER
              </text>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Learner;
