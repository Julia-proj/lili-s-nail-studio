import { Badge } from "@/components/ui/badge";

interface PaymentBadgeProps {
  status: "pending" | "paid" | "partial";
  pricePaid?: number | null;
  priceReserved?: number;
}

const PaymentBadge = ({ status, pricePaid, priceReserved }: PaymentBadgeProps) => {
  if (status === "paid") {
    return (
      <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">
        ✓ Pagado
      </Badge>
    );
  }
  if (status === "partial") {
    return (
      <Badge className="bg-amber-100 text-amber-700 border-0 text-xs">
        Parcial {pricePaid != null && priceReserved ? `€${pricePaid}/${priceReserved}` : ""}
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="text-muted-foreground text-xs">
      ◻ Pendiente
    </Badge>
  );
};

export default PaymentBadge;
