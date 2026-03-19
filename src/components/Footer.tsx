import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="text-lg font-serif font-semibold">Lii.lab</span>
            <span className="text-sm text-muted-foreground">
              © 2025 Lili · Formación en manicura
            </span>
          </div>
          <a
            href="https://www.instagram.com/lii.lab/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-plum transition-smooth"
          >
            <Instagram className="w-4 h-4" />
            Sígueme en Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
