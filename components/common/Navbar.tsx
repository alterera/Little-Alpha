"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Who We Are", "Our Curriculum", "Campus Life", "Events"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <Image
          src={"/logo-white.png"}
          height={80}
          width={200}
          alt="little alpha play school logo"
          className="w-[100px] sm:w-[180px] md:w-[140px]"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-white">
          <ul className="flex gap-6 lg:gap-10 text-sm lg:text-base">
            {navLinks.map((link) => (
              <li key={link} className="cursor-pointer hover:text-[#F4D548] transition">
                {link}
              </li>
            ))}
          </ul>

          <button className="bg-[#0F715F] text-white py-2 px-4 rounded-tl-2xl rounded-br-2xl hover:bg-[#0b5b43] transition">
            Inquire Now
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-3 text-white">
          <button className="bg-[#0F715F] text-white py-2 px-4 rounded-tl-2xl rounded-br-2xl text-sm font-semibold">
            Inquire
          </button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[40vw] min-w-[260px] bg-[#08382b] text-white z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 gap-8">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={toggleMenu}
              aria-label="Close navigation menu"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={closeMenu}
                className="text-left hover:text-[#F4D548] transition"
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="mt-auto">
            <button className="w-full bg-[#0F715F] text-white py-3 rounded-tl-2xl rounded-br-2xl font-semibold">
              Inquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <button
          aria-label="Close menu overlay"
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
    </header>
  );
};

export default Navbar;
