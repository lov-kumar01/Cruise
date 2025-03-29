
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, MapPin, Compass } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const MSCCruisesPage = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">MSC Cruises</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            European elegance and modern amenities with MSC's international fleet serving global destinations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Modern Fleet</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Compass size={16} className="text-cruise-600" />
                <span>MSC Virtuosa</span>
              </li>
              <li className="flex items-center gap-2">
                <Compass size={16} className="text-cruise-600" />
                <span>MSC Grandiosa</span>
              </li>
              <li className="flex items-center gap-2">
                <Compass size={16} className="text-cruise-600" />
                <span>MSC Seashore</span>
              </li>
            </ul>
            <Button className="w-full">Explore Ships</Button>
          </GlassCard>

          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Global Destinations</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-cruise-600" />
                <span>Mediterranean</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-cruise-600" />
                <span>Northern Europe</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-cruise-600" />
                <span>Caribbean</span>
              </li>
            </ul>
            <Button className="w-full">View Itineraries</Button>
          </GlassCard>
          
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">MSC Yacht Club</h3>
            <p className="text-gray-600 mb-4">
              Exclusive ship-within-a-ship concept offering private areas, butler service, and dedicated dining.
            </p>
            <Button className="w-full">Learn More</Button>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Discover MSC's International Flair</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Experience a unique blend of European elegance and international hospitality on board MSC's modern fleet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              Browse MSC Cruises
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

export default MSCCruisesPage;
