import { useState } from "react";
import { mockClients, mockBookings } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Plus, Search, Phone, Mail, Calendar } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const ClientsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

  const filtered = mockClients.filter((c) =>
    search
      ? c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.phone.includes(search)
      : true
  );

  const selectedClient = mockClients.find((c) => c.id === selectedClientId);
  const clientHistory = selectedClient
    ? mockBookings.filter((b) => b.clientId === selectedClient.id).slice(0, 10)
    : [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif">Clientes ({mockClients.length})</h2>
        <Button className="bg-plum text-white hover:bg-plum-hover gap-1">
          <Plus className="w-4 h-4" /> Nuevo cliente
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre o teléfono..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Teléfono</TableHead>
              <TableHead className="hidden sm:table-cell">Visitas</TableHead>
              <TableHead className="hidden sm:table-cell">Último</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((c) => (
              <TableRow
                key={c.id}
                className="cursor-pointer hover:bg-accent/50"
                onClick={() => setSelectedClientId(c.id)}
              >
                <TableCell className="font-medium text-sm">{c.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{c.phone}</TableCell>
                <TableCell className="hidden sm:table-cell text-sm">{c.visitCount}</TableCell>
                <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">
                  {c.lastVisit.slice(5)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Client Detail Sheet */}
      <Sheet open={!!selectedClientId} onOpenChange={() => setSelectedClientId(null)}>
        <SheetContent className="overflow-y-auto">
          {selectedClient && (
            <>
              <SheetHeader>
                <SheetTitle className="font-serif">{selectedClient.name}</SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    {selectedClient.phone}
                  </div>
                  {selectedClient.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      {selectedClient.email}
                    </div>
                  )}
                </div>

                {selectedClient.notes && (
                  <Card className="p-3 bg-muted/50 border-0">
                    <p className="text-xs text-muted-foreground mb-1">📝 Notas:</p>
                    <p className="text-sm">{selectedClient.notes}</p>
                  </Card>
                )}

                <div>
                  <h4 className="text-sm font-semibold mb-3 font-sans">Historial</h4>
                  <div className="space-y-2">
                    {clientHistory.map((b) => (
                      <div key={b.id} className="flex items-center justify-between text-sm py-1.5 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{b.date.slice(5)}</span>
                        <span>{b.service.name}</span>
                        <span className={b.paymentStatus === "paid" ? "text-emerald-600" : "text-amber-600"}>
                          €{b.priceReserved} {b.paymentStatus === "paid" ? "✓" : "◻"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="p-3 bg-muted/50 border-0">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Total gastado</p>
                      <p className="font-semibold">€{selectedClient.totalSpent}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Visitas</p>
                      <p className="font-semibold">{selectedClient.visitCount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Cliente desde</p>
                      <p className="font-semibold">{selectedClient.firstVisit}</p>
                    </div>
                  </div>
                </Card>

                <Button className="w-full bg-plum text-white hover:bg-plum-hover gap-1">
                  <Calendar className="w-4 h-4" /> Nueva cita
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ClientsPage;
