import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Curriculum at Little Alpha | Best Play School Bikaner | Early Childhood Education",
  description:
    "Discover Little Alpha's innovative curriculum - Best play school in Bikaner, Rajasthan. Our inquiry-based, experiential learning approach prepares children for success. Explore our curriculum pathways at the best kindergarten school Bikaner.",
  keywords: [
    "Best play school in Bikaner",
    "Top kindergarten school in Bikaner",
    "Best kindergarten school Bikaner",
    "Curriculum Bikaner",
    "Kindergarten curriculum Bikaner",
    "Play school curriculum Bikaner",
    "Early childhood curriculum Bikaner",
    "Best Play School Bikaner",
    "Inquiry based learning Bikaner",
    "Experiential learning Bikaner",
    "Preschool curriculum Bikaner",
    "Little Alpha curriculum",
  ],
  openGraph: {
    title: "Curriculum at Little Alpha | Best Play School Bikaner",
    description:
      "Discover Little Alpha's innovative curriculum - Best play school in Bikaner, Rajasthan. Our inquiry-based, experiential learning approach prepares children for success.",
    url: "https://littlealpha.in/curriculum",
    siteName: "Little Alpha",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://littlealpha.in/og.png",
        width: 1200,
        height: 630,
        alt: "Little Alpha Curriculum - Best Play School Bikaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum at Little Alpha | Best Play School Bikaner",
    description:
      "Discover Little Alpha's innovative curriculum - Best play school in Bikaner, Rajasthan.",
    images: ["https://littlealpha.in/og.png"],
  },
  alternates: {
    canonical: "https://littlealpha.in/curriculum",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const curriculumSlides = [
  { id: 1, src: "/assets/hero/h1.webp", alt: "Curriculum overview" },
  { id: 2, src: "/assets/hero-slide/curriculum/c3.webp", alt: "Learning activities" },
  { id: 3, src: "/assets/hero-slide/curriculum/c2.webp", alt: "Student engagement" },
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
    description: "Develop critical thinking through guided inquiry.",
    link: "/curriculum/inquiry-based-learning",
  },
  {
    id: 2,
    title: "Collaborative Spaces",
    description: "Activities to help children build communication, teamwork.",
    link: "/curriculum/collaborative-spaces",
  },
  {
    id: 3,
    title: "Experiential Learning",
    description: "Allow children to learn by doing and through action.",
    link: "/curriculum/experiential-learning",
  },
];

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Little Alpha Early Childhood Curriculum",
  description:
    "Innovative curriculum at Little Alpha - Best play school in Bikaner, featuring inquiry-based learning, collaborative spaces, and experiential learning.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Little Alpha",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bikaner",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  educationalLevel: "Preschool",
  teaches: [
    "Early Childhood Development",
    "Inquiry-Based Learning",
    "Collaborative Learning",
    "Experiential Learning",
  ],
};

const CurriculumPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
              src={"/assets/hero/h1.webp"}
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
              <div
                key={pathway.id}
                className="flex flex-col gap-4 justify-between bg-white p-15 items-center rounded-3xl relative overflow-hidden"
              >
                <Image
                  src="/assets/bg/bg-logo.png"
                  height={400}
                  width={400}
                  alt="bg logo"
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none z-0"
                />
                <h2 className="text-2xl font-bold relative z-10 text-center">{pathway.title}</h2>
                <p className="text-center relative z-10">{pathway.description}</p>
                <Link href={pathway.link}>
                  <Button variant='outline' className="relative z-10 bg-transparent cursor-pointer hover:bg-white">Learn More</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CurriculumPage;
