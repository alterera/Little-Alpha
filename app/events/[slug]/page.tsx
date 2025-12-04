import type { Metadata } from "next";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "@/lib/sanity";
import { eventSubCategoriesByCategorySlugQuery, eventCategoryBySlugQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await client.fetch(eventCategoryBySlugQuery, { slug });

  if (!category) {
    return {
      title: "Event Category | Little Alpha",
    };
  }

  return {
    title: `${category.title} - School Events | Little Alpha | Best Kindergarten School Bikaner`,
    description: `Explore ${category.title} events at Little Alpha - Best kindergarten and play school in Bikaner, Rajasthan. Discover exciting school events and activities at our play school in Bikaner.`,
    keywords: [
      `${category.title} events Bikaner`,
      "School events Bikaner",
      "Kindergarten events Bikaner",
      "Best Play School Bikaner",
      "School activities Bikaner",
      "Little Alpha events",
    ],
    openGraph: {
      title: `${category.title} - School Events | Little Alpha`,
      description: `Explore ${category.title} events at Little Alpha - Best kindergarten and play school in Bikaner, Rajasthan.`,
      url: `https://littlealpha.in/events/${slug}`,
      siteName: "Little Alpha",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://littlealpha.in/events/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

async function getSubCategories(slug: string) {
  try {
    const subCategories = await client.fetch(eventSubCategoriesByCategorySlugQuery, {
      slug,
    });
    return subCategories || [];
  } catch (error) {
    console.error("Error fetching sub-categories:", error);
    return [];
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const subCategories = await getSubCategories(slug);

  if (subCategories.length === 0) {
    notFound();
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {subCategories.map((item: any) => (
            <div
              key={item._id}
              className=" flex flex-col rounded-2xl overflow-hidden"
            >
              <div className="relative w-full h-64 sm:h-72 lg:h-60 overflow-hidden">
                {item.image ? (
                  <Image
                    src={urlFor(item.image).width(800).height(600).url()}
                    fill
                    alt={item.imageAlt || item.title || "Sub-category image"}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
              <div className="flex flex-col gap-4 p-6 bg-[#E6F0F8]">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#0F715F] transition-colors duration-300">
                  {item.title}
                </h2>
                {item.firstArticle?.slug ? (
                  <Link
                    href={`/events/${slug}/${item.firstArticle.slug.current}`}
                    className="w-fit"
                  >
                    <Button className="group bg-transparent border-[0.5px] border-black text-[#1d1d1d] hover:bg-transparent cursor-pointer">
                      View
                      <MoveUpRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    disabled
                    className="w-fit bg-transparent border-[0.5px] border-gray-400 text-gray-400 cursor-not-allowed"
                  >
                    No Article
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

