import React from "react";

const Learner = () => {
  return (
    <div className="w-full relative bg-white">
      <div className="bg-[#0C7C55] rounded-full p-5 h-28 w-28 flex items-center justify-center text-white absolute left-1/2 -translate-x-1/2 -top-1/12 shadow-lg uppercase">
        Admission
      </div>

      <div className="max-w-6xl mx-auto py-20">
        <h2 className="text-[#0C7C55] text-6xl text-center">
          It takes a school to raise the world
        </h2>
        <div className="flex justify-between pt-10 items-center">
          <div className="flex-1 pr-6">
            <p>
              At Little Alpha, the child is at the centre of everything we do.
              Holistic development is our priority, achieved through the
              application of 21st-century skills because our learners are none
              other than Alphas! Inquiry-based learning is the backbone of our
              methodology. We want every learner to think, explore, and learn.
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center">
            {/* CIRCULAR GRAPHIC */}
            <svg
              viewBox="0 0 500 500"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
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
                    animation: rotate-left 30s linear infinite;
                    transform-origin: 250px 250px;
                  }
                  .ring-2-animation {
                    animation: rotate-right 25s linear infinite;
                    transform-origin: 250px 250px;
                  }
                  .ring-3-animation {
                    animation: rotate-left 20s linear infinite;
                    transform-origin: 250px 250px;
                  }
                  .ring-4-animation {
                    animation: rotate-right 15s linear infinite;
                    transform-origin: 250px 250px;
                  }
                `}
              </style>
              <circle cx="250" cy="250" r="220" fill="#c87a1c" filter="url(#drop-shadow)" />
              <circle cx="250" cy="250" r="185" fill="#f19b2f" />
              <circle cx="250" cy="250" r="150" fill="#625b9e" />
              <circle cx="250" cy="250" r="115" fill="#73b86b" />
              <circle cx="250" cy="250" r="80" fill="#f19b2f" />

              <defs>
                <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
                  <feOffset dx="4" dy="6" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
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
                <text font-size="18" fill="white" font-family="sans-serif" fontWeight="bold">
                  <textPath href="#ring-1" startOffset="0%">
                    COLLABORATOR • COMMUNICATOR • CRITICAL THINKER • CREATIVE
                    THINKER • GLOBAL CITIZEN • DIGITAL CITIZEN • LEADER • LIFELONG
                    LEARNER •
                  </textPath>
                </text>
              </g>

              <g className="ring-2-animation">
                <text font-size="18" fill="white" font-family="sans-serif" fontWeight="bold">
                  <textPath href="#ring-2" startOffset="0%">
                    DIFFERENTIATED INSTRUCTION • TECHNOLOGY INTEGRATION • LEARNING
                    THROUGH INQUIRY • CONCEPTUAL UNDERSTANDING
                  </textPath>
                </text>
              </g>

              <g className="ring-3-animation">
                <text font-size="20" fill="white" font-family="sans-serif" fontWeight="bold">
                  <textPath href="#ring-3" startOffset="0%">
                    JOY OF LEARNING • WELL-BEING • JOY OF LEARNING • WELL-BEING
                  </textPath>
                </text>
              </g>

              <g className="ring-4-animation">
                <text font-size="18" fill="white" font-family="sans-serif" fontWeight="bold">
                  <textPath href="#ring-4" startOffset="0%">
                    HOLISTIC DEVELOPMENT • CULTURE &amp; VALUES • GUIDING
                    STATEMENTS •
                  </textPath>
                </text>
              </g>

              <text
                x="250"
                y="250"
                text-anchor="middle"
                dominant-baseline="middle"
                font-size="28"
                font-weight="700"
                fill="white"
                font-family="sans-serif"
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
