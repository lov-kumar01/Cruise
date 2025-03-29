
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, Star, Wine } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import BookNowButton from '@/components/ui/book-now-button';
import { useNavigate } from 'react-router-dom';

const CelebrityCruisesPage = () => {
  const navigate = useNavigate();
  
  const featuredCruises = [
    {
      title: "Mediterranean Voyage",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1086&auto=format&fit=crop",
      days: 10,
      price: "$1,299"
    },
    {
      title: "Caribbean Escape",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1074&auto=format&fit=crop",
      days: 7,
      price: "$899"
    },
    {
      title: "Alaskan Adventure",
      image: "https://images.unsplash.com/photo-1531356949013-27698b63b937?q=80&w=1171&auto=format&fit=crop",
      days: 12,
      price: "$1,599"
    }
  ];

  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Ship size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Celebrity Cruises</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern luxury meets world-class service with Celebrity Cruises, offering premium experiences and destination-focused itineraries.
          </p>
          <div className="mt-6">
            <BookNowButton onClick={() => navigate("/cruises/celebrity/booking")} />
          </div>
        </header>

        {/* Featured Cruises Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Featured Cruises</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCruises.map((cruise, index) => (
              <GlassCard key={index} hoverable className="overflow-hidden">
                <div className="h-48 relative">
                  <img src={cruise.image} alt={cruise.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-cruise-600 text-white px-2 py-1 rounded-md text-sm font-medium">
                    {cruise.days} Days
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cruise.title}</h3>
                  <p className="text-cruise-600 font-bold mb-4">From {cruise.price}</p>
                  <BookNowButton className="w-full" />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Featured Ships</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Star size={16} className="text-cruise-600" />
                <span>Celebrity Edge</span>
              </li>
              <li className="flex items-center gap-2">
                <Star size={16} className="text-cruise-600" />
                <span>Celebrity Apex</span>
              </li>
              <li className="flex items-center gap-2">
                <Star size={16} className="text-cruise-600" />
                <span>Celebrity Beyond</span>
              </li>
            </ul>
            <Button className="w-full">Explore Ships</Button>
          </GlassCard>

          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">Premium Destinations</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <Star size={16} className="text-cruise-600" />
                <span>Galapagos Islands</span>
              </li>
              <li className="flex items-center gap-2">
                <Star size={16} className="text-cruise-600" />
                <span>Europe</span>
              </li>
              <li className="flex items-center gap-2">
                <Star size={16} className="text-cruise-600" />
                <span>Caribbean</span>
              </li>
            </ul>
            <Button className="w-full">View Itineraries</Button>
          </GlassCard>
          
          <GlassCard hoverable className="p-6">
            <h3 className="text-xl font-semibold mb-3">The Retreat®</h3>
            <div className="mb-4 h-40 overflow-hidden rounded-md">
              <img 
                src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1112&auto=format&fit=crop" 
                alt="The Retreat" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-600 mb-4">
              Experience exclusive suite accommodations, a private restaurant, and dedicated lounge with concierge service.
            </p>
            <Button className="w-full">Learn More</Button>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Elevate Your Cruise Experience</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Indulge in award-winning cuisine, world-class wine programs, and personalized service on your next voyage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              View Luxury Packages
            </Button>
            <BookNowButton />
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default CelebrityCruisesPage;
