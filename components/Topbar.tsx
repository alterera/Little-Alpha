import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full bg-[#0F715F] relative z-50 border-b-2 border-[#0F715F]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2">
        <div className="flex justify-between items-center gap-3 sm:gap-4 text-white">
          {/* Links Section */}
          <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
            <Link
              href={"#"}
              className="hover:text-[#F4D548] transition-colors duration-200 font-medium"
            >
              SVS
            </Link>
            <Link
              href={"#"}
              className="hover:text-[#F4D548] transition-colors duration-200 font-semibold relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[#F4D548]"
            >
              Little Alpha
            </Link>
          </div>

          {/* Search Section */}
          <div className="flex items-center gap-2 w-fit sm:w-fit">
            <div className="relative flex-1 sm:flex-initial">
              <Input
                placeholder="Search"
                className="bg-transparent text-white placeholder:text-white/70 border-0 border-b border-white/50 focus:border-b focus:border-white rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 h-6 sm:h-6 text-sm pr-8 pb-1"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
