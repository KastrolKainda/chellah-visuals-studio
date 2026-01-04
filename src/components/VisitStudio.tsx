import { Button } from "./ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const VisitStudio = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45,93%,47%,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(25,80%,50%,0.1),transparent_50%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-copper/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-8 animate-scale-in group hover:bg-gold/20 transition-all duration-300">
            <MapPin className="text-gold w-10 h-10 group-hover:scale-110 transition-transform" />
          </div>
          
          {/* Slogan */}
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-white">Visit Our </span>
            <span className="bg-gradient-gold bg-clip-text text-transparent">Studio</span>
          </h2>
          
          {/* Message */}
          <p className="text-white/70 font-inter text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up">
            Step into our creative space where vision meets artistry. Experience the magic of professional photography 
            in a welcoming environment designed to bring out your best moments. Book a session today and let us 
            capture your story.
          </p>
          
          {/* CTA Button */}
          <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="gold"
              className="font-inter group text-lg px-8 py-6"
            >
              Book Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
            </Button>
          </div>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold/60 font-inter text-sm tracking-widest uppercase">Where memories begin</span>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitStudio;
