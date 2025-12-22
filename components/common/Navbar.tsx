"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, MoveUpRight, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "Who We Are" },
  { href: "/curriculum", label: "Our Curriculum" },
  { href: "/campus-life", label: "Campus Life" },
  { href: "/events", label: "Events" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const headerClasses = `left-0 w-full z-50 ${
    isHomePage
      ? "absolute top-[48px] sm:top-[52px] bg-transparent"
      : "relative top-0 bg-white border-b border-[#dbecfb]"
  }`;

  const desktopLinkClasses = `${
    isHomePage
      ? "text-white after:bg-white"
      : "text-[#0F715F] after:bg-[#0F715F]"
  } font-medium hover:text-[#F75691]! transition-colors cursor-pointer`;

  const mobileActionsText = isHomePage ? "text-white" : "text-[#0F715F]";
  const mobileMenuButtonClasses = `p-2 rounded-full ${
    isHomePage
      ? "bg-white/20 hover:bg-white/30 text-white"
      : "bg-black/10 hover:bg-black/20 text-[#0F715F]"
  } transition`;

  const logoSrc = isHomePage ? "/logo-white.png" : "/logo-black.png";

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={headerClasses}>
      <nav className="max-w-8xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4">
        <Link href="/">
          <Image
            src={logoSrc}
            height={80}
            width={200}
            alt="little alpha play school logo"
            className="w-[100px] sm:w-[180px] md:w-[140px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <ul
            className={`flex gap-6 lg:gap-10 text-sm lg:text-base ${
              isHomePage ? "text-white" : "text-[#0F715F]"
            }`}
          >
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Button
                    variant="link"
                    effect="hoverUnderline"
                    className={`${desktopLinkClasses}`}
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

          <Link href={"/admissions"}>
            <Button
              effect="shine"
              className="rounded-none rounded-tl-2xl rounded-br-2xl bg-[#0F715F] hover:text-white hover:bg-[#F75691] hover:cursor-pointer"
            >
              Inquire Now <MoveUpRight />
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div
          className={`flex md:hidden items-center gap-3 ${mobileActionsText} relative z-10`}
        >
          <Link href={"/admissions"}>
            <Button
              effect="shine"
              className="rounded-none rounded-tl-2xl rounded-br-2xl bg-[#0F715F] hover:text-white hover:bg-[#F75691] hover:cursor-pointer relative z-10"
            >
              Inquire Now
            </Button>
          </Link>
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className={`${mobileMenuButtonClasses} relative z-10`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[50vw] min-w-[260px] bg-[#08382b] text-white z-9999 transform transition-transform duration-500 ease-in-out ${
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
            <Link href={"/admissions"}>
              <button className="w-full bg-[#0F715F] text-white py-3 rounded-tl-2xl rounded-br-2xl font-semibold">
                Inquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <button
          aria-label="Close menu overlay"
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 z-[9998] md:hidden"
        />
      )}
    </header>
  );
};

export default Navbar;
