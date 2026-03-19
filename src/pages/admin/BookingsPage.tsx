import { useState } from "react";
import { mockBookings } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import PaymentBadge from "@/components/admin/PaymentBadge";
import { Plus, Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const statusLabels: Record<string, string> = {
  pending: "Pendiente",
  confirmed: "Confirmada",
  completed: "Completada",
  cancelled: "Cancelada",
};

const statusColors: Record<string, string> = {
  pending: "bg-rose-accent/20 text-rose-accent",
  confirmed: "bg-plum/20 text-plum",
  completed: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-muted text-muted-foreground",
};

const BookingsPage = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = mockBookings.filter((b) => {
    if (filter === "today") return b.date === "2025-03-19";
    if (filter === "tomorrow") return b.date === "2025-03-20";
    if (filter === "pending_payment") return b.paymentStatus === "pending";
    if (filter === "pending_confirm") return b.status === "pending";
    return true;
  }).filter((b) =>
    search ? b.client.name.toLowerCase().includes(search.toLowerCase()) : true
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif">Citas</h2>
        <Button className="bg-plum text-white hover:bg-plum-hover gap-1">
          <Plus className="w-4 h-4" /> Nueva cita
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { key: "all", label: "Todas" },
          { key: "today", label: "Hoy" },
          { key: "tomorrow", label: "Mañana" },
          { key: "pending_payment", label: "Pendientes de pago" },
          { key: "pending_confirm", label: "Sin confirmar" },
        ].map((f) => (
          <Button
            key={f.key}
            size="sm"
            variant={filter === f.key ? "default" : "outline"}
            onClick={() => setFilter(f.key)}
            className={filter === f.key ? "bg-plum text-white hover:bg-plum-hover" : ""}
          >
            {f.label}
          </Button>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead>Hora</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Servicio</TableHead>
              <TableHead>Pago</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((b) => (
              <TableRow key={b.id} className="cursor-pointer hover:bg-accent/50">
                <TableCell className="text-sm">{b.date.slice(5)}</TableCell>
                <TableCell className="text-sm font-medium">{b.time}</TableCell>
                <TableCell className="text-sm">{b.client.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{b.service.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">€{b.priceReserved}</span>
                    <PaymentBadge status={b.paymentStatus} />
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={`${statusColors[b.status]} border-0 text-xs`}>
                    {statusLabels[b.status]}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookingsPage;
