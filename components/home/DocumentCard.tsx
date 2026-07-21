import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  FileText,
} from "lucide-react";

import type { FeaturedDocument } from "./documents";

interface DocumentCardProps {
  document: FeaturedDocument;
}

export default function DocumentCard({
  document,
}: DocumentCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-white/55
        bg-white
        shadow-[0_16px_45px_rgba(62,43,12,0.12)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_26px_70px_rgba(62,43,12,0.2)]
      "
    >
      <div
        className="
          relative
          aspect-[4/5.35]
          overflow-hidden
          bg-[#eee3c8]
        "
      >
        <Image
          src={document.coverImage}
          alt={`${document.title} cover`}
          fill
          sizes="
            (max-width: 768px) 90vw,
            (max-width: 1200px) 45vw,
            30vw
          "
          className="
            object-contain
            p-4
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
            from-black/55
            via-transparent
            to-transparent
            opacity-60
            transition-opacity
            duration-500
            group-hover:opacity-80
          "
        />

        <span
          className="
            absolute
            left-5
            top-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/30
            bg-black/35
            px-3.5
            py-1.5
            text-xs
            font-bold
            uppercase
            tracking-[0.13em]
            text-white
            backdrop-blur-md
          "
        >
          <FileText size={14} />
          {document.fileType}
        </span>

        <a
          href={`/api/download/${document.slug}`}
          className="
            absolute
            bottom-5
            left-5
            right-5
            flex
            items-center
            justify-center
            gap-2.5
            rounded-full
            bg-gradient-to-r
            from-amber-400
            to-amber-500
            px-5
            py-3.5
            font-bold
            text-neutral-950
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:from-amber-300
            hover:to-amber-500
          "
        >
          <Download size={18} />
          Download {document.fileType}
        </a>
      </div>

      <div className="p-6">
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            text-xs
            font-bold
            uppercase
            tracking-[0.14em]
            text-[#90601d]
          "
        >
          <span>{document.category}</span>
          <span>{document.year}</span>
        </div>

        <h3
          className="
            mt-3
            text-xl
            font-bold
            leading-snug
            text-neutral-900
          "
        >
          {document.title}
        </h3>

        <a
          href={`/api/download/${document.slug}`}
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-sm
            font-bold
            text-[#835615]
            transition-colors
            hover:text-amber-600
          "
        >
          Download document
          <ArrowUpRight
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </a>
      </div>
    </article>
  );
}