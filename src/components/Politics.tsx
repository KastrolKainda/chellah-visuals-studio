import { Flag, Users, Scale, Lightbulb, Target, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import politicsImage from "@/assets/chellah-politics.jpg";

const Politics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [values.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % values.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + values.length) % values.length);

  return (
    <section id="politics" className="py-24 bg-gradient-to-br from-charcoal via-charcoal to-secondary/40 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-copper/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flag className="text-gold w-6 h-6" />
            <span className="text-gold text-sm font-inter tracking-widest uppercase">Political Vision</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-gold via-copper to-gold bg-clip-text text-transparent">
            A Vision for Tomorrow
          </h2>
          <p className="text-white/80 font-inter text-lg animate-fade-in-up">
            Beyond the lens, Chellah is deeply committed to civic engagement and building a better future for all.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={politicsImage}
                alt="Chellah - Political Vision"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-charcoal/90 backdrop-blur-md border border-gold/30 rounded-lg p-4 shadow-gold">
                  <p className="font-playfair text-xl text-white italic">
                    "The power of an image can change minds. The power of action can change lives."
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-copper/20 rounded-full blur-2xl animate-pulse" />
            {/* Border decoration */}
            <div className="absolute -inset-2 border-2 border-gold/20 rounded-3xl -z-10" />
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
            <div className="space-y-4 text-white font-inter leading-relaxed">
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

        {/* Core Values Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-white mb-4">Core Values</h3>
            <p className="text-white/70 font-inter">The principles that guide every decision</p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="w-full flex-shrink-0 p-8"
                  >
                    <div className="bg-gradient-to-br from-secondary/60 to-charcoal/80 backdrop-blur-sm border border-gold/30 rounded-2xl p-10 shadow-xl hover:shadow-gold transition-all duration-500 group">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold/30 to-copper/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <value.icon className="text-gold w-12 h-12 group-hover:rotate-12 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="text-center md:text-left">
                          <h4 className="font-playfair text-3xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent mb-4">
                            {value.title}
                          </h4>
                          <p className="text-white font-inter text-lg leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6">
              {values.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gold w-8"
                      : "bg-gold/30 hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* The Speech */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gold/10 via-secondary/50 to-copper/10 rounded-2xl p-8 md:p-12 border border-gold/30 shadow-2xl">
            {/* Quote Mark */}
            <div className="absolute -top-4 left-8 text-gold/40 text-8xl font-playfair">"</div>
            
            <div className="relative z-10">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                A Message to Our Community
              </h3>
              
              <div className="space-y-6 text-white font-inter leading-relaxed text-lg">
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
                <p className="text-gold font-semibold text-xl">
                  This is not just my vision—it is our shared destiny. Join me, and let's write the next 
                  chapter of our community's story together.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gold/30 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold shadow-gold">
                  <img
                    src={politicsImage}
                    alt="Chellah"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-playfair text-xl font-bold text-white">Chellah</p>
                  <p className="text-gold font-inter text-sm">Photographer • Community Leader • Visionary</p>
                </div>
              </div>
            </div>

            {/* Closing Quote Mark */}
            <div className="absolute -bottom-4 right-8 text-gold/40 text-8xl font-playfair rotate-180">"</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Politics;
