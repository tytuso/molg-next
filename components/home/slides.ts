export interface HeroSlideData {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  button: string;
  link: string;
}

export const slides: HeroSlideData[] = [
  {
    id: 1,
    image: "/images/hero/hero1.jpg",
    eyebrow: "Ministry of Local Government",
    title: "Building Strong Local Governments",
    subtitle:
      "Strengthening local governance and service delivery for sustainable national development.",
    button: "Explore the Ministry",
    link: "/about",
  },
  {
    id: 2,
    image: "/images/hero/hero2.jpg",
    eyebrow: "Parish Development Model",
    title: "Transforming Communities Across Uganda",
    subtitle:
      "Bringing government services and economic opportunities closer to every household.",
    button: "Explore PDM",
    link: "/pdm",
  },
  {
    id: 3,
    image: "/images/hero/hero3.jpg",
    eyebrow: "Ministry Initiatives",
    title: "Supporting Effective Local Service Delivery",
    subtitle:
      "Working with local governments to improve accountability, infrastructure and community development.",
    button: "View Initiatives",
    link: "/initiatives",
  },
  {
    id: 4,
    image: "/images/hero/hero4.jpg",
    eyebrow: "Latest Updates",
    title: "News From the Ministry",
    subtitle:
      "Follow inspections, programmes, announcements and development activities from across Uganda.",
    button: "Read Latest News",
    link: "/news",
  },
];