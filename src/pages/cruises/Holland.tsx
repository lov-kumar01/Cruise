
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, Compass, Coffee } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const HollandAmericaPage = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Holland America Line</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Classic cruising with refined amenities, enriching experiences, and exceptional service for discerning travelers.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Premium Fleet</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Compass size={16} className="text-cruise-600" />
                <span>Rotterdam</span>
              </li>
              <li className="flex items-center gap-2">
                <Compass size={16} className="text-cruise-600" />
                <span>Nieuw Statendam</span>
              </li>
              <li className="flex items-center gap-2">
                <Compass size={16} className="text-cruise-600" />
                <span>Koningsdam</span>
              </li>
            </ul>
            <Button className="w-full">Explore Ships</Button>
          </GlassCard>

          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Signature Voyages</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Coffee size={16} className="text-cruise-600" />
                <span>Alaska & Yukon</span>
              </li>
              <li className="flex items-center gap-2">
                <Coffee size={16} className="text-cruise-600" />
                <span>Grand World Voyage</span>
              </li>
              <li className="flex items-center gap-2">
                <Coffee size={16} className="text-cruise-600" />
                <span>Panama Canal</span>
              </li>
            </ul>
            <Button className="w-full">View Itineraries</Button>
          </GlassCard>
          
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Culinary Excellence</h3>
            <p className="text-gray-600 mb-4">
              Exceptional dining with Culinary Council® chefs, wine experts, and immersive food experiences.
            </p>
            <Button className="w-full">Discover Dining</Button>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Experience Refined Cruising</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Enjoy Holland America's perfectly sized ships, immersive itineraries, and enriching onboard experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              Explore Cruises
            </Button>
            <Button variant="outline" className="border-cruise-200 text-cruise-700">
              Have It All Premium Package
            </Button>
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default HollandAmericaPage;
