import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import type { Post } from "@/types/post";

interface BlogArchiveCardProps {
  post: Post;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-UG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function removeHtml(value: string) {
  return value.replace(/<[^>]*>/g, "").trim();
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

export default function BlogArchiveCard({
  post,
}: BlogArchiveCardProps) {
  const featuredImage = getFeaturedImage(post);
  const category = getCategory(post);

  return (
    <article
      className="
        group
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-[20px]
        border
        border-black/5
        bg-white
        shadow-[0_10px_28px_rgba(55,38,9,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(55,38,9,0.14)]
      "
    >
      <Link
        href={`/news/${post.slug}`}
        className="
          relative
          block
          aspect-[16/10]
          overflow-hidden
          bg-[#c7ae73]
        "
      >
        {featuredImage?.source_url ? (
          <Image
            src={featuredImage.source_url}
            alt={
              featuredImage.alt_text ||
              removeHtml(post.title.rendered)
            }
            fill
            sizes="
              (max-width: 640px) 50vw,
              (max-width: 1280px) 33vw,
              25vw
            "
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.045]
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
              from-[#dfcc9c]
              to-[#aa7b34]
              p-6
              text-center
              text-sm
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
            bottom-3
            left-3
            max-w-[85%]
            truncate
            rounded-full
            border
            border-white/25
            bg-black/35
            px-2.5
            py-1
            text-[9px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white
            backdrop-blur-md
          "
        >
          {category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div
          className="
            flex
            items-center
            gap-1.5
            text-[11px]
            font-medium
            text-neutral-500
          "
        >
          <CalendarDays size={13} />

          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>

        <h3
          className="
            mt-3
            line-clamp-2
            text-sm
            font-bold
            leading-[1.45]
            text-neutral-900
            transition-colors
            duration-300
            group-hover:text-[#8d5a16]
            sm:text-base
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
            hidden
            line-clamp-2
            text-xs
            leading-5
            text-neutral-600
            sm:block
          "
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />

        <Link
          href={`/news/${post.slug}`}
          className="
            mt-auto
            inline-flex
            items-center
            gap-1.5
            pt-4
            text-xs
            font-bold
            text-[#875715]
            transition-colors
            hover:text-amber-600
          "
        >
          Read article

          <ArrowUpRight
            size={14}
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