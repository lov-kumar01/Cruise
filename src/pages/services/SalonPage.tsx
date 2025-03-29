
import React from 'react';
import ServicePage from '@/components/services/ServicePage';
import { GlassCard } from '@/components/ui/glass-card';
import { Scissors, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SalonPage = () => {
  const services = [
    {
      name: "Haircut & Styling",
      description: "Professional haircut and styling by our expert stylists",
      duration: "45 min",
      price: "$65"
    },
    {
      name: "Spa Treatment",
      description: "Relaxing spa experience with premium products",
      duration: "90 min",
      price: "$120"
    },
    {
      name: "Manicure & Pedicure",
      description: "Complete nail care with polish of your choice",
      duration: "60 min",
      price: "$80"
    },
    {
      name: "Facial Treatment",
      description: "Rejuvenating facial to nourish and refresh your skin",
      duration: "50 min",
      price: "$90"
    }
  ];

  return (
    <ServicePage 
      title="Beauty Salon" 
      description="Book appointments for hair styling, spa treatments, and more in our premium beauty salon."
      icon={Scissors}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Our Services</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <GlassCard key={index} className="p-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-gray-500">
                    <span>{service.duration}</span>
                  </div>
                  <div className="font-bold text-cruise-600">{service.price}</div>
                </div>
                <Button className="w-full mt-2 bg-cruise-600 hover:bg-cruise-700 text-white">
                  Book Appointment
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <GlassCard className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Special Packages</h3>
          <p className="text-gray-600 mb-4">
            Enjoy our curated packages for a complete pampering experience.
          </p>
          <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
            View Packages
          </Button>
        </GlassCard>
      </div>
    </ServicePage>
  );
};

export default SalonPage;
