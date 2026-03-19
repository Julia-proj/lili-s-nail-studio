import { Card } from "@/components/ui/card";

interface StatsCardsProps {
  todayCitas: number;
  todayIngresos: number;
  weekCitas: number;
  weekIngresos: number;
  monthCitas: number;
  monthIngresos: number;
}

const StatsCards = ({ todayCitas, todayIngresos, weekCitas, weekIngresos, monthCitas, monthIngresos }: StatsCardsProps) => {
  const cards = [
    { label: "Hoy", citas: todayCitas, ingresos: todayIngresos },
    { label: "Semana", citas: weekCitas, ingresos: weekIngresos },
    { label: "Mes", citas: monthCitas, ingresos: monthIngresos },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((c) => (
        <Card key={c.label} className="p-4 text-center border-0 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.label}</p>
          <p className="text-2xl font-serif text-plum">{c.citas} <span className="text-sm font-sans text-muted-foreground">citas</span></p>
          <p className="text-lg font-semibold font-sans">€{c.ingresos.toLocaleString()}</p>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
