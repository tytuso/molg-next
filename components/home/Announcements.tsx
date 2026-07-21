"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/layout/Container";
import AnnouncementCard from "./AnnouncementCard";
import { announcements } from "./announcements-data";

export default function Announcements() {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
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

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      autoplay.current.reset();
    },
    [emblaApi],
  );

  return (
    <section className="relative z-20 -mt-12 pb-20 lg:-mt-16 lg:pb-24">
      <Container>
        <div className="overflow-hidden rounded-[34px] border border-white/40 bg-gradient-to-br from-[#e2cf9f]/95 via-[#d8c087]/95 to-[#c9aa68]/95 px-5 py-9 shadow-[0_25px_70px_rgba(69,49,15,0.18)] backdrop-blur-md sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#815417]">
                Official communication
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Announcements
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-800/75 sm:text-base">
                View official notices, appointments, public information and
                important Ministry updates.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={scrollPrevious}
                aria-label="Previous announcement"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/25 text-neutral-900 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next announcement"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/25 text-neutral-900 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            className="overflow-hidden"
            ref={emblaRef}
            onMouseEnter={() => autoplay.current.stop()}
            onMouseLeave={() => autoplay.current.play()}
          >
            <div className="-ml-5 flex touch-pan-y">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="min-w-0 flex-[0_0_88%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <AnnouncementCard announcement={announcement} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex justify-center gap-2">
            {announcements.map((announcement, index) => (
              <button
                key={announcement.id}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Show announcement ${index + 1}`}
                aria-current={selectedIndex === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}