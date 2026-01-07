import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const TalkToUs = () => {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(45,93%,47%,0.08),transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6 animate-fade-in">
          <MessageCircle className="text-gold" size={32} />
        </div>
        
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Talk to <span className="bg-gradient-gold bg-clip-text text-transparent">Us</span>
        </h2>
        
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <p className="text-white/80 font-inter text-lg leading-relaxed">
            Can't find the service you're looking for? At Chellah Studio, we understand that every client has unique photography needs. Whether it's a special event, a creative project, or something entirely new — we're here to bring your vision to life.
          </p>
        </div>
        
        <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="font-inter text-lg px-8 py-6">
              Let's Talk
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TalkToUs;
