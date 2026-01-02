import { Instagram, Facebook, Twitter, Mail, Aperture } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-charcoal to-[hsl(220,20%,6%)] py-12 border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(45,93%,47%,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(25,80%,50%,0.06),transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            {/* Logo in Footer */}
            <div className="flex items-center gap-2 mb-4">
              <Aperture className="w-8 h-8 text-gold" />
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-bold text-white">Chellah</span>
                <span className="text-[10px] text-gold/80 font-inter tracking-[0.3em] uppercase -mt-1">Photography</span>
              </div>
            </div>
            <p className="text-white/50 font-inter mb-4">
              Capturing life's most precious moments with artistic excellence and timeless elegance.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="text-gold hover:rotate-12 transition-transform" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center hover:bg-copper/20 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="text-copper hover:rotate-12 transition-transform" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="text-gold hover:rotate-12 transition-transform" size={20} />
              </a>
              <a
                href="mailto:hello@chellahphotography.com"
                className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center hover:bg-copper/20 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="text-copper hover:rotate-12 transition-transform" size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <a href="#home" className="text-white/50 hover:text-gold hover:translate-x-2 inline-block transition-all duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/50 hover:text-gold hover:translate-x-2 inline-block transition-all duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/50 hover:text-gold hover:translate-x-2 inline-block transition-all duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/50 hover:text-gold hover:translate-x-2 inline-block transition-all duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/50 hover:text-gold hover:translate-x-2 inline-block transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-copper">Contact Info</h4>
            <ul className="space-y-2 font-inter text-white/50">
              <li className="hover:text-white transition-colors">123 Creative Street</li>
              <li className="hover:text-white transition-colors">New York, NY 10001</li>
              <li className="hover:text-white transition-colors">+1 (555) 123-4567</li>
              <li className="hover:text-white transition-colors">hello@chellahphotography.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 text-center animate-fade-in">
          <p className="text-white/40 font-inter">
            © {currentYear} Chellah Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
