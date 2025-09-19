import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PortfolioCarousel from "@/components/portfolio-carousel";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <PortfolioCarousel />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
