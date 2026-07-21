export interface Announcement {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Appointment of Hon. Justine Nameere",
    description:
      "The Ministry congratulates Hon. Justine Nameere upon her appointment.",
    image: "/images/announcements/announcement-1.jpg",
    href: "/news",
  },
  {
    id: 2,
    title: "Appointment of Hon. Balaam Barugahara",
    description:
      "The Ministry congratulates Hon. Balaam Barugahara upon his appointment.",
    image: "/images/announcements/announcement-2.jpg",
    href: "/news",
  },
  {
    id: 3,
    title: "Official Ministry Announcement",
    description:
      "View the latest official communication from the Ministry of Local Government.",
    image: "/images/announcements/announcement-3.jpg",
    href: "/news",
  },
  {
    id: 4,
    title: "Ministry Public Notice",
    description:
      "Important public information and updates from the Ministry.",
    image: "/images/announcements/announcement-4.jpg",
    href: "/news",
  },
];