import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  { id: 1, image: portfolio1, title: "Portrait", category: "portrait" },
  { id: 2, image: portfolio2, title: "Wedding", category: "wedding" },
  { id: 3, image: portfolio3, title: "Commercial", category: "commercial" },
  { id: 4, image: portfolio4, title: "Landscape", category: "landscape" },
  { id: 5, image: portfolio5, title: "Fashion", category: "fashion" },
  { id: 6, image: portfolio6, title: "Architecture", category: "architecture" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6">
          Featured <span className="text-accent">Work</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-inter text-lg">
          A glimpse into our creative journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Link
              key={item.id}
              to={`/portfolio/${item.category}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer animate-fade-in block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-2xl font-semibold text-accent mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 font-inter">View Gallery</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
