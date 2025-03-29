
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, path, className }: ServiceCardProps) => {
  const navigate = useNavigate();
  
  return (
    <GlassCard
      hoverable
      className={cn(
        'p-6 flex flex-col items-center text-center space-y-4 h-full',
        className
      )}
    >
      <div className="rounded-full bg-cruise-50 p-4 text-cruise-600">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-semibold">{title}</h3>
      
      <p className="text-gray-600 flex-grow text-sm">{description}</p>
      
      <Button 
        onClick={() => navigate(path)}
        className="mt-4 w-full transition-all duration-300 bg-cruise-600 hover:bg-cruise-700 text-white"
      >
        Access Service
      </Button>
    </GlassCard>
  );
};

export default ServiceCard;
