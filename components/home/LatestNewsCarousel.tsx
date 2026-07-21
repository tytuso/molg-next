"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Post } from "@/types/post";
import CompactNewsCard from "./CompactNewsCard";

interface LatestNewsCarouselProps {
  posts: Post[];
}

export default function LatestNewsCarousel({
  posts,
}: LatestNewsCarouselProps) {
  const autoplay = useRef(
    Autoplay({
      delay: 4800,
      stopOnInteraction: false,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: posts.length > 3,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateCarouselState();

    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", updateCarouselState);

    return () => {
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", updateCarouselState);
    };
  }, [emblaApi, updateCarouselState]);

  const scrollPrevious = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      emblaApi.scrollTo(index);
      autoplay.current.reset();
    },
    [emblaApi],
  );

  return (
    <div
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-5 flex touch-pan-y">
          {posts.map((post) => (
            <div
              key={post.id}
              className="
                min-w-0
                flex-[0_0_88%]
                pl-5
                sm:flex-[0_0_50%]
                xl:flex-[0_0_33.333%]
              "
            >
              <CompactNewsCard post={post} />
            </div>
          ))}
        </div>
      </div>

      <div
        className="
          mt-9
          flex
          flex-col
          items-center
          justify-between
          gap-6
          sm:flex-row
        "
      >
        {/* Numbered navigation */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
          "
        >
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Show latest news group ${index + 1}`}
              aria-current={
                selectedIndex === index ? "true" : undefined
              }
              className={`
                flex
                h-10
                min-w-10
                items-center
                justify-center
                rounded-full
                px-3
                text-xs
                font-bold
                transition-all
                duration-300
                ${
                  selectedIndex === index
                    ? "bg-white text-neutral-900 shadow-lg"
                    : "border border-white/40 bg-white/15 text-white hover:bg-white/30"
                }
              `}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>

        {/* Previous and next */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollPrevious}
            aria-label="Previous latest news"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/45
              bg-white/15
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-white
              hover:text-neutral-900
            "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next latest news"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/45
              bg-white/15
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-white
              hover:text-neutral-900
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}