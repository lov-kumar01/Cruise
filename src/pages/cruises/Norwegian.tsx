
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, Clock, Globe } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const NorwegianCruisePage = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Norwegian Cruise Line (NCL)</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Freedom and flexibility with Norwegian's Freestyle Cruising concept, allowing you to vacation on your terms.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Featured Ships</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-cruise-600" />
                <span>Norwegian Prima</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-cruise-600" />
                <span>Norwegian Encore</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-cruise-600" />
                <span>Norwegian Bliss</span>
              </li>
            </ul>
            <Button className="w-full">Explore Ships</Button>
          </GlassCard>

          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Global Destinations</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-cruise-600" />
                <span>Alaska</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-cruise-600" />
                <span>Europe</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-cruise-600" />
                <span>Hawaii</span>
              </li>
            </ul>
            <Button className="w-full">View Itineraries</Button>
          </GlassCard>
          
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Freestyle Cruising</h3>
            <p className="text-gray-600 mb-4">
              No fixed dining times, casual attire, and a wide variety of dining options and entertainment choices.
            </p>
            <Button className="w-full">Learn More</Button>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Experience NCL's Freedom</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Cruise on your terms with no schedules to follow, no dress codes to worry about, and no set dining times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              Browse NCL Cruises
            </Button>
            <Button variant="outline" className="border-cruise-200 text-cruise-700">
              The Haven Premium Experience
            </Button>
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default NorwegianCruisePage;
