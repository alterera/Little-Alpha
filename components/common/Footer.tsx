"use client";

import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Constants for footer content
const QUICK_LINKS = [
  { label: "Book A Visit", href: "#" },
  { label: "Pay Fees", href: "#" },
];

const USEFUL_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Admission Procedure", href: "#" },
  { label: "Life at Little Alpha", href: "#" },
  { label: "Events", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Our Curriculum", href: "#" },
];

const RESOURCES = [
  { label: "Careers", href: "#" },
  { label: "Parent Login", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const CONTACT_INFO = {
  address: "Little Alpha Play School, GNB Rd, 32/B Orion Towers, Bikaner Rajasthan - 124672 IN",
  email: { label: "info@littlealpha.in", href: "#" },
  phone: { label: "+91 4278 8922 90", href: "#" },
};

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const COPYRIGHT = {
  text: "© 2025 - Little Alpha Play School. All Rights Reserved.",
  developer: "Developed by Alterera Networks",
};

const Footer = () => {
  return (
    <div className="w-full bg-[#1e3569] relative">
      <Image 
        src={'/assets/shapes/sharp-curve.svg'} 
        height={100} 
        width={300} 
        alt="footer-shape" 
        className="absolute -bottom-0.5 right-0 md:right-1/3 w-40 sm:w-56 md:w-52 lg:w-72 opacity-30 pointer-events-none select-none"
        priority
      />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20">
      {/* <Image 
        src={'/assets/icons/grass.png'} 
        height={100} 
        width={200} 
        alt="footer-grass" 
        className="absolute bottom-0 left-4 sm:left-10 md:left-16 lg:left-24 w-28 sm:w-40 md:w-56 lg:w-72 pointer-events-none select-none"
        priority={false}
      /> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Logo and Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <Image 
              src={"/logo-white.png"} 
              height={150} 
              width={150} 
              alt="logo-footer"
              className=""
            />
            <div className="hidden md:flex flex-col gap-3 pl-3">
              {QUICK_LINKS.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-gray-100 hover:text-[#F4D548] transition-colors duration-200 text-sm font-bold md:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-[#F4D548] font-bold text-lg md:text-xl mb-2">
              Useful Links
            </h2>
            <div className="flex flex-col gap-3">
              {USEFUL_LINKS.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-gray-100 hover:text-[#F4D548] font-medium transition-colors duration-200 text-sm md:text-base w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-[#F4D548] font-bold text-lg md:text-xl mb-2">
              Resources
            </h2>
            <div className="flex flex-col gap-3">
              {RESOURCES.map((resource, index) => (
                <Link 
                  key={index}
                  href={resource.href}
                  className="text-gray-100 hover:text-[#F4D548] font-medium transition-colors duration-200 text-sm md:text-base"
                >
                  {resource.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Reach Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-[#F4D548] font-bold text-lg md:text-xl mb-2">
              Reach Us
            </h2>
            <div className="flex flex-col gap-4">
              <address className="text-gray-100 text-sm md:text-base not-italic font-medium leading-relaxed">
                {CONTACT_INFO.address}
              </address>
              <div className="flex flex-col gap-3">
                <Link 
                  href={CONTACT_INFO.email.href} 
                  className="flex items-center gap-2 text-gray-100 font-medium hover:text-[#F4D548] transition-colors duration-200 text-sm md:text-base"
                >
                  <Mail size={16} className="shrink-0" />
                  <span>{CONTACT_INFO.email.label}</span>
                </Link>
                <Link 
                  href={CONTACT_INFO.phone.href} 
                  className="flex items-center gap-2 text-gray-100 font-medium hover:text-[#F4D548] transition-colors duration-200 text-sm md:text-base"
                >
                  <Phone size={16} className="shrink-0" />
                  <span>{CONTACT_INFO.phone.label}</span>
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-3 mt-2">
              <h4 className="text-[#F4D548] font-bold text-lg md:text-xl">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="text-gray-100 hover:text-[#F4D548] transition-colors duration-200"
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Copyright Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-xs sm:text-sm text-gray-100">
            <p className="text-center sm:text-left">{COPYRIGHT.text}</p>
            <p className="text-center sm:text-right">{COPYRIGHT.developer}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
