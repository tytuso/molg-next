import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  ImageIcon,
} from "lucide-react";

import {
  formatNewsDate,
  getFeaturedImage,
  getPostCategory,
  stripHtml,
} from "@/lib/news-utils";
import type { Post } from "@/types/post";

interface NewsArchiveCardProps {
  post: Post;
  priority?: boolean;
}

export default function NewsArchiveCard({
  post,
  priority = false,
}: NewsArchiveCardProps) {
  const title = stripHtml(post.title.rendered);
  const excerpt = stripHtml(post.excerpt.rendered);
  const featuredImage = getFeaturedImage(post);
  const category = getPostCategory(post);

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border border-black/[0.07] bg-white shadow-[0_10px_30px_rgba(62,42,12,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(62,42,12,0.14)]">
      <Link
        href={`/news/${post.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#c9b276]"
      >
        {featuredImage ? (
          <Image
            src={featuredImage}
            alt={title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#e3d2a8] to-[#af833e]">
            <div className="text-center text-white">
              <ImageIcon size={30} className="mx-auto opacity-80" />

              <p className="mt-3 px-5 text-xs font-bold uppercase tracking-[0.12em]">
                Ministry of Local Government
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <span className="absolute bottom-3 left-3 max-w-[80%] truncate rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-md">
          {category.name}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-2 text-[11px] font-medium text-neutral-500">
          <CalendarDays size={13} />

          <time dateTime={post.date}>
            {formatNewsDate(post.date)}
          </time>
        </div>

        <h2 className="mt-3 line-clamp-2 text-[15px] font-bold leading-[1.45] text-neutral-950 transition-colors duration-300 group-hover:text-[#875715] sm:text-base">
          <Link href={`/news/${post.slug}`}>
            {title}
          </Link>
        </h2>

        {excerpt && (
          <p className="mt-3 hidden line-clamp-2 text-xs leading-5 text-neutral-600 sm:block">
            {excerpt}
          </p>
        )}

        <Link
          href={`/news/${post.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-bold text-[#875715] transition-colors hover:text-amber-600"
        >
          Read article

          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}