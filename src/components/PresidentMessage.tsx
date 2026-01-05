import presidentImage from "@/assets/president-portrait.jpg";
import { Quote } from "lucide-react";

const PresidentMessage = () => {
  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(45,93%,47%,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(25,80%,50%,0.06),transparent_40%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Official <span className="bg-gradient-accent bg-clip-text text-transparent">Presidential Photographer</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Message Column */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 opacity-20">
                <Quote className="w-16 h-16 text-gold" />
              </div>
              
              <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 hover:shadow-gold hover:border-gold/30 transition-all duration-500">
                <blockquote className="text-foreground/90 font-inter text-lg leading-relaxed mb-8 italic">
                  "At Chellah Photography, we believe that every moment holds a story worth telling. Our mission is to 
                  capture the essence of life's most precious occasions with artistry and authenticity. We are committed 
                  to excellence, creativity, and delivering photographs that transcend time. Together, let us preserve 
                  your memories for generations to come."
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-gold" />
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground">Hakainde Hichilema</h3>
                    <p className="text-gold font-inter text-sm">President, Chellah Photography</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-gold/30 via-copper/20 to-transparent rounded-2xl blur-xl opacity-60" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-copper/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: "0.5s" }} />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/20 hover:border-gold/40 transition-all duration-500 group">
                <img
                  src={presidentImage}
                  alt="President Hakainde Hichilema"
                  className="w-full max-w-sm lg:max-w-md h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
