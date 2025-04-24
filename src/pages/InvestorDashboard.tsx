
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import BackNav from "@/components/BackNav";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const InvestorDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in and is an investor
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (!user || !user.category || user.category !== 'Investor') {
      toast({
        title: "Access Denied",
        description: "You must be logged in as an investor to view this page.",
        variant: "destructive",
      });
      navigate('/login');
    }
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex flex-col bg-urban-green-50">
      <Navbar />
      <BackNav />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-urban-green-800 mb-6">Investor Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">My Properties</h2>
            <p className="text-gray-600">View and manage your registered properties</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Document Review</h2>
            <p className="text-gray-600">Review and manage property documents</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvestorDashboard;
