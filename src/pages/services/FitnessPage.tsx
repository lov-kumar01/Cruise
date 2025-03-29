
import React from 'react';
import ServicePage from '@/components/services/ServicePage';
import { GlassCard } from '@/components/ui/glass-card';
import { Dumbbell, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FitnessPage = () => {
  const equipments = [
    {
      name: "Cardio Equipment",
      description: "Treadmills, ellipticals, and stationary bikes",
      availableSlots: 8
    },
    {
      name: "Weight Training",
      description: "Free weights, benches, and resistance machines",
      availableSlots: 5
    },
    {
      name: "Yoga Studio",
      description: "Peaceful space for yoga and stretching",
      availableSlots: 10
    }
  ];

  const classes = [
    {
      name: "Morning Yoga",
      time: "7:00 AM",
      instructor: "Sarah",
      spotsLeft: 6
    },
    {
      name: "HIIT Workout",
      time: "10:00 AM",
      instructor: "Michael",
      spotsLeft: 4
    },
    {
      name: "Sunset Meditation",
      time: "6:00 PM",
      instructor: "Emma",
      spotsLeft: 8
    }
  ];

  return (
    <ServicePage 
      title="Fitness Center" 
      description="Reserve training equipment and schedule your gym sessions with our professional trainers."
      icon={Dumbbell}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-center mb-4">Equipment Reservation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {equipments.map((item, index) => (
              <GlassCard key={index} className="p-6 flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
                <p className="text-sm text-gray-500">{item.availableSlots} slots available</p>
                <Button className="w-full bg-cruise-600 hover:bg-cruise-700 text-white">
                  Reserve
                </Button>
              </GlassCard>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-center mb-4">Fitness Classes</h2>
          <div className="space-y-4">
            {classes.map((classItem, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="space-y-1 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold">{classItem.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {classItem.time}
                      </span>
                      <span className="flex items-center">
                        <Users size={16} className="mr-1" />
                        Instructor: {classItem.instructor}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-2">{classItem.spotsLeft} spots left</p>
                    <Button className="bg-cruise-600 hover:bg-cruise-700 text-white">
                      Book Class
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
        
        <GlassCard className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Personal Training</h3>
          <p className="text-gray-600 mb-4">
            Get one-on-one guidance from our expert trainers for a customized fitness experience.
          </p>
          <Button variant="outline" className="border-cruise-500 text-cruise-600 hover:bg-cruise-50">
            Schedule Training
          </Button>
        </GlassCard>
      </div>
    </ServicePage>
  );
};

export default FitnessPage;
