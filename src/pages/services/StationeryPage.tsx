
import React from 'react';
import ServicePage from '@/components/services/ServicePage';
import { GlassCard } from '@/components/ui/glass-card';
import { ShoppingBag, Gift, Book, Pen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StationeryPage = () => {
  const items = [
    {
      name: 'Gift Package',
      description: 'Souvenirs, keepsakes, and local crafts',
      price: '$30',
      icon: Gift
    },
    {
      name: 'Reading Materials',
      description: 'Books, magazines, and newspapers',
      price: '$15',
      icon: Book
    },
    {
      name: 'Writing Supplies',
      description: 'Premium pens, notebooks, and stationery',
      price: '$12',
      icon: Pen
    }
  ];

  return (
    <ServicePage 
      title="Stationery Services" 
      description="Order gift items, books, and other convenience products delivered anywhere on the ship."
      icon={ShoppingBag}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Available Items</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
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
          <h3 className="text-xl font-semibold mb-4">Custom Orders</h3>
          <p className="text-gray-600 mb-4">
            Looking for something specific? Let us know and we'll find it for you.
          </p>
          <Button variant="outline" className="border-cruise-500 text-cruise-600 hover:bg-cruise-50">
            Make Custom Request
          </Button>
        </GlassCard>
      </div>
    </ServicePage>
  );
};

export default StationeryPage;
