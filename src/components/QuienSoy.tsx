import { Target, Clock, Ruler, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const QuienSoy = () => {
  return (
    <section id="quien-soy" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Column */}
          <div className="fade-in">
            <img
              src="images/foto6.jpg"
              alt="Lili con la Guía Metodológica"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Content Column */}
          <div className="space-y-8 fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Quién soy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Soy Lili, manicurista con más de diez años de experiencia dedicada a
                formar y acompañar a profesionales que buscan perfeccionar su técnica y
                optimizar su tiempo de trabajo.
              </p>
            </div>

            {/* Key Benefits Cards */}
            <div className="grid gap-4">
              <Card className="p-6 bg-card border-border hover:shadow-md transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Target className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Precisión Milimétrica</h3>
                    <p className="text-muted-foreground">
                      Técnicas probadas que garantizan acabados perfectos en cada servicio
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-md transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Optimización de Tiempos</h3>
                    <p className="text-muted-foreground">
                      Reduce significativamente los tiempos de trabajo sin sacrificar calidad
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-md transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Ruler className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Metodología Estructurada</h3>
                    <p className="text-muted-foreground">
                      Sistema claro y aplicable desde el primer día de formación
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Guide Book Highlight */}
            <Card className="p-6 bg-primary text-primary-foreground">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="leading-relaxed">
                    Soy autora de la <strong>"Guía Metodológica"</strong>, un libro completo
                    que reúne toda la información esencial para una manicurista: manicura
                    profesional, esterilización, enfermedades de las uñas, normas de
                    seguridad y todos los fundamentos necesarios para ejercer con excelencia
                    y confianza.
                  </p>
                </div>
              </div>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi objetivo es ayudar a otras manicuristas a crecer, profesionalizarse y
              ofrecer servicios de alto nivel mediante un aprendizaje accesible,
              estructurado y probado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienSoy;
