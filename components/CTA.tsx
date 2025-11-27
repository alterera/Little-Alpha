"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  phone: string;
  childName: string;
  childAge: string;
  message: string;
};

const CTA = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    childName: "",
    childAge: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAgeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      childAge: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      setIsSubmitting(false);
      return;
    }

    if (!formData.childName.trim()) {
      toast.error("Please enter your child's name");
      setIsSubmitting(false);
      return;
    }

    if (!formData.childAge) {
      toast.error("Please select your child's age");
      setIsSubmitting(false);
      return;
    }

    // Email validation (only if provided)
    // Simulate form submission
    try {
      // Here you would typically send the data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Form submitted successfully! We'll get back to you soon.", {
        description: "Thank you for your interest in Little Alpha.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        childName: "",
        childAge: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 cta-parallax-bg"
        style={{
          backgroundImage: "url(/assets/bg/cta.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-white"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let your child join the fun with Little Alpha
            </h2>
            <p className="text-lg md:text-xl md:leading-relaxed opacity-90">
              At Little Alpha, our ultimate aim is to ignite critical thinking. We
              strictly do not promote rote learning. Inquiry-based learning is the
              backbone of our methodology. We want every learner to think, explore,
              and learn.
            </p>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <div className="mb-6">
              <h4 className="text-2xl md:text-3xl font-bold text-[#0F715F] mb-3">
                Fill out the form & we will get in touch with you!
              </h4>
              <p className="text-gray-600">
                Enquire about the current educational year. Submit message & our
                team will get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Contact number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="childName" className="text-gray-700">
                    Children Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="childName"
                    name="childName"
                    placeholder="Your child name"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childAge" className="text-gray-700">
                    Child Age <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.childAge}
                    onValueChange={handleAgeChange}
                    required
                  >
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((age) => (
                        <SelectItem key={age} value={age.toString()}>
                          {age} {age === 1 ? "year" : "years"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0C7C55] hover:bg-[#0a6b4a] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 mt-6"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
