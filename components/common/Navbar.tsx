import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Image
          src={"/logo.png"}
          height={80}
          width={200}
          alt="little alpha play school logo"
        />

        <div className="flex items-center gap-10">
          <ul className="flex gap-10 text-white">
            <li>Who We Are</li>
            <li>Our Curriculum</li>
            <li>Campus Life</li>
            <li>Events</li>
          </ul>

          <button className="bg-[#0F715F] text-white p-2 px-4 rounded-tl-2xl rounded-br-2xl">
            Inquire Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
