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
    description: "Children explore questions, investigate ideas, and develop critical thinking through guided inquiry.",
    link: "/curriculum/inquiry-based-learning",
  },
  {
    id: 2,
    title: "Collaborative Spaces",
    description: "Interactive group activities help children build communication, teamwork, and social understanding.",
    link: "/curriculum/collaborative-spaces",
  },
  {
    id: 3,
    title: "Experiential Learning",
    description: "Hands-on activities and real-world experiences allow children to learn by doing and discover meaning through action.",
    link: "/curriculum/experiential-learning",
  },
];

const CurriculumPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        <HeroBanner
          subtitle="Learning Journey"
          title="Our Curriculum"
          slides={curriculumSlides}
          backgroundColor="#D3465A"
        />

        <div className="flex flex-col md:flex-row gap-5 pt-10">
          <div className="flex-1">
            <p>
            At Little Alpha, we believe that early childhood is a time of wonder, exploration, and powerful developmental growth. Our curriculum is intentionally crafted to spark children's natural curiosity and guide them through meaningful learning experiences. Rooted in modern early-years pedagogy, we provide an environment where children feel safe, valued, and encouraged to take initiative in their learning journeys. Each day at Little Alpha is filled with opportunities to question, discover, create, collaborate, and reflect.
            </p>
            <br />
            <p>
            By blending inquiry, hands-on activities, and social learning, our curriculum builds essential foundational skills while nurturing creativity, confidence, empathy, and a genuine love for learning.
            </p>
            <br />
            <p>
            We aim to shape well-rounded young learners who are prepared not just for school—but for life.
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
            Our pathways highlight the core elements of our approach, offering children a balanced and enriching early-learning experience.
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
