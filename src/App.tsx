import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import UseCases from "./pages/UseCases";
import Products from "./pages/Products";
import ProductAICallCenter from "./pages/ProductAICallCenter";
import ProductVirtualAssistant from "./pages/ProductVirtualAssistant";
import ProductAnalyticsSuite from "./pages/ProductAnalyticsSuite";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import ResourcesVideos from "./pages/ResourcesVideos";
import ResourcesAPI from "./pages/ResourcesAPI";
import ResourcesCommunity from "./pages/ResourcesCommunity";
import Blog from "./pages/Blog";
import React from "react";

const queryClient = new QueryClient();

const App = () => {
  console.log("Rendering App component");
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/features" element={<Features />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/videos" element={<ResourcesVideos />} />
                <Route path="/resources/api" element={<ResourcesAPI />} />
                <Route path="/resources/community" element={<ResourcesCommunity />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/use-cases" element={<UseCases />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/ai-call-center" element={<ProductAICallCenter />} />
                <Route path="/products/virtual-assistant" element={<ProductVirtualAssistant />} />
                <Route path="/products/analytics-suite" element={<ProductAnalyticsSuite />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
