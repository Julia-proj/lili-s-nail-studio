import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuienSoy from "@/components/QuienSoy";
import Formacion from "@/components/Formacion";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuienSoy />
      <Formacion />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Index;
