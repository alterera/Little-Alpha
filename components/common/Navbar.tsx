import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="">
      <nav className="max-w-7xl mx-auto py-5 flex justify-between items-center">
        <Image
          src={"/next.svg"}
          height={50}
          width={100}
          alt="little alpha play school logo"
        />

        <div className="flex items-center gap-5">
          <ul className="flex gap-5">
            <li>Who We Are</li>
            <li>Our Curriculum</li>
            <li>Campus Life</li>
            <li>Events</li>
          </ul>

          <button className="bg-[#0F715F] text-white p-2 rounded-tl-2xl rounded-br-2xl">
            Inquire Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
