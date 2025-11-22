import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Contacto</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            ¿Quieres reservar plaza en el curso o conseguir la Guía Metodológica?
            Escríbeme y te responderé personalmente.
          </p>

          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a
              href="https://www.instagram.com/lii.lab/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Contáctame en Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
