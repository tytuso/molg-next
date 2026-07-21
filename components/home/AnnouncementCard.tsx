import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Announcement } from "./announcements-data";

interface AnnouncementCardProps {
  announcement: Announcement;
}

export default function AnnouncementCard({
  announcement,
}: AnnouncementCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-[26px] border border-white/50 bg-white shadow-[0_18px_45px_rgba(58,42,13,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(58,42,13,0.2)]">
      <Link
        href={announcement.href}
        className="relative block aspect-[4/5] overflow-hidden bg-[#f3ead5]"
      >
        <Image
          src={announcement.image}
          alt={announcement.title}
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 30vw"
          className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.025]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
          Announcement
        </span>
      </Link>

      <div className="p-5">
        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-neutral-900">
          {announcement.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600">
          {announcement.description}
        </p>

        <Link
          href={announcement.href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#8b5b17] transition-colors hover:text-amber-600"
        >
          View announcement

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}