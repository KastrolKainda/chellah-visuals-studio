import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolioNature from "@/assets/portfolio-nature.jpg";
import portfolioSports from "@/assets/portfolio-sports.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const categoryImages = {
  portrait: [portfolio1, portfolio1, portfolio1, portfolio1, portfolio1, portfolio1],
  wedding: [portfolio2, portfolio2, portfolio2, portfolio2, portfolio2, portfolio2],
  nature: [portfolioNature, portfolioNature, portfolioNature, portfolioNature, portfolioNature, portfolioNature],
  sports: [portfolioSports, portfolioSports, portfolioSports, portfolioSports, portfolioSports, portfolioSports],
  fashion: [portfolio5, portfolio5, portfolio5, portfolio5, portfolio5, portfolio5],
  architecture: [portfolio6, portfolio6, portfolio6, portfolio6, portfolio6, portfolio6],
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
