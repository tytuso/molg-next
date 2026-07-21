export interface Testimonial {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Local Government Programme Testimonial",
    description:
      "Watch how Ministry programmes are supporting local governments and communities across Uganda.",
    youtubeId: "722e9cTB4e4",
  },
  {
    id: 2,
    title: "Community Development Testimonial",
    description:
      "A field perspective on the impact of local government programmes and service delivery.",
    youtubeId: "3xEu3ISYnR0",
  },
  {
    id: 3,
    title: "Ministry Programme Success Story",
    description:
      "Learn more about partnerships, implementation and results from Ministry initiatives.",
    youtubeId: "K47wqZ4VlHE",
  },
];