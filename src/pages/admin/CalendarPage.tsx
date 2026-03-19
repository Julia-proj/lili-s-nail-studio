import { useState } from "react";
import { mockBookings, mockBlockedSlots } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingCard from "@/components/admin/BookingCard";
import { ChevronLeft, ChevronRight, Plus, Lock } from "lucide-react";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState("2025-03-19");

  const todayBookings = mockBookings
    .filter((b) => b.date === selectedDate)
    .sort((a, b) => a.time.localeCompare(b.time));

  const totalExpected = todayBookings.reduce((s, b) => s + b.priceReserved, 0);
  const totalPaid = todayBookings.reduce((s, b) => s + (b.pricePaid || 0), 0);
  const pendingCount = todayBookings.filter((b) => b.status === "pending").length;

  // Generate week days
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date("2025-03-17");
    d.setDate(d.getDate() + i);
    const dateStr = d.toISOString().split("T")[0];
    const count = mockBookings.filter((b) => b.date === dateStr).length;
    return { date: dateStr, label: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"][i], day: d.getDate(), count };
  });

  const dateObj = new Date(selectedDate + "T12:00:00");
  const dateLabel = dateObj.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });

  // Time slots
  const timeSlots = [];
  for (let h = 9; h < 19; h++) {
    for (let m = 0; m < 60; m += 30) {
      timeSlots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Notification bar */}
      {pendingCount > 0 && (
        <Card className="p-3 border-rose-accent/30 bg-rose-accent/5 flex items-center justify-between">
          <span className="text-sm">
            🔔 <strong>{pendingCount}</strong> nueva{pendingCount > 1 ? "s" : ""} cita{pendingCount > 1 ? "s" : ""} pendiente{pendingCount > 1 ? "s" : ""}
          </span>
          <Button variant="link" size="sm" className="text-plum">Ver todas</Button>
        </Card>
      )}

      {/* Date header */}
      <div>
        <h2 className="text-2xl font-serif capitalize">{dateLabel}</h2>
      </div>

      {/* Day timeline */}
      <div className="space-y-3">
        {todayBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}

        {/* Free slots indicator */}
        <button className="w-full py-3 border-2 border-dashed border-border rounded-lg text-sm text-muted-foreground hover:border-plum hover:text-plum transition-smooth flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Añadir cita
        </button>

        {/* Break */}
        <div className="py-2 px-4 bg-muted rounded-lg text-sm text-muted-foreground text-center">
          🍽 13:00 – 14:00 · PAUSA
        </div>

        {/* Blocked */}
        {mockBlockedSlots.filter(s => s.date === selectedDate).map(s => (
          <div key={s.id} className="py-2 px-4 bg-destructive/10 rounded-lg text-sm text-destructive text-center">
            🚫 {s.startTime} – {s.endTime} · BLOQUEADO — {s.reason}
          </div>
        ))}
      </div>

      {/* Day summary */}
      <Card className="p-4 border-0 shadow-sm">
        <p className="text-sm text-muted-foreground mb-1">Resumen del día</p>
        <p className="text-sm">
          <strong>{todayBookings.length}</strong> citas · Ingresos esperados: <strong>€{totalExpected}</strong>
        </p>
        <p className="text-sm">
          Pagado: <span className="text-emerald-600">€{totalPaid}</span> · Pendiente: <span className="text-amber-600">€{totalExpected - totalPaid}</span>
        </p>
      </Card>

      {/* Week calendar */}
      <Card className="p-4 border-0 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon"><ChevronLeft className="w-4 h-4" /></Button>
          <span className="text-sm font-semibold font-sans">Calendario semanal</span>
          <Button variant="ghost" size="icon"><ChevronRight className="w-4 h-4" /></Button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {weekDays.map((d) => (
            <button
              key={d.date}
              onClick={() => setSelectedDate(d.date)}
              className={`py-2 rounded-lg text-sm transition-smooth ${
                d.date === selectedDate
                  ? "bg-plum text-white"
                  : "hover:bg-accent"
              }`}
            >
              <p className="text-xs text-inherit opacity-70">{d.label}</p>
              <p className="font-semibold">{d.day}</p>
              {d.count > 0 && <p className="text-xs">{d.count}</p>}
            </button>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <Button size="sm" className="bg-plum text-white hover:bg-plum-hover gap-1">
            <Plus className="w-3.5 h-3.5" /> Nueva cita
          </Button>
          <Button size="sm" variant="outline" className="gap-1">
            <Lock className="w-3.5 h-3.5" /> Bloquear horario
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CalendarPage;
