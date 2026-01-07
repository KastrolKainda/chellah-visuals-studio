import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";
import portfolioSports from "@/assets/portfolio-sports.jpg";
import portfolioNature from "@/assets/portfolio-nature.jpg";
import nature1 from "@/assets/nature-1.jpg";
import nature2 from "@/assets/nature-2.jpg";
import nature3 from "@/assets/nature-3.jpg";
import nature4 from "@/assets/nature-4.jpg";
import nature5 from "@/assets/nature-5.jpg";
import nature6 from "@/assets/nature-6.jpg";
import fashion1 from "@/assets/fashion-1.jpg";
import fashion2 from "@/assets/fashion-2.jpg";
import fashion3 from "@/assets/fashion-3.jpg";
import fashion4 from "@/assets/fashion-4.jpg";
import fashion5 from "@/assets/fashion-5.jpg";
import fashion6 from "@/assets/fashion-6.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import portrait4 from "@/assets/portrait-4.jpg";
import portrait5 from "@/assets/portrait-5.jpg";
import portrait6 from "@/assets/portrait-6.jpg";

const categoryImages = {
  portrait: [portrait1, portrait2, portrait3, portrait4, portrait5, portrait6],
  wedding: [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6],
  nature: [nature1, nature2, nature3, nature4, nature5, nature6],
  sports: [portfolioSports, portfolioSports, portfolioSports, portfolioSports, portfolioSports, portfolioSports],
  fashion: [fashion1, fashion2, fashion3, fashion4, fashion5, fashion6],
  architecture: [portfolioNature, portfolioNature, portfolioNature, portfolioNature, portfolioNature, portfolioNature],
};

const categoryTitles = {
  portrait: "Portrait Photography",
  wedding: "Wedding Photography",
  nature: "Nature & Wildlife Photography",
  sports: "Sports Photography",
  fashion: "Fashion Photography",
  architecture: "Architecture Photography",
};

const PortfolioCategory = () => {
  const { category } = useParams<{ category: string }>();
  const images = categoryImages[category as keyof typeof categoryImages] || [];
  const title = categoryTitles[category as keyof typeof categoryTitles] || "Portfolio";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              Back to Home
            </Button>
          </Link>

          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-muted-foreground font-inter text-lg mb-12">
            Explore our collection of {category} work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image}
                  alt={`${category} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/#contact">
              <Button variant="gold" size="lg" className="font-inter">
                Book a {category} Session
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioCategory;
