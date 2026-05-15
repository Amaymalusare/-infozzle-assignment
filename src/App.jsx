import { Hero } from "./components/sections/Hero.jsx";
import { IntroSection } from "./components/sections/IntroSection.jsx";
import { MasterPlanSection } from "./components/sections/MasterPlanSection.jsx";
import { FloorPlansSection } from "./components/sections/FloorPlansSection.jsx";
import { AmenitiesSection } from "./components/sections/AmenitiesSection.jsx";
import { PeekCarouselSection } from "./components/sections/PeekCarouselSection.jsx";
import { SpecificationsSection } from "./components/sections/SpecificationsSection.jsx";
import { SiteFooter } from "./components/sections/SiteFooter.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <IntroSection />
      <MasterPlanSection />
      <FloorPlansSection />
      <AmenitiesSection />
      <PeekCarouselSection />
      <SpecificationsSection />
      <SiteFooter />
    </>
  );
}
