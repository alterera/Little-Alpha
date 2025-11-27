import React from "react";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <DynamicBreadcrumb className="py-6" />
        <div className="w-full flex rounded-2xl overflow-hidden h-80">
          <div className="flex-1 bg-[#0F715F] flex items-end">
            <h2 className="text-5xl font-semibold p-10 text-white">
              About <br /> Little Alpha
            </h2>
          </div>
          <div className="flex-1 relative">
            <Image src={'/assets/blog-1.png'} fill alt="slide" className="object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
