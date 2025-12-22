"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

const STORAGE_KEY = "admissions_popup_shown";
const HOUR_IN_MS = 60 * 60 * 1000; // 1 hour in milliseconds

const AdmissionsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    age: "",
    class: "",
  });

  useEffect(() => {
    // Check if popup should be shown
    const checkPopupStatus = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
          // First visit - show popup
          setIsOpen(true);
          return;
        }

        const { timestamp } = JSON.parse(stored);
        const now = Date.now();
        const timeDiff = now - timestamp;

        // If more than 1 hour has passed, show popup again
        if (timeDiff >= HOUR_IN_MS) {
          setIsOpen(true);
        }
      } catch (error) {
        // If there's an error reading localStorage, show popup
        setIsOpen(true);
      }
    };

    // Wait for page to be fully loaded
    if (typeof window !== "undefined") {
      // Small delay to ensure page is fully rendered
      const timer = setTimeout(() => {
        checkPopupStatus();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Disable body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // Store timestamp when popup is closed
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ timestamp: Date.now() })
      );
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.mobile.trim()) {
      toast.error("Please enter your mobile number");
      return false;
    }
    if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      toast.error("Please enter a valid 10-digit mobile number");
      return false;
    }
    if (!formData.age) {
      toast.error("Please select the age of student");
      return false;
    }
    if (!formData.class) {
      toast.error("Please select the class");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        "Thank you! We've received your information. Our team will contact you soon.",
        {
          duration: 5000,
        }
      );
      
      // Reset form
      setFormData({
        name: "",
        mobile: "",
        age: "",
        class: "",
      });
      
      // Close popup and save timestamp
      handleClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border-4 border-[#F75691] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-md"
          aria-label="Close popup"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        {/* Header Section with Pink Background */}
        <div className="bg-gradient-to-r from-[#F75691] to-[#E15E89] px-6 sm:px-8 py-6 sm:py-8 text-white overflow-hidden rounded-t-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Image placeholder - you can add an actual image here */}
            {/* <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div> */}

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                Admission Open
              </h2>
              <p className="text-sm sm:text-base text-white/90">
                Please fill the form to get more information
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter Full Name <span className="text-[#F75691]">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>

            {/* Mobile Number Field */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter Mobile Number <span className="text-[#F75691]">*</span>
              </label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                maxLength={10}
                required
                className="w-full"
              />
            </div>

            {/* Age of Student Field */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Age of Student <span className="text-[#F75691]">*</span>
              </label>
              <Select
                value={formData.age}
                onValueChange={(value) => handleSelectChange("age", value)}
                required
              >
                <SelectTrigger id="age" className="w-full">
                  <SelectValue placeholder="Select Age" />
                </SelectTrigger>
                <SelectContent className="z-[10001]" position="popper" align="start">
                  <SelectItem value="2">2 years</SelectItem>
                  <SelectItem value="3">3 years</SelectItem>
                  <SelectItem value="4">4 years</SelectItem>
                  <SelectItem value="5">5 years</SelectItem>
                  <SelectItem value="6">6 years</SelectItem>
                  <SelectItem value="7">7 years</SelectItem>
                  <SelectItem value="8">8 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Class Field */}
            <div>
              <label
                htmlFor="class"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Class <span className="text-[#F75691]">*</span>
              </label>
              <Select
                value={formData.class}
                onValueChange={(value) => handleSelectChange("class", value)}
                required
              >
                <SelectTrigger id="class" className="w-full">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent className="z-[10001]" position="popper" align="start">
                  <SelectItem value="nursery">Nursery</SelectItem>
                  <SelectItem value="lkg">LKG (Lower Kindergarten)</SelectItem>
                  <SelectItem value="ukg">UKG (Upper Kindergarten)</SelectItem>
                  <SelectItem value="grade1">Grade 1</SelectItem>
                  <SelectItem value="grade2">Grade 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F75691] hover:bg-[#E15E89] text-white font-semibold py-6 text-lg rounded-lg transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionsPopup;

