import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-photography.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional Photography"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          Capturing Moments,
          <br />
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Creating Memories
          </span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up font-inter">
          Professional photography services that transform fleeting moments into timeless art
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-accent text-primary-foreground hover:shadow-elegant transition-all font-inter group"
          >
            Book a Session
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            onClick={scrollToPortfolio}
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-primary-foreground transition-all font-inter"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
