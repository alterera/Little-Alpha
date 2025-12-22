import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Apply for Admission | Little Alpha | Best Play School Bikaner",
  description:
    "Apply for admission at Little Alpha - Best play school and kindergarten in Bikaner, Rajasthan. Complete the online admission form and enroll your child in the best kindergarten school Bikaner.",
  keywords: [
    "Best play school in Bikaner",
    "Top kindergarten school in Bikaner",
    "Best kindergarten school Bikaner",
    "Apply for admission Bikaner",
    "Online admission form Bikaner",
    "Kindergarten admission form",
    "Play school admission form",
    "School enrollment Bikaner",
    "Admission application Bikaner",
    "Little Alpha admission",
  ],
  openGraph: {
    title: "Apply for Admission | Little Alpha | Best Play School Bikaner",
    description:
      "Apply for admission at Little Alpha - Best play school and kindergarten in Bikaner, Rajasthan. Complete the online admission form.",
    url: "https://littlealpha.in/admissions/apply",
    siteName: "Little Alpha",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://littlealpha.in/og.png",
        width: 1200,
        height: 630,
        alt: "Apply for Admission at Little Alpha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for Admission | Little Alpha | Best Play School Bikaner",
    description:
      "Apply for admission at Little Alpha - Best play school and kindergarten in Bikaner, Rajasthan.",
    images: ["https://littlealpha.in/og.png"],
  },
  alternates: {
    canonical: "https://littlealpha.in/admissions/apply",
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

const page = () => {
  return (
    <div>page</div>
  );
};

export default page;
