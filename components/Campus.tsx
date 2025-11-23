import Image from "next/image";
import React from "react";

const Campus = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 grid-rows-2 gap-0">
        <div className="bg-[#E1F8DC] p-30 flex flex-col gap-10">
          <h2 className="text-5xl text-[#0F715F]">Building a love for <br/>Learning</h2>
          <p>Our spaces are thoughtfully designed keeping in mind the safety of young children as they move freely and explore the world. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aut sequi eum similique modi at dolorum id! Repellat, dolor iure soluta illo nihil placeat a sunt minima ducimus quia earum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis amet praesentium at sunt corporis minus mollitia dignissimos quisquam perspiciatis minima.</p>

          <div className="flex items-end gap-2">
            <Image src={'/assets/shapes/half-circle.png'} height={70} width={70} alt="half double circle" />
            <p>Read More</p>
          </div>
        </div>
        <div className="relative">
          <Image src={'/assets/campus/welcome.png'} fill alt="campus 1" />
        </div>
        <div className="row-start-2 relative">
          <Image src={'/assets/campus/welcome.png'} fill alt="campus 1" />
        </div>
        <div className="row-start-2 bg-[#FF81B9]/15 p-30 flex flex-col gap-10">
        <h2 className="text-5xl text-[#E15E89]">A school for the <br/> real world</h2>
          <p>Our spaces are thoughtfully designed keeping in mind the safety of young children as they move freely and explore the world. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aut sequi eum similique modi at dolorum id! Repellat, dolor iure soluta illo nihil placeat a sunt minima ducimus quia earum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis amet praesentium at sunt corporis minus mollitia dignissimos quisquam perspiciatis minima.</p>

          <div className="flex items-end gap-2">
            <Image src={'/assets/shapes/double-triangle.png'} height={70} width={70} alt="half double circle" />
            <p>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
