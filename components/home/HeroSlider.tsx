"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import HeroControls from "./HeroControls";
import HeroSlide from "./HeroSlide";
import { slides } from "./slides";

export default function HeroSlider() {
  const autoplay = useRef(
    Autoplay({
      delay: 5500,
      stopOnInteraction: false,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration: 32,
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

  const pauseAutoplay = () => {
    autoplay.current.stop();
  };

  const resumeAutoplay = () => {
    autoplay.current.play();
  };

  return (
    <div
      className="group relative h-full w-full overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full touch-pan-y">
          {slides.map((slide, index) => (
            <HeroSlide
              key={slide.id}
              slide={slide}
              active={selectedIndex === index}
              priority={index === 0}
            />
          ))}
        </div>
      </div>

      <HeroControls
        selectedIndex={selectedIndex}
        slideCount={slides.length}
        onPrevious={scrollPrevious}
        onNext={scrollNext}
        onSelect={scrollTo}
      />

      <div className="pointer-events-none absolute bottom-7 right-6 z-20 hidden text-xs font-semibold tracking-[0.2em] text-white/75 sm:block lg:right-10">
        {String(selectedIndex + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}