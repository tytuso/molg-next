import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  FileText,
} from "lucide-react";

import type { FeaturedDocument } from "./documents";

interface ReportShowcaseCardProps {
  document: FeaturedDocument;
  index: number;
}

export default function ReportShowcaseCard({
  document,
  index,
}: ReportShowcaseCardProps) {
  const rotations = [
    "lg:-rotate-2",
    "lg:rotate-1",
    "lg:-rotate-1",
  ];

  return (
    <article
      className={`
        group
        relative
        min-w-0
        transition-all
        duration-500
        hover:z-20
        hover:-translate-y-3
        hover:rotate-0
        ${rotations[index % rotations.length]}
      `}
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[26px]
          border
          border-white/25
          bg-white/10
          p-3
          shadow-[0_24px_60px_rgba(0,0,0,0.30)]
          backdrop-blur-md
          transition-all
          duration-500
          group-hover:border-amber-300/50
          group-hover:bg-white/15
          group-hover:shadow-[0_34px_80px_rgba(0,0,0,0.42)]
        "
      >
        <div
          className="
            relative
            aspect-[4/5.35]
            overflow-hidden
            rounded-[19px]
            bg-[#e9ddbf]
          "
        >
          <Image
            src={document.coverImage}
            alt={`${document.title} cover`}
            fill
            sizes="
              (max-width: 768px) 82vw,
              (max-width: 1200px) 42vw,
              27vw
            "
            className="
              object-contain
              transition-transform
              duration-700
              group-hover:scale-[1.035]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/65
              via-transparent
              to-black/5
            "
          />

          <div
            className="
              absolute
              left-4
              top-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/25
              bg-black/35
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
              backdrop-blur-md
            "
          >
            <FileText size={13} />
            {document.fileType}
          </div>

          <a
            href={`/api/download/${document.slug}`}
            aria-label={`Download ${document.title}`}
            className="
              absolute
              bottom-4
              right-4
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-amber-400
              text-neutral-950
              shadow-xl
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
            "
          >
            <Download size={19} />
          </a>
        </div>

        <div className="px-2 pb-2 pt-5">
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-amber-300
            "
          >
            <span>{document.category}</span>
            <span>{document.year}</span>
          </div>

          <h3
            className="
              mt-3
              line-clamp-2
              min-h-[56px]
              text-lg
              font-bold
              leading-snug
              text-white
            "
          >
            {document.title}
          </h3>

          <a
            href={`/api/download/${document.slug}`}
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-white/80
              transition-colors
              hover:text-amber-300
            "
          >
            Download report

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          -bottom-6
          left-[12%]
          right-[12%]
          -z-10
          h-10
          rounded-full
          bg-black/35
          blur-xl
          transition-all
          duration-500
          group-hover:left-[8%]
          group-hover:right-[8%]
        "
      />
    </article>
  );
}