"use client"

import React from "react";

const CTA = () => {
  return (
    <div className="w-full relative overflow-hidden min-h-[800px]">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 cta-parallax-bg"
        style={{
          backgroundImage: 'url(/assets/bg/cta.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let your child join the fun with Little Alpha
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
              At Little Alpha, our ultimate aim is to ignite critical thinking. We
              strictly do not promote rote learning. Inquiry-based learning is the
              backbone of our methodology. We want every learner to think,
              explore, and learn.
            </p>
            <button className="bg-[#0C7C55] hover:bg-[#0a6b4a] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 w-fit">
              Learn More
            </button>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="mb-6">
              <h4 className="text-2xl md:text-3xl font-bold text-[#0F715F] mb-3">
                Fill out the form & we will get in touch with you!
              </h4>
              <p className="text-gray-600">
                Enquire about the current educational year. Submit message & our
                team will get back to you.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7C55] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your mail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7C55] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Contact number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7C55] focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="childName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Children Name
                  </label>
                  <input
                    type="text"
                    id="childName"
                    placeholder="Your child name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7C55] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-2">
                    Child Age
                  </label>
                  <input
                    type="number"
                    id="childAge"
                    placeholder="Your child age"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7C55] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7C55] focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0C7C55] hover:bg-[#0a6b4a] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 mt-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
