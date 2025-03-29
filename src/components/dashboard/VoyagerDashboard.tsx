
import React from 'react';
import ServiceCard from '@/components/services/ServiceCard';
import { GlassCard } from '@/components/ui/glass-card';
import { Utensils, ShoppingBag, Film, Scissors, Dumbbell, Beer } from 'lucide-react';

const services = [
  {
    title: 'Catering',
    description: 'Order delicious meals, snacks, and beverages for your voyage',
    icon: Utensils,
    path: '/services/catering'
  },
  {
    title: 'Stationery',
    description: 'Order gift items, books, and other convenience products',
    icon: ShoppingBag,
    path: '/services/stationery'
  },
  {
    title: 'Resort Movies',
    description: 'Book tickets for the latest movies in our luxurious theater',
    icon: Film,
    path: '/services/movies'
  },
  {
    title: 'Beauty Salon',
    description: 'Book appointments for hair styling, spa treatments, and more',
    icon: Scissors,
    path: '/services/salon'
  },
  {
    title: 'Fitness Center',
    description: 'Reserve training equipment and schedule your gym sessions',
    icon: Dumbbell,
    path: '/services/fitness'
  },
  {
    title: 'Party Hall',
    description: 'Book venues for your celebrations and special events',
    icon: Beer,
    path: '/services/partyhall'
  }
];

const VoyagerDashboard = () => {
  return (
    <div className="container px-4 mx-auto py-8 space-y-12">
      <header className="space-y-4 text-center">
        <h1 className="text-gradient">
          Welcome Aboard
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enjoy premium services and amenities during your voyage.
          Simply select from our range of offerings below.
        </p>
      </header>
      
      <GlassCard className="p-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div>
            <h4 className="font-semibold">Voyager Information</h4>
            <p className="text-gray-600">Cabin: A-123 • Deck: 4 • Status: Active</p>
          </div>
          <div className="flex space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Voyage</p>
              <p className="font-semibold">Caribbean Odyssey</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Days Remaining</p>
              <p className="font-semibold">6 Days</p>
            </div>
          </div>
        </div>
      </GlassCard>
      
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              path={service.path}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default VoyagerDashboard;
