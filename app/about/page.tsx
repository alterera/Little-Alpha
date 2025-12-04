import type { Metadata } from "next";
import React from "react";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Little Alpha | Best Kindergarten School in Bikaner, Rajasthan",
  description:
    "Discover Little Alpha - Bikaner's premier kindergarten and play school. Learn about our inspiration, founder's message, and leadership team. Best play school in Bikaner, Rajasthan offering quality early childhood education.",
  keywords: [
    "Best kindergarten school Bikaner",
    "Best Play School Bikaner",
    "Kindergarten school Bikaner",
    "Play school Bikaner",
    "Nursery school Bikaner",
    "Preschool Bikaner",
    "Early childhood education Bikaner",
    "Little Alpha Bikaner",
    "Best school in Bikaner",
    "Top kindergarten Bikaner",
  ],
  openGraph: {
    title: "About Little Alpha | Best Kindergarten School in Bikaner",
    description:
      "Discover Little Alpha - Bikaner's premier kindergarten and play school. Learn about our inspiration, founder's message, and leadership team.",
    url: "https://littlealpha.in/about",
    siteName: "Little Alpha",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/blog-1.png",
        width: 1200,
        height: 630,
        alt: "Little Alpha - Best Kindergarten School in Bikaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Little Alpha | Best Kindergarten School in Bikaner",
    description:
      "Discover Little Alpha - Bikaner's premier kindergarten and play school.",
    images: ["/assets/blog-1.png"],
  },
  alternates: {
    canonical: "https://littlealpha.in/about",
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

const heroSlides = [
  { id: 1, src: "/assets/blog-1.png", alt: "Students exploring nature" },
  { id: 2, src: "/assets/blog-1.png", alt: "Creative classroom moments" },
  { id: 3, src: "/assets/blog-1.png", alt: "Joyful play sessions" },
];

const quickLinks = [
  { href: "#inspiration", label: "Our Inspiration" },
  { href: "#founder", label: "Message from Founder" },
  { href: "#leadership", label: "Our Leadership" },
];

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Little Alpha",
  description:
    "Little Alpha is a premier kindergarten and play school in Bikaner, Rajasthan, offering quality early childhood education.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bikaner",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  url: "https://littlealpha.in",
  logo: "https://littlealpha.in/logo-white.png",
  sameAs: [],
  areaServed: {
    "@type": "City",
    name: "Bikaner",
  },
  educationalCredentialAwarded: "Kindergarten Certificate",
};

const AboutPage = () => {
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
            subtitle="Discover Little Alpha"
            title="About The Little Alpha - Best Kindergarten School in Bikaner"
            slides={heroSlides}
            backgroundColor="#0C7C55"
          />

        {/* Content */}
        <section className="mt-10 lg:mt-14 flex flex-col lg:flex-row gap-10 relative">
          <article className="flex-1 space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
            <section id="inspiration" className="scroll-mt-24 space-y-4">
              <h1 className="sr-only">
                Little Alpha - Best Kindergarten and Play School in Bikaner, Rajasthan
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F715F]">
                Our Inspiration
              </h2>
              <p>
                At Little Alpha, we are committed to being the best kindergarten school in Bikaner, 
                providing exceptional early childhood education. Our inspiration stems from the belief 
                that every child deserves a nurturing environment where they can explore, learn, and grow. 
                As one of the leading play schools in Bikaner, Rajasthan, we focus on holistic development 
                through innovative teaching methods and personalized attention.
              </p>
              <p>
                Our mission is to create a foundation for lifelong learning by combining play-based 
                education with structured curriculum. We understand that choosing the best play school 
                in Bikaner is a crucial decision for parents, and we strive to exceed expectations by 
                providing a safe, stimulating, and inclusive learning environment for every child.
              </p>
            </section>

            <section id="founder" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F715F]">
                Message from Founder
              </h2>
              <p>
                Welcome to Little Alpha, where we take pride in being recognized as the best 
                kindergarten school in Bikaner. Our journey began with a vision to transform early 
                childhood education in Rajasthan. We believe that the foundation years are the most 
                critical in a child's development, and our play school in Bikaner is designed to 
                nurture young minds with care, creativity, and compassion.
              </p>
              <p>
                As the best play school in Bikaner, we are dedicated to providing an environment 
                where children feel valued, inspired, and empowered to reach their full potential. 
                Our experienced educators and modern facilities ensure that every child receives 
                the attention and support they need to thrive.
              </p>
              <figure className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={"/assets/blog-1.png"}
                  height={480}
                  width={720}
                  alt="Founder message"
                  className="w-full h-[240px] sm:h-[320px] object-cover"
                />
                <figcaption className="p-4 text-sm text-[#0F715F] font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores quas, temporibus laboriosam hic magni ratione iste.
                </figcaption>
              </figure>
            </section>

            <section id="leadership" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F715F]">
                Our Leadership
              </h2>
              <p>
                The leadership team at Little Alpha brings together years of experience in 
                early childhood education. Our dedicated educators and administrators work 
                tirelessly to maintain our reputation as the best kindergarten school in Bikaner. 
                With a deep understanding of child development and modern educational practices, 
                our team ensures that every aspect of our play school in Bikaner is designed to 
                support optimal learning and growth.
              </p>
              <p>
                We are committed to continuous improvement and innovation, always seeking new ways 
                to enhance the educational experience. Our leadership's vision is to make The Little 
                Alpha not just the best play school in Bikaner, but a benchmark for excellence in 
                early childhood education across Rajasthan.
              </p>
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
    </>
  );
};

export default AboutPage;
