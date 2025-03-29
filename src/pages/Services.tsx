
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Utensils, ShoppingBag, Film, Scissors, Dumbbell, Beer, ArrowLeft } from 'lucide-react';

// Placeholder component for service pages
const ServicePlaceholder = ({ title, icon: Icon }: { title: string; icon: React.ElementType }) => {
  const navigate = useNavigate();
  
  return (
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
          Access and manage your {title.toLowerCase()} services with ease.
        </p>
      </header>
      
      <GlassCard className="p-8 text-center">
        <h3 className="text-xl mb-4">Service Coming Soon</h3>
        <p className="text-gray-600">
          This service is being prepared for your voyage. Please check back shortly.
        </p>
      </GlassCard>
    </div>
  );
};

const Services = () => {
  const { service } = useParams();
  
  // Map service to title and icon
  const getServiceInfo = () => {
    switch (service) {
      case 'catering':
        return { title: 'Catering Services', icon: Utensils };
      case 'stationery':
        return { title: 'Stationery Services', icon: ShoppingBag };
      case 'movies':
        return { title: 'Movie Tickets', icon: Film };
      case 'salon':
        return { title: 'Beauty Salon', icon: Scissors };
      case 'fitness':
        return { title: 'Fitness Center', icon: Dumbbell };
      case 'partyhall':
        return { title: 'Party Hall Booking', icon: Beer };
      default:
        return { title: 'Ship Services', icon: Utensils };
    }
  };
  
  const { title, icon } = getServiceInfo();
  
  return (
    <AppLayout userRole="voyager">
      <ServicePlaceholder title={title} icon={icon} />
    </AppLayout>
  );
};

export default Services;
