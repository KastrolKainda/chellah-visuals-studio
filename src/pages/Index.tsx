import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisitStudio from "@/components/VisitStudio";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import PresidentMessage from "@/components/PresidentMessage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <VisitStudio />
        <Portfolio />
        <Services />
        <Testimonials />
        <PresidentMessage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
