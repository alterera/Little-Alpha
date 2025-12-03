"use client";

import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { usePrevNextButtons } from "@/components/Hero/ArrowButtons";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quickLinks = [
  { href: "#inspiration", label: "Our Inspiration" },
  { href: "#founder", label: "Message from Founder" },
  { href: "#leadership", label: "Our Leadership" },
];

// Photo gallery images - using blog-1.png for all images temporarily
const galleryImages = [
  { id: 1, src: "/assets/blog-1.png", alt: "Gallery image 1" },
  { id: 2, src: "/assets/blog-1.png", alt: "Gallery image 2" },
  { id: 3, src: "/assets/blog-1.png", alt: "Gallery image 3" },
  { id: 4, src: "/assets/blog-1.png", alt: "Gallery image 4" },
  { id: 5, src: "/assets/blog-1.png", alt: "Gallery image 5" },
  { id: 6, src: "/assets/blog-1.png", alt: "Gallery image 6" },
];

const PhotoGallery = () => {
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

  const totalImages = galleryImages.length;
  const currentImage = selectedIndex + 1;

  return (
    <div className="relative w-full mt-6">
      <div className="embla__viewport overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="embla__slide flex-[0_0_42%] sm:flex-[0_0_40%] md:flex-[0_0_38%] min-w-0"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={image.id === 1}
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

const page = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        {/* Content */}
        <section className="mt-10 lg:mt-14 flex flex-col lg:flex-row gap-10 relative">
          <article className="flex-1 space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
            <section id="inspiration" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F715F]">
              Young Rangers in Action! - Trip to Vantara Rescue Rangers at JWC
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                reiciendis nobis eum reprehenderit saepe inventore mollitia quo
                odit odio quos quis nulla dolores nihil officia! Deserunt
                voluptatem nisi qui labore! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eaque praesentium magnam ratione
                eligendi ex nesciunt consectetur doloribus omnis molestiae iste
                veniam dolorem.
              </p>
              <p>
                Aperiam praesentium cum id perferendis maiores mollitia quisquam
                quis a amet, odit laborum quae molestiae nisi corrupti quam
                reiciendis ratione voluptatem recusandae sequi, excepturi dolor
                quibusdam. Fuga ipsum enim suscipit ipsa aspernatur voluptate
                qui impedit voluptatem deleniti autem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F715F] mb-6">
                Photo Gallery
              </h2>
              <PhotoGallery />
            </section>
            
          </article>

          <aside className="lg:w-80">
            <div className="bg-[#F2FBF5] border border-[#BCE7CF] rounded-3xl p-6 shadow-md">
              <h4 className="text-xl font-semibold text-[#0F715F] mb-6">
                Quick Navigation
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm sm:text-base font-semibold text-[#0F715F] border border-transparent hover:border-[#0F715F]/30 hover:bg-[#0F715F]/5 transition-colors"
                    >
                      {link.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default page;
