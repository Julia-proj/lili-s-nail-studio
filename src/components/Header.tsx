import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-serif font-semibold text-foreground hover:opacity-80 transition-smooth"
          >
            Lii.lab
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("quien-soy")}
              className="text-sm text-foreground hover:text-primary transition-smooth"
            >
              Quién soy
            </button>
            <button
              onClick={() => scrollToSection("cursos")}
              className="text-sm text-foreground hover:text-primary transition-smooth"
            >
              Cursos
            </button>
            <button
              onClick={() => scrollToSection("guia")}
              className="text-sm text-foreground hover:text-primary transition-smooth"
            >
              Guía Metodológica
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("quien-soy")}
                className="text-sm text-foreground hover:text-primary transition-smooth text-left"
              >
                Quién soy
              </button>
              <button
                onClick={() => scrollToSection("cursos")}
                className="text-sm text-foreground hover:text-primary transition-smooth text-left"
              >
                Cursos
              </button>
              <button
                onClick={() => scrollToSection("guia")}
                className="text-sm text-foreground hover:text-primary transition-smooth text-left"
              >
                Guía Metodológica
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
