import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="container mx-auto px-6 py-32 relative z-10 flex flex-col items-center justify-center text-center"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Naviya M
        </h1>

        <p
          className="text-2xl md:text-3xl text-primary font-semibold mb-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Aspiring Software Developer & AI Enthusiast
        </p>

        <p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Building innovative solutions at the intersection of software development,
          artificial intelligence, and cloud technologies.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("portfolio")}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View Portfolio
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Contact Me
          </Button>
        </div>

        <div
          className="flex gap-6 justify-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="https://github.com/navs42"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/naviya-m-6a10011bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:naviya194@gmail.com"
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default Hero;
