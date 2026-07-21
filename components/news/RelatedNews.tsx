import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

import type { Post } from "@/types/post";
import NewsArchiveCard from "./NewsArchiveCard";

interface RelatedNewsProps {
  posts: Post[];
}

export default function RelatedNews({
  posts,
}: RelatedNewsProps) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="mt-14 border-t border-black/10 pt-12">
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#805112]">
            <Newspaper size={16} />
            Continue reading
          </div>

          <h2 className="mt-3 text-3xl font-black text-neutral-950">
            Related News
          </h2>

          <p className="mt-2 text-sm leading-6 text-neutral-600">
            More recent updates and activities from the Ministry.
          </p>
        </div>

        <Link
          href="/news"
          className="group inline-flex items-center gap-2 text-sm font-bold text-[#805112] transition-colors hover:text-amber-600"
        >
          View all news

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {posts.map((post) => (
          <NewsArchiveCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
}