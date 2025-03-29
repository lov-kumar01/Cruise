
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, Ticket, Palmtree } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const CarnivalCruisePage = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Carnival Cruise Line</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fun for all ages with Carnival's "Fun Ships" offering exciting activities, entertainment, and affordable family vacations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Popular Ships</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Ticket size={16} className="text-cruise-600" />
                <span>Carnival Celebration</span>
              </li>
              <li className="flex items-center gap-2">
                <Ticket size={16} className="text-cruise-600" />
                <span>Mardi Gras</span>
              </li>
              <li className="flex items-center gap-2">
                <Ticket size={16} className="text-cruise-600" />
                <span>Carnival Panorama</span>
              </li>
            </ul>
            <Button className="w-full">Explore Ships</Button>
          </GlassCard>

          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Family Destinations</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Palmtree size={16} className="text-cruise-600" />
                <span>Bahamas</span>
              </li>
              <li className="flex items-center gap-2">
                <Palmtree size={16} className="text-cruise-600" />
                <span>Western Caribbean</span>
              </li>
              <li className="flex items-center gap-2">
                <Palmtree size={16} className="text-cruise-600" />
                <span>Mexico</span>
              </li>
            </ul>
            <Button className="w-full">View Cruises</Button>
          </GlassCard>
          
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Family-Friendly Fun</h3>
            <p className="text-gray-600 mb-4">
              Enjoy WaterWorks aqua parks, Seuss at Sea, and BOLT—the first roller coaster at sea.
            </p>
            <Button className="w-full">Discover Activities</Button>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Book Your Carnival Adventure</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Ready for a fun-filled vacation at sea? Explore Carnival's variety of cruises at affordable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              Find Great Deals
            </Button>
            <Button variant="outline" className="border-cruise-200 text-cruise-700">
              Family Packages
            </Button>
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default CarnivalCruisePage;
