import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-serif mb-4">Reservar cita</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Página de reservas en construcción. Por ahora, contáctanos por Instagram para reservar tu cita.
        </p>
        <Button
          asChild
          className="bg-plum text-white hover:bg-plum-hover"
        >
          <a href="https://www.instagram.com/lii.lab/?hl=es" target="_blank" rel="noopener noreferrer">
            Contactar por Instagram
          </a>
        </Button>
      </div>
    </div>
  );
};

export default BookingPage;
