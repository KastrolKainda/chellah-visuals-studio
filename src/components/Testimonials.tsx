import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content: "Chellah captured our wedding day beautifully. Every moment was perfectly preserved, and the attention to detail was extraordinary. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, TechVision Inc.",
    content: "Professional, creative, and delivers exceptional results. Our corporate headshots and brand photography exceeded all expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Fashion Designer",
    content: "Working with Chellah was an absolute pleasure. The fashion photography perfectly captured our collection's essence. A true artist!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(45,93%,47%,0.1),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(25,80%,50%,0.08),transparent_40%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          What Our <span className="bg-gradient-gold bg-clip-text text-transparent">Clients Say</span>
        </h2>
        <p className="text-center text-white/60 mb-12 font-inter text-lg animate-fade-in-up">
          Trusted by individuals and businesses worldwide
        </p>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-8 text-center">
                  <Quote className="w-10 h-10 text-gold/30 mb-4 mx-auto" />
                  
                  <div className="flex gap-1 mb-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-white/80 font-inter text-lg leading-relaxed italic mb-6">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-gold/20 pt-4">
                    <h3 className="font-playfair text-xl font-semibold text-gold">
                      {testimonial.name}
                    </h3>
                    <p className="text-white/50 font-inter text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gold w-6" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
