import { Button } from "./ui/button";
import { ArrowRight, Camera } from "lucide-react";
import photographerImage from "@/assets/photographer-male.jpg";

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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(45,93%,47%,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(25,80%,50%,0.06),transparent_40%)]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6 animate-fade-in">
              <Camera className="w-4 h-4 text-gold" />
              <span className="text-sm font-inter text-gold">Professional Photography</span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in text-white leading-tight">
              Capturing Moments,
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Creating Memories
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up font-inter leading-relaxed">
              Professional photography services that transform fleeting moments into timeless art
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-scale-in">
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="gold"
                className="font-inter group"
              >
                Book a Session
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                onClick={scrollToPortfolio}
                size="lg"
                variant="outline"
                className="font-inter group border-white/30 text-white hover:bg-white/10 hover:border-gold/50"
              >
                View Portfolio
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
              </Button>
            </div>
          </div>

          {/* Image Column with Text Overlay */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative gold accent */}
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 via-copper/20 to-transparent rounded-2xl blur-xl opacity-60" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-xl animate-pulse" />
              
              {/* Main image with text overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/20">
                <img
                  src={photographerImage}
                  alt="Professional photographer with camera"
                  className="w-full max-w-md lg:max-w-lg h-auto object-cover"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                
                {/* Text overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-[2px] bg-gold" />
                    <span className="text-gold text-sm font-inter tracking-widest uppercase">Est. 2020</span>
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-2">
                    Chellah Studio
                  </h3>
                  <p className="text-white/70 font-inter text-sm">
                    Where vision meets artistry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
