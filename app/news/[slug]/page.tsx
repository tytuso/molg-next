import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Home,
  Newspaper,
  UserRound,
} from "lucide-react";

import Container from "@/components/layout/Container";
import ArticleContent from "@/components/news/ArticleContent";
import RelatedNews from "@/components/news/RelatedNews";

import {
  formatNewsDate,
  getFeaturedImage,
  getPostAuthor,
  getPostCategory,
  stripHtml,
} from "@/lib/news-utils";

import {
  getPost,
  getRelatedPosts,
} from "@/lib/wordpress";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | Ministry of Local Government",
    };
  }

  const title = stripHtml(post.title.rendered);
  const author = getPostAuthor(post);

  const description = stripHtml(
    post.excerpt?.rendered ?? "",
  ).slice(0, 160);

  const featuredImage = getFeaturedImage(post);

  return {
    title: `${title} | Ministry of Local Government`,
    description,
    authors: [
      {
        name: author.name,
      },
    ],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      authors: [author.name],
      images: featuredImage
        ? [
            {
              url: featuredImage,
              alt: title,
            },
          ]
        : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const title = stripHtml(post.title.rendered);
  const category = getPostCategory(post);
  const author = getPostAuthor(post);
  const featuredImage = getFeaturedImage(post);

  const categoryIds =
    "categories" in post &&
    Array.isArray(post.categories)
      ? post.categories
      : [];

  const relatedPosts = await getRelatedPosts(
    post.id,
    categoryIds,
    5,
  );

  return (
    <main className="min-h-screen bg-[#d6bd84]">
      <section className="relative overflow-hidden bg-[#302116] pb-24 pt-14 text-white lg:pb-32 lg:pt-20">
        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#d6bd84]/15 blur-[120px]" />

        <Container className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/55">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-amber-300"
            >
              <Home size={13} />
              Home
            </Link>

            <span>/</span>

            <Link
              href="/news"
              className="transition-colors hover:text-amber-300"
            >
              News
            </Link>

            <span>/</span>

            <span className="max-w-[260px] truncate text-amber-300">
              {title}
            </span>
          </div>

          <div className="mt-9 max-w-5xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-300">
              <Newspaper size={15} />
              {category.name}
            </span>

            <h1 className="mt-6 text-3xl font-black leading-[1.14] tracking-tight sm:text-5xl lg:text-[58px]">
              {title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5">
              <div className="inline-flex items-center gap-2 text-sm text-white/65">
                <CalendarDays
                  size={17}
                  className="text-amber-300"
                />

                <time dateTime={post.date}>
                  {formatNewsDate(post.date)}
                </time>
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-white/35 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-black text-amber-300">
                  {author.initials || (
                    <UserRound size={17} />
                  )}
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Written by
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-white">
                    {author.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="relative z-20 -mt-14 pb-20 lg:-mt-20">
        {featuredImage && (
          <div className="relative mb-8 aspect-[16/8] overflow-hidden rounded-[28px] border-4 border-white/30 bg-neutral-200 shadow-[0_30px_80px_rgba(47,31,10,0.22)] lg:rounded-[38px]">
            <Image
              src={featuredImage}
              alt={title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        )}

        <article className="rounded-[30px] border border-black/[0.06] bg-white px-5 py-9 shadow-[0_18px_55px_rgba(58,39,12,0.10)] sm:px-9 lg:px-14 lg:py-14">
          <div className="mb-9 flex flex-col gap-5 border-b border-neutral-200 pb-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eadbb7] text-sm font-black text-[#805112]">
                {author.initials || (
                  <UserRound size={19} />
                )}
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                  Article author
                </p>

                <p className="mt-1 text-sm font-bold text-neutral-950">
                  {author.name}
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                Published
              </p>

              <time
                dateTime={post.date}
                className="mt-1 block text-sm font-semibold text-neutral-700"
              >
                {formatNewsDate(post.date)}
              </time>
            </div>
          </div>

          <ArticleContent
            content={post.content.rendered}
          />
        </article>

        <div className="mt-7">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 rounded-full bg-[#302116] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-amber-400 hover:text-neutral-950"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to all news
          </Link>
        </div>

        <RelatedNews posts={relatedPosts} />
      </Container>
    </main>
  );
}