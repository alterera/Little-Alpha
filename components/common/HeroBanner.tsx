"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type HeroSlide = {
  id: number;
  src: string;
  alt: string;
};

type HeroBannerProps = {
  subtitle?: string;
  title: string;
  // description: string;
  slides: HeroSlide[];
  backgroundColor?: string;
  autoPlayInterval?: number;
};

const HeroBanner = ({
  subtitle,
  title,
  // description,
  slides,
  backgroundColor = "#0F715F",
  autoPlayInterval = 4500,
}: HeroBannerProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoPlay = setInterval(() => {
      emblaApi.scrollNext();
    }, autoPlayInterval);
    return () => clearInterval(autoPlay);
  }, [emblaApi, autoPlayInterval]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] rounded-2xl overflow-hidden text-white"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col justify-between gap-6 p-6 sm:p-10 relative overflow-hidden">
        <Image
          src="/assets/bg/bg-logo.png"
          alt="Background logo"
          width={400}
          height={400}
          className="absolute top-1/2 left-15 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0 rotate-90"
        />
        <div className="relative z-10 flex flex-col justify-between h-full">
          {subtitle && (
            <p className="hidden md:block uppercase text-sm sm:text-base tracking-[0.3em] text-white/70">
              {subtitle}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {(() => {
              const words = title.split(' ');
              const firstWord = words[0];
              const restOfTitle = words.slice(1).join(' ');
              return (
                <>
                  {firstWord}
                  {restOfTitle && <><br />{restOfTitle}</>}
                </>
              );
            })()}
          </h1>
        </div>
      </div>

      <div className="relative bg-white">
        <div
          className="overflow-hidden h-[220px] sm:h-[300px] lg:h-full"
          ref={emblaRef}
        >
          <div className="flex h-full">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] h-full"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 right-0 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-[#F75691]"
                  : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

