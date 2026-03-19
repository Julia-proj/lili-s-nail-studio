import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className={`text-xl font-serif font-semibold transition-smooth ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Lii.lab
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("quien-soy")}
                className={`text-sm transition-smooth ${
                  isScrolled ? "text-foreground hover:text-plum" : "text-white/90 hover:text-white"
                }`}
              >
                Quién soy
              </button>
              <button
                onClick={() => scrollToSection("formacion")}
                className={`text-sm transition-smooth ${
                  isScrolled ? "text-foreground hover:text-plum" : "text-white/90 hover:text-white"
                }`}
              >
                Formación
              </button>
              <Button
                size="sm"
                onClick={() => navigate("/booking")}
                className="bg-lavender text-foreground hover:bg-lavender/80 border-0"
              >
                Reservar cita
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${isScrolled ? "" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-8 animate-in fade-in duration-200">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollToSection("quien-soy")}
            className="text-2xl font-serif text-foreground hover:text-plum transition-smooth"
          >
            Quién soy
          </button>
          <button
            onClick={() => scrollToSection("formacion")}
            className="text-2xl font-serif text-foreground hover:text-plum transition-smooth"
          >
            Formación
          </button>
          <Button
            size="lg"
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigate("/booking");
            }}
            className="bg-lavender text-foreground hover:bg-lavender/80 border-0 mt-4"
          >
            Reservar cita
          </Button>
        </div>
      )}
    </>
  );
};

export default Header;
