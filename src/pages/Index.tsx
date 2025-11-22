import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuienSoy from "@/components/QuienSoy";
import Cursos from "@/components/Cursos";
import Guia from "@/components/Guia";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuienSoy />
      <Cursos />
      <Guia />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Index;
