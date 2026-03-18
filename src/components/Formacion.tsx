import { Check, Instagram, Clock, Users, BookOpen, Download, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CourseProgram = () => (
  <div className="mt-10 mb-14 fade-in">
    <h3 className="text-2xl md:text-3xl font-serif text-center mb-8">Programa del curso MANIC 0.0</h3>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          day: "01",
          title: "Teoría y Fundamentos",
          items: [
            "11:00 – 14:00: Teoría completa",
            "15:00 – fin: Demostración y práctica en mano propia",
          ],
        },
        {
          day: "02",
          title: "Práctica Real",
          items: [
            "10:00 – 14:00: Trabajo con modelo 1",
            "15:00 – fin: Trabajo con modelo 2",
          ],
        },
        {
          day: "03",
          title: "Perfeccionamiento",
          items: [
            "10:00 – fin: Trabajo con modelo final",
            "Entrega de diploma y asesoría Instagram",
          ],
        },
      ].map((day) => (
        <Card key={day.day} className="p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300">
          <span
            className="text-3xl font-serif font-bold block mb-2"
            style={{ color: "hsl(var(--gold))" }}
          >
            {day.day}
          </span>
          <h4 className="text-lg font-semibold mb-3">{day.title}</h4>
          <ul className="space-y-2">
            {day.items.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "hsl(var(--gold))" }} />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </div>
);

const Formacion = () => {
  const curso1Includes = [
    "Esterilización y desinfección",
    "Uso del torno profesional",
    "Manicura combinada",
    "Gel y acrílico",
    "Nail art básico",
    "Acabados perfectos",
    "Kit profesional + Guía Metodológica",
    "Certificado",
  ];

  const curso2Includes = [
    "Técnica combinada avanzada",
    "Optimización de tiempos",
    "Productividad en cabina",
    "Práctica con 2 modelos reales",
    "Certificado",
  ];

  const guiaContents = [
    "Anatomía y fisiología de la uña",
    "Protocolos de higiene y esterilización",
    "Enfermedades y contraindicaciones",
    "Preparación de la uña natural",
    "Organización del puesto de trabajo",
    "Estructura de servicios y tiempos",
  ];

  return (
    <section id="formacion" className="py-20" style={{ backgroundColor: "hsl(var(--warm-bg))" }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-3">Formación</h2>
          <div className="w-16 h-[2px] mx-auto" style={{ backgroundColor: "hsl(var(--gold))" }} />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 — Main Course */}
          <Card className="relative p-0 overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-1 flex flex-col">
            <div className="absolute top-4 right-4 z-10">
              <Badge
                className="text-xs font-semibold tracking-wider border-0 px-3 py-1"
                style={{ backgroundColor: "hsl(var(--gold))", color: "white" }}
              >
                MÁS POPULAR
              </Badge>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Curso de Iniciación
              </p>
              <h3 className="text-xl md:text-2xl font-serif mb-1">MANIC 0.0</h3>
              <p className="text-sm text-muted-foreground mb-5">
                De cero a manicurista profesional
              </p>

              <div className="mb-5">
                <span className="text-3xl md:text-4xl font-serif" style={{ color: "hsl(var(--plum))" }}>
                  €800
                </span>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 3 días intensivos
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Teoría + práctica con modelos reales
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                ¿Siempre has querido aprender manicura desde cero? Este curso es tu
                oportunidad perfecta. Te enseñaremos todo lo necesario para iniciar tu
                camino profesional con bases sólidas: esterilización, técnica combinada,
                nivelación, decoración y trabajo con gel.
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {curso1Includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                asChild
                className="w-full border-0 text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "hsl(var(--plum))" }}
              >
                <a
                  href="https://www.instagram.com/lii.lab/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar plaza
                </a>
              </Button>
            </div>
          </Card>

          {/* Card 2 — Upgrade Course */}
          <Card className="relative p-0 overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-1 flex flex-col">
            <div className="absolute top-4 right-4 z-10">
              <Badge
                className="text-xs font-semibold tracking-wider border-0 px-3 py-1"
                style={{ backgroundColor: "hsl(var(--rose-accent))", color: "white" }}
              >
                NUEVO
              </Badge>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Subida de Cualificación
              </p>
              <h3 className="text-xl md:text-2xl font-serif mb-1">Perfecciona tu técnica</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Optimiza tu tiempo y calidad de servicio
              </p>

              <div className="mb-5">
                <span className="text-3xl md:text-4xl font-serif" style={{ color: "hsl(var(--plum))" }}>
                  €349,99
                </span>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 1 día intensivo
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Teoría + práctica con 2 modelos reales
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Para manicuristas que quieren pulir sus conocimientos y llegar a hacer
                manicura combinada perfecta. Mejora tu productividad y resultados
                con técnicas avanzadas.
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {curso2Includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full transition-colors"
                style={{ borderColor: "hsl(var(--plum))", color: "hsl(var(--plum))" }}
              >
                <a
                  href="https://www.instagram.com/lii.lab/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar plaza
                </a>
              </Button>
            </div>
          </Card>

          {/* Card 3 — Guide */}
          <Card className="relative p-0 overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:col-span-1 flex flex-col bg-card">
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-muted-foreground" />
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Material Exclusivo
                </p>
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-1">Guía Metodológica</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Todo el método en formato digital
              </p>

              <div className="mb-5">
                <span className="text-3xl md:text-4xl font-serif" style={{ color: "hsl(var(--plum))" }}>
                  €27,99
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
                <Download className="w-3.5 h-3.5" /> Descarga inmediata · Pago único
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Un libro completo que reúne la información esencial para una manicurista.
                Escrita de forma clara y práctica para mejorar la técnica y optimizar
                los tiempos de servicio.
              </p>

              <ul className="space-y-2 mb-8 flex-1">
                {guiaContents.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                <Button
                  size="lg"
                  asChild
                  className="w-full border-0 text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "hsl(var(--plum))" }}
                >
                  <a
                    href="https://buy.stripe.com/7sYbIT592fFwbE34QS7EQ00"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consigue tu Guía
                  </a>
                </Button>
                <Button
                  variant="link"
                  asChild
                  className="w-full justify-center p-0 h-auto text-sm underline underline-offset-4"
                  style={{ color: "hsl(var(--plum))" }}
                >
                  <a
                    href="https://www.instagram.com/lii.lab/?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preguntar por Instagram →
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Course Program */}
        <CourseProgram />

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14 fade-in">
          {[
            { src: "/images/Foto5.JPG", alt: "Trabajo de manicura profesional" },
            { src: "/images/Foto4.JPG", alt: "Práctica durante el curso" },
            { src: "/images/Foto6.JPG", alt: "Resultado de alumna" },
            { src: "/images/Foto3.JPG", alt: "Detalle de técnica" },
          ].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 fade-in"
          style={{ backgroundColor: "hsl(var(--gold-light))" }}
        >
          <p className="text-sm md:text-base text-center md:text-left" style={{ color: "hsl(var(--plum))" }}>
            ¿Tienes un salón y quieres formar a tu equipo? Ofrecemos formación personalizada
            con precios especiales para equipos.
          </p>
          <Button
            size="lg"
            asChild
            className="shrink-0 border-0 text-white hover:opacity-90 gap-2"
            style={{ backgroundColor: "hsl(var(--plum))" }}
          >
            <a
              href="https://www.instagram.com/lii.lab/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4" />
              Consultar por Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Formacion;
