
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServicePageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children?: React.ReactNode;
}

const ServicePage = ({ title, description, icon: Icon, children }: ServicePageProps) => {
  const navigate = useNavigate();
  
  return (
    <AppLayout userRole="voyager">
      <div className="container px-4 mx-auto py-8 space-y-8 max-w-4xl">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/dashboard')}
          className="mb-4 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Dashboard
        </Button>
        
        <header className="text-center space-y-4">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600">
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient">{title}</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            {description}
          </p>
        </header>
        
        {children || (
          <GlassCard className="p-8 text-center">
            <h3 className="text-xl mb-4">Service Coming Soon</h3>
            <p className="text-gray-600">
              This service is being prepared for your voyage. Please check back shortly.
            </p>
          </GlassCard>
        )}
      </div>
    </AppLayout>
  );
};

export default ServicePage;
