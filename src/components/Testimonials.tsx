import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    company: "Wedding Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    content: "Chellah captured our wedding day beautifully. Every moment was perfectly preserved, and the attention to detail was extraordinary. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    content: "Professional, creative, and delivers exceptional results. Our corporate headshots and brand photography exceeded all expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Fashion Designer",
    company: "Elegance Studios",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    content: "Working with Chellah was an absolute pleasure. The fashion photography perfectly captured our collection's essence. A true artist!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Marketing Director",
    company: "Urban Developments",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    content: "The architectural photography for our properties was stunning. Chellah's eye for composition and lighting is unmatched.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(45,93%,47%,0.1),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(25,80%,50%,0.08),transparent_40%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          What Our <span className="bg-gradient-gold bg-clip-text text-transparent">Clients Say</span>
        </h2>
        <p className="text-center text-white/60 mb-16 font-inter text-lg animate-fade-in-up">
          Trusted by individuals and businesses worldwide
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-8 hover:shadow-gold hover:border-gold/40 hover:-translate-y-2 transition-all duration-500 h-full group">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-gold/50 group-hover:ring-4 group-hover:ring-gold group-hover:scale-110 transition-all duration-300"
                    />
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-white group-hover:text-gold transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-white/50 font-inter text-sm">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>

                  <p className="text-white/80 font-inter leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold" />
          <CarouselNext className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold" />
        </Carousel>

        {/* Partners Section */}
        <div className="mt-20 animate-fade-in-up">
          <h3 className="font-playfair text-3xl font-bold text-center mb-12 text-white">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Partners</span>
          </h3>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            className="max-w-4xl mx-auto"
          >
            <CarouselContent>
              {["VOGUE", "National Geographic", "CONDE NAST", "ADOBE", "CANON"].map((partner, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flex items-center justify-center p-8 group">
                    <div className="font-playfair text-2xl md:text-3xl font-bold text-white/40 hover:text-gold bg-clip-text hover:scale-110 transition-all duration-300">
                      {partner}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
