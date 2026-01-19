import { Flag, Users, Scale, Lightbulb, Target, Heart } from "lucide-react";
import photographerImage from "@/assets/photographer-male.jpg";

const Politics = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Building stronger communities through inclusive policies that leave no one behind.",
    },
    {
      icon: Scale,
      title: "Justice & Equality",
      description: "Advocating for equal opportunities and fair treatment for all citizens.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing modern solutions to address today's challenges while preserving our heritage.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Leading with empathy and understanding the struggles of everyday people.",
    },
  ];

  return (
    <section id="politics" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flag className="text-gold w-6 h-6" />
            <span className="text-gold text-sm font-inter tracking-widest uppercase">Political Vision</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            A Vision for <span className="bg-gradient-accent bg-clip-text text-transparent">Tomorrow</span>
          </h2>
          <p className="text-muted-foreground font-inter text-lg animate-fade-in-up">
            Beyond the lens, Chellah is deeply committed to civic engagement and building a better future for all.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={photographerImage}
                alt="Chellah - Political Vision"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-charcoal/80 backdrop-blur-sm border border-gold/20 rounded-lg p-4">
                  <p className="font-playfair text-xl text-white italic">
                    "The power of an image can change minds. The power of action can change lives."
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-copper/10 rounded-full blur-2xl" />
          </div>

          {/* Mission Statement */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-gold w-6 h-6" />
              <span className="text-gold font-inter text-sm tracking-widest uppercase">Our Mission</span>
            </div>
            <h3 className="font-playfair text-3xl font-bold text-white mb-6">
              Empowering Communities Through Service
            </h3>
            <div className="space-y-4 text-foreground/80 font-inter leading-relaxed">
              <p>
                As a photographer, I've witnessed the beauty and struggles of our community through my lens. 
                Every portrait tells a story of resilience, every event captures our collective spirit. 
                This unique perspective has ignited my passion for public service.
              </p>
              <p>
                I believe that true leadership comes from understanding—from walking alongside our neighbors, 
                listening to their concerns, and working tirelessly to address them. My commitment to politics 
                stems from a deep desire to translate the stories I've captured into meaningful change.
              </p>
              <p>
                Together, we can build a community where every voice is heard, every family thrives, 
                and every dream has the opportunity to flourish.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-white mb-4">Core Values</h3>
            <p className="text-muted-foreground font-inter">The principles that guide every decision</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-secondary/30 border border-border/50 hover:border-gold/50 hover:shadow-gold hover:-translate-y-2 transition-all duration-500 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="text-gold group-hover:rotate-12 transition-transform duration-300" size={28} />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-muted-foreground font-inter text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Speech */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl p-8 md:p-12 border border-gold/20">
            {/* Quote Mark */}
            <div className="absolute -top-4 left-8 text-gold/30 text-8xl font-playfair">"</div>
            
            <div className="relative z-10">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                A Message to Our Community
              </h3>
              
              <div className="space-y-6 text-foreground/90 font-inter leading-relaxed text-lg">
                <p>
                  My fellow citizens,
                </p>
                <p>
                  For over a decade, I have had the privilege of documenting the heartbeat of our community 
                  through my camera. I've captured the joy in a child's eyes at their first school graduation, 
                  the determination of local entrepreneurs building their dreams, and the unwavering spirit 
                  of families who have called this place home for generations.
                </p>
                <p>
                  But I've also seen the challenges we face—the growing divide between opportunity and access, 
                  the young talents leaving because they see no future here, the elderly struggling with 
                  inadequate support. These images stay with me, not as mere photographs, but as calls to action.
                </p>
                <p>
                  I enter the political arena not as a traditional politician, but as a neighbor who has 
                  listened, observed, and learned. My approach is simple: lead with integrity, serve with 
                  compassion, and never forget that behind every policy is a human story.
                </p>
                <p>
                  Together, we will create an economy that works for everyone, not just the privileged few. 
                  We will invest in our youth, honor our elders, and build bridges where others seek to 
                  create walls. We will prove that progress and tradition can walk hand in hand.
                </p>
                <p className="text-gold font-semibold">
                  This is not just my vision—it is our shared destiny. Join me, and let's write the next 
                  chapter of our community's story together.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gold/20 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold">
                  <img
                    src={photographerImage}
                    alt="Chellah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-playfair text-xl font-bold text-white">Chellah</p>
                  <p className="text-gold font-inter text-sm">Photographer • Community Leader • Visionary</p>
                </div>
              </div>
            </div>

            {/* Closing Quote Mark */}
            <div className="absolute -bottom-4 right-8 text-gold/30 text-8xl font-playfair rotate-180">"</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground font-inter mb-6">
            Want to be part of the movement? Let's connect and build a better tomorrow.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-charcoal font-inter font-semibold rounded-lg hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
          >
            <Flag className="w-5 h-5" />
            Join the Movement
          </button>
        </div>
      </div>
    </section>
  );
};

export default Politics;
