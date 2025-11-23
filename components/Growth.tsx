import Image from "next/image";
import React from "react";
import { NumberTicker } from "./ui/number-ticker";

const CounterData = [
  {
    count: 100,
    color: "E4282E",
    title: "Years of Experience"
  },
  {
    count: 53,
    color: "0C7C55",
    title: "Awards Won"
  },
  {
    count: 500,
    color: "D63E75",
    title: "Students Enrolled"
  },
  {
    count: 34,
    color: "6C3891",
    title: "Expert Faculty"
  },
]

const Growth = () => {
  return (
    <div className="w-full bg-[#FEFFEF] relative">
      <Image
        src={"/assets/icons/crown.png"}
        height={100}
        width={100}
        alt="crown"
        className="absolute left-0 bottom-10"
      />
      <div className="max-w-7xl mx-auto py-10">
        <h2 className="text-[#0F715F] text-center text-4xl uppercase font-bold">
          Growth Story
        </h2>
        <p className="text-center py-5 text-xxl pb-20">
          The story, which begins 5 years back with one preschool, resulted in a
          well-established leading preschool brand and writing a new chapter in
          its success story every day. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Dicta eligendi deleniti quo esse culpa recusandae
          commodi sapiente tempore error asperiores?
        </p>

        <div className="flex justify-around gap-40 pb-10">
          {CounterData.map((data) => (
            <div className="flex flex-col items-center gap-2" key={data.count}>
              <h2 className="text-5xl font-bold" style={{ color: `#${data.color}` }}>
                <NumberTicker value={data.count} style={{ color: `#${data.color}` }} />+
              </h2>
              <p className="text-xl">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Growth;
