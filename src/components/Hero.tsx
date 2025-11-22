import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.5)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl fade-in">
          <p className="text-sm tracking-wider text-foreground/80 mb-4 font-light">
            Lili · Formación para manicuristas
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6 leading-tight">
            Formación profesional en manicura
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 font-light leading-relaxed">
            Formación y guía metodológica para manicuristas que quieren trabajar con
            precisión, rapidez y método.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("cursos")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
            >
              Ver cursos
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("guia")}
              className="border-primary text-primary hover:bg-primary/10 transition-smooth"
            >
              Guía Metodológica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
