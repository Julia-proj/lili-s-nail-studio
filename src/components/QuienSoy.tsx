import { Target, Clock, Ruler, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const QuienSoy = () => {
  return (
    <section id="quien-soy" className="py-20 bg-quiensoy-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image Column */}
          <div className="fade-in relative">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src="/images/Foto7.jpg"
                alt="Lili — manicurista y formadora profesional"
                className="w-full object-cover aspect-[3/4] md:aspect-[4/5]"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
            {/* Overlay on photo */}
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-3">
              <h3 className="text-lg font-serif">Soy Lili</h3>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                Manicurista & Formadora
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8 fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Quién soy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Soy Lili, manicurista con más de 10 años de experiencia dedicada a
                formar y acompañar a profesionales que buscan perfeccionar su técnica y
                optimizar su tiempo de trabajo.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                A lo largo de mi trayectoria he desarrollado dos cursos: el
                <strong> curso de iniciación en manicura</strong> y el
                <strong> curso de subida de cualificación</strong>, ambos creados a
                partir de métodos prácticos y fáciles de aprender.
              </p>
            </div>

            {/* Key Benefits Cards */}
            <div className="grid gap-4">
              {[
                {
                  icon: BookOpen,
                  title: "Formación continua",
                  text: "Método propio creado después de años de práctica real en cabina.",
                },
                {
                  icon: Target,
                  title: "Precisión",
                  text: "Técnica exacta y detallada que evita retrabajos y garantiza resultados limpios.",
                },
                {
                  icon: Clock,
                  title: "Rapidez",
                  text: "Optimización de tiempos sin perder calidad.",
                },
                {
                  icon: Ruler,
                  title: "Metodología",
                  text: "Sistema claro y estructurado que facilita aprender, replicar y trabajar sin improvisaciones.",
                },
              ].map((item) => (
                <Card key={item.title} className="p-5 bg-card border-border hover:shadow-md transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-gold-light">
                      <item.icon className="w-5 h-5 text-plum" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1 font-sans">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Mi objetivo es ayudar a otras manicuristas a crecer, profesionalizarse y
              ofrecer servicios de alto nivel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienSoy;
