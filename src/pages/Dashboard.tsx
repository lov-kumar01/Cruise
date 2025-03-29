
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import VoyagerDashboard from '@/components/dashboard/VoyagerDashboard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <AppLayout userRole="voyager">
      <div className="container px-4 mx-auto py-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/')}
          className="mb-4 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Button>
        <VoyagerDashboard />
      </div>
    </AppLayout>
  );
};

export default Dashboard;
