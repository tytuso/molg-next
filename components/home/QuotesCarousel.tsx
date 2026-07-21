"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { quoteGraphics } from "./quotes";

export default function QuotesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);

  const updateCarousel = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateCarousel();

    emblaApi.on("select", updateCarousel);
    emblaApi.on("reInit", updateCarousel);

    return () => {
      emblaApi.off("select", updateCarousel);
      emblaApi.off("reInit", updateCarousel);
    };
  }, [emblaApi, updateCarousel]);

  // scrollPrev makes the graphics move visually toward the right
  useEffect(() => {
    if (!emblaApi || paused) return;

    const interval = window.setInterval(() => {
      emblaApi.scrollPrev();
    }, 4200);

    return () => window.clearInterval(interval);
  }, [emblaApi, paused]);

  const scrollPrevious = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-5 flex touch-pan-y">
          {quoteGraphics.map((quote) => (
            <div
              key={quote.id}
              className="
                min-w-0
                flex-[0_0_88%]
                pl-5
                sm:flex-[0_0_52%]
                lg:flex-[0_0_35%]
                xl:flex-[0_0_33.333%]
              "
            >
              <div
                className="
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/60
                  bg-white/30
                  p-1.5
                  shadow-[0_14px_35px_rgba(57,39,8,0.12)]
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:shadow-[0_22px_50px_rgba(57,39,8,0.2)]
                "
              >
                <div className="relative h-full w-full overflow-hidden rounded-[17px] bg-[#eee3c9]">
                  <Image
                    src={quote.image}
                    alt={quote.alt}
                    fill
                    sizes="
                      (max-width: 640px) 88vw,
                      (max-width: 1024px) 52vw,
                      33vw
                    "
                    className="
                      object-contain
                      transition-transform
                      duration-700
                      group-hover:scale-[1.02]
                    "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous and next arrows */}
      <button
        type="button"
        onClick={scrollPrevious}
        aria-label="Move quote images to the right"
        className="
          absolute
          left-2
          top-1/2
          z-20
          flex
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/60
          bg-white/80
          text-neutral-900
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          hover:bg-amber-400
          sm:-left-5
        "
      >
        <ChevronLeft size={21} />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Move quote images to the left"
        className="
          absolute
          right-2
          top-1/2
          z-20
          flex
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/60
          bg-white/80
          text-neutral-900
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          hover:bg-amber-400
          sm:-right-5
        "
      >
        <ChevronRight size={21} />
      </button>

      {/* Small progress indicators */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Show quote image ${index + 1}`}
            aria-current={
              selectedIndex === index ? "true" : undefined
            }
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-300
              ${
                selectedIndex === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/45 hover:bg-white/75"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}