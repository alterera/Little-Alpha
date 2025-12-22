"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { urlFor } from "@/lib/sanity.image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryImage = {
  _id: string;
  image: any;
  imageAlt?: string;
  category?: { title?: string; slug?: { current: string } };
};

type Props = {
  images: GalleryImage[];
};

const GalleryMasonry: React.FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const orderedImages = useMemo(() => images ?? [], [images]);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + orderedImages.length) % orderedImages.length
    );
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % orderedImages.length
    );
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {orderedImages.map((img, idx) => (
          <div
            key={img._id}
            className="break-inside-avoid overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-white cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => openLightbox(idx)}
          >
            <div className="relative w-full">
              <Image
                src={urlFor(img.image).width(1200).url()}
                alt={img.imageAlt || "Gallery image"}
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && orderedImages[activeIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={closeLightbox}
          >
            <div
              className="absolute inset-0"
              aria-label="Close lightbox"
            />
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col gap-3">
              <button
                className="absolute top-2 right-2 p-2 rounded-full bg-white/90 text-gray-800 shadow"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full bg-black rounded-2xl overflow-hidden min-h-[60vh] flex items-center justify-center">
                <Image
                  src={urlFor(orderedImages[activeIndex].image).width(2000).url()}
                  alt={
                    orderedImages[activeIndex].imageAlt || "Gallery image"
                  }
                  width={2000}
                  height={1400}
                  className="w-full h-auto object-contain"
                  unoptimized
                  sizes="100vw"
                />
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  className="m-4 p-3 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  className="m-4 p-3 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryMasonry;

