import { Shield, Drill, Paintbrush, Sparkles, Calendar, Euro, Clock, Package, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Cursos = () => {
  const aprendizaje = [
    { icon: Shield, title: "Esterilización y desinfección" },
    { icon: Drill, title: "Manicura combinada (torno + alicate/tijera)" },
    { icon: Sparkles, title: "Decoración de tendencia" },
    { 
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M6 8c0 0 2-2 6-2s6 2 6 2M6 16c0 0 2 2 6 2s6-2 6-2"/>
        </svg>
      ), 
      title: "Nivelación" 
    },
    { icon: Paintbrush, title: "Introducción al trabajo con gel" },
    { icon: Calendar, title: "Organización del puesto de trabajo" },
  ];

  const programa = [
    {
      dia: "Día 1",
      items: [
        "11:00 – 14:00 → Teoría",
        "14:00 – 15:00 → Pausa para comer",
        "15:00 – hasta terminar → Demostración + práctica en una mano de la alumna (manicura, nivelación, etc.)",
      ],
    },
    {
      dia: "Día 2",
      items: [
        "10:00 – 14:00 → Trabajo con una modelo",
        "14:00 – 15:00 → Pausa",
        "15:00 – hasta terminar → Trabajo con otra modelo diferente",
      ],
    },
    {
      dia: "Día 3",
      items: [
        "10:00 – hasta terminar → Trabajo con una modelo",
        "Al finalizar → Entrega de diploma, ayuda personalizada con tu Instagram profesional y creación de tu lista de compra de imprescindibles.",
      ],
    },
  ];

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-center fade-in">
          <div className="hidden md:block">
            <img
              src="https://github.com/[username]/[repo]/raw/main/images/foto2.jpg"
              alt="Curso Manic 0.0"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-sm tracking-wider text-muted-foreground mb-2">
              Curso de Iniciación
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Curso Manic 0.0 · Iniciación en manicura
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ¿Siempre has querido aprender manicura desde cero? Este curso es tu
              oportunidad perfecta. Te enseñaremos todo lo necesario para iniciar tu
              camino profesional:
            </p>
          </div>
        </div>

        {/* Learning Grid */}
        <div className="mb-16 fade-in">
          <h3 className="text-2xl font-serif mb-8 text-center">Aprendizaje del curso</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aprendizaje.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-md transition-smooth">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <IconComponent className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h4 className="font-medium">{item.title}</h4>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Course Information Card */}
        <Card className="p-8 mb-16 bg-neutral-50 fade-in">
          <h3 className="text-2xl font-serif mb-6">Información del curso</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4">
              <Euro className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Precio</p>
                <p className="text-muted-foreground">800€</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Duración</p>
                <p className="text-muted-foreground">3 días de formación intensiva</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Práctica</p>
                <p className="text-muted-foreground">Trabajo con modelos reales cada día</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Package className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Incluye</p>
                <p className="text-muted-foreground">
                  Kit de herramientas básicas y el libro "Guía Metodológica"
                </p>
              </div>
            </div>
          </div>

          {/* Program */}
          <div className="mt-8">
            <h3 className="text-2xl font-serif mb-6">Programa del curso</h3>
            <div className="space-y-6">
              {programa.map((dia, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-lg mb-3">{dia.dia}</h4>
                  <ul className="space-y-2">
                    {dia.items.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground pl-4 border-l-2 border-border">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Photo Gallery */}
        <div className="mb-8 fade-in">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <img
              src="https://github.com/[username]/[repo]/raw/main/images/foto3.jpg"
              alt="Curso foto 1"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://github.com/[username]/[repo]/raw/main/images/foto4.jpg"
              alt="Curso foto 2"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://github.com/[username]/[repo]/raw/main/images/foto5.jpg"
              alt="Curso foto 3"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://github.com/[username]/[repo]/raw/main/images/foto6.jpg"
              alt="Curso foto 4"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center fade-in">
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a
              href="https://www.instagram.com/lii.lab/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar plaza en el curso
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cursos;
