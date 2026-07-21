"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ExternalLink,
  Mail,
  Search,
  ShieldAlert,
} from "lucide-react";

import Container from "../Container";
import { navigation } from "./navigation";

function isActiveRoute(
  pathname: string,
  href: string,
  childHrefs: string[] = [],
) {
  if (href === "/") {
    return pathname === "/";
  }

  if (pathname === href || pathname.startsWith(`${href}/`)) {
    return true;
  }

  return childHrefs.some(
    (childHref) =>
      pathname === childHref || pathname.startsWith(`${childHref}/`),
  );
}

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 hidden border-b border-black/10 bg-white/95 shadow-[0_6px_24px_rgba(36,27,18,0.08)] backdrop-blur-xl lg:block">
      <Container>
        <div className="flex h-[66px] items-center justify-between">
          <div className="flex h-full items-center">
            {navigation.map((item) => {
              const active = isActiveRoute(
                pathname,
                item.href,
                item.children?.map((child) => child.href) ?? [],
              );

              if (!item.children?.length) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`
                      relative
                      flex
                      h-full
                      items-center
                      px-5
                      text-[15px]
                      font-bold
                      transition-colors
                      duration-300
                      xl:px-6
                      ${
                        active
                          ? "text-[#8a5715]"
                          : "text-neutral-900 hover:text-[#8a5715]"
                      }
                    `}
                  >
                    {item.title}

                    <span
                      className={`
                        absolute
                        bottom-0
                        left-1/2
                        h-[3px]
                        -translate-x-1/2
                        rounded-t-full
                        bg-amber-500
                        transition-all
                        duration-300
                        ${
                          active
                            ? "w-8 opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={item.title}
                  className="group relative flex h-full items-center"
                >
                  <Link
                    href={item.href}
                    className={`
                      relative
                      flex
                      h-full
                      items-center
                      gap-1.5
                      px-5
                      text-[15px]
                      font-bold
                      transition-colors
                      duration-300
                      xl:px-6
                      ${
                        active
                          ? "text-[#8a5715]"
                          : "text-neutral-900 group-hover:text-[#8a5715]"
                      }
                    `}
                  >
                    {item.title}

                    <ChevronDown
                      size={15}
                      strokeWidth={2.2}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />

                    <span
                      className={`
                        absolute
                        bottom-0
                        left-1/2
                        h-[3px]
                        -translate-x-1/2
                        rounded-t-full
                        bg-amber-500
                        transition-all
                        duration-300
                        ${
                          active
                            ? "w-8 opacity-100"
                            : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
                        }
                      `}
                    />
                  </Link>

                  <div
                    className="
                      pointer-events-none
                      invisible
                      absolute
                      left-1/2
                      top-full
                      z-[70]
                      w-[610px]
                      -translate-x-1/2
                      translate-y-3
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:pointer-events-auto
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <div className="pt-3">
                      <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white p-3 shadow-[0_24px_70px_rgba(31,22,10,0.20)]">
                        <div className="mb-2 flex items-center justify-between rounded-[17px] bg-[#f4ead1] px-5 py-4">
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a5715]">
                              Ministry navigation
                            </p>

                            <p className="mt-1 text-lg font-bold text-neutral-950">
                              {item.title}
                            </p>
                          </div>

                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-neutral-900 transition-colors hover:bg-amber-400"
                          >
                            View all
                            <ExternalLink size={13} />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="group/card rounded-[16px] px-4 py-3.5 transition-colors duration-200 hover:bg-[#f8f3e8]"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-sm font-bold text-neutral-900 transition-colors group-hover/card:text-[#8a5715]">
                                    {child.title}
                                  </p>

                                  {child.description && (
                                    <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-neutral-500">
                                      {child.description}
                                    </p>
                                  )}
                                </div>

                                {child.external && (
                                  <ExternalLink
                                    size={13}
                                    className="mt-1 shrink-0 text-neutral-400"
                                  />
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/contact#report-corruption"
              className="group inline-flex h-10 items-center gap-2 rounded-full bg-[#3c291b] px-4 text-xs font-bold text-white transition-all duration-300 hover:bg-amber-500 hover:text-neutral-950"
            >
              <ShieldAlert size={16} />
              Report corruption
            </Link>

            <Link
              href="/contact"
              aria-label="Contact the Ministry"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-neutral-50 text-neutral-800 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400"
            >
              <Mail size={17} />
            </Link>

            <Link
              href="/news"
              aria-label="Search Ministry news"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-neutral-50 text-neutral-800 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400"
            >
              <Search size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}