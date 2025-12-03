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

        {/* Quote Section */}
        <section className="mt-10 sm:mt-12 lg:mt-16">
          <div className="max-w-5xl mx-auto bg-[#FCECEE] p-6 sm:p-10 md:p-12 lg:p-16 rounded-2xl">
            <p className="text-[#D3465A] text-center font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed">
              Our holistic approach ensures that socio-emotional, physical, and
              cognitive development is supported during this sensitive time of
              growth. As a PYP school, we provide a high-quality curriculum that
              is both relevant and challenging, guiding our learners through
              exciting transdisciplinary units of inquiry. This method integrates
              appropriate skills and knowledge from various subject areas into
              authentic and contextual units of inquiry, making their learning
              experience meaningful and engaging.
            </p>
          </div>
        </section>

        {/* Grid Section */}
        <section className="mt-10 sm:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="md:col-span-2">
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={'/assets/blog-1.png'}
                  fill
                  alt="Curriculum showcase"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, totam nobis? 
                Corporis officia, incidunt placeat obcaecati at maxime reprehenderit id amet 
                possimus. Rem, eligendi cupiditate dolor dolorem quas assumenda repellendus.
              </p>
            </div>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto placeat 
                reiciendis voluptates in, ipsa iste ipsam officia eligendi magnam odio pariatur 
                doloribus. Iste repellendus beatae illo, ullam sequi quibusdam quisquam obcaecati 
                quae unde possimus commodi voluptates iure, quod fugit dolorem veniam alias illum 
                perspiciatis laudantium consectetur totam hic ut.
              </p>
            </div>
          </div>
        </section>

        {/* Second Quote Section */}
        <section className="mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10 lg:py-12 bg-[#FCECEE] -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#D3465A] text-center font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
              Our holistic approach ensures that socio-emotional, physical, and
              cognitive development is supported during this sensitive time of
              growth. As a PYP school.
            </p>
          </div>
        </section>

        {/* Final Section - Image Left, Text Right */}
        <section className="mt-10 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-center lg:items-start">
            <div className="w-full lg:w-auto shrink-0">
              <div className="relative w-full lg:w-96 xl:w-[500px] h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={'/assets/blog-1.png'}
                  fill
                  alt="Early Years Campus"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                At the EYC, learning is driven by a balance of structured and guided inquiry, 
                with small group teaching and direct instruction providing personalized support. 
                Authentic experiences—exploring nature, experimenting with light, or cooking in 
                the children's kitchen—encourage children to observe, question, and connect ideas. 
                Play lies at the heart of learning, with neuroscience showing its vital role in 
                strengthening brain pathways, fostering creativity, and building problem-solving 
                and critical-thinking skills.
              </p>
              <p>
                Our strong commitment to culture and values is evident through the many 
                celebrations and traditions we engage in. These activities help us connect with 
                our Indian heritage while at the same time provide opportunities for learning 
                and help us appreciate other cultures, thus promoting international mindedness.
              </p>
              <p>
                Our Early Years Campus is also inspired by the Reggio Emilia approach, which 
                compliments the PYP in enabling children's creativity and their sense of wonder 
                and awe about the world around them.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
