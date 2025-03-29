
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, Anchor, Calendar } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const RoyalCaribbeanPage = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Royal Caribbean International</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience adventure on the high seas with Royal Caribbean's innovative ships, world-class entertainment, and exotic destinations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Featured Ships</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Anchor size={16} className="text-cruise-600" />
                <span>Wonder of the Seas</span>
              </li>
              <li className="flex items-center gap-2">
                <Anchor size={16} className="text-cruise-600" />
                <span>Symphony of the Seas</span>
              </li>
              <li className="flex items-center gap-2">
                <Anchor size={16} className="text-cruise-600" />
                <span>Harmony of the Seas</span>
              </li>
            </ul>
            <Button className="w-full">Explore Ships</Button>
          </GlassCard>

          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Popular Destinations</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Calendar size={16} className="text-cruise-600" />
                <span>Caribbean Islands</span>
              </li>
              <li className="flex items-center gap-2">
                <Calendar size={16} className="text-cruise-600" />
                <span>Mediterranean</span>
              </li>
              <li className="flex items-center gap-2">
                <Calendar size={16} className="text-cruise-600" />
                <span>Alaska</span>
              </li>
            </ul>
            <Button className="w-full">View Itineraries</Button>
          </GlassCard>
          
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Exclusive Amenities</h3>
            <p className="text-gray-600 mb-4">
              Enjoy FlowRider surf simulators, rock climbing walls, ice skating rinks, and the Ultimate Abyss slide.
            </p>
            <Button className="w-full">Learn More</Button>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Book Your Royal Caribbean Adventure</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Ready for the vacation of a lifetime? Browse available cruises and secure your spot on board.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              View Cruise Deals
            </Button>
            <Button variant="outline" className="border-cruise-200 text-cruise-700">
              Contact a Cruise Expert
            </Button>
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default RoyalCaribbeanPage;
