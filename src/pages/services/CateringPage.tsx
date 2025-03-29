
import React from 'react';
import ServicePage from '@/components/services/ServicePage';
import { GlassCard } from '@/components/ui/glass-card';
import { Utensils, Coffee, Pizza, Cake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CateringPage = () => {
  const foodItems = [
    {
      name: 'Breakfast Package',
      description: 'Continental breakfast with pastries, fruits, and coffee',
      price: '$25',
      icon: Coffee
    },
    {
      name: 'Lunch Package',
      description: 'Gourmet sandwiches, salad, and refreshments',
      price: '$35',
      icon: Pizza
    },
    {
      name: 'Dessert Package',
      description: 'Assortment of cakes, cookies, and ice cream',
      price: '$20',
      icon: Cake
    }
  ];

  return (
    <ServicePage 
      title="Catering Services" 
      description="Order delicious meals, snacks, and beverages delivered directly to your cabin or any location on the ship."
      icon={Utensils}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Available Packages</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {foodItems.map((item, index) => (
            <GlassCard key={index} className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-cruise-50 p-3 text-cruise-600">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
              <p className="font-bold text-cruise-600">{item.price}</p>
              <Button className="w-full bg-cruise-600 hover:bg-cruise-700 text-white">
                Order Now
              </Button>
            </GlassCard>
          ))}
        </div>
        
        <GlassCard className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Special Requests</h3>
          <p className="text-gray-600 mb-4">
            Have dietary restrictions or special requests? Our chefs will accommodate your needs.
          </p>
          <Button variant="outline" className="border-cruise-500 text-cruise-600 hover:bg-cruise-50">
            Make Special Request
          </Button>
        </GlassCard>
      </div>
    </ServicePage>
  );
};

export default CateringPage;
