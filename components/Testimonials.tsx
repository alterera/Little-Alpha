"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useDotButton } from "./Hero/DotButtons";
import { usePrevNextButtons } from "./Hero/ArrowButtons";
import "@/styles/embla.css";

type Testimonial = {
  id: number;
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "My daughter has been attending Little Alpha for 6 months now, and I've seen incredible growth in her confidence and learning abilities. The teachers are amazing and truly care about each child's development.",
    author: {
      name: "Priya Sharma",
      role: "Parent of Aanya (Age 5)",
      avatar: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Priya Sharma",
      },
    },
  },
  {
    id: 2,
    quote:
      "The creative learning approach at Little Alpha has made such a difference for my son. He used to be shy, but now he's excited to go to class every day. The curriculum is well-structured and engaging.",
    author: {
      name: "Rajesh Kumar",
      role: "Parent of Arjun (Age 6)",
      avatar: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Rajesh Kumar",
      },
    },
  },
  {
    id: 3,
    quote:
      "As a working parent, I appreciate how Little Alpha keeps me informed about my child's progress. The weekly updates and parent-teacher interactions have been wonderful. Highly recommend!",
    author: {
      name: "Meera Patel",
      role: "Parent of Riya (Age 4)",
      avatar: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Meera Patel",
      },
    },
  },
  {
    id: 4,
    quote:
      "The facilities at Little Alpha are top-notch, and the teachers are so patient and understanding. My child has learned so much in just a few months. The balance of fun and education is perfect.",
    author: {
      name: "Anjali Singh",
      role: "Parent of Vihaan (Age 5)",
      avatar: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Anjali Singh",
      },
    },
  },
  {
    id: 5,
    quote:
      "Little Alpha has exceeded all our expectations. The personalized attention each child receives is remarkable. My daughter's social skills and academic performance have improved significantly.",
    author: {
      name: "Vikram Mehta",
      role: "Parent of Anaya (Age 6)",
      avatar: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Vikram Mehta",
      },
    },
  },
  {
    id: 6,
    quote:
      "The best decision we made for our child's early education. The curriculum is innovative, and the teachers create such a nurturing environment. Our child loves going to Little Alpha every day!",
    author: {
      name: "Sneha Reddy",
      role: "Parent of Advik (Age 4)",
      avatar: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Sneha Reddy",
      },
    },
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto md:px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Previous Button - Left Centered */}
          <button
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-lg ${
              prevBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
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

          {/* Next Button - Right Centered */}
          <button
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-lg ${
              nextBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
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

          {/* Carousel Container */}
          <div className="overflow-hidden px-12 sm:px-16" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="shrink-0 w-full flex flex-col items-center text-center px-4"
                >
                  <p className="mb-8 sm:mb-16 max-w-4xl px-4 sm:px-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Avatar className="size-12 sm:size-14 md:size-16">
                      <AvatarImage
                        src={testimonial.author.avatar.src}
                        alt={testimonial.author.avatar.alt}
                      />
                      <AvatarFallback>
                        {testimonial.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm sm:text-base md:text-lg font-medium">
                        {testimonial.author.name}
                      </p>
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                        {testimonial.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center items-center gap-2 mt-8 sm:mt-12">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`embla__dot flex items-center justify-center rounded-full ${
                  index === selectedIndex ? "embla__dot--selected" : ""
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
