import Image from "next/image";
import React from "react";

const Campus = () => {
  return (
    <div className="w-full">
      {/* Large Screen: Grid Layout (Text Left, Image Right, then Image Left, Text Right) */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-0">
        {/* First Row: Text Left, Image Right */}
        <div className="bg-[#E1F8DC] p-8 xl:p-12 flex flex-col gap-6 xl:gap-10">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[#0F715F] font-bold leading-tight">
            Building a love for <br />
            Learning
          </h2>
          <p className="text-sm xl:text-base text-gray-700 leading-relaxed">
            Our spaces are thoughtfully designed keeping in mind the safety of
            young children as they move freely and explore the world. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            aut sequi eum similique modi at dolorum id! Repellat, dolor iure
            soluta illo nihil placeat a sunt minima ducimus quia earum Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Facilis amet
            praesentium at sunt corporis minus mollitia dignissimos quisquam
            perspiciatis minima.
          </p>

          <div className="flex items-end gap-2 mt-auto">
            <Image
              src={"/assets/shapes/half-circle.png"}
              height={70}
              width={70}
              alt="half circle"
              className="w-12 h-12 xl:w-16 xl:h-16"
            />
            <p className="text-sm xl:text-base font-medium text-[#0F715F] cursor-pointer hover:underline">
              Read More
            </p>
          </div>
        </div>
        <div className="relative min-h-[400px] xl:min-h-[500px]">
          <Image
            src={"/assets/campus/welcome.png"}
            fill
            alt="campus 1"
            className="object-cover"
          />
        </div>

        {/* Second Row: Image Left, Text Right */}
        <div className="row-start-2 relative min-h-[400px] xl:min-h-[500px]">
          <Image
            src={"/assets/campus/welcome.png"}
            fill
            alt="campus 2"
            className="object-cover"
          />
        </div>
        <div className="row-start-2 bg-[#FF81B9]/15 p-8 xl:p-12 flex flex-col gap-6 xl:gap-10">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[#E15E89] font-bold leading-tight">
            A school for the <br />
            real world
          </h2>
          <p className="text-sm xl:text-base text-gray-700 leading-relaxed">
            Our spaces are thoughtfully designed keeping in mind the safety of
            young children as they move freely and explore the world. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            aut sequi eum similique modi at dolorum id! Repellat, dolor iure
            soluta illo nihil placeat a sunt minima ducimus quia earum Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Facilis amet
            praesentium at sunt corporis minus mollitia dignissimos quisquam
            perspiciatis minima.
          </p>

          <div className="flex items-end gap-2 mt-auto">
            <Image
              src={"/assets/shapes/double-triangle.png"}
              height={70}
              width={70}
              alt="double triangle"
              className="w-12 h-12 xl:w-16 xl:h-16"
            />
            <p className="text-sm xl:text-base font-medium text-[#E15E89] cursor-pointer hover:underline">
              Read More
            </p>
          </div>
        </div>
      </div>

      {/* Small Screen: Sequential Layout (Text, Image, Text, Image) */}
      <div className="flex flex-col lg:hidden">
        {/* First Text Block */}
        <div className="bg-[#E1F8DC] p-6 sm:p-8 flex flex-col gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0F715F] font-bold leading-tight">
            Building a love for <br />
            Learning
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our spaces are thoughtfully designed keeping in mind the safety of
            young children as they move freely and explore the world. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            aut sequi eum similique modi at dolorum id! Repellat, dolor iure
            soluta illo nihil placeat a sunt minima ducimus quia earum Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Facilis amet
            praesentium at sunt corporis minus mollitia dignissimos quisquam
            perspiciatis minima.
          </p>

          <div className="flex items-end gap-2 mt-2">
            <Image
              src={"/assets/shapes/half-circle.png"}
              height={70}
              width={70}
              alt="half circle"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <p className="text-sm sm:text-base font-medium text-[#0F715F] cursor-pointer hover:underline">
              Read More
            </p>
          </div>
        </div>

        {/* First Image */}
        <div className="relative h-64 sm:h-80 md:h-96">
          <Image
            src={"/assets/campus/welcome.png"}
            fill
            alt="campus 1"
            className="object-cover"
          />
        </div>

        {/* Second Text Block */}
        <div className="bg-[#FF81B9]/15 p-6 sm:p-8 flex flex-col gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E15E89] font-bold leading-tight">
            A school for the <br />
            real world
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our spaces are thoughtfully designed keeping in mind the safety of
            young children as they move freely and explore the world. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            aut sequi eum similique modi at dolorum id! Repellat, dolor iure
            soluta illo nihil placeat a sunt minima ducimus quia earum Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Facilis amet
            praesentium at sunt corporis minus mollitia dignissimos quisquam
            perspiciatis minima.
          </p>

          <div className="flex items-end gap-2 mt-2">
            <Image
              src={"/assets/shapes/double-triangle.png"}
              height={70}
              width={70}
              alt="double triangle"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <p className="text-sm sm:text-base font-medium text-[#E15E89] cursor-pointer hover:underline">
              Read More
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative h-64 sm:h-80 md:h-96">
          <Image
            src={"/assets/campus/welcome.png"}
            fill
            alt="campus 2"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Campus;
