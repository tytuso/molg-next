import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import type { Post } from "@/types/post";

interface FeaturedNewsCardProps {
  post: Post;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-UG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function FeaturedNewsCard({
  post,
}: FeaturedNewsCardProps) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];

  return (
    <article className="group relative min-h-[540px] overflow-hidden rounded-[30px] bg-neutral-900 shadow-[0_24px_60px_rgba(44,35,17,0.18)]">
      {media?.source_url ? (
        <Image
          src={media.source_url}
          alt={media.alt_text || post.title.rendered}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#d8c087] to-[#9b7438]" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-7 text-white sm:p-9 lg:p-11">
        <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur-md">
          Featured story
        </span>

        <div className="mt-5 flex items-center gap-2 text-sm text-white/75">
          <CalendarDays size={16} />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        <h3 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          <Link
            href={`/news/${post.slug}`}
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          />
        </h3>

        <div
          className="mt-4 max-w-2xl text-base leading-7 text-white/85 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />

        <Link
          href={`/news/${post.slug}`}
          className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-bold text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400"
        >
          Read full story
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}