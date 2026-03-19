import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookingPage from "./pages/BookingPage";
import AdminLayout from "./pages/admin/AdminLayout";
import CalendarPage from "./pages/admin/CalendarPage";
import BookingsPage from "./pages/admin/BookingsPage";
import ClientsPage from "./pages/admin/ClientsPage";
import ServicesPage from "./pages/admin/ServicesPage";
import CoursesPage from "./pages/admin/CoursesPage";
import StatsPage from "./pages/admin/StatsPage";
import SettingsPage from "./pages/admin/SettingsPage";
import LoginPage from "./pages/admin/LoginPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking/course" element={<BookingPage />} />

          {/* Admin */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<CalendarPage />} />
            <Route path="citas" element={<BookingsPage />} />
            <Route path="clientes" element={<ClientsPage />} />
            <Route path="servicios" element={<ServicesPage />} />
            <Route path="cursos" element={<CoursesPage />} />
            <Route path="estadisticas" element={<StatsPage />} />
            <Route path="ajustes" element={<SettingsPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
