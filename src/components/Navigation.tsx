import { useState, useEffect } from "react";
import { Menu, X, Aperture } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-charcoal/95 backdrop-blur-md shadow-soft border-b border-gold/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer group"
          >
            <div className="relative">
              <Aperture className="w-8 h-8 text-gold group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-2xl font-bold text-white tracking-wide">
                Chellah
              </span>
              <span className="text-[10px] text-gold/80 font-inter tracking-[0.3em] uppercase -mt-1">
                Photography
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white/70 hover:text-gold transition-colors font-inter text-sm tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/70 hover:text-gold transition-colors font-inter text-sm tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white/70 hover:text-gold transition-colors font-inter text-sm tracking-wide"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/70 hover:text-gold transition-colors font-inter text-sm tracking-wide"
            >
              Services
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="gold"
              className="font-inter"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up border-t border-gold/10 pt-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white/70 hover:text-gold transition-colors font-inter text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/70 hover:text-gold transition-colors font-inter text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white/70 hover:text-gold transition-colors font-inter text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white/70 hover:text-gold transition-colors font-inter text-left"
              >
                Services
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="gold"
                className="font-inter w-fit"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
