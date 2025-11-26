"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="w-full bg-[#ffe4db] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-full object-cover aspect-video"
            controls
            poster="/assets/bg/video-poster.png"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>

          {!isPlaying && (
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black/40 transition hover:bg-black/50"
              aria-label="Play video"
            >
              <span className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/90 text-[#0F715F] flex items-center justify-center shadow-lg">
                <Play className="h-8 w-8 sm:h-10 sm:w-10 translate-x-0.5" />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
