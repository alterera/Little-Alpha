import type { Metadata } from "next";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { MapPin, MoveUpRight, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Admissions at Little Alpha | Best Play School Bikaner | Apply Now",
  description:
    "Admissions open at Little Alpha - Best kindergarten and play school in Bikaner, Rajasthan. Get admission instructions, application process, and contact details. Enroll your child in the best play school Bikaner.",
  keywords: [
    "Best play school in Bikaner",
    "Top kindergarten school in Bikaner",
    "Best kindergarten school Bikaner",
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
    "Play school near me Bikaner",
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
        url: "https://littlealpha.in/og.png",
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
    images: ["https://littlealpha.in/og.png"],
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
  telephone: "+91-957-166-5859",
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

          <div className="bg-linear-to-br from-[#fee7c1] to-[#fdd9a3] max-w-7xl mx-auto rounded-2xl overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F715F] mb-6 sm:mb-8 text-center md:text-left">
                Admissions Office
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Address Section */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  {/* <div className="shrink-0 p-3 bg-white/80 rounded-full">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#0F715F]" />
                  </div> */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                      Address
                    </h3>
                    <address className="text-gray-700 text-sm sm:text-base not-italic leading-relaxed">
                      Little Alpha Play School
                      <br />
                      Statue Circle, JNV Main Rd, Sector 3, Jai Narayan Vyas
                      Colony, Bikaner, Rajasthan - 334001 IN
                    </address>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 sm:space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 bg-white/80 rounded-full">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#0F715F]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                        Phone
                      </h3>
                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="text-[#0F715F] hover:text-[#F75691] transition-colors text-sm sm:text-base block"
                      >
                        +91 XXX XXX XXXX
                      </a>
                      <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm text-gray-600">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>9:00 a.m. to 5:00 p.m.</span>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 bg-white/80 rounded-full">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#0F715F]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                        Email
                      </h3>
                      <a
                        href="mailto:admissions@littlealpha.in"
                        className="text-[#0F715F] hover:text-[#F75691] transition-colors text-sm sm:text-base break-all"
                      >
                        admissions@littlealpha.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
