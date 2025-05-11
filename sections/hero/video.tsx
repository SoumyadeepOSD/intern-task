'use client';

import React from 'react';

export default function VideoWithButton() {
  return (
    <div className="relative w-full flex justify-center items-center bg-black py-10">
      {/* Video */}
      <video
        className="w-[1000px] rounded-lg shadow-lg border-2 border-red-300"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hex-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className="bg-pink-600/90 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-md shadow-xl backdrop-blur-sm transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}
