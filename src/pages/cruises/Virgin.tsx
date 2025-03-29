
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, Music, Wine } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const VirginVoyagesPage = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Virgin Voyages</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Adults-only, rebellious luxury with Virgin's signature style, innovative dining, and bold entertainment.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Modern Lady Ships</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Music size={16} className="text-cruise-600" />
                <span>Scarlet Lady</span>
              </li>
              <li className="flex items-center gap-2">
                <Music size={16} className="text-cruise-600" />
                <span>Valiant Lady</span>
              </li>
              <li className="flex items-center gap-2">
                <Music size={16} className="text-cruise-600" />
                <span>Resilient Lady</span>
              </li>
            </ul>
            <Button className="w-full">Explore Ships</Button>
          </GlassCard>

          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Bold Voyages</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Wine size={16} className="text-cruise-600" />
                <span>Caribbean Sailings</span>
              </li>
              <li className="flex items-center gap-2">
                <Wine size={16} className="text-cruise-600" />
                <span>Mediterranean Adventures</span>
              </li>
              <li className="flex items-center gap-2">
                <Wine size={16} className="text-cruise-600" />
                <span>Transatlantic Crossings</span>
              </li>
            </ul>
            <Button className="w-full">View Itineraries</Button>
          </GlassCard>
          
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Rock Star Treatment</h3>
            <p className="text-gray-600 mb-4">
              Elevated experiences with no buffets, no kids, no set dining times, and no extra fees for dining.
            </p>
            <Button className="w-full">Learn More</Button>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Cruise the Virgin Way</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Experience adults-only voyages with a festival-like atmosphere, innovative dining, and bold entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              Book a Voyage
            </Button>
            <Button variant="outline" className="border-cruise-200 text-cruise-700">
              RockStar Quarters
            </Button>
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default VirginVoyagesPage;
