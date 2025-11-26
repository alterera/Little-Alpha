"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const navLinks = [
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/our-curriculum", label: "Our Curriculum" },
  { href: "/campus-life", label: "Campus Life" },
  { href: "/events", label: "Events" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute top-[48px] sm:top-[52px] left-0 w-full z-40 bg-transparent">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <Image
          src={"/logo-white.png"}
          height={80}
          width={200}
          alt="little alpha play school logo"
          className="w-[100px] sm:w-[180px] md:w-[140px]"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <ul className="flex gap-6 lg:gap-10 text-sm lg:text-base">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Button
                    variant="link"
                    effect="hoverUnderline"
                    className="text-white! font-medium hover:text-[#F75691]! transition-colors cursor-pointer after:bg-white"
                  >
                    {item.label}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>

          {/* <button className="bg-[#0F715F] text-white py-2 px-4 rounded-tl-2xl rounded-br-2xl hover:bg-[#0b5b43] transition">
            Inquire Now
          </button> */}

          <Button
            effect="shine"
            className="rounded-none rounded-tl-2xl rounded-br-2xl bg-[#0F715F] hover:text-white hover:bg-[#F75691] hover:cursor-pointer hover:shadow-xl"
          >
            Inquire Now
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-3 text-white">
          <Button
            effect="shine"
            className="rounded-none rounded-tl-2xl rounded-br-2xl bg-[#0F715F] hover:text-white hover:bg-[#F75691] hover:cursor-pointer hover:shadow-xl"
          >
            Inquire Now
          </Button>
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
        className={`fixed top-0 right-0 h-full w-[40vw] min-w-[260px] bg-[#08382b] text-white z-[100] transform transition-transform duration-500 ease-in-out ${
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
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-left text-white hover:text-[#F75691] transition-colors"
              >
                {item.label}
              </Link>
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
          className="fixed inset-0 bg-black/40 z-[90] md:hidden"
        />
      )}
    </header>
  );
};

export default Navbar;
