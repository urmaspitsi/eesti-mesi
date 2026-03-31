import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BeeLifeSection from "@/components/BeeLifeSection";
import LamavtaruSection from "@/components/LamavtaruSection";
import HoneyHarvestSection from "@/components/HoneyHarvestSection";
import HoneyTypesSection from "@/components/HoneyTypesSection";
import EstonianBeesSection from "@/components/EstonianBeesSection";
import DiseasesSection from "@/components/DiseasesSection";
import SeasonCalendarSection from "@/components/SeasonCalendarSection";
import ApitherapySection from "@/components/ApitherapySection";
import RecipesSection from "@/components/RecipesSection";
import ReferencesSection from "@/components/ReferencesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BeeLifeSection />
      <LamavtaruSection />
      <HoneyHarvestSection />
      <HoneyTypesSection />
      <EstonianBeesSection />
      <DiseasesSection />
      <SeasonCalendarSection />
      <ApitherapySection />
      <RecipesSection />
      <ReferencesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
