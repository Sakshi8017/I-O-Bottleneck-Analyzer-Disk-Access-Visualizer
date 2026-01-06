import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Concepts from "./pages/Concepts";
import Architecture from "./pages/Architecture";
import DSAMapping from "./pages/DSAMapping";
import Visualizer from "./pages/Visualizer";
import Commands from "./pages/Commands";
import Conclusion from "./pages/Conclusion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/dsa-mapping" element={<DSAMapping />} />
            <Route path="/visualizer" element={<Visualizer />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
