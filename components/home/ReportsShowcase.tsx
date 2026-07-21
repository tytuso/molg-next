import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Download,
  FileArchive,
} from "lucide-react";

import Container from "@/components/layout/Container";
import ReportShowcaseCard from "./ReportShowcaseCard";
import { featuredDocuments } from "./documents";

export default function ReportsShowcase() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#d6bd84]
        py-16
        lg:py-24
      "
    >
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[38px]
            border
            border-white/20
            bg-gradient-to-br
            from-[#1b1710]
            via-[#33291b]
            to-[#7c5725]
            px-5
            py-12
            shadow-[0_30px_90px_rgba(62,43,12,0.28)]
            sm:px-8
            lg:px-12
            lg:py-16
          "
        >
          {/* Decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              -left-32
              -top-32
              h-96
              w-96
              rounded-full
              bg-amber-400/20
              blur-[100px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              right-0
              h-[480px]
              w-[480px]
              rounded-full
              bg-[#d6bd84]/20
              blur-[120px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.035]
            "
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            <div
              className="
                mb-12
                flex
                flex-col
                gap-8
                lg:flex-row
                lg:items-end
                lg:justify-between
              "
            >
              <div className="max-w-3xl">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-amber-300/25
                    bg-amber-300/10
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-amber-300
                    backdrop-blur-md
                  "
                >
                  <BookOpenCheck size={16} />
                  Ministry knowledge centre
                </div>

                <h2
                  className="
                    mt-5
                    text-4xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Reports & Publications
                </h2>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-base
                    leading-7
                    text-white/70
                    sm:text-lg
                  "
                >
                  Explore official Ministry reports, strategic plans,
                  performance assessments and statistical publications.
                </p>
              </div>

              <div
                className="
                  hidden
                  items-center
                  gap-4
                  rounded-[24px]
                  border
                  border-white/15
                  bg-white/10
                  px-5
                  py-4
                  text-white
                  backdrop-blur-md
                  lg:flex
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-amber-400
                    text-neutral-950
                  "
                >
                  <FileArchive size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/55">
                    Digital archive
                  </p>

                  <p className="mt-1 font-bold">
                    Official Ministry documents
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                grid
                gap-9
                md:grid-cols-2
                xl:grid-cols-3
                xl:gap-8
              "
            >
              {featuredDocuments.map((document, index) => (
                <ReportShowcaseCard
                  key={document.id}
                  document={document}
                  index={index}
                />
              ))}
            </div>

            <div
              className="
                mt-14
                flex
                flex-col
                items-center
                justify-between
                gap-6
                border-t
                border-white/15
                pt-9
                sm:flex-row
              "
            >
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Download size={18} className="text-amber-300" />

                Reports can be downloaded directly as PDF files.
              </div>

              <Link
                href="/reports"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-amber-400
                  to-amber-500
                  px-7
                  py-4
                  font-bold
                  text-neutral-950
                  shadow-[0_14px_35px_rgba(245,158,11,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:from-white
                  hover:to-white
                  hover:shadow-[0_20px_45px_rgba(0,0,0,0.30)]
                "
              >
                Explore all reports

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
          </div>
        </div>
      </Container>
    </section>
  );
}