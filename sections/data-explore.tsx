/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const AutoScrollImage = () => {
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame: number;
    let direction = 1; // 1: right, -1: left

    const scrollStep = () => {
      if (!scrollContainer) return;
      // Scroll by 0.5px per frame
      scrollContainer?.scrollLeft += direction * 0.5;

      // Reverse direction if at end/start
      if (
        scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth
      ) {
        direction = -1;
      }
      if (scrollContainer.scrollLeft <= 0) {
        direction = 1;
      }

      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-[600px] h-[320px] overflow-x-auto overflow-y-hidden rounded-lg border border-[#33323a] bg-[#232228] shadow-lg"
      style={{ scrollbarWidth: 'none' }}
    >
      <Image
        src="/Mult-modal.png" // Replace with your image path
        alt="Cohort Table"
        width={1200}
        height={320}
        className="h-full select-none pointer-events-none"
        draggable={false}
        style={{ minWidth: 900 }}
      />
    </div>
  );
};

const DataExplorationSection = () => (
  <section className="w-full min-h-[500px] bg-[#232228] flex flex-row items-center px-24 py-12 gap-20">
    {/* Left */}
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-6">
        {/* Replace with your SVG or logo */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 16h24M16 4v24M7 7l18 18M25 7L7 25" stroke="#CFC3C5" strokeWidth="2" />
        </svg>
      </div>
      <h2 className="text-5xl font-extrabold text-white leading-tight mb-4">
        <span className="block">Data</span>
        <span className="block">exploration</span>
        <span className="block">superpowers</span>
      </h2>
      <p className="text-[#CFC3C5] text-lg mb-8 max-w-md">
        SQL, Python, R, pivots, spreadsheets, charts, all together, all in a modular, notebook-based canvas.
      </p>
      <button className="px-6 py-3 border border-[#CFC3C5] text-[#CFC3C5] rounded-md text-lg font-medium hover:bg-[#35343b] transition">
        Explore Notebooks
      </button>
    </div>
    {/* Right */}
    <div className="flex-1 flex justify-center items-center">
      <AutoScrollImage />
    </div>
  </section>
);

export default DataExplorationSection;
