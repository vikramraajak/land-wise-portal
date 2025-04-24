
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectToLogin = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (!user || !user.email) {
      // Not logged in, redirect to login page
      navigate('/login');
    } else if (user.category === 'Investor') {
      // Investor, redirect to investor dashboard
      navigate('/investor-dashboard');
    } else {
      // Farmer or other, redirect to home
      navigate('/');
    }
  }, [navigate]);
  
  // Display loading while redirecting
  return (
    <div className="flex items-center justify-center h-screen">
      <p>Redirecting...</p>
    </div>
  );
};

export default RedirectToLogin;
