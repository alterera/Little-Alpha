import type { Metadata } from "next";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Inquiry Based Learning | Curriculum | Little Alpha | Best Play School Bikaner",
  description:
    "Discover Inquiry Based Learning at Little Alpha - Best play school in Bikaner, Rajasthan. Our curriculum encourages children to explore questions, investigate ideas, and develop critical thinking through guided inquiry at the best kindergarten school Bikaner.",
  keywords: [
    "Inquiry based learning Bikaner",
    "Kindergarten curriculum Bikaner",
    "Play school curriculum Bikaner",
    "Best Play School Bikaner",
    "Critical thinking Bikaner",
    "Early childhood education Bikaner",
    "Little Alpha curriculum",
    "Best kindergarten school Bikaner",
  ],
  openGraph: {
    title: "Inquiry Based Learning | Little Alpha Curriculum",
    description:
      "Discover Inquiry Based Learning at Little Alpha - Best play school in Bikaner, Rajasthan. Our curriculum encourages children to explore questions and develop critical thinking.",
    url: "https://littlealpha.in/curriculum/inquiry-based-learning",
    siteName: "Little Alpha",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://littlealpha.in/curriculum/inquiry-based-learning",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const curriculumSlides = [
  { id: 1, src: "/assets/blog-1.png", alt: "Curriculum overview" },
  { id: 2, src: "/assets/blog-1.png", alt: "Learning activities" },
  { id: 3, src: "/assets/blog-1.png", alt: "Student engagement" },
];

const page = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        <HeroBanner
          subtitle="Curriculum"
          title="Inquiry Based Learning"
          slides={curriculumSlides}
          backgroundColor="#D3465A"
        />

        {/* First Section - Image Left, Text Right */}
        <section className="mt-10 sm:mt-12 lg:mt-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-center lg:items-start">
            <div className="flex-1 w-full lg:w-auto shrink-0">
              <div className="relative w-full sm:w-64 md:w-72 lg:w-150 h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={"/assets/blog-1.png"}
                  fill
                  alt="Curriculum image"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                At Little Alpha, Inquiry-Based Learning shapes every child's
                experience by placing curiosity at the center of growth. We
                believe that children are naturally inquisitive, and when given
                the right environment, their questions become powerful learning
                tools. Through carefully guided investigation, children explore
                topics that genuinely interest them—whether it's how plants
                grow, why objects sink or float, or what makes shadows change
                shape.
              </p>
              <p>
                Our educators serve as facilitators, encouraging children to
                observe closely, think critically, and share their ideas with
                confidence. Rather than simply providing answers, we help
                children discover them through exploration, conversation, and
                hands-on activities. This fosters independence, resilience, and
                an early love for learning that stays with them well beyond
                their kindergarten years.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section - Text Left, Image Right with Background */}
        <section className="mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10 lg:py-12 bg-[#EEF7FF] -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-8 xl:gap-10 items-center lg:items-start">
            <div className="w-full flex-1 lg:w-auto shrink-0">
              <div className="relative w-full sm:w-64 md:w-72 lg:w-180 h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={"/assets/blog-1.png"}
                  fill
                  alt="Learning approach"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Inquiry begins with a spark—an idea, a question, or a moment of
                curiosity that captures a child's attention. Our teachers take
                these sparks and turn them into meaningful learning experiences
                by creating opportunities for exploration, experimentation, and
                reflection.
              </p>
              <p>
                Children are encouraged to test their ideas, make predictions,
                try new strategies, and revisit challenges with fresh
                perspectives. They engage with a wide range of materials—natural
                elements, sensory resources, loose parts, and interactive
                learning tools—that inspire open-ended investigation.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="mt-10 sm:mt-12 lg:mt-16">
          <div className="max-w-5xl mx-auto bg-[#FCECEE] p-6 sm:p-10 md:p-12 lg:p-16 rounded-2xl">
            <p className="text-[#D3465A] text-center font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed">
              Inquiry empowers children to think deeply, ask boldly, and explore
              fearlessly, transforming every moment into an opportunity for
              meaningful discovery. It encourages them to question the world
              around them, to look beyond the obvious, and to engage with
              learning in ways that spark imagination and ignite confidence. By
              nurturing curiosity and valuing each child's unique ideas, inquiry
              fosters a mindset of exploration and resilience—helping children
              become thoughtful problem-solvers who aren't afraid to wonder,
              experiment, and find their own answers.
            </p>
          </div>
        </section>

        {/* Grid Section */}
        <section className="mt-10 sm:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="md:col-span-2">
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={"/assets/blog-1.png"}
                  fill
                  alt="Curriculum showcase"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Inquiry-Based Learning gives children the opportunity to become
                active constructors of knowledge rather than passive recipients.
                Through observing, questioning, experimenting, and analyzing,
                they develop cognitive skills essential for future academic
                success. Everyday moments—examining a leaf, building a bridge
                from blocks, mixing colors, or watching insects—become rich
                learning opportunities.
              </p>
            </div>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Beyond academics, inquiry nurtures essential social and
                emotional competencies. When children collaborate on a project,
                share discoveries, or discuss their findings, they practice
                communication, cooperation, and empathy. They learn that there
                are many possible answers and that each perspective adds value.
                <br />
                <br />
                Reflection is also a key part of our inquiry framework. Children
                revisit their questions, compare results, and evaluate outcomes,
                helping them make sense of their experiences on a deeper level.
                This balanced approach ensures that every child learns at their
                own pace while developing confidence, adaptability, and a
                lifelong sense of wonder.
              </p>
            </div>
          </div>
        </section>

        {/* Second Quote Section */}
        <section className="mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10 lg:py-12 bg-[#FCECEE] -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#D3465A] text-center font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
              A learning approach that evolves with every question, strengthens
              with every exploration, and grows with every child.
            </p>
          </div>
        </section>

        {/* Final Section - Image Left, Text Right */}
        <section className="mt-10 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-center lg:items-start">
            <div className="w-full lg:w-auto shrink-0">
              <div className="relative w-full lg:w-96 xl:w-[500px] h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={"/assets/blog-1.png"}
                  fill
                  alt="Early Years Campus"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                At Little Alpha, our environments are intentionally designed to
                spark curiosity—from thoughtfully arranged learning corners to
                interactive outdoor spaces that encourage observation and
                discovery. Our educators provide gentle guidance, asking
                open-ended questions and offering prompts that encourage deeper
                thinking.
              </p>
              <p>
                Children are given ample time and freedom to explore materials,
                revisit ideas, and experiment at their own pace. Through this
                process, they learn to take initiative, solve problems
                creatively, and develop a sense of responsibility toward their
                learning journey.
              </p>
              <p>
                Inquiry-Based Learning helps children understand not just what
                they are learning, but why it matters. This purposeful
                exploration lays the foundation for confident, self-motivated
                learners who are ready to embrace challenges with enthusiasm.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
