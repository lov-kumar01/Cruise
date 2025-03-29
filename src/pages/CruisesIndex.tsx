
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';

const cruiseLines = [
  { name: 'Royal Caribbean International', path: '/cruises/royal-caribbean', description: 'Adventure and innovation for families and thrill-seekers' },
  { name: 'Celebrity Cruises', path: '/cruises/celebrity', description: 'Modern luxury and premium experiences' },
  { name: 'Carnival Cruise Line', path: '/cruises/carnival', description: 'Fun, affordable vacations for families and friends' },
  { name: 'Norwegian Cruise Line (NCL)', path: '/cruises/norwegian', description: 'Freestyle cruising with freedom and flexibility' },
  { name: 'Disney Cruise Line', path: '/cruises/disney', description: 'Magical family experiences with Disney characters' },
  { name: 'MSC Cruises', path: '/cruises/msc', description: 'European elegance and modern amenities' },
  { name: 'Princess Cruises', path: '/cruises/princess', description: 'Destination-focused journeys with premium service' },
  { name: 'Holland America Line', path: '/cruises/holland', description: 'Classic cruising with refined experiences' },
  { name: 'Virgin Voyages', path: '/cruises/virgin', description: 'Adults-only, rebellious luxury with bold design' },
  { name: 'Luxury Cruise Lines', path: '/cruises/luxury', description: 'Ultimate luxury cruise experiences' },
];

const CruisesIndex = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Explore Cruise Lines</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the perfect cruise line for your next adventure. From family-friendly fun to luxury getaways, find your ideal voyage.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cruiseLines.map((cruiseLine, index) => (
            <GlassCard key={index} hoverable className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{cruiseLine.name}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{cruiseLine.description}</p>
              <Button asChild className="mt-auto self-start">
                <Link to={cruiseLine.path}>
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which Cruise Line to Choose?</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our cruise experts can help you find the perfect match based on your preferences, budget, and desired experience.
          </p>
          <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
            Contact a Cruise Expert
          </Button>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default CruisesIndex;
