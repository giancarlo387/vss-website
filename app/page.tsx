import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServicesGrid from "@/components/ServicesGrid";
import WorkCarousel from "@/components/WorkCarousel";
import PricingSection from "@/components/PricingSection";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeTicker />
      <ServicesGrid />
      <WorkCarousel />
      <PricingSection />
      <CtaBand />
    </>
  );
}
