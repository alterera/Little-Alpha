import React from "react";

const Learner = () => {
  return (
    <div className="w-full relative bg-white pt-14 sm:pt-16 md:pt-20">
      {/* Admission Button - 50% on Growth, 50% on Learner */}
      <div className="bg-[#0C7C55] rounded-full p-4 sm:p-5 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 flex items-center justify-center text-white absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-12 md:-top-14 shadow-lg uppercase text-xs sm:text-sm md:text-base font-semibold z-30">
        Admission
      </div>

      <div className="max-w-6xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#0C7C55] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-6 sm:mb-8 md:mb-10">
          It takes a school to raise the world
        </h2>
        <div className="flex flex-col lg:flex-row justify-between pt-6 sm:pt-8 md:pt-10 items-center gap-8 lg:gap-12">
          <div className="flex-1 lg:pr-6 w-full lg:w-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
              At Little Alpha, the child is at the centre of everything we do.
              Holistic development is our priority, achieved through the
              application of 21st-century skills because our learners are none
              other than Alphas! Inquiry-based learning is the backbone of our
              methodology. We want every learner to think, explore, and learn.
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center w-full lg:w-auto">
            {/* CIRCULAR GRAPHIC */}
            <svg
              viewBox="0 0 500 500"
              className="w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style>
                {`
                  @keyframes rotate-left {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(-360deg);
                    }
                  }
                  @keyframes rotate-right {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(360deg);
                    }
                  }
                  .ring-1-animation {
                    animation: rotate-left 50s linear infinite;
                    transform-origin: 250px 250px;
                  }
                  .ring-2-animation {
                    animation: rotate-right 45s linear infinite;
                    transform-origin: 250px 250px;
                  }
                  .ring-3-animation {
                    animation: rotate-left 40s linear infinite;
                    transform-origin: 250px 250px;
                  }
                  .ring-4-animation {
                    animation: rotate-right 35s linear infinite;
                    transform-origin: 250px 250px;
                  }
                `}
              </style>
              <circle cx="250" cy="250" r="220" fill="#F4BA3A" />
              <circle cx="250" cy="250" r="185" fill="#8884DF" />
              <circle cx="250" cy="250" r="150" fill="#0F715F" />
              <circle cx="250" cy="250" r="115" fill="#8884DF" />
              <circle cx="250" cy="250" r="80" fill="#F4BA3A" />

              <defs>
                <path
                  id="ring-1"
                  d="M250,250 m-195,0 a195,195 0 1,1 390,0 a195,195 0 1,1 -390,0"
                />
                <path
                  id="ring-2"
                  d="M250,250 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0"
                />
                <path
                  id="ring-3"
                  d="M250,250 m-125,0 a125,125 0 1,1 250,0 a125,125 0 1,1 -250,0"
                />
                <path
                  id="ring-4"
                  d="M250,250 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
                />
              </defs>

              <g className="ring-1-animation">
                <text fontSize="18" fill="white" fontFamily="sans-serif" fontWeight="bold">
                  <textPath href="#ring-1" startOffset="0%">
                    COLLABORATOR • COMMUNICATOR • CRITICAL THINKER • CREATIVE
                    THINKER • GLOBAL CITIZEN • DIGITAL CITIZEN • LEADER • LIFELONG
                    LEARNER •
                  </textPath>
                </text>
              </g>

              <g className="ring-2-animation">
                <text fontSize="18" fill="white" fontFamily="sans-serif" fontWeight="bold">
                  <textPath href="#ring-2" startOffset="0%">
                    DIFFERENTIATED INSTRUCTION • TECHNOLOGY INTEGRATION • LEARNING
                    THROUGH INQUIRY • CONCEPTUAL UNDERSTANDING
                  </textPath>
                </text>
              </g>

              <g className="ring-3-animation">
                <text fontSize="20" fill="white" fontFamily="sans-serif" fontWeight="bold">
                  <textPath href="#ring-3" startOffset="0%">
                    JOY OF LEARNING • WELL-BEING • JOY OF LEARNING • WELL-BEING
                  </textPath>
                </text>
              </g>

              <g className="ring-4-animation">
                <text fontSize="18" fill="white" fontFamily="sans-serif" fontWeight="bold">
                  <textPath href="#ring-4" startOffset="0%">
                    HOLISTIC DEVELOPMENT • CULTURE &amp; VALUES • GUIDING
                    STATEMENTS •
                  </textPath>
                </text>
              </g>
              <text
                x="250"
                y="250"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="28"
                fontWeight="700"
                fill="white"
                fontFamily="sans-serif"
              >
                LEARNER
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learner;
