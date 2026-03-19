import { Booking } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PaymentBadge from "./PaymentBadge";
import { Pencil, X, Check } from "lucide-react";

interface BookingCardProps {
  booking: Booking;
  onEdit?: (booking: Booking) => void;
}

const BookingCard = ({ booking, onEdit }: BookingCardProps) => {
  const isPending = booking.status === "pending";

  return (
    <Card className={`p-4 border-l-4 transition-smooth hover:shadow-md ${
      booking.status === "completed" ? "border-l-plum bg-card" :
      booking.status === "cancelled" ? "border-l-muted line-through opacity-50" :
      isPending ? "border-l-rose-accent bg-rose-accent/5" :
      booking.paymentStatus === "paid" ? "border-l-emerald-500" :
      "border-l-gold"
    }`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold font-sans">{booking.time}</span>
            <span className="text-sm font-sans">—</span>
            <span className="text-sm font-semibold font-sans">{booking.client.name}</span>
            {isPending && (
              <span className="text-xs text-rose-accent font-medium">⚡ Nueva</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {booking.service.name} · {booking.duration}min · €{booking.priceReserved}
          </p>
          {booking.note && (
            <p className="text-xs text-muted-foreground mt-1">📝 {booking.note}</p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <PaymentBadge
            status={booking.paymentStatus}
            pricePaid={booking.pricePaid}
            priceReserved={booking.priceReserved}
          />
          {isPending ? (
            <div className="flex gap-1">
              <Button size="icon" variant="ghost" className="h-7 w-7 text-emerald-600">
                <Check className="w-3.5 h-3.5" />
              </Button>
              <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive">
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>
          ) : (
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7"
              onClick={() => onEdit?.(booking)}
            >
              <Pencil className="w-3.5 h-3.5" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
