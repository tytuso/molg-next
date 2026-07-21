export interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "World Bank Group",
    logo: "/images/partners/1.jpg",
    website: "https://www.worldbank.org",
  },
  {
    id: 2,
    name: "European Union",
    logo: "/images/partners/3.png",
    website: "https://european-union.europa.eu",
  },
  {
    id: 3,
    name: "African Development Bank Group",
    logo: "/images/partners/4.jpg",
    website: "https://www.afdb.org",
  },
  {
    id: 4,
    name: "German Cooperation",
    logo: "/images/partners/5.png",
    website: "https://www.giz.de",
  },
  {
    id: 5,
    name: "United Nations Development Programme",
    logo: "/images/partners/6.png",
    website: "https://www.undp.org",
  },
  {
    id: 6,
    name: "United Nations Capital Development Fund",
    logo: "/images/partners/7.png",
    website: "https://www.uncdf.org",
  },
  {
    id: 7,
    name: "OPEC Fund for International Development",
    logo: "/images/partners/9.png",
    website: "https://opecfund.org",
  },
];