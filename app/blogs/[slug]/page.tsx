import { client } from "@/lib/sanity";
import { blogPostBySlugQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  featuredImage?: SanityImageSource;
  content?: any[];
  publishedAt?: string;
};

export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return {};

  const post: BlogPost = await client.fetch(blogPostBySlugQuery, {
    slug,
  });

  if (!post) {
    return {};
  }

  const description =
    post.excerpt ||
    (post.content?.[0]?.children?.[0]?.text as string | undefined) ||
    "Read the latest insights from Little Alpha.";

  return {
    title: `${post.title} | Little Alpha Blog`,
    description,
    alternates: {
      canonical: `https://littlealpha.in/blogs/${slug}`,
    },
  };
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <div className="my-6 overflow-hidden rounded-xl">
          <Image
            src={urlFor(value).width(1200).height(800).url()}
            alt={value?.alt || "Blog image"}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
      ) : null,
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold text-[#0F715F] mt-6 mb-3">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-[#0F715F] mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold text-[#0F715F] mt-5 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="leading-relaxed text-gray-800 my-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#F18940] pl-4 italic text-gray-700 my-4">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 text-gray-800 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 text-gray-800 my-4">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-[#0F715F] underline underline-offset-4 decoration-2"
        rel="noreferrer noopener"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
      >
        {children}
      </a>
    ),
  },
};

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  if (!slug) notFound();

  const post: BlogPost = await client.fetch(blogPostBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16">
        <div className="flex flex-col gap-3 mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F18940]">
            {post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "Latest"}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
              {post.excerpt}
            </p>
          )}
        </div>

        {post.featuredImage && (
          <div className="relative aspect-video w-full mb-10 overflow-hidden rounded-2xl">
            <Image
              src={urlFor(post.featuredImage).width(1280).height(720).url()}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
              sizes="100vw"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-headings:text-[#0F715F] prose-a:text-[#0F715F] prose-img:rounded-xl">
          {post.content ? <PortableText value={post.content} components={components} /> : null}
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;

