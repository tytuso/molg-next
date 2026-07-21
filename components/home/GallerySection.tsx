import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";

import GalleryStrip from "./GalleryStrip";
import { galleryImages } from "./gallery";

export default function GallerySection() {
  const midpoint = Math.ceil(galleryImages.length / 2);
  const firstRow = galleryImages.slice(0, midpoint);
  const secondRow = galleryImages.slice(midpoint);

  return (
    <section className="relative overflow-hidden bg-[#d6bd84] py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-[#93601b]/12 blur-3xl" />

      <div className="relative z-10 mb-11 px-5 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#795019]">
          <Images size={17} />
          Ministry moments
        </div>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Our Gallery
        </h2>

        <Link
          href="/gallery"
          className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-neutral-900 shadow-[0_14px_35px_rgba(57,39,8,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400"
        >
          View full gallery

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="relative z-10 space-y-6">
        <GalleryStrip images={firstRow} />

        {secondRow.length > 0 && (
          <GalleryStrip
  images={secondRow}
  reverse
  slow
/>
        )}
      </div>
    </section>
  );
}