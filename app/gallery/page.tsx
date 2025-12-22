import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import GalleryMasonry from "@/components/gallery/GalleryMasonry";
import { client } from "@/lib/sanity";
import {
  galleryCategoriesQuery,
  galleryImagesCountQuery,
  galleryImagesQuery,
} from "@/lib/sanity.queries";
import Link from "next/link";

type PageProps = {
  searchParams: Promise<{ page?: string; category?: string }>;
};

type GalleryCategory = {
  _id: string;
  title: string;
  slug?: { current: string };
};

type GalleryImage = {
  _id: string;
  image: any;
  imageAlt?: string;
  category?: { title?: string; slug?: { current: string } };
};

const PER_PAGE = 12;

export const revalidate = 60;

const GalleryPage = async ({ searchParams }: PageProps) => {
  const { page = "1", category = "" } = await searchParams;
  const pageNumber = Math.max(Number(page) || 1, 1);
  const start = (pageNumber - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const categorySlug = category || "";

  const [categories, images, total] = await Promise.all([
    client.fetch<GalleryCategory[]>(galleryCategoriesQuery),
    client.fetch<GalleryImage[]>(galleryImagesQuery, {
      categorySlug,
      start,
      end,
    }),
    client.fetch<number>(galleryImagesCountQuery, { categorySlug }),
  ]);

  const totalPages = Math.max(1, Math.ceil((total || 0) / PER_PAGE));

  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16">
        <DynamicBreadcrumb className="py-8" />

        <div className="flex flex-col gap-4 mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Gallery</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F715F]">
            Explore Little Alpha Moments
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
            Browse cherished memories from our campus life, events, and daily learning experiences.
            Filter by category to see what interests you most.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <Link
            href="/gallery"
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
              !categorySlug
                ? "bg-[#0F715F] text-white border-[#0F715F]"
                : "bg-white text-[#0F715F] border-[#0F715F] hover:bg-[#0F715F]/10"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/gallery?category=${cat.slug?.current || ""}`}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                categorySlug === cat.slug?.current
                  ? "bg-[#0F715F] text-white border-[#0F715F]"
                  : "bg-white text-[#0F715F] border-[#0F715F] hover:bg-[#0F715F]/10"
              }`}
            >
              {cat.title}
            </Link>
          ))}
        </div>

        <GalleryMasonry images={images} />

        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const p = idx + 1;
              const query = new URLSearchParams();
              if (categorySlug) query.set("category", categorySlug);
              query.set("page", p.toString());
              const href = `/gallery?${query.toString()}`;

              const isActive = p === pageNumber;
              return (
                <Link
                  key={p}
                  href={href}
                  className={`px-3 py-2 rounded-lg border text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#0F715F] text-white border-[#0F715F]"
                      : "bg-white text-[#0F715F] border-[#0F715F] hover:bg-[#0F715F]/10"
                  }`}
                >
                  {p}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;