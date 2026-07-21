import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import Container from "../Container";

export default function BrandBar() {
  return (
    <section className="border-b border-black/10 bg-[#d6bd84]">
      <Container className="py-8">
        <div className="flex items-center justify-between gap-12">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-6"
            aria-label="Ministry of Local Government homepage"
          >
            <div className="relative h-[118px] w-[118px] shrink-0">
              <Image
                src="/images/coat-of-arms.png"
                alt="Uganda Coat of Arms"
                fill
                sizes="118px"
                priority
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-neutral-700">
                Republic of Uganda
              </p>

              <h1 className="mt-2 text-[38px] font-black leading-[1.05] tracking-[-0.025em] text-neutral-950 xl:text-[42px]">
                Ministry of Local Government
              </h1>

              <p className="mt-3 text-base font-medium text-neutral-700">
                Government of Uganda
              </p>
            </div>
          </Link>

          <div className="w-[310px] shrink-0 space-y-4 text-[15px] text-neutral-900">
            <a
              href="tel:+256414256533"
              className="group flex items-center gap-4 transition-colors hover:text-[#8a5715]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/20">
                <Phone size={18} strokeWidth={1.8} />
              </span>

              <span className="font-medium">+256 414 256 533</span>
            </a>

            <a
              href="mailto:info@molg.go.ug"
              className="group flex items-center gap-4 transition-colors hover:text-[#8a5715]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/20">
                <Mail size={18} strokeWidth={1.8} />
              </span>

              <span className="font-medium">info@molg.go.ug</span>
            </a>

            <a
              href="https://maps.google.com/?q=Workers+House+Pilkington+Avenue+Kampala"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 transition-colors hover:text-[#8a5715]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/20">
                <MapPin size={18} strokeWidth={1.8} />
              </span>

              <span className="pt-1 font-medium leading-6">
                Workers House,
                <br />
                Pilkington Avenue, Kampala
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}