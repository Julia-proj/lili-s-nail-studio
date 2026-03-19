import { Check, Instagram, Clock, Users, BookOpen, Download, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Formacion = () => {
  const curso1Includes = [
    { icon: "🖌", text: "Manicura combinada" },
    { icon: "✨", text: "Gel y acrílico" },
    { icon: "🪄", text: "Nail art básico" },
    { icon: "📦", text: "Kit profesional incluido" },
    { icon: "🏆", text: "Certificado" },
  ];

  const curso2Includes = [
    { icon: "⚡", text: "Manicura combinada avanzada" },
    { icon: "🕐", text: "Trucos para optimizar tiempos" },
    { icon: "📈", text: "Rendimiento y productividad" },
    { icon: "🏆", text: "Certificado" },
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
    <section id="formacion" className="py-20 bg-warm-bg">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-3">Formación</h2>
          <div className="w-16 h-[2px] mx-auto bg-gold" />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 — MANIC 0.0 */}
          <Card className="relative p-0 overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="absolute top-4 right-4 z-10">
              <Badge className="text-xs font-semibold tracking-wider border-0 px-3 py-1 bg-gold text-white">
                MÁS POPULAR
              </Badge>
            </div>
            
            {/* Course Image */}
            <div className="overflow-hidden">
              <img
                src="/images/Foto2.JPG"
                alt="Curso MANIC 0.0"
                className="w-full aspect-[4/3] object-cover"
                style={{ objectPosition: "center 35%" }}
              />
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
                <span className="text-3xl md:text-4xl font-serif text-plum">€749,99</span>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 3 días intensivos
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Modelos reales incluidos
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                ¿Siempre has querido aprender manicura desde cero? Te enseñamos
                esterilización, técnica combinada, nivelación, decoración y gel
                con bases sólidas.
              </p>

              <ul className="space-y-2.5 mb-6">
                {curso1Includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0 text-gold" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Course Program Accordion */}
              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="programa" className="border-border">
                  <AccordionTrigger className="text-sm font-semibold font-sans py-3">
                    Programa del curso
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <div>
                        <p className="text-sm font-semibold font-sans mb-1">Día 1 — Teoría y Fundamentos</p>
                        <p className="text-xs text-muted-foreground">11:00–14:00 Teoría completa</p>
                        <p className="text-xs text-muted-foreground">15:00–fin Demostración y práctica en mano propia</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold font-sans mb-1">Día 2 — Práctica Real</p>
                        <p className="text-xs text-muted-foreground">10:00–14:00 Trabajo con modelo 1</p>
                        <p className="text-xs text-muted-foreground">15:00–fin Trabajo con modelo 2</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold font-sans mb-1">Día 3 — Perfeccionamiento</p>
                        <p className="text-xs text-muted-foreground">10:00–fin Trabajo con modelo final</p>
                        <p className="text-xs text-muted-foreground">Entrega de diploma y asesoría Instagram</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-auto">
                <Button
                  size="lg"
                  asChild
                  className="w-full border-0 bg-plum text-white hover:bg-plum-hover transition-colors"
                >
                  <a href="/booking/course" rel="noopener noreferrer">
                    Reservar plaza
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Card 2 — Subida de Cualificación */}
          <Card className="relative p-0 overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="absolute top-4 right-4 z-10">
              <Badge className="text-xs font-semibold tracking-wider border-0 px-3 py-1 bg-rose-accent text-white">
                NUEVO
              </Badge>
            </div>

            {/* Course Video */}
            <div className="overflow-hidden">
              <video
                src="/videos/curso.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover"
              />
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
                <span className="text-3xl md:text-4xl font-serif text-plum">€349,99</span>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 1 día intensivo
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Práctica con 2 modelos reales
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Para manicuristas que quieren pulir sus conocimientos y llegar a hacer
                manicura combinada perfecta. 10 años de experiencia, todos los trucos
                y sobre todo rendimiento de tiempo para mayor ganancia.
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {curso2Includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0 text-rose-accent" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full border-plum text-plum hover:bg-plum hover:text-white transition-colors"
                >
                  <a href="/booking/course?type=subida" rel="noopener noreferrer">
                    Reservar plaza
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Card 3 — Guía Metodológica */}
          <Card className="relative p-0 overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col bg-card">
            {/* Guide Video */}
            <div className="overflow-hidden">
              <video
                src="/videos/guia.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

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
                <span className="text-3xl md:text-4xl font-serif text-plum">€27,99</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
                <Download className="w-3.5 h-3.5" /> Descarga digital · Pago único
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Metodología completa para llevar siempre contigo. Anatomía de la uña,
                protocolos de higiene, técnicas de preparación y organización del trabajo.
              </p>

              <ul className="space-y-2 mb-8 flex-1">
                {guiaContents.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2 mt-auto">
                <Button
                  size="lg"
                  asChild
                  className="w-full border-0 bg-plum text-white hover:bg-plum-hover transition-colors gap-2"
                >
                  <a
                    href="https://buy.stripe.com/7sYbIT592fFwbE34QS7EQ00"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Sparkles className="w-4 h-4" />
                    Consigue tu Guía · 27,99€
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-plum text-plum hover:bg-plum hover:text-white gap-2"
                >
                  <a
                    href="https://www.instagram.com/lii.lab/?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4" />
                    Preguntar por Instagram
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 fade-in bg-gold-light">
          <p className="text-sm md:text-base text-center md:text-left text-plum">
            ¿Tienes un salón y quieres formar a tu equipo? Ofrecemos formación personalizada
            con precios especiales para equipos.
          </p>
          <Button
            size="lg"
            asChild
            className="shrink-0 border-0 bg-plum text-white hover:bg-plum-hover gap-2"
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
