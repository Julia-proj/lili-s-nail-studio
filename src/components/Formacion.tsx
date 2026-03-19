import { Check, Instagram, Clock, Users, BookOpen, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Formacion = () => {
  const curso1Includes = [
    "Manicura combinada",
    "Gel y acrílico",
    "Nail art básico",
    "Kit profesional",
    "Certificado",
  ];

  const curso2Includes = [
    "Técnica combinada",
    "Optimización de tiempos",
    "Productividad",
    "Práctica con 2 modelos",
    "Certificado",
  ];

  return (
    <section id="formacion" className="py-20" style={{ backgroundColor: "hsl(45, 20%, 98%)" }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-3">Formación</h2>
          <div className="w-16 h-[2px] mx-auto" style={{ backgroundColor: "hsl(43, 60%, 55%)" }} />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {/* Card 1 — Main Course */}
          <Card className="relative p-0 overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-1 flex flex-col">
            <div className="absolute top-4 right-4 z-10">
              <Badge
                className="text-xs font-semibold tracking-wider border-0 px-3 py-1"
                style={{ backgroundColor: "hsl(43, 60%, 55%)", color: "white" }}
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
                <span className="text-3xl md:text-4xl font-serif" style={{ color: "hsl(340, 35%, 30%)" }}>
                  €749,99
                </span>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 3 días intensivos
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Teoría + práctica con modelos
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Todo lo necesario para iniciar tu camino profesional en manicura: esterilización,
                técnica combinada, nivelación, decoración y trabajo con gel.
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {curso1Includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(43, 60%, 55%)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                asChild
                className="w-full border-0 text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "hsl(340, 35%, 30%)" }}
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
                style={{ backgroundColor: "hsl(350, 40%, 70%)", color: "white" }}
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
                <span className="text-3xl md:text-4xl font-serif" style={{ color: "hsl(340, 35%, 30%)" }}>
                  €349,99
                </span>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 1 día intensivo
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Teoría + práctica con 2 modelos
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Para manicuristas que quieren pulir sus conocimientos y llegar a hacer
                manicura combinada perfecta.
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {curso2Includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(43, 60%, 55%)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full transition-colors"
                style={{ borderColor: "hsl(340, 35%, 30%)", color: "hsl(340, 35%, 30%)" }}
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
                  Recurso Digital
                </p>
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-1">Guía Metodológica</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Todo el método en formato digital
              </p>

              <div className="mb-5">
                <span className="text-3xl md:text-4xl font-serif" style={{ color: "hsl(340, 35%, 30%)" }}>
                  €27,99
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
                <Download className="w-3.5 h-3.5" /> Descarga digital PDF
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                Metodología completa para llevar siempre contigo. Anatomía de la uña,
                protocolos de higiene, técnicas de preparación y organización del trabajo.
              </p>

              <Button
                variant="link"
                asChild
                className="w-full justify-center p-0 h-auto text-sm underline underline-offset-4"
                style={{ color: "hsl(340, 35%, 30%)" }}
              >
                <a
                  href="https://www.instagram.com/lii.lab/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar guía →
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Bottom Banner */}
        <div
          className="rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 fade-in"
          style={{ backgroundColor: "hsl(43, 50%, 90%)" }}
        >
          <p className="text-sm md:text-base text-center md:text-left" style={{ color: "hsl(340, 35%, 30%)" }}>
            ¿Tienes un salón y quieres formar a tu equipo? Ofrecemos formación personalizada
            con precios especiales para equipos.
          </p>
          <Button
            size="lg"
            asChild
            className="shrink-0 border-0 text-white hover:opacity-90 gap-2"
            style={{ backgroundColor: "hsl(340, 35%, 30%)" }}
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
