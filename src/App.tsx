// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // Change BrowserRouter to HashRouter
import Index from "./pages/Index";
import WordDetail from "./pages/WordDetail";
import Browse from "./pages/Browse";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          {" "}
          {/* Changed from BrowserRouter, removed basename */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/word/:wordId" element={<WordDetail />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
