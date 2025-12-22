import type { Metadata } from "next";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import { client } from "@/lib/sanity";
import { blogPostsQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  featuredImage?: SanityImageSource;
  content?: any[];
  publishedAt?: string;
};

function plainTextFromPortableText(content: any[] = []) {
  return content
    .filter((block) => block._type === "block" && Array.isArray(block.children))
    .map((block) =>
      block.children
        .filter((child: any) => child._type === "span")
        .map((child: any) => child.text)
        .join("")
    )
    .join(" ");
}

function excerptFromPost(post: BlogPost, wordLimit = 20) {
  const sourceText =
    post.excerpt?.trim() ||
    plainTextFromPortableText(post.content || []).trim() ||
    "";
  if (!sourceText) return "";
  const words = sourceText.split(/\s+/);
  if (words.length <= wordLimit) return sourceText;
  return `${words.slice(0, wordLimit).join(" ")}...`;
}

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blogs & Articles | Little Alpha | Best Play School Bikaner",
  description:
    "Read insightful articles, tips, and stories from Little Alpha - Best play school in Bikaner, Rajasthan. Discover parenting tips, early childhood education insights, and school updates.",
  keywords: [
    "Little Alpha blog",
    "Play school blog Bikaner",
    "Kindergarten articles Bikaner",
    "Early childhood education tips",
    "Parenting tips Bikaner",
    "Best play school Bikaner",
    "Kindergarten school Bikaner",
    "Education blog Bikaner",
    "School updates Bikaner",
    "Child development articles",
  ],
  openGraph: {
    title: "Blogs & Articles | Little Alpha | Best Play School Bikaner",
    description:
      "Read insightful articles, tips, and stories from Little Alpha - Best play school in Bikaner, Rajasthan.",
    url: "https://littlealpha.in/blogs",
    siteName: "Little Alpha",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://littlealpha.in/og.png",
        width: 1200,
        height: 630,
        alt: "Little Alpha Blogs & Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Articles | Little Alpha | Best Play School Bikaner",
    description:
      "Read insightful articles, tips, and stories from Little Alpha - Best play school in Bikaner, Rajasthan.",
    images: ["https://littlealpha.in/og.png"],
  },
  alternates: {
    canonical: "https://littlealpha.in/blogs",
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

const BlogsPage = async () => {
  const posts: BlogPost[] = await client.fetch(blogPostsQuery);
  if (!posts) {
    notFound();
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16">
        <DynamicBreadcrumb className="py-8" />

        <div className="flex flex-col gap-4 mb-8 items-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Our Stories
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F715F]">
            Insights & Updates from Little Alpha
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
            Explore the latest articles, tips, and stories from our educators and community.
            Discover how we nurture curiosity, creativity, and confidence every day.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200 flex flex-col bg-white"
            >
              <div className="relative aspect-4/3">
                {post.featuredImage ? (
                  <Image
                    src={urlFor(post.featuredImage).width(900).height(675).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F18940]">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "Latest"}
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
                  {excerptFromPost(post, 20)}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/blogs/${post.slug?.current}`}
                    className="inline-flex items-center gap-2 text-[#0F715F] font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
