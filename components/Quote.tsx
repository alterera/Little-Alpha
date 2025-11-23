import Image from "next/image";
import React from "react";

const Quote = () => {
  return (
    <div className="w-full bg-[#E2EEFF] relative overflow-hidden">
      <Image
        src={"/assets/shapes/line-shape.png"}
        height={100}
        width={350}
        alt="shape"
        className="absolute top-0 left-0"
      />
      <Image
        src={"/assets/shapes/line-shape-2.png"}
        height={100}
        width={350}
        alt="shape"
        className="absolute bottom-20 right-0"
      />
      <div className="max-w-6xl mx-auto flex py-30 gap-40">
        <div className="z-10">
          <Image
            src={"/assets/person/nipun-gupta.webp"}
            height={400}
            width={400}
            alt="nipun gupta"
            className="rounded-full"
          />
        </div>

        <div className="flex items-center relative">
          <Image src={'/assets/shapes/quote.svg'} height={80} width={80} alt="quote" className="absolute -top-5 -left-10" />
          <Image src={'/assets/shapes/quote.svg'} height={80} width={80} alt="quote" className="absolute bottom-0 right-0 rotate-180" />
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl text-[#0F715F] leading-13">
              Learning is what happens <br/> when you are busy doing <br/>something else.
            </h2>
            <p className="text-[#4F4F4F]">Mr. Nipun Gupta, Director</p>
            <div className="flex items-center gap-4 mt-5">
              <div className="h-12 w-12 bg-[#F4D548] rounded-full"></div>
              <p className="uppercase">About Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
