"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { partners } from "./partners";

export default function PartnersCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 2800,
      stopOnInteraction: false,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelectedIndex = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateSelectedIndex();

    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
    };
  }, [emblaApi, updateSelectedIndex]);

  const scrollPrevious = useCallback(() => {
    emblaApi?.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  return (
    <div
      className="group relative"
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex touch-pan-y">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="
                min-w-0
                flex-[0_0_70%]
                pl-4
                sm:flex-[0_0_38%]
                md:flex-[0_0_28%]
                lg:flex-[0_0_22%]
                xl:flex-[0_0_18%]
              "
            >
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name}`}
                className="
                  flex
                  h-32
                  items-center
                  justify-center
                  rounded-[22px]
                  border
                  border-white/55
                  bg-white
                  px-6
                  shadow-[0_12px_32px_rgba(57,39,8,0.10)]
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:border-amber-300
                  hover:shadow-[0_20px_45px_rgba(57,39,8,0.18)]
                "
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="240px"
                    className="
                      object-contain
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrevious}
        aria-label="Previous partners"
        className="
          absolute
          -left-2
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
          bg-white/85
          text-neutral-900
          opacity-0
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          hover:bg-amber-400
          group-hover:opacity-100
          sm:-left-5
        "
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next partners"
        className="
          absolute
          -right-2
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
          bg-white/85
          text-neutral-900
          opacity-0
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          hover:bg-amber-400
          group-hover:opacity-100
          sm:-right-5
        "
      >
        <ChevronRight size={20} />
      </button>

      <div className="mt-7 flex justify-center gap-2">
        {partners.map((partner, index) => (
          <span
            key={partner.id}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300
              ${
                selectedIndex === index
                  ? "w-7 bg-white"
                  : "w-2 bg-white/45"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}