import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { HeroSlideData } from "./slides";

interface HeroSlideProps {
  slide: HeroSlideData;
  active: boolean;
  priority?: boolean;
}

export default function HeroSlide({
  slide,
  active,
  priority = false,
}: HeroSlideProps) {
  return (
    <div className="relative min-w-0 flex-[0_0_100%]">
      <div className="relative h-full min-h-[720px] overflow-hidden">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority={priority}
          sizes="100vw"
          className={`
            object-cover
            object-center
            transition-transform
            duration-[7000ms]
            ease-out
            ${active ? "scale-[1.06]" : "scale-100"}
          `}
        />

        {/* Light image overlays — image remains clearly visible */}
        <div className="absolute inset-0 bg-black/5" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/45
            via-black/15
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-black/5
          "
        />

        {/* Caption area */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            min-h-[720px]
            max-w-7xl
            items-center
            px-4
            py-20
            sm:px-6
            lg:px-8
          "
        >
          <div
            className={`
              max-w-2xl
              rounded-[30px]
              border
              border-white/25
              bg-black/20
              p-7
              text-white
              shadow-[0_24px_70px_rgba(0,0,0,0.25)]
              backdrop-blur-sm
              transition-all
              duration-700
              sm:p-9
              lg:p-11
              ${
                active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <p
              className="
                mb-4
                text-xs
                font-bold
                uppercase
                tracking-[0.24em]
                text-amber-300
                drop-shadow-md
                sm:text-sm
              "
            >
              {slide.eyebrow}
            </p>

            <h2
              className="
                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-white
                drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)]
                sm:text-5xl
                lg:text-6xl
              "
            >
              {slide.title}
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-white/95
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
                sm:text-lg
              "
            >
              {slide.subtitle}
            </p>

            <div className="mt-8">
              <Link
                href={slide.link}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-amber-400
                  to-amber-500
                  px-6
                  py-3.5
                  font-semibold
                  text-neutral-950
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:from-amber-300
                  hover:to-amber-500
                  hover:shadow-xl
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                "
              >
                {slide.button}

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}