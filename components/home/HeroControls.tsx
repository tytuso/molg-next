"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroControlsProps {
  selectedIndex: number;
  slideCount: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export default function HeroControls({
  selectedIndex,
  slideCount,
  onPrevious,
  onNext,
  onSelect,
}: HeroControlsProps) {
  return (
    <>
      {/* Arrows */}
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Show previous slide"
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/50 group-hover:opacity-100 md:flex lg:left-8"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="Show next slide"
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/50 group-hover:opacity-100 md:flex lg:right-8"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-3 backdrop-blur-md">
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={selectedIndex === index ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "w-8 bg-amber-400"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </>
  );
}