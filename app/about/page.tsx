"use client";

import React from "react";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import Link from "next/link";

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

const AboutPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        <HeroBanner
          subtitle="Discover Little Alpha"
          title="About Little Alpha"
          slides={heroSlides}
        />

        {/* Content */}
        <section className="mt-10 lg:mt-14 flex flex-col lg:flex-row gap-10 relative">
          <article className="flex-1 space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
            <section id="inspiration" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F715F]">
                Our Inspiration
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

            <section id="founder" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F715F]">
                Message from Founder
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                reiciendis nobis eum reprehenderit saepe inventore mollitia quo
                odit odio quos quis nulla dolores nihil officia! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Eaque praesentium
                magnam ratione eligendi ex nesciunt consectetur doloribus omnis
                molestiae iste veniam dolorem.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                reiciendis nobis eum reprehenderit saepe inventore mollitia quo
                odit odio quos quis nulla dolores nihil officia! Eaque
                praesentium magnam ratione eligendi ex nesciunt consectetur
                doloribus omnis molestiae iste veniam dolorem.
              </p>
              <p>
                Neque, nulla doloribus iusto quod ratione, quo expedita facilis
                exercitationem et rem tempora. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas, tenetur?
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
  );
};

export default AboutPage;
