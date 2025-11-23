import Image from "next/image";
import React from "react";

const Facilities = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[#0F715F] mb-6">
          <h1 className="text-2xl font-bold">Our Facilities</h1>
          <button className="rounded-tl-2xl rounded-br-2xl border border-[#0F715F] p-2 px-4 whitespace-nowrap">
            View All Facilities{" "}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          <div className="bg-[#FF9759] text-white relative py-10 aspect-square min-h-[220px] sm:min-h-[200px] rounded-tr-[10%] rounded-bl-[10%] overflow-hidden">
            <Image
              src={"/assets/facilities/cloud.png"}
              height={150}
              width={280}
              alt="icon-1"
              className="absolute left-0 top-10"
            />
            <Image
              src={"/assets/facilities/f-1.png"}
              height={200}
              width={280}
              alt="facility 1"
              className="absolute right-0 bottom-0"
            />
            <h2 className="absolute bottom-10 left-6 text-lg sm:text-3xl font-semibold">
              Montessori <br />
              Learning Tools
            </h2>
          </div>
          <div className="bg-[#1A8049] text-white relative py-10 aspect-square min-h-[320px] sm:min-h-[400px] rounded-tr-[10%] rounded-bl-[10%] overflow-hidden">
            <Image
              src={"/assets/facilities/curve.png"}
              height={150}
              width={180}
              alt="icon-2"
              className="absolute left-0 top-0"
            />
            <Image
              src={"/assets/facilities/f-1.png"}
              height={200}
              width={280}
              alt="facility 2"
              className="absolute right-0 bottom-0"
            />
            <h2 className="absolute bottom-10 left-6 text-lg sm:text-3xl font-semibold">
              Play <br />
              Based Learning
            </h2>
          </div>
          <div className="bg-[#4792C7] text-white relative py-10 aspect-square min-h-[320px] sm:min-h-[400px] rounded-tl-[10%] rounded-br-[10%] overflow-hidden">
            <Image
              src={"/assets/facilities/leaf.png"}
              height={150}
              width={350}
              alt="icon-3"
              className="absolute left-0 bottom-0"
            />
            <Image
              src={"/assets/facilities/f-1.png"}
              height={200}
              width={280}
              alt="facility 3"
              className="absolute right-0 bottom-0"
            />
            <h2 className="absolute bottom-10 left-6 text-lg sm:text-3xl font-semibold">
              Holistic <br />
              Child Development
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
