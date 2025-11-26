import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="w-full bg-[#EBF6EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Quick Links */}
          <div className="flex flex-col gap-6">
            <Image 
              src={"/logo-black.png"} 
              height={150} 
              width={150} 
              alt="logo-footer"
              className="w-auto h-auto"
            />
            <div className="flex flex-col gap-3 pl-3">
              {QUICK_LINKS.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-[#0F715F] transition-colors duration-200 text-sm font-bold md:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#0F715F] font-bold text-lg md:text-xl mb-2">
              Useful Links
            </h2>
            <div className="flex flex-col gap-3">
              {USEFUL_LINKS.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-[#0F715F] transition-colors duration-200 text-sm md:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#0F715F] font-bold text-lg md:text-xl mb-2">
              Resources
            </h2>
            <div className="flex flex-col gap-3">
              {RESOURCES.map((resource, index) => (
                <Link 
                  key={index}
                  href={resource.href}
                  className="text-gray-700 hover:text-[#0F715F] transition-colors duration-200 text-sm md:text-base"
                >
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Reach Us */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#0F715F] font-bold text-lg md:text-xl mb-2">
              Reach Us
            </h2>
            <div className="flex flex-col gap-4">
              <address className="text-gray-700 text-sm md:text-base not-italic leading-relaxed">
                {CONTACT_INFO.address}
              </address>
              <div className="flex flex-col gap-3">
                <Link 
                  href={CONTACT_INFO.email.href} 
                  className="flex items-center gap-2 text-gray-700 hover:text-[#0F715F] transition-colors duration-200 text-sm md:text-base"
                >
                  <Mail size={16} className="shrink-0" />
                  <span>{CONTACT_INFO.email.label}</span>
                </Link>
                <Link 
                  href={CONTACT_INFO.phone.href} 
                  className="flex items-center gap-2 text-gray-700 hover:text-[#0F715F] transition-colors duration-200 text-sm md:text-base"
                >
                  <Phone size={16} className="shrink-0" />
                  <span>{CONTACT_INFO.phone.label}</span>
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-3 mt-2">
              <h4 className="text-[#0F715F] font-bold text-lg md:text-xl">
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
                      className="text-gray-700 hover:text-[#0F715F] transition-colors duration-200"
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-[#0F715F] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-white text-xs sm:text-sm">
            <p className="text-center sm:text-left">{COPYRIGHT.text}</p>
            <p className="text-center sm:text-right">{COPYRIGHT.developer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
