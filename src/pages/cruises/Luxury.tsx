
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, Diamond, Wine } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const LuxuryCruisesPage = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Luxury Cruise Lines</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Indulge in the ultimate cruise experience with top-tier luxury lines offering unparalleled service and amenities.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Premium Cruise Lines</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Diamond size={16} className="text-cruise-600" />
                <span>Regent Seven Seas</span>
              </li>
              <li className="flex items-center gap-2">
                <Diamond size={16} className="text-cruise-600" />
                <span>Silversea Cruises</span>
              </li>
              <li className="flex items-center gap-2">
                <Diamond size={16} className="text-cruise-600" />
                <span>Seabourn</span>
              </li>
            </ul>
            <Button className="w-full">Explore Lines</Button>
          </GlassCard>

          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Exclusive Destinations</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Wine size={16} className="text-cruise-600" />
                <span>Antarctic Expeditions</span>
              </li>
              <li className="flex items-center gap-2">
                <Wine size={16} className="text-cruise-600" />
                <span>Asian Grand Voyages</span>
              </li>
              <li className="flex items-center gap-2">
                <Wine size={16} className="text-cruise-600" />
                <span>World Cruises</span>
              </li>
            </ul>
            <Button className="w-full">View Voyages</Button>
          </GlassCard>
          
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">All-Inclusive Luxury</h3>
            <p className="text-gray-600 mb-4">
              Experience the ultimate in luxury with spacious suites, personal butlers, fine dining, and premium excursions.
            </p>
            <Button className="w-full">Learn More</Button>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Elevate Your Cruise Experience</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Discover the world in unparalleled comfort with luxury cruise lines that redefine excellence at sea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              View Luxury Packages
            </Button>
            <Button variant="outline" className="border-cruise-200 text-cruise-700">
              Exclusive Offers
            </Button>
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default LuxuryCruisesPage;
