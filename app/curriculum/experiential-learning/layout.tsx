import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiential Learning | Curriculum | Little Alpha | Best Play School Bikaner",
  description:
    "Explore Experiential Learning at Little Alpha - Best play school in Bikaner, Rajasthan. Hands-on activities and real-world experiences allow children to learn by doing at the best kindergarten school Bikaner.",
  keywords: [
    "Best play school in Bikaner",
    "Top kindergarten school in Bikaner",
    "Best kindergarten school Bikaner",
    "Experiential learning Bikaner",
    "Hands-on learning Bikaner",
    "Kindergarten curriculum Bikaner",
    "Play school curriculum Bikaner",
    "Early learning activities Bikaner",
    "Child development Bikaner",
    "Little Alpha experiential learning",
    "Best Play School Bikaner",
  ],
  openGraph: {
    title: "Experiential Learning | Curriculum | Little Alpha | Best Play School Bikaner",
    description:
      "Explore Experiential Learning at Little Alpha - Best play school in Bikaner, Rajasthan. Hands-on activities and real-world experiences allow children to learn by doing.",
    url: "https://littlealpha.in/curriculum/experiential-learning",
    siteName: "Little Alpha",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://littlealpha.in/og.png",
        width: 1200,
        height: 630,
        alt: "Experiential Learning at Little Alpha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiential Learning | Curriculum | Little Alpha | Best Play School Bikaner",
    description:
      "Explore Experiential Learning at Little Alpha - Best play school in Bikaner, Rajasthan.",
    images: ["https://littlealpha.in/og.png"],
  },
  alternates: {
    canonical: "https://littlealpha.in/curriculum/experiential-learning",
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
