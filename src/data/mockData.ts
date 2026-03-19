// Mock data for admin dashboard

export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  notes: string;
  totalSpent: number;
  visitCount: number;
  firstVisit: string;
  lastVisit: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
  image: string | null;
  isActive: boolean;
  sortOrder: number;
}

export interface Booking {
  id: string;
  clientId: string;
  client: Client;
  serviceId: string;
  service: Service;
  date: string;
  time: string;
  duration: number;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  priceReserved: number;
  pricePaid: number | null;
  paymentStatus: "pending" | "paid" | "partial";
  note: string;
  source: "web" | "admin" | "instagram";
}

export interface CourseEnrollment {
  id: string;
  courseType: "manic00" | "subida";
  studentName: string;
  studentPhone: string;
  studentEmail: string;
  courseDate: string;
  price: number;
  amountPaid: number;
  paymentStatus: "pending" | "partial" | "paid";
  note: string;
}

export interface BlockedSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  isFullDay: boolean;
  reason: string;
}

export interface GuideOrder {
  id: string;
  customerEmail: string;
  customerName: string;
  amount: number;
  status: "completed" | "refunded";
  createdAt: string;
}

export interface WorkingHours {
  start: string;
  end: string;
  active: boolean;
}

export interface Settings {
  workingHours: Record<string, WorkingHours>;
  breakTime: { start: string; end: string };
  notificationEmail: string;
  emailOnNewBooking: boolean;
  emailDailySummary: boolean;
  theme: "light" | "dark" | "system";
}

// --- Mock Data ---

export const mockClients: Client[] = [
  { id: "c1", name: "María López", phone: "+34 612 345 678", email: "maria@email.com", notes: "Prefiere diseños minimalistas. Alergia al acetato.", totalSpent: 487, visitCount: 12, firstVisit: "2024-06-15", lastVisit: "2025-03-19" },
  { id: "c2", name: "Ana García", phone: "+34 655 123 456", email: "ana.g@email.com", notes: "", totalSpent: 320, visitCount: 8, firstVisit: "2024-09-01", lastVisit: "2025-03-18" },
  { id: "c3", name: "Olga Petrova", phone: "+34 611 987 654", email: null, notes: "Clienta nueva, viene por recomendación.", totalSpent: 105, visitCount: 3, firstVisit: "2025-02-10", lastVisit: "2025-03-15" },
  { id: "c4", name: "Sofia Ruiz", phone: "+34 633 456 789", email: "sofia.r@email.com", notes: "Quiere diseño floral", totalSpent: 650, visitCount: 15, firstVisit: "2024-03-20", lastVisit: "2025-03-19" },
  { id: "c5", name: "Laura Martínez", phone: "+34 644 555 111", email: "laura.m@email.com", notes: "", totalSpent: 210, visitCount: 5, firstVisit: "2024-11-05", lastVisit: "2025-03-10" },
];

export const mockServices: Service[] = [
  { id: "s1", name: "Manicura combinada", price: 35, duration: 45, description: "Manicura profesional con técnica combinada", image: "/images/Foto3.JPG", isActive: true, sortOrder: 1 },
  { id: "s2", name: "Manicura + gel", price: 55, duration: 75, description: "Manicura combinada con aplicación de gel", image: "/images/Foto4.JPG", isActive: true, sortOrder: 2 },
  { id: "s3", name: "Pedicura", price: 40, duration: 60, description: "Pedicura profesional completa", image: null, isActive: true, sortOrder: 3 },
  { id: "s4", name: "Pedicura + diseño", price: 65, duration: 90, description: "Pedicura con diseño personalizado", image: null, isActive: true, sortOrder: 4 },
  { id: "s5", name: "Retirada de gel", price: 15, duration: 30, description: "Retirada segura de gel o acrílico", image: null, isActive: true, sortOrder: 5 },
];

export const mockBookings: Booking[] = [
  { id: "b1", clientId: "c1", client: mockClients[0], serviceId: "s1", service: mockServices[0], date: "2025-03-19", time: "09:00", duration: 45, status: "completed", priceReserved: 35, pricePaid: 35, paymentStatus: "paid", note: "", source: "web" },
  { id: "b2", clientId: "c2", client: mockClients[1], serviceId: "s2", service: mockServices[1], date: "2025-03-19", time: "10:00", duration: 75, status: "confirmed", priceReserved: 55, pricePaid: null, paymentStatus: "pending", note: "", source: "admin" },
  { id: "b3", clientId: "c3", client: mockClients[2], serviceId: "s1", service: mockServices[0], date: "2025-03-19", time: "12:00", duration: 45, status: "pending", priceReserved: 35, pricePaid: null, paymentStatus: "pending", note: "", source: "web" },
  { id: "b4", clientId: "c4", client: mockClients[3], serviceId: "s4", service: mockServices[3], date: "2025-03-19", time: "15:00", duration: 90, status: "confirmed", priceReserved: 65, pricePaid: null, paymentStatus: "pending", note: "Quiere diseño floral", source: "instagram" },
  { id: "b5", clientId: "c5", client: mockClients[4], serviceId: "s1", service: mockServices[0], date: "2025-03-20", time: "09:30", duration: 45, status: "confirmed", priceReserved: 35, pricePaid: 35, paymentStatus: "paid", note: "", source: "web" },
  { id: "b6", clientId: "c1", client: mockClients[0], serviceId: "s2", service: mockServices[1], date: "2025-03-20", time: "11:00", duration: 75, status: "confirmed", priceReserved: 55, pricePaid: null, paymentStatus: "pending", note: "", source: "admin" },
  { id: "b7", clientId: "c2", client: mockClients[1], serviceId: "s3", service: mockServices[2], date: "2025-03-21", time: "10:00", duration: 60, status: "confirmed", priceReserved: 40, pricePaid: null, paymentStatus: "pending", note: "", source: "web" },
];

