import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import DocumentReview from "./pages/DocumentReview";
import ReviewDetail from "./pages/ReviewDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import InvestorDashboard from "./pages/InvestorDashboard";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isLoggedIn = Boolean(user && user.email);
    setAuthenticated(isLoggedIn);
    setUserRole(user.category || '');
    setLoading(false);
  }, []);
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/properties" 
              element={
                <ProtectedRoute>
                  <Properties />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/document-review" 
              element={
                <ProtectedRoute>
                  <DocumentReview />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/review/:id" 
              element={
                <ProtectedRoute>
                  <ReviewDetail />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/investor-dashboard" 
              element={
                <ProtectedRoute requiredRole="Investor">
                  <InvestorDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
