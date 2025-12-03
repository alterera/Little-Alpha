import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "@/lib/sanity";
import { campusLifeCategoriesQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";

const campusSlides = [
  { id: 1, src: "/assets/blog-1.png", alt: "Curriculum overview" },
  { id: 2, src: "/assets/blog-1.png", alt: "Learning activities" },
  { id: 3, src: "/assets/blog-1.png", alt: "Student engagement" },
];

async function getCategories() {
  try {
    const categories = await client.fetch(campusLifeCategoriesQuery);
    return categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

const page = async () => {
  const categories = await getCategories();

  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        <HeroBanner
          subtitle="Student Life"
          title="Life at Little Alpha"
          slides={campusSlides}
          backgroundColor="#48A7A1"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {categories.length > 0 ? (
            categories.map((item: any) => (
              <div
                key={item._id}
                className=" flex flex-col rounded-2xl overflow-hidden"
              >
                <div className="relative w-full h-64 sm:h-72 lg:h-60 overflow-hidden">
                  {item.image ? (
                    <Image
                      src={urlFor(item.image).width(800).height(600).url()}
                      fill
                      alt={item.imageAlt || item.title || "Category image"}
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
                    href={`/campus-life/${item.slug.current}`}
                    className="w-fit"
                  >
                    <Button className="group bg-transparent border-[0.5px] border-black text-[#1d1d1d] hover:bg-transparent cursor-pointer">
                      View
                      <MoveUpRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No categories found. Please add categories in Sanity CMS.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
