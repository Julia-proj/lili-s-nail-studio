import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Guia = () => {
  return (
    <section id="guia" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="fade-in">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-serif">"Guía Metodológica"</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              La Guía Metodológica es un libro completo que reúne la información esencial
              para una manicurista: anatomía de la uña, normas de higiene y esterilización,
              enfermedades, técnicas de preparación y organización del trabajo.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Está escrita de forma clara y práctica, para mejorar la técnica y optimizar
              los tiempos de servicio.
            </p>

            <h3 className="text-2xl font-serif mb-4">Contenido principal</h3>
            <ul className="space-y-3 mb-8">
              {[
                "Anatomía y fisiología de la uña",
                "Protocolos de higiene y esterilización",
                "Enfermedades y contraindicaciones",
                "Preparación de la uña natural",
                "Organización del puesto de trabajo",
                "Estructura de servicios y tiempos recomendados",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-neutral-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-serif mb-3">Para formadoras y profesionales</h3>
              <p className="text-muted-foreground leading-relaxed">
                La Guía Metodológica puede utilizarse como una guía complementaria en cursos
                y academias, facilitando el trabajo de la profesora y evitando tener que
                crear materiales desde cero. Ayuda a mantener una metodología estructurada y
                profesional en cada clase.
              </p>
            </div>

            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
            >
              <a
                href="https://www.instagram.com/lii.lab/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                Obtener la Guía Metodológica
              </a>
            </Button>
          </div>

          {/* Image Column */}
          <div className="fade-in order-first md:order-last">
            <img
              src="images/foto6.jpg"
              alt="Guía Metodológica"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guia;
