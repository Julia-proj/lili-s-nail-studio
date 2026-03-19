import { Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  const navigate = useNavigate();

  return (
    <section id="contacto" className="py-20 bg-neutral-200">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Contacto</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            ¿Quieres reservar una cita o conseguir la Guía Metodológica? Elige lo que necesitas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate("/booking")}
              className="bg-lavender text-foreground hover:bg-lavender/80 border-0 gap-2"
            >
              <Calendar className="w-5 h-5" />
              Reservar cita
            </Button>
            <Button
              size="lg"
              onClick={() => document.getElementById("formacion")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-foreground text-background hover:bg-foreground/90 border-0 gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Conseguir la guía
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
