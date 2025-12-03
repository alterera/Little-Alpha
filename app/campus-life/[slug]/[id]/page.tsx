import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import Link from "next/link";
import React from "react";
import { client } from "@/lib/sanity";
import { articleBySubCategoryAndIdQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { PortableText } from "@portabletext/react";
import PhotoGallery from "@/components/campus-life/PhotoGallery";
import { notFound } from "next/navigation";

const quickLinks = [
  { href: "#article", label: "Article" },
  { href: "#gallery", label: "Photo Gallery" },
];

async function getArticle(slug: string, id: string) {
  try {
    const article = await client.fetch(articleBySubCategoryAndIdQuery, {
      slug,
      id,
    });
    return article;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

interface PageProps {
  params: Promise<{ slug: string; id: string }>;
}

const page = async ({ params }: PageProps) => {
  const { slug, id } = await params;
  const article = await getArticle(slug, id);

  if (!article) {
    notFound();
  }

  const portableTextComponents = {
    block: {
      normal: ({ children }: any) => (
        <p className="mb-4">{children}</p>
      ),
      h1: ({ children }: any) => (
        <h1 className="text-3xl font-bold mb-4 text-[#0F715F]">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-bold mb-3 text-[#0F715F]">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl font-bold mb-2 text-[#0F715F]">{children}</h3>
      ),
    },
  };

  // Build image URLs for gallery
  const galleryImages = article.galleryImages
    ? article.galleryImages.map((img: any) => ({
        url: urlFor(img.asset).width(1200).height(800).url(),
        alt: img.alt || "",
        assetId: img.assetId,
      }))
    : [];

  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        {/* Content */}
        <section className="mt-10 lg:mt-14 flex flex-col lg:flex-row gap-10 relative">
          <article className="flex-1 space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
            <section id="article" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F715F]">
                {article.title}
              </h2>
              {article.article && (
                <div className="prose prose-lg max-w-none">
                  <PortableText
                    value={article.article}
                    components={portableTextComponents}
                  />
                </div>
              )}
            </section>

            {galleryImages.length > 0 && (
              <section id="gallery">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F715F] mb-6">
                  Photo Gallery
                </h2>
                <PhotoGallery images={galleryImages} />
              </section>
            )}
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
