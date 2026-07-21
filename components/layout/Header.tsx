import BrandBar from "./header/BrandBar";
import DesktopNav from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";
import TopBar from "./header/TopBar";

export default function Header() {
  return (
    <>
      {/* Desktop identity header */}
      <header className="hidden lg:block">
        <TopBar />
        <BrandBar />
      </header>

      {/* Desktop sticky white navigation */}
      <DesktopNav />

      {/* Mobile sticky header and drawer */}
      <MobileNav />
    </>
  );
}