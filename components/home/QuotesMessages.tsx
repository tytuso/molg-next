import { MessageSquareQuote } from "lucide-react";

import Container from "@/components/layout/Container";
import QuotesCarousel from "./QuotesCarousel";

export default function QuotesMessages() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#dfcd9f]
        via-[#d6bd84]
        to-[#cdb171]
        py-16
        lg:py-20
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-80
          w-80
          rounded-full
          bg-white/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-28
          bottom-0
          h-96
          w-96
          rounded-full
          bg-amber-700/10
          blur-3xl
        "
      />

      <Container className="relative z-10">
        <div className="mb-10 text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#795019]
            "
          >
            <MessageSquareQuote size={17} />
            Voices of leadership
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
            Quotes & Messages
          </h2>
        </div>

        <div
          className="
            rounded-[32px]
            border
            border-white/35
            bg-white/10
            px-4
            py-8
            shadow-[0_22px_65px_rgba(61,42,11,0.14)]
            backdrop-blur-sm
            sm:px-8
            lg:px-10
          "
        >
          <QuotesCarousel />
        </div>
      </Container>
    </section>
  );
}