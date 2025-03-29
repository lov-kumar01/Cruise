
import React from 'react';
import ServicePage from '@/components/services/ServicePage';
import { GlassCard } from '@/components/ui/glass-card';
import { Film, Clock, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MoviePage = () => {
  const movies = [
    {
      title: "Ocean's Adventure",
      description: "A thrilling adventure on the high seas",
      time: "7:00 PM",
      date: "Today",
      duration: "2h 15m",
      seatsAvailable: 24
    },
    {
      title: "Starlit Night",
      description: "A romantic drama under the moonlight",
      time: "8:30 PM",
      date: "Today",
      duration: "1h 45m",
      seatsAvailable: 12
    },
    {
      title: "Island Escape",
      description: "Action-packed thriller on a mysterious island",
      time: "6:00 PM",
      date: "Tomorrow",
      duration: "2h 30m",
      seatsAvailable: 32
    }
  ];

  return (
    <ServicePage 
      title="Movie Tickets" 
      description="Book tickets for the latest movies in our luxurious theater with premium seating and state-of-the-art sound."
      icon={Film}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Now Showing</h2>
        
        <div className="space-y-4">
          {movies.map((movie, index) => (
            <GlassCard key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{movie.title}</h3>
                  <p className="text-gray-600">{movie.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {movie.time}
                    </span>
                    <span className="flex items-center">
                      <CalendarDays size={16} className="mr-1" />
                      {movie.date}
                    </span>
                    <span>{movie.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-2">{movie.seatsAvailable} seats available</p>
                  <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <GlassCard className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
          <p className="text-gray-600 mb-4">
            Check back for upcoming blockbusters and special screenings!
          </p>
          <Button variant="outline" className="border-cruise-500 text-cruise-600 hover:bg-cruise-50">
            View Schedule
          </Button>
        </GlassCard>
      </div>
    </ServicePage>
  );
};

export default MoviePage;
