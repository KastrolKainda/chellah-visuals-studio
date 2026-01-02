import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(45,93%,47%,0.05),transparent_40%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Get In <span className="bg-gradient-accent bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-inter text-lg animate-fade-in-up">
          Let's create something beautiful together
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-card transition-all duration-300 hover:-translate-x-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Mail className="text-gold group-hover:rotate-12 transition-transform duration-300" size={24} />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-1 group-hover:text-gold transition-colors">Email</h3>
                <p className="text-muted-foreground font-inter">hello@chellahphotography.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-card transition-all duration-300 hover:-translate-x-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-copper/10 group-hover:bg-copper/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Phone className="text-copper group-hover:rotate-12 transition-transform duration-300" size={24} />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-1 group-hover:text-copper transition-colors">Phone</h3>
                <p className="text-muted-foreground font-inter">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-card transition-all duration-300 hover:-translate-x-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <MapPin className="text-gold group-hover:rotate-12 transition-transform duration-300" size={24} />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-1 group-hover:text-gold transition-colors">Studio</h3>
                <p className="text-muted-foreground font-inter">
                  123 Creative Street
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="pt-8 p-4 rounded-lg bg-gold/5 border border-gold/20">
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gold">Working Hours</h3>
              <p className="text-muted-foreground font-inter mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground font-inter">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-muted-foreground font-inter">Sunday: By Appointment</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium mb-2 font-inter group-hover:text-gold transition-colors">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card border-border focus:border-gold focus:shadow-gold transition-all duration-300 font-inter hover:border-gold/50"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium mb-2 font-inter group-hover:text-gold transition-colors">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border focus:border-gold focus:shadow-gold transition-all duration-300 font-inter hover:border-gold/50"
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium mb-2 font-inter group-hover:text-gold transition-colors">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-card border-border focus:border-gold focus:shadow-gold transition-all duration-300 resize-none font-inter hover:border-gold/50"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              variant="gold"
              className="w-full font-inter group"
            >
              Send Message
              <Send className="ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all" size={20} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
