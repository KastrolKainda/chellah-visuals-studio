import { Camera, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6">
            About <span className="text-accent">Chellah</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-inter text-lg">
            Passionate about capturing life's most beautiful moments
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-card hover:shadow-elegant transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                <Camera className="text-accent" size={32} />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">10+ Years</h3>
              <p className="text-muted-foreground font-inter">Professional Experience</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card hover:shadow-elegant transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-muted-foreground font-inter">International Recognition</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card hover:shadow-elegant transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                <Heart className="text-accent" size={32} />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">500+ Clients</h3>
              <p className="text-muted-foreground font-inter">Happy Memories Created</p>
            </div>
          </div>

          <p className="text-foreground/80 leading-relaxed font-inter text-center max-w-3xl mx-auto">
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
