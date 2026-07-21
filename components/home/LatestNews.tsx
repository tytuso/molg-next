import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

import Container from "@/components/layout/Container";
import { getPosts } from "@/lib/wordpress";
import type { Post } from "@/types/post";

import LatestNewsCarousel from "./LatestNewsCarousel";

export default async function LatestNews() {
  const posts: Post[] = await getPosts(1, 9);

  if (!posts.length) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#c9aa69]
        via-[#d6bd84]
        to-[#dfcd9f]
        py-16
        lg:py-20
      "
    >
      {/* Decorative details */}
      <div
        className="
          pointer-events-none
          absolute
          -left-28
          top-0
          h-72
          w-72
          rounded-full
          bg-white/15
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-28
          bottom-0
          h-80
          w-80
          rounded-full
          bg-[#93601b]/15
          blur-3xl
        "
      />

      <Container className="relative z-10">
        <div
          className="
            mb-10
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#754910]
              "
            >
              <Newspaper size={17} />
              Ministry updates
            </div>

            <h2
              className="
                mt-3
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-5xl
              "
            >
              Latest News
            </h2>

            <p
              className="
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-neutral-800/75
                sm:text-base
              "
            >
              A quick look at recent Ministry activities,
              programmes and official updates from across Uganda.
            </p>
          </div>

          <Link
            href="/news"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-white/50
              bg-white/20
              px-5
              py-3
              text-sm
              font-bold
              text-neutral-900
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-white
            "
          >
            View all news

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        <LatestNewsCarousel posts={posts} />
      </Container>
    </section>
  );
}