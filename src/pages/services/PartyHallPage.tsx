
import React from 'react';
import ServicePage from '@/components/services/ServicePage';
import { GlassCard } from '@/components/ui/glass-card';
import { Beer, Calendar, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PartyHallPage = () => {
  const venues = [
    {
      name: "Grand Ballroom",
      description: "Elegant venue for weddings and formal events",
      capacity: "Up to 150 guests",
      features: ["Dance floor", "Stage", "Premium sound system"]
    },
    {
      name: "Ocean View Lounge",
      description: "Stunning views for cocktail parties and celebrations",
      capacity: "Up to 80 guests",
      features: ["Panoramic windows", "Private bar", "Outdoor terrace"]
    },
    {
      name: "Executive Boardroom",
      description: "Professional setting for business meetings",
      capacity: "Up to 30 guests",
      features: ["Conference equipment", "Catering available", "High-speed Wi-Fi"]
    }
  ];

  return (
    <ServicePage 
      title="Party Hall Booking" 
      description="Book venues for your celebrations, meetings, and special events during your voyage."
      icon={Beer}
    >
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-center">Available Venues</h2>
        
        <div className="space-y-6">
          {venues.map((venue, index) => (
            <GlassCard key={index} className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{venue.name}</h3>
                <p className="text-gray-600">{venue.description}</p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Users size={16} className="mr-1" />
                  <span>{venue.capacity}</span>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">Features:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {venue.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-cruise-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
                    Check Availability
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Event Planning</h3>
          <p className="text-gray-600 text-center mb-6">
            Our event planning team can help you organize every detail of your special occasion.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 rounded-lg bg-cruise-50">
              <Calendar size={24} className="mx-auto mb-2 text-cruise-600" />
              <h4 className="font-medium">Choose Date</h4>
              <p className="text-sm text-gray-600">Select your preferred date and time</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-cruise-50">
              <Users size={24} className="mx-auto mb-2 text-cruise-600" />
              <h4 className="font-medium">Guest List</h4>
              <p className="text-sm text-gray-600">Confirm number of attendees</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-cruise-50">
              <Clock size={24} className="mx-auto mb-2 text-cruise-600" />
              <h4 className="font-medium">Custom Details</h4>
              <p className="text-sm text-gray-600">Personalize your event</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
              Contact Event Planner
            </Button>
          </div>
        </GlassCard>
      </div>
    </ServicePage>
  );
};

export default PartyHallPage;
