import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AdminRoute } from "@/components/admin/AdminRoute";

// Public pages
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import ExportCapabilities from "./pages/ExportCapabilities";
import Certifications from "./pages/Certifications";
import Logistics from "./pages/Logistics";
import Documentation from "./pages/Documentation";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import Employees from "./pages/Employees";
import EmployeeProfile from "./pages/EmployeeProfile";

// Admin pages
import AdminLogin from "./pages/admin/Login";
import AdminSetup from "./pages/admin/Setup";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminSettings from "./pages/admin/Settings";
import AdminPages from "./pages/admin/Pages";
import AdminPageEditor from "./pages/admin/PageEditor";
import AdminNavigation from "./pages/admin/Navigation";
import AdminMedia from "./pages/admin/Media";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/export-capabilities" element={<ExportCapabilities />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/team/:id" element={<TeamMember />} />
            <Route path="/about/employees" element={<Employees />} />
            <Route path="/about/employees/:id" element={<EmployeeProfile />} />
            <Route path="/blog" element={<Blog />} />

            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/setup" element={<AdminSetup />} />
            <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
            <Route path="/admin/settings" element={<AdminRoute><AdminSettings /></AdminRoute>} />
            <Route path="/admin/pages" element={<AdminRoute><AdminPages /></AdminRoute>} />
            <Route path="/admin/pages/:slug" element={<AdminRoute><AdminPageEditor /></AdminRoute>} />
            <Route path="/admin/navigation" element={<AdminRoute><AdminNavigation /></AdminRoute>} />
            <Route path="/admin/media" element={<AdminRoute><AdminMedia /></AdminRoute>} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
