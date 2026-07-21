import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Home,
  Newspaper,
  Sparkles,
} from "lucide-react";

import Container from "@/components/layout/Container";
import NewsArchiveCard from "@/components/news/NewsArchiveCard";
import NewsPagination from "@/components/news/NewsPagination";

import {
  formatNewsDate,
  getFeaturedImage,
  getPostAuthor,
  getPostCategory,
  stripHtml,
} from "@/lib/news-utils";

import { getPosts } from "@/lib/wordpress";
import type { Post } from "@/types/post";

export const metadata: Metadata = {
  title: "Latest News | Ministry of Local Government",
  description:
    "Read the latest news, official announcements, programmes and activities from Uganda's Ministry of Local Government.",
};

interface NewsPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

const POSTS_PER_PAGE = 20;

export default async function NewsPage({
  searchParams,
}: NewsPageProps) {
  const params = await searchParams;

  const requestedPage = Number(params.page ?? "1");

  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  let posts: Post[] = [];

  try {
    posts = await getPosts(currentPage, POSTS_PER_PAGE);
  } catch (error) {
    console.error("Unable to load Ministry news:", error);
  }

  const hasNextPage = posts.length === POSTS_PER_PAGE;

  const featuredPost = currentPage === 1 ? posts[0] : null;

  const archivePosts =
    currentPage === 1 ? posts.slice(1) : posts;

  return (
    <main className="min-h-screen bg-[#d6bd84]">
      <NewsHero />

      {featuredPost && (
        <FeaturedArticle post={featuredPost} />
      )}

      <section
        id="news-list"
        className="relative scroll-mt-24 overflow-hidden py-14 lg:py-20"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-white/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#8a5715]/10 blur-3xl" />

        <Container className="relative z-10">
          <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7d5118]">
                <Newspaper size={16} />
                Ministry updates
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                {currentPage === 1
                  ? "Latest News and Activities"
                  : "More Ministry News"}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-700">
                Official programmes, field activities, announcements and
                updates from Uganda&apos;s local government sector.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/55 bg-white/25 px-4 py-2.5 text-xs font-bold text-neutral-700 backdrop-blur-md">
              <Sparkles size={15} className="text-[#835316]" />
              Page {currentPage}
            </div>
          </div>

          {archivePosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                {archivePosts.map((post, index) => (
                  <NewsArchiveCard
                    key={post.id}
                    post={post}
                    priority={currentPage === 1 && index < 3}
                  />
                ))}
              </div>

              <NewsPagination
                currentPage={currentPage}
                hasNextPage={hasNextPage}
              />
            </>
          ) : (
            <div className="rounded-[28px] border border-white/50 bg-white/25 px-6 py-16 text-center shadow-sm backdrop-blur-md">
              <Newspaper
                size={40}
                className="mx-auto text-[#805112]"
              />

              <h2 className="mt-5 text-2xl font-black text-neutral-950">
                No news articles found
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-neutral-600">
                There are no articles available on this page. Return to the
                latest news page to continue reading.
              </p>

              <Link
                href="/news"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#302116] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-amber-400 hover:text-neutral-950"
              >
                Return to latest news
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}

function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-[#302116] py-16 text-white lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-amber-400/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#d6bd84]/15 blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "25px 25px",
        }}
      />

      <Container className="relative z-10">
        <div className="flex items-center gap-2 text-xs font-medium text-white/55">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-amber-300"
          >
            <Home size={14} />
            Home
          </Link>

          <ArrowRight size={13} />

          <span className="text-amber-300">
            Latest News
          </span>
        </div>

        <div className="mt-9 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
            <Newspaper size={16} />
            Official newsroom
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
            Latest News
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            Follow Ministry programmes, official announcements, field
            activities and developments from local governments across Uganda.
          </p>
        </div>
      </Container>
    </section>
  );
}

function FeaturedArticle({
  post,
}: {
  post: Post;
}) {
  const title = stripHtml(post.title.rendered);
  const excerpt = stripHtml(post.excerpt?.rendered ?? "");
  const featuredImage = getFeaturedImage(post);
  const category = getPostCategory(post);
  const author = getPostAuthor(post);

  return (
    <section className="relative z-20 -mt-8 lg:-mt-12">
      <Container>
        <article className="group overflow-hidden rounded-[30px] border border-white/30 bg-white shadow-[0_28px_80px_rgba(50,34,12,0.18)] lg:rounded-[38px]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <Link
              href={`/news/${post.slug}`}
              className="relative min-h-[290px] overflow-hidden bg-[#c5ad75] sm:min-h-[380px] lg:min-h-[470px]"
            >
              {featuredImage ? (
                <Image
                  src={featuredImage}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#dec996] to-[#9c6c2b] px-8 text-center">
                  <div>
                    <Newspaper
                      size={40}
                      className="mx-auto text-white/80"
                    />

                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
                      Ministry of Local Government
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                {category.name}
              </span>
            </Link>

            <div className="flex flex-col justify-center px-6 py-8 sm:px-9 lg:px-12 lg:py-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#875715]">
                Featured story
              </p>

              <h2 className="mt-4 text-2xl font-black leading-tight text-neutral-950 sm:text-3xl lg:text-4xl">
                <Link
                  href={`/news/${post.slug}`}
                  className="transition-colors hover:text-[#875715]"
                >
                  {title}
                </Link>
              </h2>

              {excerpt && (
                <p className="mt-5 line-clamp-4 text-sm leading-7 text-neutral-600 sm:text-base">
                  {excerpt}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500">
                <div className="inline-flex items-center gap-2">
                  <CalendarDays size={15} />
                  <time dateTime={post.date}>
                    {formatNewsDate(post.date)}
                  </time>
                </div>

                <span className="h-1 w-1 rounded-full bg-neutral-300" />

                <span>
                  By {author.name}
                </span>
              </div>

              <Link
                href={`/news/${post.slug}`}
                className="group/button mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#302116] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-neutral-950"
              >
                Read full article

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}