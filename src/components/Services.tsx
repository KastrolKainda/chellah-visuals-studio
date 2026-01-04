import { Camera, Heart, Briefcase, Mountain, User, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Capturing your special day with emotion and artistry, creating timeless memories.",
  },
  {
    icon: User,
    title: "Portrait Sessions",
    description: "Professional portraits that showcase personality and elegance in every frame.",
  },
  {
    icon: Briefcase,
    title: "Commercial Work",
    description: "High-end product and brand photography that elevates your business.",
  },
  {
    icon: Mountain,
    title: "Landscape Photography",
    description: "Stunning nature and landscape photography for collectors and enthusiasts.",
  },
  {
    icon: Camera,
    title: "Event Coverage",
    description: "Complete event documentation with cinematic storytelling and attention to detail.",
  },
  {
    icon: Building,
    title: "Architectural Photography",
    description: "Professional architectural photography highlighting design and structure.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(45,93%,47%,0.05),transparent_40%)]" />
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
              className="bg-card border-border/50 hover:shadow-gold hover:border-gold/50 hover:-translate-y-2 transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <service.icon className="text-gold" size={28} />
                </div>
                <CardTitle className="font-playfair text-2xl group-hover:text-gold transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-inter text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
