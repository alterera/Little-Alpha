import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import React from "react";

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
          subtitle="Our Curriculum"
          title="Learning journey"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quod aspernatur itaque, architecto repellat earum
                dolor reprehenderit accusantium aliquid, quam provident
                cupiditate veritatis consequatur fuga odio reiciendis non amet
                possimus!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                culpa dolorum distinctio nisi molestias aliquam iste neque
                magnam enim facilis. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Harum quidem itaque atque dolore id vitae
                explicabo quam eaque modi dolores neque, odio autem,
                consequuntur deleniti. Reprehenderit at facilis odit animi.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quod aspernatur itaque, architecto repellat earum
                dolor reprehenderit accusantium aliquid, quam provident
                cupiditate veritatis consequatur fuga odio reiciendis non amet
                possimus!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                culpa dolorum distinctio nisi molestias aliquam iste neque
                magnam enim facilis. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Harum quidem itaque atque dolore id vitae
                explicabo quam eaque modi dolores neque, odio autem,
                consequuntur deleniti. Reprehenderit at facilis odit animi.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10 lg:py-12 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex gap-10">
            <div className="flex-1 bg-[#FCECEE] text-[#D3465A] p-8 rounded-2xl flex justify-center items-center">
              <p className="text-center text-xl font-bold">
                Our written curriculum has been developed to meet the needs of a
                holistic education. Academic rigour, social-emotional
                well-being, values and attributes come together to provide a
                balanced experience for students in a strong learning community.
                The inquiry process allows for individual, small group and
                whole-group experiences that support and strengthen the skills
                of collaboration and communication.
              </p>
            </div>

            <div className="flex-1">
              <p>
                Our teachers utilise structured and guided inquiry to drive
                learning, incorporating direct-instruction and modelling through
                mini-workshops and small group teaching. Learners are supported
                through inductive and deductive approaches, they are encouraged
                to; gather data, question and test theories, forming
                generalisations or “big ideas” of their learning. As students
                learn how to learn, they are empowered to initiate and co-create
                learning along with their teachers. Strategies to make thinking
                and learning visible are utilised consistently to develop habits
                of the mind. <br /> <br />Emphasis is placed on monitoring and documenting
                learning as students reflect and self-assess, and receive
                meaningful feedback from teachers and peers to inform their next
                steps. Learners use a variety of strategies to monitor and
                document learning; students are involved in the co-construction
                of success criteria and learning goals as they take
                responsibility for their learning.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                quod aspernatur itaque, architecto repellat earum dolor
                reprehenderit accusantium aliquid, quam provident cupiditate
                veritatis consequatur fuga odio reiciendis non amet possimus!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam culpa
                dolorum distinctio nisi molestias aliquam iste neque magnam enim
                facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Harum quidem itaque atque dolore id vitae explicabo quam eaque modi
                dolores neque, odio autem, consequuntur deleniti. Reprehenderit at
                facilis odit animi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
