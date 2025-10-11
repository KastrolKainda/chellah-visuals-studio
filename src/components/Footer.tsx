import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              Chellah
            </h3>
            <p className="text-muted-foreground font-inter mb-4">
              Capturing life's most precious moments with artistic excellence and timeless elegance.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="text-accent" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="text-accent" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="text-accent" size={20} />
              </a>
              <a
                href="mailto:hello@chellahphotography.com"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="text-accent" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 font-inter text-muted-foreground">
              <li>123 Creative Street</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@chellahphotography.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground font-inter">
            © {currentYear} Chellah Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
