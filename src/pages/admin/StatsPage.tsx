import StatsCards from "@/components/admin/StatsCards";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const weekData = [
  { day: "Lun", ingresos: 190 },
  { day: "Mar", ingresos: 245 },
  { day: "Mié", ingresos: 175 },
  { day: "Jue", ingresos: 190 },
  { day: "Vie", ingresos: 310 },
  { day: "Sáb", ingresos: 120 },
  { day: "Dom", ingresos: 0 },
];

const popularServices = [
  { name: "Manicura combinada", count: 34, pct: 39 },
  { name: "Manicura + gel", count: 28, pct: 32 },
  { name: "Pedicura", count: 15, pct: 17 },
  { name: "Pedicura + diseño", count: 7, pct: 8 },
  { name: "Retirada de gel", count: 3, pct: 4 },
];

const StatsPage = () => {
  return (
    <div className="space-y-8 max-w-3xl">
      <h2 className="text-2xl font-serif">Estadísticas</h2>

      <StatsCards
        todayCitas={4}
        todayIngresos={190}
        weekCitas={22}
        weekIngresos={1045}
        monthCitas={87}
        monthIngresos={4120}
      />

      {/* Revenue Chart */}
      <Card className="p-6 border-0 shadow-sm">
        <h3 className="text-sm font-semibold font-sans mb-4">Ingresos de la semana</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weekData}>
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value: number) => [`€${value}`, "Ingresos"]}
                contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
              />
              <Bar dataKey="ingresos" fill="hsl(273, 25%, 53%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Popular Services */}
      <Card className="p-6 border-0 shadow-sm">
        <h3 className="text-sm font-semibold font-sans mb-4">Servicios más populares</h3>
        <div className="space-y-3">
          {popularServices.map((s, i) => (
            <div key={s.name} className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground w-5">{i + 1}.</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{s.name}</span>
                  <span className="text-xs text-muted-foreground">{s.count} citas ({s.pct}%)</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-plum rounded-full" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Client & Payment Stats */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Card className="p-6 border-0 shadow-sm">
          <h3 className="text-sm font-semibold font-sans mb-3">Clientes</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Nuevos este mes</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Recurrentes</span>
              <span className="font-semibold">31</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tasa de retorno</span>
              <span className="font-semibold text-plum">72%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-sm">
          <h3 className="text-sm font-semibold font-sans mb-3">Pagos</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Cobrado</span>
              <span className="font-semibold text-emerald-600">€3.850</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Pendiente</span>
              <span className="font-semibold text-amber-600">€270</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StatsPage;
