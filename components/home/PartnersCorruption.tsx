import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Handshake,
  LockKeyhole,
  Mail,
  Phone,
  ShieldAlert,
} from "lucide-react";

import Container from "@/components/layout/Container";
import PartnersCarousel from "./PartnersCarousel";

export default function PartnersCorruption() {
  return (
    <section className="relative overflow-hidden bg-[#d6bd84]">
      {/* Partners */}
      <div className="relative py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#8d5b18]/10 blur-3xl" />

        <Container className="relative z-10">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#795019]">
              <Handshake size={18} />
              Development cooperation
            </div>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Partners
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-800/70">
              Working together with national and international partners to
              strengthen local government and improve public service delivery.
            </p>
          </div>

          <PartnersCarousel />
        </Container>
      </div>

      {/* Corruption CTA */}
      <div className="relative bg-[#3c291b] py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-[#d6bd84]/15 blur-[120px]" />

        <Container className="relative z-10">
          <div
            className="
              relative
              overflow-hidden
              rounded-[38px]
              border
              border-white/15
              bg-gradient-to-br
              from-white/12
              via-white/7
              to-amber-300/10
              px-6
              py-10
              shadow-[0_30px_90px_rgba(0,0,0,0.28)]
              backdrop-blur-md
              sm:px-10
              lg:px-14
              lg:py-14
            "
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  <ShieldAlert size={17} />
                  Integrity and accountability
                </div>

                <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  The Ministry condemns corruption at every level
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                  Help protect public resources and improve service delivery.
                  Report suspected corruption, abuse of office or misconduct
                  through the Ministry’s official channels.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/65">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                    <LockKeyhole size={15} className="text-amber-300" />
                    Confidential reporting
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                    <Phone size={15} className="text-amber-300" />
                    Official Ministry channels
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                    <Mail size={15} className="text-amber-300" />
                    Written submissions accepted
                  </span>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-black/15 p-6 backdrop-blur-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  Take action
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Report suspected corruption
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  Provide clear details and supporting information where
                  available. Reports will be directed to the appropriate
                  Ministry office.
                </p>

                <Link
                  href="/contact"
                  className="
                    group
                    mt-7
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-amber-400
                    to-amber-500
                    px-6
                    py-4
                    font-bold
                    text-neutral-950
                    shadow-[0_16px_38px_rgba(245,158,11,0.24)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:from-white
                    hover:to-white
                    hover:shadow-[0_22px_50px_rgba(0,0,0,0.28)]
                  "
                >
                  Report corruption

                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="mailto:info@molg.go.ug?subject=Confidential Corruption Report"
                  className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-amber-300"
                >
                  Or send a confidential email
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}