import type { Metadata } from "next";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Admissions at Little Alpha | Best Play School Bikaner | Apply Now",
  description:
    "Admissions open at Little Alpha - Best kindergarten and play school in Bikaner, Rajasthan. Get admission instructions, application process, and contact details. Enroll your child in the best play school Bikaner.",
  keywords: [
    "Admissions Bikaner",
    "Kindergarten admission Bikaner",
    "Play school admission Bikaner",
    "Best Play School Bikaner",
    "School admission Bikaner",
    "Nursery admission Bikaner",
    "Preschool admission Bikaner",
    "Little Alpha admission",
    "Admission process Bikaner",
    "School enrollment Bikaner",
  ],
  openGraph: {
    title: "Admissions at Little Alpha | Best Play School Bikaner",
    description:
      "Admissions open at Little Alpha - Best kindergarten and play school in Bikaner, Rajasthan. Get admission instructions and apply now.",
    url: "https://littlealpha.in/admissions",
    siteName: "Little Alpha",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/blog-1.png",
        width: 1200,
        height: 630,
        alt: "Little Alpha Admissions - Best Play School Bikaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions at Little Alpha | Best Play School Bikaner",
    description:
      "Admissions open at Little Alpha - Best kindergarten and play school in Bikaner, Rajasthan.",
    images: ["/assets/blog-1.png"],
  },
  alternates: {
    canonical: "https://littlealpha.in/admissions",
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

const admissionSlides = [
  { id: 1, src: "/assets/blog-1.png", alt: "Curriculum overview" },
  { id: 2, src: "/assets/blog-1.png", alt: "Learning activities" },
  { id: 3, src: "/assets/blog-1.png", alt: "Student engagement" },
];

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "The Little Alpha",
  description:
    "Admissions open at Little Alpha - Best kindergarten and play school in Bikaner, Rajasthan.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bikaner",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  url: "https://littlealpha.in/admissions",
  telephone: "+91-XXX-XXX-XXXX",
  email: "admissions@littlealpha.in",
  areaServed: {
    "@type": "City",
    name: "Bikaner",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Admission Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Kindergarten Program",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Play School Program",
        },
      },
    ],
  },
};

const Admission = () => {
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
            subtitle="Admission Instructions"
            title="Admissions at Little Alpha - Best Play School Bikaner"
            slides={admissionSlides}
            backgroundColor="#48A7A1"
          />

        <div className="flex justify-center py-10">
          <Link href={"/admissions/instructions"} className="w-fit">
            <Button className="rounded-full border border-black bg-transparent text-black hover:bg-transparent cursor-pointer">
              Click here to Proceed
              <MoveUpRight />
            </Button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src={"/announcement.png"}
            height={400}
            width={800}
            alt="announcement"
          />
        </div>

        <div className="flex justify-center py-10">
          <Link href={"/admissions/instructions"} className="w-fit">
            <Button className="rounded-full border border-black bg-transparent text-black hover:bg-transparent cursor-pointer">
              Click here to Proceed
              <MoveUpRight />
            </Button>
          </Link>
        </div>

        <div className="bg-[#fee7c1] max-w-7xl mx-auto rounded-xl">
          <div className="flex justify-between p-8">
            <div>
              <h2 className="text-xl font-bold mb-2">Admissions Office</h2>
              <p className="text-gray-700">
                Little Alpha <br />
                Bikaner, Rajasthan, India
              </p>
            </div>

            <div>
              <ul className="space-y-2 text-gray-700">
                <li>+91 XXX XXX XXXX (9:00 a.m. to 5:00 p.m.)</li>
                <li>admissions@littlealpha.in</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
