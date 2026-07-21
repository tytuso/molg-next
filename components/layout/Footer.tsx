import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  Building2,
  CirclePlay,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Newspaper,
  Phone,
} from "lucide-react";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About the Ministry",
    href: "/about",
  },
  {
    title: "Leadership",
    href: "/leadership",
  },
  {
    title: "Departments",
    href: "/departments",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const resourceLinks = [
  {
    title: "Latest News",
    href: "/news",
  },
  {
    title: "Reports",
    href: "/reports",
  },
  {
    title: "Publications",
    href: "/publications",
  },
  {
    title: "Policies",
    href: "/policies",
  },
  {
    title: "Downloads",
    href: "/downloads",
  },
  {
    title: "Tenders",
    href: "/tenders",
  },
];

const programmeLinks = [
  {
    title: "Parish Development Model",
    href: "/pdm",
  },
  {
    title: "RUDSEC",
    href: "/initiatives/rudsec",
  },
  {
    title: "LEGS",
    href: "/initiatives/legs",
  },
  {
    title: "Spotlight Initiative",
    href: "/initiatives/spotlight",
  },
  {
    title: "LoCAL Facility",
    href: "/initiatives/local",
  },
  {
    title: "All Initiatives",
    href: "/initiatives",
  },
];

const externalLinks = [
  {
    title: "Local Government Finance Commission",
    href: "https://lgfc.go.ug",
  },
  {
    title: "Uganda Local Governments Association",
    href: "https://ulga.org",
  },
  {
    title: "Urban Authorities Association of Uganda",
    href: "https://uaau.or.ug",
  },
  {
    title: "Government of Uganda",
    href: "https://www.gou.go.ug",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#241b12] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#d6bd84]/10 blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Main footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-14 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.85fr]">
          {/* Ministry details */}
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="relative h-24 w-24 shrink-0">
                <Image
                  src="/images/coat-of-arms.png"
                  alt="Coat of Arms of Uganda"
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                  Republic of Uganda
                </p>

                <h2 className="mt-2 max-w-sm text-2xl font-bold leading-tight">
                  Ministry of Local Government
                </h2>

                <p className="mt-1 text-sm text-white/55">
                  Government of Uganda
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
              Strengthening local governance, accountability and sustainable
              service delivery for communities across Uganda.
            </p>

            <div className="mt-7 space-y-4">
              <a
                href="https://maps.google.com/?q=Workers+House+Pilkington+Avenue+Kampala"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-amber-300"
              >
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-amber-300"
                />

                <span>
                  Workers House, Pilkington Avenue,
                  <br />
                  Central Division, Kampala, Uganda
                </span>
              </a>

              <a
                href="tel:+256414256533"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-amber-300"
              >
                <Phone size={18} className="text-amber-300" />
                +256 414 256 533
              </a>

              <a
                href="mailto:info@molg.go.ug"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-amber-300"
              >
                <Mail size={18} className="text-amber-300" />
                info@molg.go.ug
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:info@molg.go.ug"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:border-amber-300/40 hover:bg-white/10 hover:text-amber-300"
              >
                <Mail size={15} />
                Email Ministry
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:border-red-400/40 hover:bg-red-500/15"
              >
                <CirclePlay size={15} />
                YouTube
              </a>
            </div>
          </div>

          {/* Quick links */}
          <FooterColumn
            title="Quick Links"
            icon={<Building2 size={18} />}
            links={quickLinks}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            icon={<FileText size={18} />}
            links={resourceLinks}
          />

          {/* Initiatives and external links */}
          <div className="space-y-10">
            <FooterColumn
              title="Key Programmes"
              icon={<Newspaper size={18} />}
              links={programmeLinks}
            />

            <div>
              <div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-amber-300">
                <ExternalLink size={17} />
                Useful Links
              </div>

              <ul className="space-y-3">
                {externalLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-start gap-2 text-sm leading-6 text-white/60 transition-colors hover:text-white"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300/60 transition-transform group-hover:scale-150" />

                      <span>{link.title}</span>

                      <ExternalLink
                        size={13}
                        className="mt-1 opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter / contact strip */}
        <div className="mt-14 grid gap-6 rounded-[30px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm md:grid-cols-[1fr_auto] md:items-center sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Stay connected
            </p>

            <h3 className="mt-2 text-xl font-bold sm:text-2xl">
              Follow Ministry news and official updates
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
              Access announcements, reports, publications and development
              updates from the Ministry of Local Government.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <Newspaper size={17} />
              Latest News
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-neutral-950"
            >
              <Mail size={17} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="text-xs leading-5 text-white/45">
            © {currentYear} Ministry of Local Government, Republic of Uganda.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-white/45">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/accessibility"
              className="transition-colors hover:text-white"
            >
              Accessibility
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>

            <a
              href="#"
              aria-label="Return to the top of the page"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-neutral-950"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  icon: React.ReactNode;
  links: Array<{
    title: string;
    href: string;
  }>;
}

function FooterColumn({
  title,
  icon,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-amber-300">
        {icon}
        {title}
      </div>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm leading-6 text-white/60 transition-colors hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300/60 transition-transform group-hover:scale-150" />
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}