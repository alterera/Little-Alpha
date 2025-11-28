import DynamicBreadcrumb from '@/components/common/DynamicBreadcrumb';
import HeroBanner from '@/components/common/HeroBanner';
import React from 'react'

const campusSlides = [
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
          subtitle="Student Life"
          title="Life at Little Alpha"
          slides={campusSlides}
        />
        </div>
        </div>
  )
}

export default page