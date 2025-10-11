import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-playfair text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            Chellah
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-accent transition-colors font-inter"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-accent transition-colors font-inter"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground/80 hover:text-accent transition-colors font-inter"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-accent transition-colors font-inter"
            >
              Services
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-accent text-primary-foreground hover:shadow-elegant transition-all font-inter"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground/80 hover:text-accent transition-colors font-inter text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-accent transition-colors font-inter text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground/80 hover:text-accent transition-colors font-inter text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground/80 hover:text-accent transition-colors font-inter text-left"
              >
                Services
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-accent text-primary-foreground hover:shadow-elegant transition-all font-inter"
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
