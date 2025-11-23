import Image from "next/image";
import React from "react";

const curriculumData = [
  {
    id: 1,
    icon: "/assets/curriculum/yellow-paint-tube.png",
    img: "/assets/curriculum/circle.png",
    bgColor: "bg-[#DFC8FD]",
    title: "Inquiry Based Learning",
    description:
      "Lorem ipsum dolor sit amet consectur adipiscing elit sed do iusmod.",
  },
  {
    id: 2,
    icon: "/assets/curriculum/yellow-paint-tube.png",
    img: "/assets/curriculum/thunder.png",
    bgColor: "bg-[#704FE7]",
    title: "Collaborative Spaces",
    description:
      "Lorem ipsum dolor sit amet consectur adipiscing elit sed do iusmod.",
  },
  {
    id: 3,
    icon: "/assets/curriculum/yellow-paint-tube.png",
    img: "/assets/curriculum/star.png",
    bgColor: "bg-[#FFD463]",
    title: "Experential Learning",
    description:
      "Lorem ipsum dolor sit amet consectur adipiscing elit sed do iusmod.",
  },
  // {
  //   id: 4,
  //   icon: "/assets/curriculum/yellow-paint-tube.png",
  //   img: "/assets/curriculum/star.png",
  //   bgColor: "bg-[#FF81B9]",
  //   title: "Holistic Developement",
  //   description:
  //     "Lorem ipsum dolor sit amet consectur adipiscing elit sed do iusmod.",
  // },
];

const Curriculum = () => {
  return (
    <div className="w-full bg-[#0F715F] relative">
      <Image src={'/assets/black-cat-1.png'} height={200} width={250} alt="black-panthar" className="absolute right-0 top-10" />
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="pb-5 text-3xl text-white font-bold">Interactive Curriculum <br/>for kids</h1>
        <div className="flex gap-5 justify-between">
          {curriculumData.map((data) => (
            <div className={`${data.bgColor} rounded-3xl p-10 relative aspect-square flex flex-col justify-between`} key={data.id}>
              <Image
                src={data.img}
                height="150"
                width="150"
                alt="shape"
                className="absolute right-0 top-0"
              />
              <div className="relative">
                <Image
                  src={"/assets/curriculum/icon-bg.png"}
                  height={80}
                  width={80}
                  alt="icon bg"
                />

                <Image
                  src={data.icon}
                  height={50}
                  width={50}
                  alt="icon"
                  className="absolute top-3 left-3"
                />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold">{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="pt-5 text-white">
          Our curriculum is divided into three parts to provide holistic
          education that integrates academic excellence, values, and innovation.
        </p>
      </div>
    </div>
  );
};

export default Curriculum;
