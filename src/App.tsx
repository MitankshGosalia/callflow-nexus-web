import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import CustomerDashboard from "./pages/CustomerDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

import React from "react";

const queryClient = new QueryClient();

// Enhanced auth check
const isAuthenticated = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return !!user.authenticated;
  } catch (error) {
    return false;
  }
};

const getUserRole = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || 'employee';
  } catch (error) {
    return 'employee';
  }
};

// Protected Route component
const ProtectedRoute = ({ children, allowedRoles = ['admin', 'employee'] }) => {
  const isAuth = isAuthenticated();
  const userRole = getUserRole();
  const location = useLocation();
  
  React.useEffect(() => {
    console.log("Protected route check:", { isAuth, userRole, allowedRoles });
  }, [isAuth, userRole, allowedRoles]);
  
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
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
                
                {/* Customer routes */}
                <Route path="/customer/*" element={
                  <ProtectedRoute allowedRoles={['customer']}>
                    <Routes>
                      <Route path="dashboard" element={<CustomerDashboard />} />
                      <Route path="profile" element={<Profile />} />
                      <Route path="help" element={<Help />} />
                      <Route path="*" element={<Navigate to="/customer/dashboard" replace />} />
                    </Routes>
                  </ProtectedRoute>
                } />
                
                {/* Employee routes */}
                <Route path="/employee/*" element={
                  <ProtectedRoute allowedRoles={['employee', 'admin']}>
                    <Routes>
                      <Route path="dashboard" element={<EmployeeDashboard />} />
                      <Route path="calllog" element={<CallLog />} />
                      <Route path="ai-agent" element={<AIAgent />} />
                      <Route path="make-call" element={<MakeCall />} />
                      <Route path="profile" element={<Profile />} />
                      <Route path="resources" element={<Resources />} />
                      <Route path="help" element={<Help />} />
                      <Route path="*" element={<Navigate to="/employee/dashboard" replace />} />
                    </Routes>
                  </ProtectedRoute>
                } />
                
                {/* Redirect /dashboard to appropriate dashboard based on role */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    {({ user }) => {
                      if (user?.role === 'customer') {
                        return <Navigate to="/customer/dashboard" replace />;
                      }
                      return <Navigate to="/employee/dashboard" replace />;
                    }}
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
