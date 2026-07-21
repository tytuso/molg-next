export interface NavigationChild {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationChild[];
}

export const navigation: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
    children: [
      {
        title: "About the Ministry",
        href: "/about",
        description:
          "Learn about the Ministry's mandate, vision, mission and responsibilities.",
      },
      {
        title: "Leadership",
        href: "/leadership",
        description:
          "Meet the political and technical leadership of the Ministry.",
      },
      {
        title: "Departments",
        href: "/departments",
        description:
          "Explore the departments responsible for Ministry programmes.",
      },
      {
        title: "Directorates",
        href: "/directorates",
        description:
          "View the Ministry directorates and their respective functions.",
      },
      {
        title: "Core Functions",
        href: "/about#core-functions",
        description:
          "Understand the Ministry's role in Uganda's local government system.",
      },
      {
        title: "Administrative Units",
        href: "/administrative-units",
        description:
          "Access information about Uganda's local administrative structures.",
      },
    ],
  },
  {
    title: "PDM",
    href: "/pdm",
  },
  {
    title: "Initiatives",
    href: "/initiatives",
    children: [
      {
        title: "RUDSEC",
        href: "/initiatives/rudsec",
        description:
          "Regional and urban development support and coordination.",
      },
      {
        title: "LEGS",
        href: "/initiatives/legs",
        description:
          "Local economic growth support programmes and activities.",
      },
      {
        title: "Spotlight Initiative",
        href: "/initiatives/spotlight",
        description:
          "Supporting communities through coordinated local interventions.",
      },
      {
        title: "LoCAL Facility",
        href: "/initiatives/local",
        description:
          "Locally led climate adaptation and resilience financing.",
      },
      {
        title: "Development Programmes",
        href: "/initiatives",
        description:
          "Browse all Ministry projects, programmes and initiatives.",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      {
        title: "Latest News",
        href: "/news",
        description:
          "Read recent Ministry announcements, activities and updates.",
      },
      {
        title: "Reports",
        href: "/reports",
        description:
          "Access Ministry reports, performance reviews and official records.",
      },
      {
        title: "Publications",
        href: "/publications",
        description:
          "Browse strategies, manuals, studies and Ministry publications.",
      },
      {
        title: "Policies",
        href: "/policies",
        description:
          "View relevant local government policies and frameworks.",
      },
      {
        title: "Downloads",
        href: "/downloads",
        description:
          "Download Ministry documents, forms and reference materials.",
      },
      {
        title: "Gallery",
        href: "/gallery",
        description:
          "View photographs from Ministry programmes and official events.",
      },
    ],
  },
  {
    title: "Tenders",
    href: "/tenders",
  },
  {
    title: "Contact Us",
    href: "/contact",
    children: [
      {
        title: "Contact the Ministry",
        href: "/contact",
        description:
          "Find the Ministry's office address, phone numbers and email contacts.",
      },
      {
        title: "Report Corruption",
        href: "/contact#report-corruption",
        description:
          "Report suspected corruption, misconduct or abuse of public resources.",
      },
      {
        title: "Frequently Asked Questions",
        href: "/contact#frequently-asked-questions",
        description:
          "Find responses to commonly asked questions about the Ministry.",
      },
    ],
  },
];