
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, Sparkles, Music } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const DisneyCruisePage = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Disney Cruise Line</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Magical adventures for families with Disney characters, Broadway-quality shows, and themed experiences.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Magical Ships</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Sparkles size={16} className="text-cruise-600" />
                <span>Disney Wish</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles size={16} className="text-cruise-600" />
                <span>Disney Fantasy</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles size={16} className="text-cruise-600" />
                <span>Disney Dream</span>
              </li>
            </ul>
            <Button className="w-full">Explore Ships</Button>
          </GlassCard>

          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Enchanting Destinations</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Music size={16} className="text-cruise-600" />
                <span>Castaway Cay</span>
              </li>
              <li className="flex items-center gap-2">
                <Music size={16} className="text-cruise-600" />
                <span>Caribbean</span>
              </li>
              <li className="flex items-center gap-2">
                <Music size={16} className="text-cruise-600" />
                <span>Mediterranean</span>
              </li>
            </ul>
            <Button className="w-full">View Voyages</Button>
          </GlassCard>
          
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Disney Magic</h3>
            <p className="text-gray-600 mb-4">
              Character meet and greets, themed dining experiences, and immersive entertainment for all ages.
            </p>
            <Button className="w-full">Discover Activities</Button>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Create Magical Family Memories</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Experience the magic of Disney at sea with entertainment, activities, and dining experiences for the whole family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              Book a Disney Cruise
            </Button>
            <Button variant="outline" className="border-cruise-200 text-cruise-700">
              Special Offers
            </Button>
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default DisneyCruisePage;
