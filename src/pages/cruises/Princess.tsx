
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, Crown, Heart } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const PrincessCruisesPage = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Princess Cruises</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Come back new with Princess Cruises' destination-focused itineraries and enriching onboard experiences.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Royal Fleet</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Crown size={16} className="text-cruise-600" />
                <span>Discovery Princess</span>
              </li>
              <li className="flex items-center gap-2">
                <Crown size={16} className="text-cruise-600" />
                <span>Sky Princess</span>
              </li>
              <li className="flex items-center gap-2">
                <Crown size={16} className="text-cruise-600" />
                <span>Enchanted Princess</span>
              </li>
            </ul>
            <Button className="w-full">Explore Ships</Button>
          </GlassCard>

          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Destination Highlights</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Heart size={16} className="text-cruise-600" />
                <span>Alaska</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart size={16} className="text-cruise-600" />
                <span>Japan</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart size={16} className="text-cruise-600" />
                <span>South Pacific</span>
              </li>
            </ul>
            <Button className="w-full">View Itineraries</Button>
          </GlassCard>
          
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">MedallionClass™</h3>
            <p className="text-gray-600 mb-4">
              Personalized service with OceanMedallion™ wearable technology for seamless experiences onboard.
            </p>
            <Button className="w-full">Learn More</Button>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Experience Princess's Enriching Journeys</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Discover new cultures, cuisine, and unforgettable moments with Princess Cruises' immersive travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              Find Your Cruise
            </Button>
            <Button variant="outline" className="border-cruise-200 text-cruise-700">
              Princess Plus Package
            </Button>
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default PrincessCruisesPage;
