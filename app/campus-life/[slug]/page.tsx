import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "@/lib/sanity";
import { subCategoriesByCategorySlugQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { notFound } from "next/navigation";

async function getSubCategories(slug: string) {
  try {
    const subCategories = await client.fetch(subCategoriesByCategorySlugQuery, {
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
                <Link
                  href={`/campus-life/${slug}/${item.slug.current}`}
                  className="w-fit"
                >
                  <Button className="group bg-transparent border-[0.5px] border-black text-[#1d1d1d] hover:bg-transparent cursor-pointer">
                    View
                    <MoveUpRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Button>
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
