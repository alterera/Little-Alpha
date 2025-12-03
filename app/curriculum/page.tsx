"use client";

import React from "react";
import Link from "next/link";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const curriculumSlides = [
  { id: 1, src: "/assets/blog-1.png", alt: "Curriculum overview" },
  { id: 2, src: "/assets/blog-1.png", alt: "Learning activities" },
  { id: 3, src: "/assets/blog-1.png", alt: "Student engagement" },
];

type CurriculumPathwayItem = {
  id: number;
  title: string;
  description: string;
  link: string;
};

const curriculumPathways: CurriculumPathwayItem[] = [
  {
    id: 1,
    title: "Inquiry Based Learning",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, esse.",
    link: "/curriculum/inquiry-based-learning",
  },
  {
    id: 2,
    title: "Collaborative Spaces",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, esse.",
    link: "/curriculum/collaborative-spaces",
  },
  {
    id: 3,
    title: "Experiential Learning",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, esse.",
    link: "/curriculum/experiential-learning",
  },
];

const CurriculumPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        <HeroBanner
          subtitle="Our Curriculum"
          title="Learning journey"
          slides={curriculumSlides}
          backgroundColor="#D3465A"
        />

        <div className="flex flex-col md:flex-row gap-5 pt-10">
          <div className="flex-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              reiciendis dolor sed numquam magnam necessitatibus possimus nam
              libero itaque sit quisquam quos aliquid quod blanditiis pariatur
              labore iste voluptatum enim nemo modi eligendi laudantium,
              delectus quibusdam? Voluptatum rerum officia error eligendi
              eveniet, quaerat blanditiis alias tempora, placeat odio vitae
              obcaecati?
            </p>
            <br />
            <p>
              Animi reiciendis dolor sed numquam magnam necessitatibus possimus
              nam libero itaque sit quisquam quos aliquid quod blanditiis
              pariatur labore iste voluptatum enim nemo modi eligendi
              laudantium, delectus quibusdam? Voluptatum rerum officia error
              eligendi eveniet, quaerat blanditiis alias tempora, placeat odio
              vitae obcaecati?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              reiciendis dolor sed numquam magnam necessitatibus possimus nam
              libero itaque sit quisquam.
            </p>
          </div>
          <div className="flex-1 relative">
            <Image
              src={"/assets/blog-1.png"}
              fill
              alt="side pic"
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="py-10 bg-[#EEF7FF]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div>
            <h2 className="text-3xl font-bold text-[#0F715F]">
              Little Alpha Curriculum Pathways
            </h2>
            <p className="pt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae sed deserunt quis, deleniti, excepturi adipisci amet
              exercitationem, eum ut sint vero perspiciatis? Cum fugiat quas,
              dolore quis explicabo officiis facilis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Saepe magnam voluptatem labore cum!
              Itaque non eligendi suscipit repudiandae commodi rerum.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 pt-5">
            {curriculumPathways.map((pathway) => (
              <Link
                key={pathway.id}
                href={pathway.link}
                className="flex flex-col gap-4 justify-between bg-white p-10 items-center rounded-3xl relative overflow-hidden"
              >
                <Image
                  src="/assets/bg/bg-logo.png"
                  height={400}
                  width={400}
                  alt="bg logo"
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none z-0"
                />
                <h2 className="text-2xl font-bold relative z-10">{pathway.title}</h2>
                <p className="text-center relative z-10">{pathway.description}</p>
                <Button className="relative z-10">Learn More</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;
