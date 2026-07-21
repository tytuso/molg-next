import { CirclePlay, ExternalLink } from "lucide-react";

import type { Testimonial } from "./testimonials-data";

interface TestimonialVideoCardProps {
  testimonial: Testimonial;
}

export default function TestimonialVideoCard({
  testimonial,
}: TestimonialVideoCardProps) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${testimonial.youtubeId}`;

  return (
    <article className="group overflow-hidden rounded-[24px] border border-white/50 bg-white shadow-[0_16px_42px_rgba(58,42,13,0.11)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_58px_rgba(58,42,13,0.18)]">
      <div className="relative aspect-video overflow-hidden bg-neutral-900">
        <iframe
          src={`https://www.youtube.com/embed/${testimonial.youtubeId}`}
          title={testimonial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <div className="p-5">
        <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#805112]">
          <CirclePlay size={15} />
          Video testimonial
        </div>

        <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug text-neutral-950">
          {testimonial.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">
          {testimonial.description}
        </p>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#805112] transition-colors hover:text-amber-600"
        >
          Watch on YouTube

          <ExternalLink
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
}