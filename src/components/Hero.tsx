import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToFormacion = () => {
    document.getElementById("formacion")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/images/Hero.jpg')",
          backgroundPosition: "center 30%",
        }}
      />
      
      {/* Gradient overlay — bottom-up on mobile, left-right on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* MANIC 0.0 Badge */}
      <div className="absolute top-24 left-6 md:left-10 z-10">
        <Badge className="bg-plum text-plum-foreground border-0 text-xs tracking-[0.15em] px-3 py-1.5">
          MANIC 0.0
        </Badge>
      </div>

      {/* Content pinned to bottom */}
      <div className="relative z-10 container mx-auto px-4 pb-16 md:pb-20">
        <div className="max-w-xl fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
            Formación profesional en manicura
          </h1>
          <p className="text-base md:text-lg text-white/85 mb-8 font-light leading-relaxed max-w-md">
            Formación y guía metodológica para manicuristas que quieren trabajar con
            precisión, rapidez y método.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              onClick={scrollToFormacion}
              className="bg-plum text-white hover:bg-plum-hover border-0 gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Ver cursos
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToFormacion}
              className="border-white/60 text-white bg-transparent hover:bg-white/10 transition-smooth"
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
