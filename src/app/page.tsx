import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import LocationsSection from "@/components/LocationsSection";
import UserReviews from "@/components/UserReviews";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AboutUsSection from "@/components/AboutUsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <UserReviews />
      <FeaturesSection />
      <LocationsSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
