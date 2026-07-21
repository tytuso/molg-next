"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldAlert,
  X,
} from "lucide-react";

import { navigation } from "./navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setExpandedMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function toggleExpandedMenu(title: string) {
    setExpandedMenu((current) => (current === title ? null : title));
  }

  return (
    <>
      <header className="sticky top-0 z-[90] border-b border-black/10 bg-white/95 shadow-[0_8px_26px_rgba(33,24,12,0.10)] backdrop-blur-xl lg:hidden">
        <div className="flex h-[76px] items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Ministry of Local Government homepage"
          >
            <div className="relative h-14 w-14 shrink-0">
              <Image
                src="/images/coat-of-arms.png"
                alt="Uganda Coat of Arms"
                fill
                sizes="56px"
                priority
                className="object-contain"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8a5715]">
                Republic of Uganda
              </p>

              <p className="mt-0.5 truncate text-[15px] font-black leading-tight text-neutral-950 sm:text-base">
                Ministry of Local Government
              </p>

              <p className="mt-0.5 text-[10px] font-medium text-neutral-500">
                Government of Uganda
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3c291b] text-white shadow-md transition-all duration-300 hover:bg-amber-500 hover:text-neutral-950"
          >
            <Menu size={21} />
          </button>
        </div>
      </header>

      <div
        className={`
          fixed
          inset-0
          z-[100]
          bg-black/45
          backdrop-blur-sm
          transition-opacity
          duration-300
          lg:hidden
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`
          fixed
          bottom-0
          right-0
          top-0
          z-[110]
          flex
          w-[min(92vw,420px)]
          flex-col
          bg-[#f8f5ee]
          shadow-[-24px_0_70px_rgba(0,0,0,0.25)]
          transition-transform
          duration-300
          ease-out
          lg:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-hidden={!menuOpen}
      >
        <div className="border-b border-black/10 bg-[#d6bd84] px-5 pb-5 pt-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/images/coat-of-arms.png"
                  alt="Uganda Coat of Arms"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-neutral-700">
                  Republic of Uganda
                </p>

                <p className="mt-1 text-sm font-black leading-tight text-neutral-950">
                  Ministry of
                  <br />
                  Local Government
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/35 text-neutral-900 transition-colors hover:bg-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-5">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navigation.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const expanded = expandedMenu === item.title;

                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.title}>
                    <div
                      className={`
                        flex
                        items-center
                        rounded-[15px]
                        transition-colors
                        ${
                          active
                            ? "bg-[#eee0bf]"
                            : "hover:bg-black/[0.04]"
                        }
                      `}
                    >
                      <Link
                        href={item.href}
                        className={`
                          flex-1
                          px-4
                          py-3.5
                          text-sm
                          font-bold
                          ${
                            active
                              ? "text-[#805112]"
                              : "text-neutral-900"
                          }
                        `}
                      >
                        {item.title}
                      </Link>

                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() => toggleExpandedMenu(item.title)}
                          aria-label={`${expanded ? "Collapse" : "Expand"} ${
                            item.title
                          } menu`}
                          aria-expanded={expanded}
                          className="mr-2 flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 transition-colors hover:bg-white"
                        >
                          <ChevronDown
                            size={17}
                            className={`transition-transform duration-300 ${
                              expanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {hasChildren && (
                      <div
                        className={`
                          grid
                          transition-all
                          duration-300
                          ${
                            expanded
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <ul className="mb-2 ml-4 mt-1 space-y-1 border-l border-amber-500/35 pl-3">
                            {item.children?.map((child) => (
                              <li key={child.title}>
                                <Link
                                  href={child.href}
                                  className="block rounded-xl px-3 py-2.5 text-[13px] font-semibold text-neutral-600 transition-colors hover:bg-white hover:text-[#805112]"
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/contact#report-corruption"
            className="mt-6 flex items-center justify-between rounded-[20px] bg-[#3c291b] px-5 py-4 text-white shadow-lg transition-colors hover:bg-amber-500 hover:text-neutral-950"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
                Confidential reporting
              </p>

              <p className="mt-1 text-sm font-bold">
                Report suspected corruption
              </p>
            </div>

            <ShieldAlert size={22} />
          </Link>

          <div className="mt-5 rounded-[20px] border border-black/10 bg-white p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8a5715]">
              Contact the Ministry
            </p>

            <div className="mt-4 space-y-3">
              <a
                href="tel:+256414256533"
                className="flex items-center gap-3 text-xs font-semibold text-neutral-700"
              >
                <Phone size={15} className="text-[#8a5715]" />
                +256 414 256 533
              </a>

              <a
                href="mailto:info@molg.go.ug"
                className="flex items-center gap-3 text-xs font-semibold text-neutral-700"
              >
                <Mail size={15} className="text-[#8a5715]" />
                info@molg.go.ug
              </a>

              <div className="flex items-start gap-3 text-xs font-semibold leading-5 text-neutral-700">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0 text-[#8a5715]"
                />

                <span>
                  Workers House, Pilkington Avenue, Kampala
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 bg-white px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="#"
              className="text-xs font-bold text-neutral-600 hover:text-[#805112]"
            >
              Webmail
            </Link>

            <Link
              href="/administrative-units"
              className="text-xs font-bold text-neutral-600 hover:text-[#805112]"
            >
              Administrative Units
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}