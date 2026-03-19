import { mockCourseEnrollments, mockGuideOrders } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PaymentBadge from "@/components/admin/PaymentBadge";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CoursesPage = () => {
  const manic = mockCourseEnrollments.filter((e) => e.courseType === "manic00");
  const subida = mockCourseEnrollments.filter((e) => e.courseType === "subida");
  const recentGuides = mockGuideOrders.filter((o) => {
    const d = new Date(o.createdAt);
    const now = new Date("2025-03-19");
    return (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24) <= 30;
  });
  const guidesTotal = recentGuides.reduce((s, o) => s + o.amount, 0);

  return (
    <div className="space-y-8 max-w-3xl">
      <h2 className="text-2xl font-serif">Cursos</h2>

      {/* MANIC 0.0 */}
      <Card className="p-6 border-0 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-serif">MANIC 0.0</h3>
            <p className="text-sm text-muted-foreground">Próxima fecha: 15-17 abril 2025</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">Plazas: {manic.length}/4</p>
            <p className="text-sm text-muted-foreground">€749,99</p>
          </div>
        </div>

        <p className="text-sm font-semibold font-sans mb-2">Inscritas:</p>
        <div className="space-y-2 mb-4">
          {manic.map((e, i) => (
            <div key={e.id} className="flex items-center justify-between text-sm py-1.5 border-b border-border last:border-0">
              <span>{i + 1}. {e.studentName}</span>
              <div className="flex items-center gap-2">
                <span>€{e.amountPaid}</span>
                <PaymentBadge status={e.paymentStatus} pricePaid={e.amountPaid} priceReserved={e.price} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="bg-plum text-white hover:bg-plum-hover gap-1">
            <Plus className="w-3.5 h-3.5" /> Añadir alumna
          </Button>
          <Button size="sm" variant="outline">Editar fecha/plazas</Button>
        </div>
      </Card>

      {/* Subida */}
      <Card className="p-6 border-0 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-serif">Subida de Cualificación</h3>
            <p className="text-sm text-muted-foreground">Próxima fecha: 22 abril 2025</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">Plazas: {subida.length}/6</p>
            <p className="text-sm text-muted-foreground">€349,99</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {subida.map((e, i) => (
            <div key={e.id} className="flex items-center justify-between text-sm py-1.5">
              <span>{i + 1}. {e.studentName}</span>
              <div className="flex items-center gap-2">
                <span>€{e.amountPaid}</span>
                <PaymentBadge status={e.paymentStatus} />
              </div>
            </div>
          ))}
        </div>
        <Button size="sm" className="bg-plum text-white hover:bg-plum-hover gap-1">
          <Plus className="w-3.5 h-3.5" /> Añadir alumna
        </Button>
      </Card>

      {/* Guide Orders */}
      <Card className="p-6 border-0 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-serif">Pedidos Guía Metodológica</h3>
          <div className="text-right">
            <p className="text-sm font-semibold">{recentGuides.length} ventas</p>
            <p className="text-sm text-muted-foreground">€{guidesTotal.toFixed(2)}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mb-3">Últimos 30 días</p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Importe</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentGuides.slice(0, 5).map((o) => (
              <TableRow key={o.id}>
                <TableCell className="text-sm">{o.customerName}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{o.customerEmail}</TableCell>
                <TableCell className="text-sm">{o.createdAt.slice(5)}</TableCell>
                <TableCell className="text-sm">€{o.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default CoursesPage;
