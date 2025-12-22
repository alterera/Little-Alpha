import type { Metadata } from "next";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admission Instructions | Little Alpha | Best Play School Bikaner",
  description:
    "Get detailed admission instructions for Little Alpha - Best play school and kindergarten in Bikaner, Rajasthan. Learn about the admission process, requirements, and how to apply at the best kindergarten school Bikaner.",
  keywords: [
    "Best play school in Bikaner",
    "Top kindergarten school in Bikaner",
    "Best kindergarten school Bikaner",
    "Admission instructions Bikaner",
    "Kindergarten admission process",
    "Play school admission process",
    "Admission requirements Bikaner",
    "How to apply Bikaner",
    "School admission guide Bikaner",
    "Little Alpha admission",
  ],
  openGraph: {
    title: "Admission Instructions | Little Alpha | Best Play School Bikaner",
    description:
      "Get detailed admission instructions for Little Alpha - Best play school and kindergarten in Bikaner, Rajasthan. Learn about the admission process and requirements.",
    url: "https://littlealpha.in/admissions/instructions",
    siteName: "Little Alpha",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://littlealpha.in/og.png",
        width: 1200,
        height: 630,
        alt: "Admission Instructions at Little Alpha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admission Instructions | Little Alpha | Best Play School Bikaner",
    description:
      "Get detailed admission instructions for Little Alpha - Best play school and kindergarten in Bikaner, Rajasthan.",
    images: ["https://littlealpha.in/og.png"],
  },
  alternates: {
    canonical: "https://littlealpha.in/admissions/instructions",
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

const instructions = [
  {
    id: 1,
    title: "Browser Requirements",
    content: "Please complete the online 'Application for Admission' form using the latest versions of Google Chrome, Mozilla Firefox, or Internet Explorer (IE10 or above).",
  },
  {
    id: 2,
    title: "Login ID",
    content: "Your registered email ID on the Admission portal serves as your 'Login ID'. Please complete the online 'Application for Admission' form using this Login ID.",
  },
  {
    id: 3,
    title: "Form Completion",
    content: "Ensure all required fields are filled accurately. Double-check your information before submitting the form.",
  },
  {
    id: 4,
    title: "Document Upload",
    content: "Have all necessary documents ready in digital format (PDF, JPG, or PNG) before starting the application process.",
  },
];

const page = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        <div className="mt-10 sm:mt-12 lg:mt-16">
          {/* Academic Year Section */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Admissions for Academic Year
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0F715F]">
              2026-27
            </p>
          </div>

          {/* School Brochure Card */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
            <div className="block group">
              <div className="bg-linear-to-r from-[#0F715F] to-[#48A7A1] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="bg-white/20 p-4 rounded-xl">
                      <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                        School Brochure
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base">
                        Download our comprehensive school brochure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white group-hover:translate-x-1 transition-transform duration-300">
                    <Link href={'/The-Little-Alpha_Brochure.pdf'}>
                      <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    {/* <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Instructions for Filling Out Online Application Form
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                Please read the instructions carefully before completing the online 'Application for Admission' form.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              defaultValue="item-1"
            >
              {instructions.map((instruction, index) => (
                <AccordionItem
                  key={instruction.id}
                  value={`item-${instruction.id}`}
                  className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#0F715F] transition-colors duration-300 bg-white shadow-sm hover:shadow-md"
                >
                  <AccordionTrigger className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-left hover:no-underline">
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 pr-4">
                      {instruction.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      {instruction.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mt-10 sm:mt-12 lg:mt-16 text-center">
            <div className="bg-[#E6F0F8] rounded-2xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Ready to Apply?
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                Make sure you have read all the instructions above before proceeding with your application.
              </p>
              <Link href="/admissions/apply" className="inline-block">
                <Button className="bg-[#0F715F] hover:bg-[#0a5a4a] text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                  Start Application
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
