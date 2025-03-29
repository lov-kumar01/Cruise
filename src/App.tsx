
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

// Service Pages
import CateringPage from "./pages/services/CateringPage";
import StationeryPage from "./pages/services/StationeryPage";
import MoviePage from "./pages/services/MoviePage";
import SalonPage from "./pages/services/SalonPage";
import FitnessPage from "./pages/services/FitnessPage";
import PartyHallPage from "./pages/services/PartyHallPage";

// Cruise Line Pages
import CruisesIndex from "./pages/CruisesIndex";
import RoyalCaribbeanPage from "./pages/cruises/RoyalCaribbean";
import CelebrityCruisesPage from "./pages/cruises/Celebrity";
import CarnivalCruisePage from "./pages/cruises/Carnival";
import NorwegianCruisePage from "./pages/cruises/Norwegian";
import DisneyCruisePage from "./pages/cruises/Disney";
import MSCCruisesPage from "./pages/cruises/MSC";
import PrincessCruisesPage from "./pages/cruises/Princess";
import HollandAmericaPage from "./pages/cruises/Holland";
import VirginVoyagesPage from "./pages/cruises/Virgin";
import LuxuryCruisesPage from "./pages/cruises/Luxury";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Cruise Line Routes */}
            <Route path="/cruises" element={<CruisesIndex />} />
            <Route path="/cruises/royal-caribbean" element={<RoyalCaribbeanPage />} />
            <Route path="/cruises/celebrity" element={<CelebrityCruisesPage />} />
            <Route path="/cruises/carnival" element={<CarnivalCruisePage />} />
            <Route path="/cruises/norwegian" element={<NorwegianCruisePage />} />
            <Route path="/cruises/disney" element={<DisneyCruisePage />} />
            <Route path="/cruises/msc" element={<MSCCruisesPage />} />
            <Route path="/cruises/princess" element={<PrincessCruisesPage />} />
            <Route path="/cruises/holland" element={<HollandAmericaPage />} />
            <Route path="/cruises/virgin" element={<VirginVoyagesPage />} />
            <Route path="/cruises/luxury" element={<LuxuryCruisesPage />} />
            
            {/* Service Routes - for backward compatibility */}
            <Route path="/services/:service" element={<Services />} />
            
            {/* Dedicated Service Pages */}
            <Route path="/services/catering" element={<CateringPage />} />
            <Route path="/services/stationery" element={<StationeryPage />} />
            <Route path="/services/movies" element={<MoviePage />} />
            <Route path="/services/salon" element={<SalonPage />} />
            <Route path="/services/fitness" element={<FitnessPage />} />
            <Route path="/services/partyhall" element={<PartyHallPage />} />
            
            {/* Admin routes - placeholders */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/items" element={<Dashboard />} />
            <Route path="/admin/voyagers" element={<Dashboard />} />
            <Route path="/admin/settings" element={<Dashboard />} />
            
            {/* Manager routes - placeholders */}
            <Route path="/manager" element={<Dashboard />} />
            <Route path="/manager/movies" element={<Dashboard />} />
            <Route path="/manager/salon" element={<Dashboard />} />
            <Route path="/manager/fitness" element={<Dashboard />} />
            <Route path="/manager/partyhall" element={<Dashboard />} />
            
            {/* Head Cook routes - placeholders */}
            <Route path="/kitchen" element={<Dashboard />} />
            <Route path="/kitchen/orders" element={<Dashboard />} />
            
            {/* Supervisor routes - placeholders */}
            <Route path="/supervisor" element={<Dashboard />} />
            <Route path="/supervisor/orders" element={<Dashboard />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
