import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import type { Post } from "@/types/post";

interface CompactNewsCardProps {
  post: Post;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-UG", {
    day: "numeric",
    month: "short",
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

export default function CompactNewsCard({
  post,
}: CompactNewsCardProps) {
  const featuredImage = getFeaturedImage(post);
  const category = getCategory(post);

  return (
    <article
      className="
        group
        h-full
        overflow-hidden
        rounded-[24px]
        border
        border-white/50
        bg-white
        shadow-[0_12px_32px_rgba(55,38,9,0.10)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_22px_50px_rgba(55,38,9,0.18)]
      "
    >
      <Link
        href={`/news/${post.slug}`}
        className="
          relative
          block
          aspect-[16/9]
          overflow-hidden
          bg-[#c7aa6a]
        "
      >
        {featuredImage?.source_url ? (
          <Image
            src={featuredImage.source_url}
            alt={
              featuredImage.alt_text ||
              post.title.rendered.replace(/<[^>]*>/g, "")
            }
            fill
            sizes="
              (max-width: 640px) 88vw,
              (max-width: 1024px) 45vw,
              31vw
            "
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.06]
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              items-center
              justify-center
              bg-gradient-to-br
              from-[#ddca99]
              to-[#aa7d35]
              px-8
              text-center
              font-bold
              text-white
            "
          >
            Ministry of Local Government
          </div>
        )}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/45
            via-transparent
            to-transparent
          "
        />

        <span
          className="
            absolute
            left-4
            top-4
            max-w-[80%]
            truncate
            rounded-full
            border
            border-white/30
            bg-black/30
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-white
            backdrop-blur-md
          "
        >
          {category}
        </span>
      </Link>

      <div className="p-5">
        <div
          className="
            flex
            items-center
            gap-2
            text-xs
            font-medium
            text-neutral-500
          "
        >
          <CalendarDays size={14} />

          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>

        <h3
          className="
            mt-3
            line-clamp-2
            min-h-[52px]
            text-lg
            font-bold
            leading-[1.45]
            text-neutral-900
            transition-colors
            duration-300
            group-hover:text-[#94601c]
          "
        >
          <Link
            href={`/news/${post.slug}`}
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          />
        </h3>

        <div
          className="
            mt-3
            line-clamp-2
            min-h-[48px]
            text-sm
            leading-6
            text-neutral-600
          "
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />

        <Link
          href={`/news/${post.slug}`}
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-sm
            font-bold
            text-[#875715]
            transition-colors
            hover:text-amber-600
          "
        >
          Read story

          <ArrowUpRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </Link>
      </div>
    </article>
  );
}