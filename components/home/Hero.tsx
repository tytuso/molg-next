import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section
      aria-label="Featured Ministry information"
      className="
        relative
        h-[clamp(720px,82vh,920px)]
        w-full
        overflow-hidden
      "
    >
      <HeroSlider />
    </section>
  );
}