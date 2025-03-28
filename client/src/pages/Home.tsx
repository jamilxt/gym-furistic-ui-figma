import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import GymLocationsSection from "@/components/GymLocationsSection";
import TrainingPrograms from "@/components/TrainingPrograms";
import RegisterSection from "@/components/RegisterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <GymLocationsSection />
      <TrainingPrograms />
      <RegisterSection />
    </>
  );
}
