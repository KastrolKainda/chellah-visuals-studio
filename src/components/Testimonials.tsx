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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6">
          What Our <span className="text-blue">Clients Say</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-inter text-lg">
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
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:shadow-blue transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-blue"
                    />
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                    ))}
                  </div>

                  <p className="text-foreground/80 font-inter leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Partners Section */}
        <div className="mt-20">
          <h3 className="font-playfair text-3xl font-bold text-center mb-12 text-foreground">
            Our <span className="text-orange">Partners</span>
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
                  <div className="flex items-center justify-center p-8">
                    <div className="font-playfair text-2xl md:text-3xl font-bold opacity-60 hover:opacity-100 transition-opacity duration-300">
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
