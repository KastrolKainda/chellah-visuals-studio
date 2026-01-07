import { Star, Quote, Clock, Users } from "lucide-react";

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

const stats = [
  {
    icon: Clock,
    value: "15+",
    label: "Years of Professional Experience",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Clients of Happy Memories Created",
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
        <p className="text-center text-white/60 mb-12 font-inter text-lg animate-fade-in-up">
          Trusted by individuals and businesses worldwide
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 animate-fade-in">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="text-gold" size={28} />
              </div>
              <div className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-white/60 font-inter text-sm max-w-[180px]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-8 hover:shadow-gold hover:border-gold/40 hover:-translate-y-2 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-gold/30 mb-4 group-hover:text-gold/50 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-white/80 font-inter leading-relaxed italic mb-6">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gold/20 pt-4">
                <h3 className="font-playfair text-lg font-semibold text-white group-hover:text-gold transition-colors">
                  {testimonial.name}
                </h3>
                <p className="text-white/50 font-inter text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
