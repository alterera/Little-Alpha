"use client";

import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import React, { useState } from "react";

const curriculumSlides = [
  { id: 1, src: "/assets/hero/h1.webp", alt: "Curriculum overview" },
  { id: 2, src: "/assets/hero-slide/about/a1.webp", alt: "Student engagement" },
  { id: 3, src: "/assets/hero-slide/in1.webp", alt: "Learning activities" },
];

const tabContent = [
  {
    id: 1,
    title: "Hands-On Exploration",
    content: "Children engage with a variety of materials—natural, sensory, artistic, and scientific—that invite open-ended exploration. Through touching, manipulating, building, and observing, they gain a deeper understanding of concepts and develop essential cognitive and motor skills.",
  },
  {
    id: 2,
    title: "Learning in Real-World Contexts",
    content: "From nature walks and cooking activities to interactive role-play and thematic learning zones, children experience real-world scenarios that deepen comprehension. These authentic experiences make learning memorable, supporting children in understanding cause and effect, sequencing, and problem-solving.",
  },
  {
    id: 3,
    title: "Reflective Thinking & Expression",
    content: "Reflection is a key component of experiential learning. Children are encouraged to talk about what they did, how they felt, and what they discovered. Through drawing, storytelling, discussions, and journaling, they make sense of their experiences and strengthen language, reasoning, and self-expression.",
  },
];

const page = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <DynamicBreadcrumb className="py-6" />

        <HeroBanner
          subtitle="Curriculum"
          title="Experiential Learning"
          slides={curriculumSlides}
          backgroundColor="#D3465A"
        />

        <section className="mt-10 sm:mt-12 lg:mt-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-center lg:items-start">
            <div className="flex-1 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
              At Little Alpha, we believe children learn best when they actively engage with the world around them. Experiential Learning allows them to discover concepts through hands-on activities, meaningful interactions, and real-life scenarios. Whether they are exploring nature, experimenting with materials, or participating in themed learning environments, children develop a deeper understanding of how things work. Through these moments of doing, touching, observing, and creating, learning becomes not just a lesson—but an experience they truly connect with.
              </p>
            </div>
            <div className="flex-1 w-full lg:w-auto shrink-0">
              <div className="relative w-150 h-100 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={"/assets/hero-slide/about/a1.webp"}
                  fill
                  alt="Curriculum image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 sm:mt-12 lg:mt-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-center lg:items-start">
            <div className="w-full flex-1 lg:w-auto shrink-0">
              <div className="relative w-150 h-100 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={"/assets/hero-slide/about/a2.webp"}
                  fill
                  alt="Curriculum image"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
              When children engage directly with their environment, they make stronger connections and retain knowledge more effectively. Our classrooms and outdoor areas are filled with opportunities for sensory exploration, imaginative play, scientific investigation, and movement-based learning. Each activity encourages curiosity and supports the development of problem-solving skills, creativity, and confidence. Experiential learning transforms abstract ideas into concrete understanding, enabling children to grasp concepts with clarity and joy.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section - Text Left, Image Right with Background */}
        <section className="mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10 lg:py-12 bg-[#EEF7FF] -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-center lg:items-start">
              <div className="flex-1 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Experiential Learning gives children the freedom to explore materials, experiment with ideas, and make discoveries at their own pace. It encourages independence, exploration, and the natural drive to understand the world through direct interaction.
                </p>
              </div>
              <div className="flex-1 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Through guided hands-on experiences, children learn to observe patterns, test possibilities, and reflect on outcomes. Whether mixing colors, planting seeds, building structures, or engaging in role-play, each activity becomes a stepping stone in their cognitive and emotional growth. These experiences strengthen fine and gross motor skills, support language development, and nurture critical thinking. Most importantly, children gain confidence as they discover that their actions lead to meaningful results. By engaging with real-world materials and scenarios, they develop a strong foundation for future learning that is grounded in curiosity, exploration, and joyful discovery.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10 lg:py-12 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-8 xl:gap-10 items-center lg:items-start">
          <div className="flex-1 w-full lg:w-auto shrink-0">
              <div className="relative w-full sm:w-64 md:w-72 lg:w-150 h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={"/assets/hero-slide/about/a3.webp"}
                  fill
                  alt="Curriculum image"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
              Experiential Learning transforms everyday moments into powerful opportunities for growth. Our educators intentionally design activities that challenge children to ask questions, make decisions, and collaborate with peers. Whether indoors or outdoors, children are encouraged to take initiative and follow their interests, turning simple experiences into rich learning adventures. This approach cultivates resilience, independence, and flexibility—skills that are essential for navigating the world with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="bg-[#FFF6EF] mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10 lg:py-12 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              {tabContent.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-[#F18940] text-white shadow-lg scale-105"
                      : "bg-white text-[#F18940] border-2 border-[#F18940] hover:bg-[#F18940]/10"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="">
              <div
                key={activeTab}
                className="animate-in fade-in duration-300"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F18940] mb-4 sm:mb-6">
                  {tabContent.find((tab) => tab.id === activeTab)?.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {tabContent.find((tab) => tab.id === activeTab)?.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
