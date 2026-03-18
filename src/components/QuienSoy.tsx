import { Target, Clock, Ruler, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const QuienSoy = () => {
  return (
    <section id="quien-soy" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image Column */}
          <div className="fade-in">
            <img
              src="/images/Foto7.jpg"
              alt="Lili — manicurista y formadora profesional"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="mt-4 text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Manicurista & Formadora
              </p>
              <h3 className="text-xl font-serif mt-1">Soy Lili</h3>
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
              <Card className="p-5 bg-card border-border hover:shadow-md transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg" style={{ backgroundColor: "hsl(var(--gold-light))" }}>
                    <BookOpen className="w-5 h-5" style={{ color: "hsl(var(--plum))" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Formación continua</h3>
                    <p className="text-sm text-muted-foreground">
                      Método propio creado después de años de práctica real en cabina
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-card border-border hover:shadow-md transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg" style={{ backgroundColor: "hsl(var(--gold-light))" }}>
                    <Target className="w-5 h-5" style={{ color: "hsl(var(--plum))" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Precisión</h3>
                    <p className="text-sm text-muted-foreground">
                      Técnica exacta y detallada que evita retrabajos y garantiza resultados limpios
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-card border-border hover:shadow-md transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg" style={{ backgroundColor: "hsl(var(--gold-light))" }}>
                    <Clock className="w-5 h-5" style={{ color: "hsl(var(--plum))" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Rapidez</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimización de tiempos sin perder calidad en el servicio
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-card border-border hover:shadow-md transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg" style={{ backgroundColor: "hsl(var(--gold-light))" }}>
                    <Ruler className="w-5 h-5" style={{ color: "hsl(var(--plum))" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Metodología</h3>
                    <p className="text-sm text-muted-foreground">
                      Sistema claro y estructurado que facilita aprender, replicar y trabajar sin improvisaciones
                    </p>
                  </div>
                </div>
              </Card>
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
