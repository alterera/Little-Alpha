import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          title="Collaborative Spaces"
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
                At Little Alpha, Collaborative Spaces are designed to help
                children grow socially, emotionally, and intellectually by
                learning alongside one another. We believe that children thrive
                in environments where they can communicate, share ideas, and
                work together toward common goals. Through purposeful group
                activities, interactive setups, and cooperative play, children
                develop essential interpersonal skills such as listening,
                empathy, negotiation, and teamwork. These shared experiences
                help them understand the value of community and create a strong
                foundation for meaningful relationships and a sense of
                belonging.
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
                Collaboration is more than just working together—it is learning
                to appreciate diverse perspectives. In our collaborative spaces,
                children participate in group discussions, problem-solving
                tasks, and creative projects that invite everyone’s
                contributions. They learn to communicate their thoughts clearly,
                consider different viewpoints, and respect the ideas of others.
                These interactions help them develop emotional intelligence,
                confidence, and patience. By engaging in activities that require
                cooperation and mutual understanding, children begin to
                recognize their role within a group and learn how collective
                effort leads to shared success.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10 lg:py-12 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex gap-10">
            <div className="flex-1 bg-[#FCECEE] text-[#D3465A] p-8 rounded-2xl flex justify-center items-center">
              <p className="text-center text-xl font-bold">
                Collaboration strengthens communication, builds trust, and
                teaches children the joy of achieving things together.
              </p>
            </div>

            <div className="flex-1">
              <p>
                At Little Alpha, collaboration is woven into daily classroom
                experiences—from co-creating art pieces to building structures,
                solving puzzles, or engaging in storytelling circles. These
                interactions help children learn how to articulate their needs,
                support their peers, and navigate group dynamics in a healthy
                and positive way. Educators guide children with gentle cues and
                open-ended questions, encouraging them to work through
                challenges, resolve conflict respectfully, and celebrate one
                another's achievements. Through these experiences, children
                develop a strong sense of community and social responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section - Text Left, Image Right with Background */}
        <section className="mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10 lg:py-12 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
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
                Our collaborative environments are intentionally created to
                invite communication and cooperation. Flexible seating
                arrangements, shared workstations, open play zones, and thematic
                group stations allow children to naturally gravitate toward
                collaborative experiences. These spaces encourage movement,
                conversation, and creativity while helping children learn how to
                share resources, exchange ideas, and work in harmony. Each setup
                is thoughtfully planned to spark curiosity and teamwork—whether
                children are exploring STEM materials, engaging in dramatic
                play, or participating in group-based learning centers.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10 lg:py-12 bg-[#EEF7FF] -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-center lg:items-start">
            <div className="flex-1 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <h2 className="text-3xl font-bold text-[#208cdb]">
                Growing Together Through Meaningful Connections
              </h2>
              <p>
                Collaboration nurtures confidence and helps children understand
                the importance of relationships in their learning journey. By
                interacting with peers, they build communication skills,
                emotional resilience, and a sense of shared responsibility. Our
                approach ensures that every child feels heard, appreciated, and
                empowered to contribute, creating a vibrant learning community
                where growth is truly collective.
              </p>
            </div>
            <div className="flex-1">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">
                    Team-Based Learning
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Children engage in group projects and shared
                      problem-solving tasks that encourage cooperation,
                      leadership, and mutual understanding.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl font-bold">
                    Social-Emotional Development
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Activities support emotional expression, empathy,
                      self-regulation, and healthy relationship-building.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-bold">
                    Communication & Language Growth
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Collaborative discussions and storytelling circles help
                      children articulate ideas clearly and build strong
                      language skills.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl font-bold">
                    Creative Group Play
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Open-ended play experiences allow children to imagine,
                      design, build, and create together while developing
                      creativity and flexibility.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-xl font-bold">
                    Community-Building Activities
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Circle time, group reflections, and shared routines help
                      children feel connected, valued, and part of a supportive
                      community.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
