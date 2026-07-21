import Announcements from "@/components/home/Announcements";
import BlogArchiveSection from "@/components/home/BlogArchiveSection";
import FeaturedDocuments from "@/components/home/FeaturedDocuments";
import GallerySection from "@/components/home/GallerySection";
import Hero from "@/components/home/Hero";
import LatestNews from "@/components/home/LatestNews";
import PartnersCorruption from "@/components/home/PartnersCorruption";
import QuotesMessages from "@/components/home/QuotesMessages";
import ReportsShowcase from "@/components/home/ReportsShowcase";
import Testimonials from "@/components/home/Testimonials";
import VisionStatistics from "@/components/home/VisionStatistics";

interface HomePageProps {
  searchParams: Promise<{
    newsPage?: string;
  }>;
}

export default async function HomePage({
  searchParams,
}: HomePageProps) {
  const params = await searchParams;

  const requestedPage = Number(params.newsPage ?? "1");

  const currentNewsPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  return (
    <>
      <Hero />

      <Announcements />

      <FeaturedDocuments />

      <LatestNews />

      <ReportsShowcase />

      <QuotesMessages />

      <Testimonials />

      <VisionStatistics />

      <GallerySection />

      <BlogArchiveSection currentPage={currentNewsPage} />

      <PartnersCorruption />
    </>
  );
}