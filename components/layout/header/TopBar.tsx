import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import Container from "../Container";

export default function TopBar() {
  return (
    <div className="border-b border-white/15 bg-[#f59e0b] text-white">
      <Container className="flex h-11 items-center justify-between">
        <div className="flex items-center gap-6 text-[13px] font-semibold">
          <Link
            href="#"
            className="transition-opacity duration-200 hover:opacity-75"
          >
            Webmail
          </Link>

          <Link
            href="/administrative-units"
            className="transition-opacity duration-200 hover:opacity-75"
          >
            Administrative Units
          </Link>
        </div>

        <div className="flex items-center gap-7 text-[13px] font-medium">
          <a
            href="tel:+256414256533"
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-75"
          >
            <Phone size={15} strokeWidth={1.8} />
            <span>+256 414 256 533</span>
          </a>

          <a
            href="mailto:info@molg.go.ug"
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-75"
          >
            <Mail size={15} strokeWidth={1.8} />
            <span>info@molg.go.ug</span>
          </a>
        </div>
      </Container>
    </div>
  );
}