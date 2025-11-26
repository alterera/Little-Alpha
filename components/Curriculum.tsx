"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./Hero/DotButtons";
import Autoplay from "embla-carousel-autoplay";
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

  return (
    <div className="w-full bg-[#0F715F] relative overflow-hidden">
      <Image
        src={"/assets/black-cat-1.png"}
        height={300}
        width={350}
        alt="black-panthar"
        className="absolute right-0 top-10 hidden md:block z-10"
      />
      <div className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 relative z-20">
        <h1 className="pb-5 sm:pb-6 md:pb-8 text-2xl sm:text-3xl md:text-4xl text-white font-bold">
          Interactive Curriculum <br className="hidden sm:block" /> for kids
        </h1>

        {/* Carousel Container - Only visible on small screens */}
        <div className="relative lg:hidden -mx-4 sm:-mx-6 lg:mx-0">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {/* Box 1 - Inquiry Based Learning */}
              <div className="shrink-0 w-full px-4 sm:px-6">
                <div className="bg-[#DFC8FD] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between">
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-black">
                      Inquiry Based{" "}
                      <span className="font-marckscript text-pink-500">
                        Learning
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-black">
                      Lorem ipsum dolor sit amet consectur adipiscing elit sed do
                      iusmod.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 2 - Collaborative Spaces */}
              <div className="shrink-0 w-full px-4 sm:px-6">
                <div className="bg-[#704FE7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between">
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">
                      Collaborative{" "}
                      <span className="font-marckscript text-yellow-400">
                        Spaces
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-white">
                      Lorem ipsum dolor sit amet consectur adipiscing elit sed do
                      iusmod.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 3 - Experential Learning */}
              <div className="shrink-0 w-full px-4 sm:px-6">
                <div className="bg-[#FFD463] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between">
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-black">
                      Experential{" "}
                      <span className="font-marckscript text-green-600">
                        Learning
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-black">
                      Lorem ipsum dolor sit amet consectur adipiscing elit sed do
                      iusmod.
                    </p>
                  </div>
                </div>
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
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 xl:gap-6">
          {/* Box 1 - Inquiry Based Learning */}
          <div className="bg-[#DFC8FD] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between">
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
                Inquiry Based{" "}
                <span className="font-marckscript text-[#F75691]">Learning</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-black">
                Lorem ipsum dolor sit amet consectur.
              </p>
            </div>
          </div>

          {/* Box 2 - Collaborative Spaces */}
          <div className="bg-[#704FE7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between">
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
                Collaborative{" "}
                <span className="font-marckscript text-[#F4D548]">Spaces</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white">
                Lorem ipsum dolor sit amet consectur.
              </p>
            </div>
          </div>

          {/* Box 3 - Experential Learning */}
          <div className="bg-[#FFD463] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative aspect-square flex flex-col justify-between">
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
                <span className="font-marckscript text-[#0F715F]">Learning</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-black">
                Lorem ipsum dolor sit amet consectur.
              </p>
            </div>
          </div>
        </div>

        <p className="pt-5 sm:pt-6 md:pt-8 text-white text-sm sm:text-base md:text-lg">
          Our curriculum is divided into three parts to provide holistic
          education that integrates academic excellence, values, and innovation.
        </p>
      </div>
    </div>
  );
};

export default Curriculum;
