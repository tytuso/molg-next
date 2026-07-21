import { CirclePlay } from "lucide-react";

import Container from "@/components/layout/Container";
import TestimonialVideoCard from "./TestimonialVideoCard";
import { testimonials } from "./testimonials-data";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#d6bd84] py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#8b5b17]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#795019]">
            <CirclePlay size={17} />
            Voices from the field
          </div>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Testimonials
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-800/70 sm:text-base">
            Stories, experiences and perspectives from Ministry programmes,
            local governments and communities across Uganda.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialVideoCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}