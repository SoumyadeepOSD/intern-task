import React from "react";

export default function CircularSquareButton({label}:{label:string}) {
  return (
    <button className="relative flex items-center justify-center bg-[#282631] border border-pink-300 px-6 py-2 text-pink-200 text-sm font-medium rounded-none overflow-visible group transition-colors duration-300">
      {/* Corner circles (visible in base, hidden on hover) */}
      <span className="absolute -top-3 -left-3 w-6 h-6 border-2 border-pink-300/30 rounded-full pointer-events-none z-10 bg-transparent transition-opacity duration-200 group-hover:opacity-0" />
      <span className="absolute -top-3 -right-3 w-6 h-6 border-2 border-pink-300/30 rounded-full pointer-events-none z-10 bg-transparent transition-opacity duration-200 group-hover:opacity-0" />
      <span className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-pink-300/30 rounded-full pointer-events-none z-10 bg-transparent transition-opacity duration-200 group-hover:opacity-0" />
      <span className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-pink-300/30 rounded-full pointer-events-none z-10 bg-transparent transition-opacity duration-200 group-hover:opacity-0" />

      {/* L-shaped corners (hidden in base, visible on hover) */}
      {/* Top-left */}
      <span className="pointer-events-none absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
        <span className="block w-4 h-0.5 bg-pink-300/50" />
        <span className="block w-0.5 h-4 bg-pink-300/50 ml-0" />
      </span>
      {/* Top-right */}
      <span className="pointer-events-none absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 flex flex-col items-end">
        <span className="block w-4 h-0.5 bg-pink-300/50" />
        <span className="block w-0.5 h-4 bg-pink-300/50 mr-0" />
      </span>
      {/* Bottom-left */}
      <span className="pointer-events-none absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 flex flex-col-reverse">
        <span className="block w-4 h-0.5 bg-pink-300/50" />
        <span className="block w-0.5 h-4 bg-pink-300/50 ml-0" />
      </span>
      {/* Bottom-right */}
      <span className="pointer-events-none absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 flex flex-col-reverse items-end">
        <span className="block w-4 h-0.5 bg-pink-300/50" />
        <span className="block w-0.5 h-4 bg-pink-300/50 mr-0" />
      </span>

      {/* Button text */}
      {label}
    </button>
  );
}
