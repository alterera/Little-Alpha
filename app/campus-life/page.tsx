import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const campusSlides = [
  { id: 1, src: "/assets/blog-1.png", alt: "Curriculum overview" },
  { id: 2, src: "/assets/blog-1.png", alt: "Learning activities" },
  { id: 3, src: "/assets/blog-1.png", alt: "Student engagement" },
];

const gridData = [
  {
    id: 1,
    src: "/assets/blog-1.png",
    alt: "data",
    title: "KYC",
    href: "/kyc"
  },
  {
    id: 2,
    src: "/assets/blog-1.png",
    alt: "data",
    title: "KYC",
    href: "/kyc"
  },
  {
    id: 3,
    src: "/assets/blog-1.png",
    alt: "data",
    title: "KYC",
    href: "/kyc"
  },
];

const page = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        <HeroBanner
          subtitle="Student Life"
          title="Life at Little Alpha"
          slides={campusSlides}
        />

        <div className="grid grid-cols-3 grid-rows-1 gap-4 pt-10">
          {gridData.map((item) => (
            <div className="relative min-h-60 rounded-xl overflow-hidden" key={item.id}>
              <Image
                src={item.src}
                fill
                alt={item.alt}
                className="object-cover min-h-30"
              />
              <div className="absolute bottom-0 p-4 bg-blue-50 w-full flex justify-between items-center">
                <h2>{item.title}</h2>
                <Link href={item.href}>
                  <Button>View</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
