'use client';

import React from 'react';
import Image from 'next/image';
import CircularSquareButton from '@/components/customs/circle-square-button';
import DefaultSquareButton from '@/components/customs/default-square-button';
import VideoWithButton from '@/sections/hero/video';
import DataExplorationSection from '@/sections/data-explore';

const Page = () => {
  return (
    <div
      className="min-h-screen bg-[#0C0B10] bg-no-repeat bg-center bg-[length:200px_auto] flex flex-col items-center justify-start"
    >
      {/* Top Announcement Bar */}
      <div className="w-full px-5 py-2 bg-[#1D1B24] text-[#CFC3C5] text-sm overflow-x-auto whitespace-nowrap">
        <div className="inline-block">
          🎛️ Introducing Explore: <span className="font-medium">fast, flexible no-code data analysis</span> ↗
        </div>
        <span className="ml-8 inline-block">🔵 Hex at Snowflake Summit</span>
      </div>

      {/* Navbar */}
      <div className="w-full px-5 py-4 flex flex-row items-center justify-center gap-10 border-b border-[#292732]">
        <div className="flex gap-6 text-[#CFC3C5] text-sm font-medium">
          <button className="flex items-center gap-2 hover:text-white">
            <Image src="/product.png" alt="Product Icon" width={16} height={16} />
            Product
          </button>
          <button className="flex items-center gap-2 hover:text-white">
            <Image src="/usecase.png" alt="Use cases Icon" width={16} height={16} />
            Use cases
          </button>
          <button className="flex items-center gap-2 hover:text-white">
            <Image src="/enterprise.png" alt="Enterprise Icon" width={16} height={16} />
            Enterprise
          </button>
        </div>
        <Image
          src="/site-logo.png"
          alt="Hex Logo"
          width={200}
          height={200}
          style={{ objectFit: 'contain', height: 100, width: 100 }}
          className="w-32 h-auto"
        />
        <div className="flex gap-4 items-center text-sm font-medium text-[#CFC3C5]">
          <button className="flex items-center gap-2 hover:text-white">
            <Image src="/resources.png" alt="Resources Icon" width={16} height={16} />
            Resources
          </button>
          <button className="flex items-center gap-2 hover:text-white">
            <Image src="/pricing.png" alt="Pricing Icon" width={16} height={16} />
            Pricing
          </button>
          <button className="hover:text-white">Log In</button>
          <CircularSquareButton label="Get started" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-[200px] flex flex-row items-center justify-center gap-10 mt-20">
        {/* Left */}
        <div className="flex flex-col items-start text-white font-bold text-8xl">
          <p>Bring</p>
          <p>everyone</p>
          <p>together</p>
          <p>with data</p>
        </div>
        {/* Right */}
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col items-start text-2xl mb-5 text-red-200/80">
            <p>Go end-to-end from quick</p>
            <p>queries to deep-dive analyses to</p>
            <p>beautiful interactive data apps –</p>
            <p>all in one collaborative, AI-</p>
            <p>powered workspace.</p>
          </div>
          {/* Buttons */}
          <div className="flex flex-row items-start justify-center gap-10">
            <CircularSquareButton label="Get started for free" />
            <DefaultSquareButton label="Request a demo" />
          </div>
        </div>
      </div>
      <VideoWithButton />
      <div className="flex flex-col items-center justify-center text-center">
        <Image
          src="/companies.png"
          alt="companies"
          width={1000}
          height={160}
          className="w-full max-w-[1000px] h-auto object-contain mt-20"
        />

        <p className="text-7xl font-bold text-white">
          All your workflows,<br />in one workspace
        </p>
        <DataExplorationSection/>
        <p className="text-7xl font-bold text-white">
          Magical AI, built right in
        </p>
        <p className="text-7xl font-bold text-white">
          A new standard for data work
        </p>
        <p className="text-7xl font-bold text-white">
          Instant integration<br /> with the whole stack
        </p>
        <p className="text-2xl text-red-300/70">
          Out-of-the-box connections and flexible APIs make setup a breeze.
        </p>
        <p className="text-7xl font-bold text-white">
          Built for security and control
        </p>
        <p className="text-7xl font-bold text-white">
          Build anything<br /> with data
        </p>
        <p className="text-2xl text-red-300/70">
          Learn how to do almost anything in Hex,<br /> from complex ML forecasting to critical<br /> business dashboards.
        </p>
      </div>
    </div>
  );
};

export default Page;
