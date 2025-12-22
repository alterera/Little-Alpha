"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const galleryImages = [
  { id: 1, src: "/assets/gallery/g1.webp", alt: "Creative moments", rotation: 12 },
  { id: 2, src: "/assets/gallery/g2.webp", alt: "Fun activities", rotation: -10 },
  { id: 3, src: "/assets/gallery/g3.webp", alt: "Joyful learning", rotation: 15 },
  { id: 4, src: "/assets/gallery/g4.webp", alt: "Play time", rotation: -6 },
];

const MobileGalleryCarousel = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
  });

  return (
    <div className="md:hidden mt-12 sm:mt-16 md:mt-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {galleryImages.map((image) => (
            <Link
              key={`mobile-${image.id}`}
              href="/gallery"
              className="relative group shrink-0 w-[75%]"
            >
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  fill
                  alt={image.alt}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#f54900]/0 group-hover:bg-[#f54900]/80 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="w-full bg-[#EBF6EB] relative overflow-hidden">
      {/* Decorative Icons - Responsive positioning */}
      <Image
        src={"/assets/icons/sun.svg"}
        height={100}
        width={100}
        alt="sun"
        className="absolute right-4 sm:right-8 md:right-12 lg:right-20 top-20 sm:top-32 md:top-40 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-30"
      />
      <Image
        src={"/assets/icons/curve.svg"}
        height={100}
        width={80}
        alt="curve"
        className="absolute right-0 sm:right-4 md:right-8 lg:right-20 top-10 sm:top-16 md:top-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-30"
      />
      <Image
        src={"/assets/icons/heart.svg"}
        height={100}
        width={80}
        alt="heart"
        className="absolute left-4 sm:left-8 md:left-12 lg:left-20 top-32 sm:top-48 md:top-60 lg:top-50 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-50"
      />

      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Little Alpha <span className="text-[#f54900]">Gallery</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-2xl">
          A glimpse into joyful learning moments, playful activities, and happy smiles at Little Alpha.
          </p>
          <Link href={"/gallery"}>
            <Button
              effect="shine"
              className="bg-[#f54900] text-white font-semibold hover:bg-[#ff7b08] cursor-pointer hover:shadow-sm mt-2 sm:mt-4"
            >
              View all glimpses
            </Button>
          </Link>
        </div>

        {/* Desktop / Tablet Collage */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 xl:gap-10 overflow-visible mt-12 sm:mt-16 md:mt-20">
          {galleryImages.map((image, index) => (
            <Link
              key={`desktop-${image.id}`}
              href="/gallery"
              className={`relative group ${
                index !== 0 ? "-ml-4 lg:-ml-6 xl:-ml-8" : ""
              }`}
              style={{ transform: `rotate(${image.rotation}deg)` }}
            >
              <div className="relative w-[220px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-[260px] md:h-[300px] lg:h-[360px] xl:h-[420px] rounded-xl lg:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:z-50 border-2 border-white">
                <Image
                  src={image.src}
                  fill
                  alt={image.alt}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#f54900]/0 group-hover:bg-[#f54900]/80 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel */}
        <MobileGalleryCarousel />
      </div>
    </div>
  );
};

export default Gallery;
