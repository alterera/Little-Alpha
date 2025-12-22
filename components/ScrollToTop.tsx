"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height (approximately 80vh on mobile, 100vh on desktop)
      const heroHeight = window.innerWidth <= 768 
        ? window.innerHeight * 0.8 
        : window.innerHeight;
      
      // Show button when scrolled past hero section
      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check on mount and add scroll listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[9999] h-12 w-12 rounded-full bg-[#F75691] hover:bg-[#E15E89] text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0 flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
    </Button>
  );
};

export default ScrollToTop;

