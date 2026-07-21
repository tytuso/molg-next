import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import type { Post } from "@/types/post";

interface NewsCardProps {
  post: Post;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-UG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function getFeaturedImage(post: Post) {
  return post._embedded?.["wp:featuredmedia"]?.[0];
}

function getCategory(post: Post) {
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];

  return (
    terms.find((term) => term.taxonomy === "category")?.name ??
    "Ministry News"
  );
}

export default function NewsCard({ post }: NewsCardProps) {
  const media = getFeaturedImage(post);
  const category = getCategory(post);

  return (
    <article className="group overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_12px_35px_rgba(44,35,17,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(44,35,17,0.14)]">
      <Link
        href={`/news/${post.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#cbb176]"
      >
        {media?.source_url ? (
          <Image
            src={media.source_url}
            alt={media.alt_text || post.title.rendered}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#dbc58f] to-[#b89957] px-8 text-center font-semibold text-white">
            Ministry of Local Government
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
          {category}
        </span>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <CalendarDays size={15} />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug text-neutral-900 transition-colors group-hover:text-[#9a651d]">
          <Link
            href={`/news/${post.slug}`}
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          />
        </h3>

        <div
          className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />

        <Link
          href={`/news/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#8a5918] transition-colors hover:text-[#c17a13]"
        >
          Read full story
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}