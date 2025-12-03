import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const admissionSlides = [
  { id: 1, src: "/assets/blog-1.png", alt: "Curriculum overview" },
  { id: 2, src: "/assets/blog-1.png", alt: "Learning activities" },
  { id: 3, src: "/assets/blog-1.png", alt: "Student engagement" },
];

const Admission = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <DynamicBreadcrumb className="py-6" />

        <HeroBanner
          subtitle="Instructions"
          title="Admissions"
          slides={admissionSlides}
          backgroundColor="#48A7A1"
        />

        <div className="flex justify-center py-10">
          <Link href={"/admissions/instructions"} className="w-fit">
            <Button className="rounded-full border border-black bg-transparent text-black hover:bg-transparent cursor-pointer">
              Click here to Proceed
              <MoveUpRight />
            </Button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src={"/announcement.png"}
            height={400}
            width={800}
            alt="announcement"
          />
        </div>

        <div className="flex justify-center py-10">
          <Link href={"/admissions/instructions"} className="w-fit">
            <Button className="rounded-full border border-black bg-transparent text-black hover:bg-transparent cursor-pointer">
              Click here to Proceed
              <MoveUpRight />
            </Button>
          </Link>
        </div>

        <div className="bg-[#fee7c1] max-w-7xl mx-auto rounded-xl">
          <div className="flex justify-between p-8">
            <div>
              <h1>Admissions Office </h1>
              <p>
                Nita Mukesh Ambani Junior School, Bandra-Kurla Complex <br /> Bandra
                (East), Mumbai - 400098.
              </p>
            </div>

            <div>
              <ul>
                <li>+91 22 3113 7333 (9:00 a.m. to 5:00 p.m.)</li>
                <li>admissions@nmajs.edu.in</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
