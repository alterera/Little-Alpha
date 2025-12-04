import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiential Learning | Curriculum | Little Alpha | Best Play School Bikaner",
  description:
    "Explore Experiential Learning at Little Alpha - Best play school in Bikaner, Rajasthan. Hands-on activities and real-world experiences allow children to learn by doing at the best kindergarten school Bikaner.",
  keywords: [
    "Experiential learning Bikaner",
    "Hands-on learning Bikaner",
    "Kindergarten curriculum Bikaner",
    "Play school curriculum Bikaner",
    "Best Play School Bikaner",
    "Active learning Bikaner",
    "Little Alpha curriculum",
    "Best kindergarten school Bikaner",
  ],
  openGraph: {
    title: "Experiential Learning | Little Alpha Curriculum",
    description:
      "Explore Experiential Learning at Little Alpha - Best play school in Bikaner, Rajasthan. Hands-on activities and real-world experiences for children.",
    url: "https://littlealpha.in/curriculum/experiential-learning",
    siteName: "Little Alpha",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://littlealpha.in/curriculum/experiential-learning",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ExperientialLearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

