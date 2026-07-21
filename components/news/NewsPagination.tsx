import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface NewsPaginationProps {
  currentPage: number;
  hasNextPage: boolean;
}

export default function NewsPagination({
  currentPage,
  hasNextPage,
}: NewsPaginationProps) {
  const hasPreviousPage = currentPage > 1;

  return (
    <nav
      aria-label="News pagination"
      className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-black/10 pt-8 sm:flex-row"
    >
      <p className="text-sm font-medium text-neutral-600">
        News page <strong>{currentPage}</strong>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {hasPreviousPage ? (
          <Link
            href={`/news?page=${currentPage - 1}#news-list`}
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold text-neutral-900 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Newer articles
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-black/5 bg-white/30 px-5 py-3 text-sm font-bold text-neutral-400"
          >
            <ArrowLeft size={17} />
            Newer articles
          </span>
        )}

        {hasNextPage ? (
          <Link
            href={`/news?page=${currentPage + 1}#news-list`}
            className="group inline-flex items-center gap-2 rounded-full bg-[#302116] px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-neutral-950"
          >
            Older articles

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-neutral-900/10 px-5 py-3 text-sm font-bold text-neutral-400"
          >
            Older articles
            <ArrowRight size={17} />
          </span>
        )}
      </div>
    </nav>
  );
}