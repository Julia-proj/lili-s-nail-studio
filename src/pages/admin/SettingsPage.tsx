import { useState } from "react";
import { mockSettings, mockBlockedSlots } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { X, Plus, Sun, Moon, Monitor } from "lucide-react";

const dayLabels: Record<string, string> = {
  monday: "Lunes",
  tuesday: "Martes",
  wednesday: "Miércoles",
  thursday: "Jueves",
  friday: "Viernes",
  saturday: "Sábado",
  sunday: "Domingo",
};

const SettingsPage = () => {
  const [settings] = useState(mockSettings);
  const [blocked] = useState(mockBlockedSlots);

  return (
    <div className="space-y-8 max-w-2xl">
      <h2 className="text-2xl font-serif">Ajustes</h2>

      {/* Working Hours */}
      <Card className="p-6 border-0 shadow-sm">
        <h3 className="text-sm font-semibold font-sans mb-4">Horario de trabajo</h3>
        <div className="space-y-3">
          {Object.entries(settings.workingHours).map(([key, val]) => (
            <div key={key} className="flex items-center gap-3">
              <span className="text-sm w-24">{dayLabels[key]}</span>
              {val.active ? (
                <>
                  <Input value={val.start} className="w-20 text-sm text-center" readOnly />
                  <span className="text-muted-foreground">–</span>
                  <Input value={val.end} className="w-20 text-sm text-center" readOnly />
                </>
              ) : (
                <span className="text-sm text-muted-foreground">Cerrado</span>
              )}
              <Switch checked={val.active} className="ml-auto" />
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">Pausa:</p>
          <div className="flex items-center gap-3">
            <Input value={settings.breakTime.start} className="w-20 text-sm text-center" readOnly />
            <span className="text-muted-foreground">–</span>
            <Input value={settings.breakTime.end} className="w-20 text-sm text-center" readOnly />
          </div>
        </div>
      </Card>

      {/* Blocked Dates */}
      <Card className="p-6 border-0 shadow-sm">
        <h3 className="text-sm font-semibold font-sans mb-4">Bloquear fechas</h3>
        <div className="space-y-2 mb-4">
          {blocked.map((b) => (
            <div key={b.id} className="flex items-center justify-between text-sm py-2 border-b border-border last:border-0">
              <span>📅 {b.date} ({b.reason})</span>
              <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive">
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>
          ))}
        </div>
        <Button size="sm" variant="outline" className="gap-1">
          <Plus className="w-3.5 h-3.5" /> Bloquear fecha o rango
        </Button>
      </Card>

      {/* Notifications */}
      <Card className="p-6 border-0 shadow-sm">
        <h3 className="text-sm font-semibold font-sans mb-4">Notificaciones</h3>
        <div className="space-y-4">
          <div>
            <Label className="text-sm">Email para notificaciones</Label>
            <Input value={settings.notificationEmail} className="mt-1" readOnly />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-sm">Recibir email con cada nueva reserva</Label>
            <Switch checked={settings.emailOnNewBooking} />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-sm">Resumen diario (8:00)</Label>
            <Switch checked={settings.emailDailySummary} />
          </div>
        </div>
      </Card>

      {/* Theme */}
      <Card className="p-6 border-0 shadow-sm">
        <h3 className="text-sm font-semibold font-sans mb-4">Apariencia</h3>
        <div className="flex gap-2">
          <Button
            variant={settings.theme === "light" ? "default" : "outline"}
            size="sm"
            className={settings.theme === "light" ? "bg-plum text-white" : ""}
          >
            <Sun className="w-3.5 h-3.5 mr-1" /> Claro
          </Button>
          <Button
            variant={settings.theme === "dark" ? "default" : "outline"}
            size="sm"
          >
            <Moon className="w-3.5 h-3.5 mr-1" /> Oscuro
          </Button>
          <Button
            variant={settings.theme === "system" ? "default" : "outline"}
            size="sm"
          >
            <Monitor className="w-3.5 h-3.5 mr-1" /> Sistema
          </Button>
        </div>
      </Card>

      <Button className="bg-plum text-white hover:bg-plum-hover">Guardar cambios</Button>
    </div>
  );
};

export default SettingsPage;
