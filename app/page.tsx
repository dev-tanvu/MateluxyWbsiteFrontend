
import { HeroSection } from "@/src/presentation/components/hero/HeroSection";
import { ServicesSection } from "@/src/presentation/components/services/ServicesSection";
import { PropertiesSection } from "@/src/presentation/components/properties/PropertiesSection";
import { LocationsSection } from "@/src/presentation/components/locations/LocationsSection";
import { Footer } from "@/src/presentation/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <PropertiesSection />
      <LocationsSection />
      <Footer />
    </main>
  );
}