export const mockCourseEnrollments: CourseEnrollment[] = [
  { id: "ce1", courseType: "manic00", studentName: "Ana Ruiz", studentPhone: "+34 622 111 222", studentEmail: "ana.ruiz@email.com", courseDate: "2025-04-15", price: 749.99, amountPaid: 749.99, paymentStatus: "paid", note: "" },
  { id: "ce2", courseType: "manic00", studentName: "Laura M.", studentPhone: "+34 633 222 333", studentEmail: "laura.m@email.com", courseDate: "2025-04-15", price: 749.99, amountPaid: 200, paymentStatus: "partial", note: "Señal de €200" },
  { id: "ce3", courseType: "subida", studentName: "Carmen Vega", studentPhone: "+34 644 333 444", studentEmail: "carmen@email.com", courseDate: "2025-04-22", price: 349.99, amountPaid: 349.99, paymentStatus: "paid", note: "" },
];

export const mockGuideOrders: GuideOrder[] = [
  { id: "go1", customerEmail: "elena@email.com", customerName: "Elena Sánchez", amount: 27.99, status: "completed", createdAt: "2025-03-15" },
  { id: "go2", customerEmail: "rosa@email.com", customerName: "Rosa Díaz", amount: 27.99, status: "completed", createdAt: "2025-03-12" },
  { id: "go3", customerEmail: "paula@email.com", customerName: "Paula Fernández", amount: 27.99, status: "completed", createdAt: "2025-03-10" },
  { id: "go4", customerEmail: "marta@email.com", customerName: "Marta Ortiz", amount: 27.99, status: "completed", createdAt: "2025-03-08" },
  { id: "go5", customerEmail: "lucia@email.com", customerName: "Lucía Moreno", amount: 27.99, status: "completed", createdAt: "2025-03-05" },
  { id: "go6", customerEmail: "cristina@email.com", customerName: "Cristina Gil", amount: 27.99, status: "completed", createdAt: "2025-03-02" },
  { id: "go7", customerEmail: "isabel@email.com", customerName: "Isabel Torres", amount: 27.99, status: "completed", createdAt: "2025-02-28" },
  { id: "go8", customerEmail: "nuria@email.com", customerName: "Nuria Blanco", amount: 27.99, status: "completed", createdAt: "2025-02-25" },
];

export const mockBlockedSlots: BlockedSlot[] = [
  { id: "bs1", date: "2025-03-24", startTime: "09:00", endTime: "19:00", isFullDay: true, reason: "Vacaciones" },
  { id: "bs2", date: "2025-04-14", startTime: "09:00", endTime: "19:00", isFullDay: true, reason: "Semana Santa" },
  { id: "bs3", date: "2025-04-15", startTime: "09:00", endTime: "19:00", isFullDay: true, reason: "Semana Santa" },
  { id: "bs4", date: "2025-04-16", startTime: "09:00", endTime: "19:00", isFullDay: true, reason: "Semana Santa" },
  { id: "bs5", date: "2025-04-17", startTime: "09:00", endTime: "19:00", isFullDay: true, reason: "Semana Santa" },
  { id: "bs6", date: "2025-04-18", startTime: "09:00", endTime: "19:00", isFullDay: true, reason: "Semana Santa" },
];

export const mockSettings: Settings = {
  workingHours: {
    monday: { start: "09:00", end: "19:00", active: true },
    tuesday: { start: "09:00", end: "19:00", active: true },
    wednesday: { start: "09:00", end: "19:00", active: true },
    thursday: { start: "09:00", end: "19:00", active: true },
    friday: { start: "09:00", end: "19:00", active: true },
    saturday: { start: "10:00", end: "15:00", active: true },
    sunday: { start: "09:00", end: "19:00", active: false },
  },
  breakTime: { start: "13:00", end: "14:00" },
  notificationEmail: "lili@liilab.com",
  emailOnNewBooking: true,
  emailDailySummary: true,
  theme: "light",
};
