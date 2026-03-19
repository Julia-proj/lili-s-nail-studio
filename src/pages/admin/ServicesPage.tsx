import { useState } from "react";
import { mockServices, type Service } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ServicesPage = () => {
  const [services] = useState<Service[]>(mockServices);
  const [editService, setEditService] = useState<Service | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openEdit = (s: Service) => {
    setEditService(s);
    setDialogOpen(true);
  };

  const openNew = () => {
    setEditService({
      id: "",
      name: "",
      price: 0,
      duration: 30,
      description: "",
      image: null,
      isActive: true,
      sortOrder: services.length + 1,
    });
    setDialogOpen(true);
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif">Servicios</h2>
        <Button onClick={openNew} className="bg-plum text-white hover:bg-plum-hover gap-1">
          <Plus className="w-4 h-4" /> Nuevo servicio
        </Button>
      </div>

      <div className="space-y-2">
        {services.map((s) => (
          <Card key={s.id} className={`p-4 flex items-center gap-4 transition-smooth ${!s.isActive ? "opacity-50" : ""}`}>
            <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab shrink-0" />

            {s.image && (
              <img src={s.image} alt={s.name} className="w-12 h-12 rounded-md object-cover shrink-0" />
            )}

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold font-sans">{s.name}</p>
              <p className="text-xs text-muted-foreground">
                €{s.price} · {s.duration} min
              </p>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => openEdit(s)}>
                <Pencil className="w-3.5 h-3.5" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive">
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Edit/Create Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-serif">
              {editService?.id ? "Editar servicio" : "Nuevo servicio"}
            </DialogTitle>
          </DialogHeader>

          {editService && (
            <div className="space-y-4 mt-2">
              <div>
                <Label>Nombre</Label>
                <Input value={editService.name} onChange={() => {}} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Precio (€)</Label>
                  <Input type="number" value={editService.price} onChange={() => {}} />
                </div>
                <div>
                  <Label>Duración (min)</Label>
                  <Input type="number" value={editService.duration} onChange={() => {}} />
                </div>
              </div>
              <div>
                <Label>Descripción</Label>
                <Textarea value={editService.description} onChange={() => {}} />
              </div>
              <div className="flex items-center justify-between">
                <Label>Activo</Label>
                <Switch checked={editService.isActive} />
              </div>
              <Button className="w-full bg-plum text-white hover:bg-plum-hover">
                Guardar cambios
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesPage;
