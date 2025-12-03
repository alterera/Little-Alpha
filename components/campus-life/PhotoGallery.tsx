"use client";

import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { usePrevNextButtons } from "@/components/Hero/ArrowButtons";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  url: string;
  alt?: string;
  assetId?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const totalImages = images.length;
  const currentImage = selectedIndex + 1;

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full mt-6">
      <div className="embla__viewport overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {images.map((image, index) => (
            <div
              key={image.assetId || index}
              className="embla__slide flex-[0_0_42%] sm:flex-[0_0_40%] md:flex-[0_0_38%] min-w-0"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons and Counter */}
      <div className="flex flex-col items-center gap-4 mt-6">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#0F715F] text-[#0F715F] hover:bg-[#0F715F] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#0F715F] text-[#0F715F] hover:bg-[#0F715F] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        {/* Image Counter */}
        <div className="text-sm sm:text-base font-semibold text-gray-700">
          <span className="text-[#0F715F]">{currentImage}</span>
          <span className="text-gray-400"> / </span>
          <span className="text-gray-600">{totalImages}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;

