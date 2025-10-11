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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-inter text-lg">
          Let's create something beautiful together
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground font-inter">hello@chellahphotography.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground font-inter">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-1">Studio</h3>
                <p className="text-muted-foreground font-inter">
                  123 Creative Street
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="font-playfair text-2xl font-semibold mb-4">Working Hours</h3>
              <p className="text-muted-foreground font-inter mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground font-inter">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-muted-foreground font-inter">Sunday: By Appointment</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 font-inter">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-secondary border-border focus:border-accent transition-colors font-inter"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 font-inter">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-secondary border-border focus:border-accent transition-colors font-inter"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 font-inter">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-secondary border-border focus:border-accent transition-colors resize-none font-inter"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-accent text-primary-foreground hover:shadow-elegant transition-all font-inter group"
            >
              Send Message
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
