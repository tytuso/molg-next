import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
} from "lucide-react";

import Container from "@/components/layout/Container";
import DocumentCard from "./DocumentCard";
import { featuredDocuments } from "./documents";

export default function FeaturedDocuments() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#d6bd84]
        py-20
        lg:py-24
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-80
          w-80
          rounded-full
          bg-white/15
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#9f7127]/15
          blur-3xl
        "
      />

      <Container className="relative z-10">
        <div
          className="
            mb-11
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
                text-[#805317]
              "
            >
              <BookOpen size={17} />
              Official documents
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
              Strategic Plans & Reports
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-base
                leading-7
                text-neutral-800/75
              "
            >
              Access Ministry strategic plans, annual reports,
              statistical publications and official planning
              documents.
            </p>
          </div>

          <Link
            href="/reports"
            className="
              group
              hidden
              items-center
              gap-3
              rounded-full
              border
              border-white/50
              bg-white/20
              px-6
              py-3
              font-bold
              text-neutral-900
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-white
              md:inline-flex
            "
          >
            Browse all reports

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        <div
          className="
            grid
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {featuredDocuments.map((document) => (
            <DocumentCard
              key={document.id}
              document={document}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/reports"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-white
              px-7
              py-4
              font-bold
              text-neutral-900
              shadow-[0_14px_35px_rgba(58,42,13,0.15)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-amber-400
              hover:shadow-[0_20px_45px_rgba(58,42,13,0.22)]
            "
          >
            View more reports and publications

            <ArrowRight
              size={19}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}