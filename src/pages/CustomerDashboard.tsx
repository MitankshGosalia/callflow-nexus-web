
import React from 'react';
import { DashboardNavBar } from '@/components/navigation/DashboardNavBar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const CustomerDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      }
      // Add role check here once role system is implemented
    };

    checkUser();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavBar />
      <main className="container pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">Customer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Call History Card */}
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Recent Calls</h3>
            <p className="text-muted-foreground">View your recent call history and interactions</p>
          </div>
          
          {/* Schedule Call Card */}
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Schedule Call</h3>
            <p className="text-muted-foreground">Schedule your next automated call</p>
          </div>
          
          {/* Account Settings Card */}
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
            <p className="text-muted-foreground">Manage your account preferences</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
