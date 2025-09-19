import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="gradient-text" data-testid="hero-title-creative">Creative Designer</span>
            <br />
            <span className="text-foreground" data-testid="hero-title-developer">& Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto" data-testid="hero-description">
            I craft beautiful digital experiences through thoughtful design and clean code. 
            Passionate about creating user-centered solutions that make a difference.
          </p>
          <div className="flex justify-center items-center">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
          </div>
          <div className="animate-bounce-gentle" data-testid="scroll-indicator">
            <ChevronDown className="text-2xl text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
