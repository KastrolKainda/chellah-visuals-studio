import { Camera, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            About <span className="bg-gradient-accent bg-clip-text text-transparent">Chellah</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-inter text-lg animate-fade-in-up">
            Passionate about capturing life's most beautiful moments
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-blue hover:border-blue/50 hover:-translate-y-2 transition-all duration-500 group animate-scale-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue/10 mb-4 group-hover:bg-blue/20 group-hover:scale-110 transition-all duration-300">
                <Camera className="text-blue group-hover:rotate-12 transition-transform duration-300" size={32} />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">10+ Years</h3>
              <p className="text-muted-foreground font-inter">Professional Experience</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-orange hover:border-orange/50 hover:-translate-y-2 transition-all duration-500 group animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange/10 mb-4 group-hover:bg-orange/20 group-hover:scale-110 transition-all duration-300">
                <Award className="text-orange group-hover:rotate-12 transition-transform duration-300" size={32} />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-muted-foreground font-inter">International Recognition</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-elegant hover:border-accent/50 hover:-translate-y-2 transition-all duration-500 group animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <Heart className="text-accent group-hover:scale-110 transition-transform duration-300" size={32} />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">500+ Clients</h3>
              <p className="text-muted-foreground font-inter">Happy Memories Created</p>
            </div>
          </div>

          <p className="text-foreground/90 leading-relaxed font-inter text-center max-w-3xl mx-auto animate-fade-in-up text-lg">
            With over a decade of experience in professional photography, Chellah has developed a unique artistic vision 
            that combines technical excellence with emotional storytelling. Every photograph is crafted with meticulous 
            attention to detail, ensuring that your precious moments are preserved in their most beautiful form. From 
            intimate portraits to grand celebrations, we bring passion and expertise to every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
