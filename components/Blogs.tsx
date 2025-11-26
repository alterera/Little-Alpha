"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { usePrevNextButtons } from "./Hero/ArrowButtons";
import { motion } from "framer-motion";

type BlogPost = {
  id: number;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "8 Ways to keep your child keep learning with fun",
    description:
      "Lorem ipsum caterer spaces and cafè. Ipsum productive and make friends...",
    image: "/assets/blog-1.png",
    backgroundColor: "#E15E89",
  },
  {
    id: 2,
    title: "Building Confidence Through Creative Learning",
    description:
      "Discover how creative activities can boost your child's confidence and learning abilities...",
    image: "/assets/blog-1.png",
    backgroundColor: "#4A90E2",
  },
  {
    id: 3,
    title: "The Importance of Early Childhood Education",
    description:
      "Learn why early education plays a crucial role in your child's development and future success...",
    image: "/assets/blog-1.png",
    backgroundColor: "#50C878",
  },
  {
    id: 4,
    title: "Fun Math Activities for Young Learners",
    description:
      "Explore engaging ways to make mathematics enjoyable and accessible for children...",
    image: "/assets/blog-1.png",
    backgroundColor: "#FF6B6B",
  },
  {
    id: 5,
    title: "Developing Social Skills Through Play",
    description:
      "Understand how play-based learning helps children develop essential social skills...",
    image: "/assets/blog-1.png",
    backgroundColor: "#9B59B6",
  },
];

const Blogs = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="w-full bg-[#0F715F] relative">
      <Image
        src={"/assets/bg/blog-bg.png"}
        fill
        className="object-cover"
        alt="blog background"
      />
      <div className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between text-white mb-12 gap-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Stay updated with our weekly blog
          </h2>

          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-base max-w-md">
              Lorem ipsum caterer spaces and cafè. Ipsim productive; make
              friends, and beome part of the tribe.
            </p>

            <div className="flex items-center gap-2">
              <Image
                src={"/assets/shapes/bubble-shape.svg"}
                width={20}
                height={20}
                alt="bubble"
              />
              <button className="py-2 sm:py-5 hover:underline">
                View all
              </button>
            </div>
          </div>
        </motion.div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {BLOG_POSTS.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="shrink-0 w-full sm:w-[85%] md:w-[70%] lg:w-[45%] xl:w-[40%] px-4 sm:px-6 lg:px-8"
                >
                  <div
                    className="flex flex-col sm:flex-row h-auto sm:h-[300px] lg:h-[350px]"
                    style={{ backgroundColor: post.backgroundColor }}
                  >
                    <div className="relative w-full sm:w-1/2 h-48 sm:h-full">
                      <Image
                        src={post.image}
                        fill
                        className="object-cover"
                        alt={post.title}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 p-4 sm:p-6 text-white flex flex-col gap-3 sm:gap-4 justify-between">
                      <div className="flex flex-col gap-2 sm:gap-3">
                        <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                          {post.title}
                        </h4>
                        <p className="text-sm sm:text-base line-clamp-3">
                          {post.description}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Image
                          src={"/assets/shapes/triangle.svg"}
                          height={20}
                          width={20}
                          alt="triangle"
                        />
                        <button className="text-sm sm:text-base hover:underline">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-4 mt-6 px-4 sm:px-6 lg:px-8">
            <button
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors ${
                prevBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Previous blog post"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors ${
                nextBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Next blog post"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
