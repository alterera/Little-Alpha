import type { Metadata } from "next";
import { Quicksand, Marck_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const marckscript = Marck_Script({
  variable: "--font-marckscript",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://littlealpha.in"),
  title: {
    default: "Little Alpha | Best Play School in Bikaner, Rajasthan | Kindergarten School",
    template: "%s | Little Alpha | Best Play School Bikaner",
  },
  description:
    "Little Alpha is the best play school and kindergarten in Bikaner, Rajasthan. Offering quality early childhood education, innovative curriculum, and nurturing environment for children. Top kindergarten school Bikaner.",
  keywords: [
    "Best play school in Bikaner",
    "Kindergarten school in Bikaner",
    "Top kindergarten school Bikaner",
    "Best kindergarten school Bikaner",
    "Play school Bikaner",
    "Nursery school Bikaner",
    "Preschool Bikaner",
    "Early childhood education Bikaner",
    "Little Alpha Bikaner",
    "Best school in Bikaner",
    "Kindergarten Bikaner",
    "Play school near me Bikaner",
    "Top play school Bikaner",
    "Best preschool Bikaner",
  ],
  authors: [{ name: "Little Alpha" }],
  creator: "Little Alpha",
  publisher: "Little Alpha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://littlealpha.in",
    siteName: "Little Alpha",
    title: "Little Alpha | Best Play School in Bikaner, Rajasthan",
    description:
      "Little Alpha is the best play school and kindergarten in Bikaner, Rajasthan. Offering quality early childhood education and innovative curriculum.",
    images: [
      {
        url: "https://littlealpha.in/og.png",
        width: 1200,
        height: 630,
        alt: "Little Alpha - Best Play School in Bikaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Alpha | Best Play School in Bikaner, Rajasthan",
    description:
      "Little Alpha is the best play school and kindergarten in Bikaner, Rajasthan. Offering quality early childhood education.",
    images: ["/og.png"],
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
  verification: {
    // Add Google Search Console verification code here when available
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://littlealpha.in",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Little Alpha",
  description:
    "Little Alpha is the best play school and kindergarten in Bikaner, Rajasthan, offering quality early childhood education.",
  url: "https://littlealpha.in",
  logo: "https://littlealpha.in/logo-white.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Statue Circle, JNV Main Rd, Sector 3, Jai Narayan Vyas Colony",
    addressLocality: "Bikaner",
    addressRegion: "Rajasthan",
    postalCode: "334001",
    addressCountry: "IN",
  },
  telephone: "+91-957-166-5859",
  email: "info@littlealpha.in",
  areaServed: {
    "@type": "City",
    name: "Bikaner",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${quicksand.variable} ${marckscript.variable} antialiased w-full`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SmoothScroll>
          <Navbar />
          <NextTopLoader />
        {children}
          <Toaster />
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
