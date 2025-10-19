import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 backdrop-blur-sm py-12 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="font-playfair text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              Chellah
            </h3>
            <p className="text-muted-foreground font-inter mb-4">
              Capturing life's most precious moments with artistic excellence and timeless elegance.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center hover:bg-blue/20 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="text-blue hover:rotate-12 transition-transform" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="text-accent hover:rotate-12 transition-transform" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center hover:bg-orange/20 hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="text-orange hover:rotate-12 transition-transform" size={20} />
              </a>
              <a
                href="mailto:hello@chellahphotography.com"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="text-accent hover:rotate-12 transition-transform" size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-blue hover:translate-x-2 inline-block transition-all duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-blue hover:translate-x-2 inline-block transition-all duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-blue hover:translate-x-2 inline-block transition-all duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-blue hover:translate-x-2 inline-block transition-all duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-blue hover:translate-x-2 inline-block transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-orange">Contact Info</h4>
            <ul className="space-y-2 font-inter text-muted-foreground">
              <li className="hover:text-foreground transition-colors">123 Creative Street</li>
              <li className="hover:text-foreground transition-colors">New York, NY 10001</li>
              <li className="hover:text-foreground transition-colors">+1 (555) 123-4567</li>
              <li className="hover:text-foreground transition-colors">hello@chellahphotography.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center animate-fade-in">
          <p className="text-muted-foreground font-inter">
            © {currentYear} Chellah Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
