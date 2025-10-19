import { Camera, Heart, Briefcase, Mountain, User, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Capturing your special day with emotion and artistry, creating timeless memories.",
    price: "Starting at $2,500",
  },
  {
    icon: User,
    title: "Portrait Sessions",
    description: "Professional portraits that showcase personality and elegance in every frame.",
    price: "Starting at $500",
  },
  {
    icon: Briefcase,
    title: "Commercial Work",
    description: "High-end product and brand photography that elevates your business.",
    price: "Custom Pricing",
  },
  {
    icon: Mountain,
    title: "Landscape Photography",
    description: "Stunning nature and landscape photography for collectors and enthusiasts.",
    price: "Starting at $800",
  },
  {
    icon: Camera,
    title: "Event Coverage",
    description: "Complete event documentation with cinematic storytelling and attention to detail.",
    price: "Starting at $1,200",
  },
  {
    icon: Building,
    title: "Architectural Photography",
    description: "Professional architectural photography highlighting design and structure.",
    price: "Starting at $1,000",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-orange/5 via-transparent to-blue/5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Our <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-inter text-lg animate-fade-in-up">
          Professional photography tailored to your needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant hover:border-accent/50 hover:-translate-y-2 transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-accent/10 mb-4 group-hover:bg-gradient-accent/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <service.icon className="text-accent" size={28} />
                </div>
                <CardTitle className="font-playfair text-2xl group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-inter text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-accent font-inter font-semibold text-lg">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
