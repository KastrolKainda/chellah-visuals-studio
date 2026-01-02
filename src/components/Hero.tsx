import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import photographerImage from "@/assets/photographer-portrait.jpg";

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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(217,91%,60%,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(262,83%,58%,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in drop-shadow-2xl">
              Capturing Moments,
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Creating Memories
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up font-inter">
              Professional photography services that transform fleeting moments into timeless art
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-scale-in">
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="orange"
                className="font-inter group"
              >
                Book a Session
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                onClick={scrollToPortfolio}
                size="lg"
                variant="blue"
                className="font-inter group"
              >
                View Portfolio
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue/20 via-accent/20 to-orange/20 rounded-2xl blur-2xl opacity-60" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 hover:shadow-blue transition-shadow duration-500">
                <img
                  src={photographerImage}
                  alt="Professional photographer with camera"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
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
