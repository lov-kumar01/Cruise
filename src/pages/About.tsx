
import React from 'react';
import { Ship, Anchor, Globe, Users } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import AppLayout from '@/components/layout/AppLayout';
import BookNowButton from '@/components/ui/book-now-button';

const About = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Users size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">About OceanVoyage</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your premier destination for cruise planning, booking, and experiences.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <GlassCard className="p-8 h-full">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, OceanVoyage began with a simple mission: to make cruise travel accessible, 
                enjoyable, and seamless for everyone. What started as a small team of cruise enthusiasts 
                has grown into a leading platform for cruise bookings and travel planning.
              </p>
              <p className="text-gray-600 mb-4">
                Our team combines decades of experience in the cruise industry with cutting-edge technology 
                to provide you with the best possible service and experience when planning your voyage.
              </p>
              <p className="text-gray-600">
                Today, we partner with over 20 cruise lines worldwide and help thousands of travelers 
                embark on unforgettable journeys every month.
              </p>
            </GlassCard>
          </div>
          <div>
            <GlassCard className="p-8 h-full">
              <div className="h-64 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1064&auto=format&fit=crop" 
                  alt="Cruise ship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                We're dedicated to creating exceptional travel experiences by connecting cruise enthusiasts 
                with their perfect voyage. We strive to provide transparent information, competitive pricing, 
                and personalized service that exceeds expectations.
              </p>
            </GlassCard>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <GlassCard className="p-6 text-center">
            <div className="rounded-full bg-cruise-50 p-4 mx-auto w-16 h-16 flex items-center justify-center text-cruise-600 mb-4">
              <Ship size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Cruise Knowledge</h3>
            <p className="text-gray-600">
              Our team has sailed on hundreds of cruises and can provide insider tips and recommendations.
            </p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center">
            <div className="rounded-full bg-cruise-50 p-4 mx-auto w-16 h-16 flex items-center justify-center text-cruise-600 mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Destinations</h3>
            <p className="text-gray-600">
              We offer cruises to over 100 countries across all seven continents.
            </p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center">
            <div className="rounded-full bg-cruise-50 p-4 mx-auto w-16 h-16 flex items-center justify-center text-cruise-600 mb-4">
              <Anchor size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
            <p className="text-gray-600">
              Tailored recommendations and dedicated support throughout your booking process.
            </p>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Browse our collection of cruises and find your perfect voyage today.
          </p>
          <BookNowButton />
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default About;
