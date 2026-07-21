import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  BarChart3,
  Building2,
  BusFront,
  CalendarDays,
  Download,
  Factory,
  GraduationCap,
  Grid3X3,
  Landmark,
  Map,
  MapPinned,
  Network,
  Quote,
} from "lucide-react";

import Container from "@/components/layout/Container";

const statistics = [
  {
    value: "4",
    label: "Regions",
    icon: Map,
  },
  {
    value: "16",
    label: "Sub Regions",
    icon: Network,
  },
  {
    value: "135",
    label: "Districts",
    icon: MapPinned,
  },
  {
    value: "10",
    label: "Cities",
    icon: Building2,
  },
  {
    value: "256",
    label: "Counties",
    icon: Landmark,
  },
  {
    value: "31",
    label: "Municipalities",
    icon: CalendarDays,
  },
  {
    value: "20",
    label: "City Divisions",
    icon: BusFront,
  },
  {
    value: "353",
    label: "Constituencies",
    icon: GraduationCap,
  },
  {
    value: "1,487",
    label: "Sub Counties",
    icon: Anchor,
  },
  {
    value: "89",
    label: "Municipal Divisions",
    icon: Factory,
  },
  {
    value: "589",
    label: "Town Councils",
    icon: Grid3X3,
  },
  {
    value: "10,716",
    label: "Parishes",
    icon: Network,
  },
  {
    value: "71,218",
    label: "Villages",
    icon: MapPinned,
  },
  {
    value: "3,515",
    label: "Wards",
    icon: BarChart3,
  },
  {
    value: "199,444",
    label: "Cells",
    icon: Grid3X3,
  },
];

const coreFunctions = [
  "Enhance value addition in key growth opportunities.",
  "Consolidate and increase the stock and quality of productive infrastructure.",
  "Enhance the productivity and social wellbeing of the population.",
  "Strengthen the role of the state in guiding and facilitating development.",
];

export default function VisionStatistics() {
  return (
    <section className="relative overflow-hidden bg-[#d6bd84] py-16 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-white/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[430px] w-[430px] rounded-full bg-[#91601d]/15 blur-3xl" />

      <Container className="relative z-10">
        {/* Vision */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/30 bg-gradient-to-br from-[#b58a3d] via-[#c8a35d] to-[#9d712b] px-6 py-10 shadow-[0_28px_80px_rgba(75,51,12,0.22)] sm:px-10 lg:px-14 lg:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative grid gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-200">
                Our strategic direction
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Our Vision
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-white/70">
                A modern, effective and accountable local government
                system serving communities across Uganda.
              </p>
            </div>

            <div className="relative rounded-[28px] border border-white/20 bg-black/15 p-7 text-white shadow-2xl backdrop-blur-md sm:p-9">
              <Quote
                size={45}
                className="absolute right-7 top-6 text-amber-300/35"
              />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-neutral-900 shadow-lg">
                <Quote size={23} fill="currentColor" />
              </div>

              <blockquote className="relative z-10 text-lg italic leading-8 text-white/90 sm:text-xl">
                “Our vision is to have an effective and efficient
                Local Government system that provides quality,
                equitable and sustainable services to the population
                of Uganda.”
              </blockquote>
            </div>
          </div>
        </div>

        {/* Statistics and functions */}
        <div className="mt-10 grid gap-8 xl:grid-cols-[1.25fr_0.75fr]">
          {/* Statistics */}
          <div className="rounded-[34px] border border-white/35 bg-white/12 p-5 shadow-[0_22px_60px_rgba(70,48,11,0.14)] backdrop-blur-sm sm:p-8">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#795019]">
                  Uganda at a glance
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Local Government Statistical Summary
                </h2>
              </div>

              <div className="hidden rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-semibold text-neutral-800 sm:block">
                Administrative units
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {statistics.map((stat) => {
                const Icon = stat.icon;

                return (
                  <article
                    key={stat.label}
                    className="group relative overflow-hidden rounded-[22px] border border-white/70 bg-white p-4 shadow-[0_10px_25px_rgba(64,43,8,0.10)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_38px_rgba(64,43,8,0.17)]"
                  >
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-amber-300/15 transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f1d27d] to-[#c9922f] text-white shadow-md">
                        <Icon size={20} />
                      </div>

                      <p className="mt-5 text-xl font-bold text-[#9c671b]">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-neutral-500">
                        {stat.label}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="/api/download/administrative-units"
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-neutral-950"
              >
                <Download size={18} />
                Download statistical summary

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Core functions */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/20 bg-gradient-to-br from-[#1d1912] via-[#352a1b] to-[#815a25] p-7 text-white shadow-[0_28px_75px_rgba(62,42,10,0.25)] sm:p-9">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
                What we do
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ministry Core Functions
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/65">
                The Ministry coordinates, supports and strengthens
                local governments to improve service delivery.
              </p>

              <div className="mt-8 space-y-4">
                {coreFunctions.map((item, index) => (
                  <div
                    key={item}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-amber-300/30 hover:bg-white/10"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 font-bold text-neutral-950">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="pt-1 text-sm leading-6 text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3.5 font-bold text-neutral-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-white hover:to-white"
              >
                Learn more about the Ministry

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}