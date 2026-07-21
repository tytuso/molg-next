export interface FeaturedDocument {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  coverImage: string;
  fileUrl: string;
  fileType: string;
}

export const featuredDocuments: FeaturedDocument[] = [
  {
    id: 1,
    slug: "strategic-plan-for-statistics",
    title: "Strategic Plan for Statistics 2025/26–2029/30",
    category: "Strategic Plan",
    year: "2025–2030",
    coverImage:
      "/images/publications/molgsps.png",

    // Replace with the actual WordPress PDF URL
    fileUrl:
      "https://molg.go.ug/wp-content/uploads/2026/06/MoLG-SPS_2025-26-2029-30_Booklet.pdf",

    fileType: "PDF",
  },
  {
    id: 2,
    slug: "ministry-strategic-plan",
    title: "Ministry of Local Government SOPs",
    category: "Strategic Plan",
    year: "2025–2030",
    coverImage:
      "/images/publications/SOP.png",

    // Replace with the actual WordPress PDF URL
    fileUrl:
      "https://molg.go.ug/wp-content/uploads/2026/06/SROP-Final-May-2026.pdf",

    fileType: "PDF",
  },
  {
    id: 3,
    slug: "annual-performance-report",
    title: "MoLG Statistical Abstract (FY 2022-23)",
    category: "Annual Report",
    year: "2025/26",
    coverImage:
      "/images/publications/23to24.png",

    // Replace with the actual WordPress PDF URL
    fileUrl:
      "https://molg.go.ug/wp-content/uploads/2026/06/MoLG-Statistical-Abstract-2023-24-2.pdf",

    fileType: "PDF",
  },
];