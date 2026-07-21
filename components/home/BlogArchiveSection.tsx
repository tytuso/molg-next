import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  Newspaper,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { getPosts } from "@/lib/wordpress";
import type { Post } from "@/types/post";

import BlogArchiveGrid from "./BlogArchiveGrid";

interface BlogArchiveSectionProps {
  currentPage?: number;
}

const POSTS_PER_PAGE = 50;

export default async function BlogArchiveSection({
  currentPage = 1,
}: BlogArchiveSectionProps) {
  let posts: Post[] = [];

  try {
    posts = await getPosts(currentPage, POSTS_PER_PAGE);
  } catch (error) {
    console.error("Unable to load the news archive:", error);
  }

  if (!posts.length && currentPage === 1) {
    return null;
  }

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = posts.length === POSTS_PER_PAGE;

  return (
    <section
      id="news-archive"
      className="relative overflow-hidden bg-gradient-to-b from-[#dfcd9f] via-[#d6bd84] to-[#ccb06f] py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-28 top-12 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-[#8c5b18]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#795019]">
              <Newspaper size={17} />
              News and updates
            </div>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ministry News Archive
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-800/75 sm:text-base">
              Browse Ministry programmes, inspections, announcements and
              official updates from across Uganda.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-4 py-2.5 text-xs font-bold text-neutral-800 backdrop-blur-sm">
              <LayoutGrid size={16} />
              Showing {posts.length} articles
            </div>

            <Link
              href="/news"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-neutral-900 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400"
            >
              View all news

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {posts.length > 0 ? (
          <BlogArchiveGrid posts={posts} />
        ) : (
          <div className="rounded-[24px] border border-white/40 bg-white/20 p-8 text-center text-neutral-800 backdrop-blur-sm">
            No articles were found on this page.
          </div>
        )}

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/35 pt-8 sm:flex-row">
          <p className="text-sm font-medium text-neutral-700">
            Page <strong>{currentPage}</strong> · Showing up to{" "}
            <strong>{POSTS_PER_PAGE}</strong> articles
          </p>

          <nav
            aria-label="News archive navigation"
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {hasPreviousPage ? (
              <Link
                href={`/?newsPage=${currentPage - 1}#news-archive`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/25 px-5 py-3 text-sm font-bold text-neutral-900 transition-all duration-300 hover:bg-white"
              >
                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Previous 50
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-bold text-neutral-600/50"
              >
                <ArrowLeft size={17} />
                Previous 50
              </span>
            )}

            {hasNextPage ? (
              <Link
                href={`/?newsPage=${currentPage + 1}#news-archive`}
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-neutral-950"
              >
                Next 50

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-neutral-900/20 px-5 py-3 text-sm font-bold text-neutral-700/45"
              >
                Next 50
                <ArrowRight size={17} />
              </span>
            )}
          </nav>
        </div>
      </Container>
    </section>
  );
}