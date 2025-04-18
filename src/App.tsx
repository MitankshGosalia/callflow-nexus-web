
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Public pages
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Protected pages
import Dashboard from "./pages/Dashboard";
import CallLog from "./pages/CallLog";
import Help from "./pages/Help";
import AIAgent from "./pages/AIAgent";
import MakeCall from "./pages/MakeCall";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";

import React from "react";

const queryClient = new QueryClient();

// Simple auth check - in a real app, this would be more sophisticated
const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return !!user;
};

const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return user.role || 'employee';
};

// Protected Route component
const ProtectedRoute = ({ children, allowedRoles = ['admin', 'employee'] }) => {
  const isAuth = isAuthenticated();
  const userRole = getUserRole();
  
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" />;
  }
  
  return children;
};

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
                {/* Public routes */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/features" element={<Features />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                
                {/* Protected routes - accessible by both admin and employee */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/calllog" element={
                  <ProtectedRoute>
                    <CallLog />
                  </ProtectedRoute>
                } />
                <Route path="/help" element={
                  <ProtectedRoute>
                    <Help />
                  </ProtectedRoute>
                } />
                <Route path="/ai-agent" element={
                  <ProtectedRoute>
                    <AIAgent />
                  </ProtectedRoute>
                } />
                <Route path="/make-call" element={
                  <ProtectedRoute>
                    <MakeCall />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                <Route path="/resources" element={
                  <ProtectedRoute>
                    <Resources />
                  </ProtectedRoute>
                } />
                
                {/* Catch all route */}
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
